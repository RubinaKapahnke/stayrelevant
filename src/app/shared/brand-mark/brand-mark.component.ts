import { ChangeDetectionStrategy, Component, HostBinding, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-brand-mark',
  imports: [RouterLink],
  templateUrl: './brand-mark.component.html',
  styleUrl: './brand-mark.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrandMarkComponent {
  readonly inverse = input(false);

  @HostBinding('class.brand-mark--inverse')
  protected get isInverse(): boolean {
    return this.inverse();
  }
}
