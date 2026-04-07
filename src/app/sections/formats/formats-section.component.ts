import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormatCard } from '../../content/home-content';
import { RevealOnScrollDirective } from '../../shared/reveal-on-scroll/reveal-on-scroll.directive';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading.component';

@Component({
  selector: 'app-formats-section',
  imports: [MatExpansionModule, SectionHeadingComponent, RevealOnScrollDirective],
  templateUrl: './formats-section-v3.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormatsSectionComponent {
  readonly formats = input.required<FormatCard[]>();
}
