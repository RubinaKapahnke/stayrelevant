import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, computed, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { catchError, distinctUntilChanged, map, of, startWith, switchMap } from 'rxjs';
import {
  buildDetailedCourseLandingPageFromOffer,
  findCourseOfferBySlug
} from '../../content/course-catalog-content';
import { CourseLandingPageContent } from '../../content/course-landing-content';
import { getCourseScheduleByTitle } from '../../content/course-schedule-content';
import { PageShellComponent } from '../../shared/page-shell/page-shell.component';

type CoursePageState =
  | { status: 'loading'; slug: string }
  | { status: 'ready'; slug: string; content: CourseLandingPageContent }
  | { status: 'missing'; slug: string };

@Component({
  selector: 'app-course-page',
  imports: [MatButtonModule, PageShellComponent],
  templateUrl: './course-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursePageComponent {
  private readonly http = inject(HttpClient);
  private readonly route = inject(ActivatedRoute);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  protected readonly state = toSignal(
    this.route.paramMap.pipe(
      map((params) => params.get('slug') ?? ''),
      distinctUntilChanged(),
      switchMap((slug) =>
        this.http.get<CourseLandingPageContent>(`/courses/${slug}.json`).pipe(
          map((content) => ({ status: 'ready' as const, slug, content })),
          startWith({ status: 'loading' as const, slug }),
          catchError(() => {
            const courseOffer = findCourseOfferBySlug(slug);

            return of(
              courseOffer
                ? {
                    status: 'ready' as const,
                    slug,
                    content: buildDetailedCourseLandingPageFromOffer(courseOffer)
                  }
                : { status: 'missing' as const, slug }
            );
          })
        )
      )
    ),
    {
      initialValue: {
        status: 'loading',
        slug: ''
      } satisfies CoursePageState
    }
  );

  protected readonly content = computed(() => {
    const state = this.state();

    return state.status === 'ready' ? state.content : null;
  });

  protected readonly isLoading = computed(() => this.state().status === 'loading');

  protected readonly isMissing = computed(() => this.state().status === 'missing');

  protected readonly schedule = computed(() => getCourseScheduleByTitle(this.content()?.title));

  protected readonly scheduleLabels = computed(() => {
    const schedule = this.schedule();

    if (!schedule) {
      return [];
    }

    if (schedule.starts.length > 0) {
      return schedule.starts.map((date) => (date.end ? `${date.start} bis ${date.end}` : date.start));
    }

    return [schedule.statusLabel ?? 'Coming soon'];
  });

  protected readonly requestHref = computed(() => {
    const courseTitle = this.content()?.title ?? 'Weiterbildung bei Stay Relevant Academy';

    return `/?art=kursanfrage&kurs=${encodeURIComponent(courseTitle)}&anfrage=${encodeURIComponent(`Kursanfrage: ${courseTitle}`)}#kontakt`;
  });

  constructor() {
    effect(() => {
      const state = this.state();
      const canonicalUrl = `${this.document.location.origin}/kurse/${state.slug}`;

      if (state.status === 'ready') {
        const metaTitle = state.content.metaTitle ?? `${state.content.title} | Stay Relevant Academy`;
        const metaDescription = state.content.metaDescription ?? state.content.lead;

        this.title.setTitle(metaTitle);
        this.meta.updateTag({ name: 'description', content: metaDescription });
        this.meta.updateTag({ property: 'og:title', content: metaTitle });
        this.meta.updateTag({ property: 'og:description', content: metaDescription });
        this.meta.updateTag({ property: 'og:url', content: canonicalUrl });
        this.meta.updateTag({ name: 'twitter:title', content: metaTitle });
        this.meta.updateTag({ name: 'twitter:description', content: metaDescription });
        this.updateCanonical(canonicalUrl);

        return;
      }

      if (state.status === 'missing') {
        const metaTitle = 'Kurs nicht gefunden | Stay Relevant Academy';
        const metaDescription = 'Die angeforderte Kursseite konnte nicht geladen werden.';

        this.title.setTitle(metaTitle);
        this.meta.updateTag({ name: 'description', content: metaDescription });
        this.meta.updateTag({ property: 'og:title', content: metaTitle });
        this.meta.updateTag({ property: 'og:description', content: metaDescription });
        this.meta.updateTag({ property: 'og:url', content: canonicalUrl });
        this.meta.updateTag({ name: 'twitter:title', content: metaTitle });
        this.meta.updateTag({ name: 'twitter:description', content: metaDescription });
        this.updateCanonical(canonicalUrl);
      }
    });
  }

  private updateCanonical(url: string): void {
    let canonicalLink = this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]');

    if (!canonicalLink) {
      canonicalLink = this.document.createElement('link');
      canonicalLink.rel = 'canonical';
      this.document.head.appendChild(canonicalLink);
    }

    canonicalLink.href = url;
  }
}
