import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  CONTACT_EMAIL,
  CONTACT_LOCATION,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_HREF
} from '../../content/home-content';
import { ALL_COURSE_OPTIONS } from '../../content/course-catalog-content';
import { RevealOnScrollDirective } from '../../shared/reveal-on-scroll/reveal-on-scroll.directive';

type InquiryType = 'kursanfrage' | 'inhouse-programm' | 'beratung' | 'rueckruf' | 'sonstiges';

interface ContactFormResponse {
  ok: boolean;
  message?: string;
}

interface SelectOption<T extends string> {
  value: T;
  label: string;
}

const INQUIRY_OPTIONS: SelectOption<InquiryType>[] = [
  { value: 'kursanfrage', label: 'Kursanfrage' },
  { value: 'inhouse-programm', label: 'Inhouse-Programm' },
  { value: 'beratung', label: 'Beratung' },
  { value: 'rueckruf', label: 'Rückruf' },
  { value: 'sonstiges', label: 'Sonstiges' }
];

const COURSE_OPTIONS: SelectOption<string>[] = ALL_COURSE_OPTIONS;

@Component({
  selector: 'app-cta-section',
  imports: [MatButtonModule, ReactiveFormsModule, RevealOnScrollDirective],
  templateUrl: './cta-section-v4.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CtaSectionComponent {
  private readonly formBuilder = inject(NonNullableFormBuilder);
  private readonly http = inject(HttpClient);
  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);
  private readonly searchParams = new URLSearchParams(this.document.location.search);
  private readonly prefilledRequestType = this.getPrefilledRequestType();
  private readonly prefilledCourse = this.searchParams.get('kurs') ?? '';
  private readonly prefilledTopic =
    this.searchParams.get('anfrage') ??
    this.buildPrefilledTopic(this.prefilledRequestType, this.prefilledCourse);
  private readonly prefilledMessage =
    this.searchParams.get('nachricht') ??
    this.buildPrefilledMessage(this.prefilledRequestType, this.prefilledCourse);

  protected readonly submitState = signal<'idle' | 'sending' | 'success' | 'error'>('idle');
  protected readonly responseMessage = signal('');

  protected readonly contactEmail = CONTACT_EMAIL;
  protected readonly contactPhoneDisplay = CONTACT_PHONE_DISPLAY;
  protected readonly contactPhoneHref = CONTACT_PHONE_HREF;
  protected readonly contactLocation = CONTACT_LOCATION;
  protected readonly inquiryOptions = INQUIRY_OPTIONS;
  protected readonly courseOptions = COURSE_OPTIONS;

  protected readonly contactForm = this.formBuilder.group({
    requestType: [this.prefilledRequestType, [Validators.required]],
    course: [this.prefilledCourse, [Validators.maxLength(180)]],
    topic: [this.prefilledTopic, [Validators.required, Validators.maxLength(140)]],
    name: ['', [Validators.required, Validators.maxLength(120)]],
    email: ['', [Validators.required, Validators.email, Validators.maxLength(160)]],
    phone: ['', [Validators.maxLength(40)]],
    organization: ['', [Validators.maxLength(160)]],
    message: [this.prefilledMessage, [Validators.required, Validators.minLength(20), Validators.maxLength(4000)]],
    consent: [false, [Validators.requiredTrue]],
    website: ['']
  });

  constructor() {
    this.syncCourseValidators(this.contactForm.controls.requestType.value);

    this.contactForm.controls.requestType.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((requestType) => {
        this.syncCourseValidators(requestType);
      });
  }

  protected submitForm(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.submitState.set('sending');
    this.responseMessage.set('');

    this.http.post<ContactFormResponse>('/contact.php', this.contactForm.getRawValue()).subscribe({
      next: (response) => {
        if (!response.ok) {
          this.submitState.set('error');
          this.responseMessage.set(
            response.message ??
              'Die Anfrage konnte gerade nicht versendet werden. Bitte versuchen Sie es erneut.'
          );
          return;
        }

        this.contactForm.reset({
          requestType: this.prefilledRequestType,
          course: this.prefilledCourse,
          topic: this.prefilledTopic,
          name: '',
          email: '',
          phone: '',
          organization: '',
          message: this.prefilledMessage,
          consent: false,
          website: ''
        });
        this.submitState.set('success');
        this.responseMessage.set(
          response.message ??
            'Vielen Dank. Ihre Anfrage wurde versendet und wir melden uns zeitnah bei Ihnen.'
        );
      },
      error: () => {
        this.submitState.set('error');
        this.responseMessage.set(
          this.document.location.hostname === 'localhost'
            ? 'Im lokalen Angular-Dev-Server ist der PHP-Endpunkt nicht verfügbar. Auf STRATO funktioniert das Formular über /contact.php.'
            : 'Die Anfrage konnte gerade nicht versendet werden. Alternativ erreichen Sie uns direkt per E-Mail oder Telefon.'
        );
      }
    });
  }

  protected hasError(
    controlName:
      | 'requestType'
      | 'course'
      | 'topic'
      | 'name'
      | 'email'
      | 'phone'
      | 'organization'
      | 'message'
      | 'consent'
      | 'website',
    errorName?: string
  ): boolean {
    const control = this.contactForm.controls[controlName];

    return !!control && control.touched && (!errorName ? control.invalid : control.hasError(errorName));
  }

  private getPrefilledRequestType(): InquiryType {
    const requestType = this.searchParams.get('art');

    return INQUIRY_OPTIONS.some((option) => option.value === requestType)
      ? (requestType as InquiryType)
      : 'beratung';
  }

  private buildPrefilledTopic(requestType: InquiryType, course: string): string {
    if (requestType === 'kursanfrage' && course) {
      return `Kursanfrage: ${course}`;
    }

    const option = INQUIRY_OPTIONS.find((entry) => entry.value === requestType);
    return option?.label ?? 'Beratung';
  }

  private buildPrefilledMessage(requestType: InquiryType, course: string): string {
    if (requestType === 'kursanfrage' && course) {
      return `Ich interessiere mich für den Kurs "${course}".`;
    }

    return '';
  }

  private syncCourseValidators(requestType: InquiryType): void {
    const courseControl = this.contactForm.controls.course;

    if (requestType === 'kursanfrage') {
      courseControl.setValidators([Validators.required, Validators.maxLength(180)]);
    } else {
      courseControl.clearValidators();
      courseControl.setValue('', { emitEvent: false });
      courseControl.markAsPristine();
      courseControl.markAsUntouched();
    }

    courseControl.updateValueAndValidity({ emitEvent: false });
  }
}
