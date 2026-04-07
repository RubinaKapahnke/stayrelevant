import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import { CourseOffer } from '../../content/home-content';
import { RevealOnScrollDirective } from '../../shared/reveal-on-scroll/reveal-on-scroll.directive';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading.component';

interface CourseCategoryFilter {
  label: string;
  count: number;
}

@Component({
  selector: 'app-courses-section',
  imports: [SectionHeadingComponent, RevealOnScrollDirective],
  templateUrl: './courses-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesSectionComponent {
  readonly courses = input.required<CourseOffer[]>();
  protected readonly selectedCategory = signal('Alle');

  protected readonly featuredCourses = computed(() =>
    this.courses().filter((course) => course.featured)
  );

  protected readonly categoryFilters = computed<CourseCategoryFilter[]>(() => {
    const counts = new Map<string, number>();

    for (const course of this.courses()) {
      counts.set(course.category, (counts.get(course.category) ?? 0) + 1);
    }

    const preferredOrder = [
      'Leadership',
      'KI',
      'Cybersecurity',
      'Transformation',
      'Product',
      'Data',
      'People',
      'Strategy',
      'Operations',
      'Sustainability',
      'Innovation'
    ];

    return [
      { label: 'Alle', count: this.courses().length },
      ...preferredOrder
        .filter((label) => counts.has(label))
        .map((label) => ({ label, count: counts.get(label) ?? 0 }))
    ];
  });

  protected readonly filteredCourses = computed(() => {
    const selectedCategory = this.selectedCategory();

    return selectedCategory === 'Alle'
      ? this.courses()
      : this.courses().filter((course) => course.category === selectedCategory);
  });

  protected readonly listedCourses = computed(() => {
    const selectedCategory = this.selectedCategory();
    const filteredCourses = this.filteredCourses();

    return selectedCategory === 'Alle'
      ? filteredCourses.filter((course) => !course.featured)
      : filteredCourses;
  });

  protected readonly sliderCourses = computed(() => this.filteredCourses());

  protected selectCategory(category: string): void {
    this.selectedCategory.set(category);
  }

  protected scrollSlider(track: HTMLElement, direction: number): void {
    const scrollAmount = Math.max(track.clientWidth * 0.72, 320);

    track.scrollBy({
      left: scrollAmount * direction,
      behavior: 'smooth'
    });
  }
}
