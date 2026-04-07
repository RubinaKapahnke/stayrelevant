import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { FaqItem } from '../../content/home-content';
import { RevealOnScrollDirective } from '../../shared/reveal-on-scroll/reveal-on-scroll.directive';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading.component';

@Component({
  selector: 'app-faq-section',
  imports: [MatExpansionModule, SectionHeadingComponent, RevealOnScrollDirective],
  templateUrl: './faq-section-v2.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FaqSectionComponent {
  readonly items = input.required<FaqItem[]>();
}
