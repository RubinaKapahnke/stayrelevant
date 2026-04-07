import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ChallengeContent } from '../../content/home-content';
import { RevealOnScrollDirective } from '../../shared/reveal-on-scroll/reveal-on-scroll.directive';

@Component({
  selector: 'app-challenge-section',
  imports: [RevealOnScrollDirective],
  templateUrl: './challenge-section-v2.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChallengeSectionComponent {
  readonly content = input.required<ChallengeContent>();
}
