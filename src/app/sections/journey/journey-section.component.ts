import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { JourneyStep } from '../../content/home-content';
import { RevealOnScrollDirective } from '../../shared/reveal-on-scroll/reveal-on-scroll.directive';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading.component';

@Component({
  selector: 'app-journey-section',
  imports: [SectionHeadingComponent, RevealOnScrollDirective],
  templateUrl: './journey-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JourneySectionComponent {
  readonly steps = input.required<JourneyStep[]>();
}
