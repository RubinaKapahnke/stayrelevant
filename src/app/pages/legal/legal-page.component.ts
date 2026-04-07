import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LegalPageContent } from '../../content/legal-content';
import { PageShellComponent } from '../../shared/page-shell/page-shell.component';

@Component({
  selector: 'app-legal-page',
  imports: [PageShellComponent],
  templateUrl: './legal-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LegalPageComponent {
  private readonly route = inject(ActivatedRoute);

  protected readonly content = computed(() => this.route.snapshot.data as LegalPageContent);
}
