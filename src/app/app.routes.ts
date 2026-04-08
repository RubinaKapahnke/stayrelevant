import { Routes } from '@angular/router';
import { LEGAL_PAGES } from './content/legal-content';
import { CourseOverviewPageComponent } from './pages/course-overview/course-overview-page.component';
import { CoursePageComponent } from './pages/course/course-page.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { LegalPageComponent } from './pages/legal/legal-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    title: 'Stay Relevant Academy | Weiterbildung für Menschen und Organisationen'
  },
  {
    path: 'kurse',
    component: CourseOverviewPageComponent,
    title: 'Kursübersicht | Stay Relevant Academy'
  },
  {
    path: 'kurse/:slug',
    component: CoursePageComponent,
    title: 'Kurse | Stay Relevant Academy'
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
