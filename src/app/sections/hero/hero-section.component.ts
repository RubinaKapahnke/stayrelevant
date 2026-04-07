import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { HeroContent } from '../../content/home-content';
import { RevealOnScrollDirective } from '../../shared/reveal-on-scroll/reveal-on-scroll.directive';

@Component({
  selector: 'app-hero-section',
  imports: [MatButtonModule, RevealOnScrollDirective],
  templateUrl: './hero-section-v2.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroSectionComponent {
  readonly content = input.required<HeroContent>();
}
