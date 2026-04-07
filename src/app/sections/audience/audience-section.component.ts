import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { AudienceCard } from '../../content/home-content';
import { RevealOnScrollDirective } from '../../shared/reveal-on-scroll/reveal-on-scroll.directive';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading.component';

@Component({
  selector: 'app-audience-section',
  imports: [SectionHeadingComponent, RevealOnScrollDirective],
  templateUrl: './audience-section-v3.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AudienceSectionComponent {
  readonly audiences = input.required<AudienceCard[]>();
}
