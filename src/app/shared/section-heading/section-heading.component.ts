import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  templateUrl: './section-heading.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionHeadingComponent {
  readonly eyebrow = input.required<string>();
  readonly title = input.required<string>();
  readonly intro = input<string>('');
  readonly align = input<'left' | 'center'>('left');
}
