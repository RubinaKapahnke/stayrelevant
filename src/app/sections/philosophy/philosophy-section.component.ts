import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { PhilosophyContent } from '../../content/home-content';
import { RevealOnScrollDirective } from '../../shared/reveal-on-scroll/reveal-on-scroll.directive';

@Component({
  selector: 'app-philosophy-section',
  imports: [RevealOnScrollDirective],
  templateUrl: './philosophy-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhilosophySectionComponent {
  readonly content = input.required<PhilosophyContent>();
}
