import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import {
  CONTACT_EMAIL,
  CONTACT_EMAIL_HREF,
  CONTACT_LOCATION,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_HREF,
  FOOTER_NAV_ITEMS,
  HEADER_NAV_ITEMS,
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
  readonly mode = input<'home' | 'simple'>('home');

  protected readonly headerNavItems = HEADER_NAV_ITEMS;
  protected readonly footerNavItems = FOOTER_NAV_ITEMS;
  protected readonly socialLinks = SOCIAL_LINKS;
  protected readonly contactEmail = CONTACT_EMAIL;
  protected readonly contactEmailHref = CONTACT_EMAIL_HREF;
  protected readonly contactPhoneDisplay = CONTACT_PHONE_DISPLAY;
  protected readonly contactPhoneHref = CONTACT_PHONE_HREF;
  protected readonly contactLocation = CONTACT_LOCATION;
}
