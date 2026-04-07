import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ProofCard, StatItem, TESTIMONIAL } from '../../content/home-content';
import { RevealOnScrollDirective } from '../../shared/reveal-on-scroll/reveal-on-scroll.directive';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading.component';

@Component({
  selector: 'app-proof-section',
  imports: [SectionHeadingComponent, RevealOnScrollDirective],
  templateUrl: './proof-section-v2.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProofSectionComponent {
  readonly stats = input.required<StatItem[]>();
  readonly cards = input.required<ProofCard[]>();
  protected readonly testimonial = TESTIMONIAL;
}
