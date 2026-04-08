import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  COURSE_SCHEDULES_UPDATED_AT,
  CourseSchedule
} from '../../content/course-schedule-content';
import { RevealOnScrollDirective } from '../../shared/reveal-on-scroll/reveal-on-scroll.directive';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading.component';

interface CourseScheduleCard extends CourseSchedule {
  labels: string[];
}

@Component({
  selector: 'app-course-dates-section',
  imports: [RouterLink, RevealOnScrollDirective, SectionHeadingComponent],
  templateUrl: './course-dates-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseDatesSectionComponent {
  readonly schedules = input.required<CourseSchedule[]>();

  protected readonly updatedAt = COURSE_SCHEDULES_UPDATED_AT;

  protected readonly cards = computed<CourseScheduleCard[]>(() =>
    this.schedules().map((schedule) => ({
      ...schedule,
      labels: schedule.flexibleStart
        ? [schedule.flexibleStartLabel ?? 'Regelmaessiger Start']
        : schedule.starts.map((date) =>
            date.end ? `${date.start} bis ${date.end}` : date.start
          )
    }))
  );
}

