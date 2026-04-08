import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  CONTACT_EMAIL,
  CONTACT_LOCATION,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_HREF
} from '../../content/home-content';
import { RevealOnScrollDirective } from '../../shared/reveal-on-scroll/reveal-on-scroll.directive';

interface ContactFormResponse {
  ok: boolean;
  message?: string;
}

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
  private readonly prefilledTopic =
    new URLSearchParams(this.document.location.search).get('anfrage') ?? '';

  protected readonly submitState = signal<'idle' | 'sending' | 'success' | 'error'>('idle');
  protected readonly responseMessage = signal('');

  protected readonly contactEmail = CONTACT_EMAIL;
  protected readonly contactPhoneDisplay = CONTACT_PHONE_DISPLAY;
  protected readonly contactPhoneHref = CONTACT_PHONE_HREF;
  protected readonly contactLocation = CONTACT_LOCATION;

  protected readonly contactForm = this.formBuilder.group({
    topic: [this.prefilledTopic, [Validators.required, Validators.maxLength(140)]],
    name: ['', [Validators.required, Validators.maxLength(120)]],
    email: ['', [Validators.required, Validators.email, Validators.maxLength(160)]],
    phone: ['', [Validators.maxLength(40)]],
    organization: ['', [Validators.maxLength(160)]],
    message: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(4000)]],
    consent: [false, [Validators.requiredTrue]],
    website: ['']
  });

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
          topic: this.prefilledTopic,
          name: '',
          email: '',
          phone: '',
          organization: '',
          message: '',
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
}
