import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { courseSlugFromTitle } from '../../content/course-catalog-content';
import { CourseOffer } from '../../content/home-content';
import { getCourseScheduleByTitle } from '../../content/course-schedule-content';
import { RevealOnScrollDirective } from '../../shared/reveal-on-scroll/reveal-on-scroll.directive';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading.component';

type AvailabilityFilter = 'Alle' | 'Mit Terminen' | 'Regelmäßiger Start' | 'Coming soon';

interface CourseCategoryFilter {
  label: string;
  count: number;
}

interface CourseAvailabilityFilter {
  label: AvailabilityFilter;
  count: number;
}

interface CourseCardViewModel extends CourseOffer {
  slug: string;
  availability: Exclude<AvailabilityFilter, 'Alle'>;
  scheduleLabels: string[];
  highlightedOutcomes: string[];
  sortKey: number;
}

@Component({
  selector: 'app-courses-section',
  imports: [RouterLink, SectionHeadingComponent, RevealOnScrollDirective],
  templateUrl: './courses-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesSectionComponent {
  readonly courses = input.required<CourseOffer[]>();

  protected readonly searchTerm = signal('');
  protected readonly selectedCategory = signal('Alle');
  protected readonly selectedAvailability = signal<AvailabilityFilter>('Alle');

  protected readonly courseCards = computed<CourseCardViewModel[]>(() =>
    this.courses()
      .map((course) => this.buildCourseCard(course))
      .sort((left, right) => left.sortKey - right.sortKey || left.title.localeCompare(right.title, 'de'))
  );

  protected readonly categoryFilters = computed<CourseCategoryFilter[]>(() => {
    const counts = new Map<string, number>();

    for (const course of this.courseCards()) {
      counts.set(course.category, (counts.get(course.category) ?? 0) + 1);
    }

    return [
      { label: 'Alle', count: this.courseCards().length },
      ...[...counts.entries()]
        .sort((left, right) => left[0].localeCompare(right[0], 'de'))
        .map(([label, count]) => ({ label, count }))
    ];
  });

  protected readonly availabilityFilters = computed<CourseAvailabilityFilter[]>(() => {
    const counts = new Map<Exclude<AvailabilityFilter, 'Alle'>, number>([
      ['Mit Terminen', 0],
      ['Regelmäßiger Start', 0],
      ['Coming soon', 0]
    ]);

    for (const course of this.courseCards()) {
      counts.set(course.availability, (counts.get(course.availability) ?? 0) + 1);
    }

    return [
      { label: 'Alle', count: this.courseCards().length },
      { label: 'Mit Terminen', count: counts.get('Mit Terminen') ?? 0 },
      { label: 'Regelmäßiger Start', count: counts.get('Regelmäßiger Start') ?? 0 },
      { label: 'Coming soon', count: counts.get('Coming soon') ?? 0 }
    ];
  });

  protected readonly filteredCourses = computed(() => {
    const search = this.normalizeText(this.searchTerm());
    const selectedCategory = this.selectedCategory();
    const selectedAvailability = this.selectedAvailability();

    return this.courseCards().filter((course) => {
      const matchesCategory =
        selectedCategory === 'Alle' || course.category === selectedCategory;
      const matchesAvailability =
        selectedAvailability === 'Alle' || course.availability === selectedAvailability;
      const matchesSearch =
        search.length === 0 ||
        this.normalizeText(
          `${course.title} ${course.category} ${course.label} ${course.audience} ${course.text} ${course.highlightedOutcomes.join(' ')}`
        ).includes(search);

      return matchesCategory && matchesAvailability && matchesSearch;
    });
  });

  protected readonly resultLabel = computed(() => {
    const count = this.filteredCourses().length;

    return count === 1 ? '1 Kurs gefunden' : `${count} Kurse gefunden`;
  });

  protected updateSearch(value: string): void {
    this.searchTerm.set(value);
  }

  protected selectCategory(category: string): void {
    this.selectedCategory.set(category);
  }

  protected selectAvailability(availability: AvailabilityFilter): void {
    this.selectedAvailability.set(availability);
  }

  private buildCourseCard(course: CourseOffer): CourseCardViewModel {
    const schedule = getCourseScheduleByTitle(course.title);
    const hasConcreteDates = !!schedule && schedule.starts.length > 0;
    const availability: Exclude<AvailabilityFilter, 'Alle'> = hasConcreteDates
      ? 'Mit Terminen'
      : schedule?.statusLabel === 'Regelmäßiger Start möglich'
        ? 'Regelmäßiger Start'
        : 'Coming soon';

    return {
      ...course,
      slug: courseSlugFromTitle(course.title),
      availability,
      scheduleLabels: hasConcreteDates
        ? schedule!.starts.map((date) => (date.end ? `${date.start} bis ${date.end}` : date.start))
        : [schedule?.statusLabel ?? 'Coming soon'],
      highlightedOutcomes: course.outcomes.slice(0, 3),
      sortKey: this.getSortKey(availability, schedule?.starts[0]?.start)
    };
  }

  private getSortKey(
    availability: Exclude<AvailabilityFilter, 'Alle'>,
    firstDate?: string
  ): number {
    if (availability === 'Mit Terminen' && firstDate) {
      const [day, month, year] = firstDate.split('.').map(Number);

      return new Date(year, month - 1, day).getTime();
    }

    if (availability === 'Regelmäßiger Start') {
      return Number.MAX_SAFE_INTEGER - 1;
    }

    return Number.MAX_SAFE_INTEGER;
  }

  private normalizeText(value: string): string {
    return value
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  }
}
