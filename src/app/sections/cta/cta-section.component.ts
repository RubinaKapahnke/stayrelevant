import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RevealOnScrollDirective } from '../../shared/reveal-on-scroll/reveal-on-scroll.directive';

@Component({
  selector: 'app-cta-section',
  imports: [MatButtonModule, RevealOnScrollDirective],
  templateUrl: './cta-section-v3.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CtaSectionComponent {}
