import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ReportContent } from '../../content/home-content';
import { RevealOnScrollDirective } from '../../shared/reveal-on-scroll/reveal-on-scroll.directive';

@Component({
  selector: 'app-report-section',
  imports: [MatButtonModule, RevealOnScrollDirective],
  templateUrl: './report-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportSectionComponent {
  readonly content = input.required<ReportContent>();
}
