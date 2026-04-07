import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ComparisonRow, Differentiator, METHODOLOGY_STEPS } from '../../content/home-content';
import { RevealOnScrollDirective } from '../../shared/reveal-on-scroll/reveal-on-scroll.directive';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading.component';

@Component({
  selector: 'app-why-us-section',
  imports: [RevealOnScrollDirective, SectionHeadingComponent],
  templateUrl: './why-us-section-v3.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WhyUsSectionComponent {
  readonly differentiators = input.required<Differentiator[]>();
  readonly comparisonRows = input.required<ComparisonRow[]>();
  protected readonly methodologySteps = METHODOLOGY_STEPS;
}
