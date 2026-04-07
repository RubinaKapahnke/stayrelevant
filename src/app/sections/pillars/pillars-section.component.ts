import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Pillar } from '../../content/home-content';
import { RevealOnScrollDirective } from '../../shared/reveal-on-scroll/reveal-on-scroll.directive';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading.component';

@Component({
  selector: 'app-pillars-section',
  imports: [SectionHeadingComponent, RevealOnScrollDirective],
  templateUrl: './pillars-section-v2.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PillarsSectionComponent {
  readonly pillars = input.required<Pillar[]>();
}
