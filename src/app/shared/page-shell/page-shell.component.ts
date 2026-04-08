import { ChangeDetectionStrategy, Component, computed, inject, input, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map, startWith } from 'rxjs';
import {
  CONTACT_EMAIL,
  CONTACT_EMAIL_HREF,
  CONTACT_LOCATION,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_HREF,
  FOOTER_NAV_ITEMS,
  HEADER_NAV_ITEMS,
  NavItem,
  SOCIAL_LINKS
} from '../../content/home-content';
import { BrandMarkComponent } from '../brand-mark/brand-mark.component';

@Component({
  selector: 'app-page-shell',
  imports: [MatButtonModule, RouterLink, BrandMarkComponent],
  templateUrl: './page-shell.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageShellComponent {
  private readonly router = inject(Router);

  readonly mode = input<'home' | 'simple'>('home');
  protected readonly mobileMenuOpen = signal(false);
  private readonly currentUrl = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map((event) => event.urlAfterRedirects),
      startWith(this.router.url)
    ),
    { initialValue: this.router.url }
  );

  protected readonly headerNavItems = HEADER_NAV_ITEMS;
  protected readonly footerNavItems = FOOTER_NAV_ITEMS;
  protected readonly courseSubmenuItems: NavItem[] = [
    { label: 'Kursübersicht', href: '/kurse' },
    { label: 'Aktuelle Starts', href: '/#starttermine' },
    { label: 'Portfolio auf Startseite', href: '/#kurse' }
  ];
  protected readonly socialLinks = SOCIAL_LINKS;
  protected readonly contactEmail = CONTACT_EMAIL;
  protected readonly contactEmailHref = CONTACT_EMAIL_HREF;
  protected readonly contactPhoneDisplay = CONTACT_PHONE_DISPLAY;
  protected readonly contactPhoneHref = CONTACT_PHONE_HREF;
  protected readonly contactLocation = CONTACT_LOCATION;
  protected readonly courseRouteActive = computed(() => this.currentUrl().startsWith('/kurse'));

  protected toggleMobileMenu(): void {
    this.mobileMenuOpen.update((open) => !open);
  }

  protected closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }
}
