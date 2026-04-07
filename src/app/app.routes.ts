import { Routes } from '@angular/router';
import { LEGAL_PAGES } from './content/legal-content';
import { HomePageComponent } from './pages/home/home-page.component';
import { LegalPageComponent } from './pages/legal/legal-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    title: 'Stay Relevant Academy | Weiterbildung für Menschen und Organisationen'
  },
  {
    path: 'impressum',
    component: LegalPageComponent,
    data: LEGAL_PAGES['impressum'],
    title: 'Impressum | Stay Relevant Academy'
  },
  {
    path: 'datenschutz',
    component: LegalPageComponent,
    data: LEGAL_PAGES['datenschutz'],
    title: 'Datenschutz | Stay Relevant Academy'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
