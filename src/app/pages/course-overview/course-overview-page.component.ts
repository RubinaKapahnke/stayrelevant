import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ALL_COURSE_OFFERS } from '../../content/course-catalog-content';
import { PageShellComponent } from '../../shared/page-shell/page-shell.component';
import { CoursesSectionComponent } from '../../sections/courses/courses-section.component';

@Component({
  selector: 'app-course-overview-page',
  imports: [PageShellComponent, CoursesSectionComponent],
  templateUrl: './course-overview-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseOverviewPageComponent {
  protected readonly courses = ALL_COURSE_OFFERS;
  protected readonly totalCourses = this.courses.length;
  protected readonly totalCategories = new Set(this.courses.map((course) => course.category)).size;
}
