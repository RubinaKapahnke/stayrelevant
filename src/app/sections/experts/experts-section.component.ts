import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ExpertProfile } from '../../content/home-content';
import { RevealOnScrollDirective } from '../../shared/reveal-on-scroll/reveal-on-scroll.directive';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading.component';

@Component({
  selector: 'app-experts-section',
  imports: [SectionHeadingComponent, RevealOnScrollDirective],
  templateUrl: './experts-section-v3.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExpertsSectionComponent {
  readonly experts = input.required<ExpertProfile[]>();
}
