import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BRAND_CONTEXTS } from '../../content/home-content';
import { RevealOnScrollDirective } from '../../shared/reveal-on-scroll/reveal-on-scroll.directive';

@Component({
  selector: 'app-context-strip-section',
  imports: [RevealOnScrollDirective],
  templateUrl: './context-strip-section-v2.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContextStripSectionComponent {
  protected readonly contexts = BRAND_CONTEXTS;
}
