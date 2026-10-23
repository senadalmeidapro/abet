import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { CarbonRegistryComponent } from './pages/carbon-registry/carbon-registry.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { LegalNoticeComponent } from './pages/legal-notice/legal-notice.component';
import { MaritimeComponent } from './pages/maritime/maritime.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { ServicesComponent } from './pages/services/services.component';
import { SolutionsComponent } from './pages/solutions/solutions.component';
import { LayoutComponent } from './shared/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent, title: 'ABET for Africa — Accueil' },
      { path: 'a-propos', component: AboutComponent, title: 'À propos — ABET for Africa' },
      {
        path: 'solutions/iacd-eez-scanner',
        component: MaritimeComponent,
        title: 'IACD & EEZ Scanner — ABET for Africa',
      },
      {
        path: 'solutions/registre-carbone',
        component: CarbonRegistryComponent,
        title: 'Registre carbone — ABET for Africa',
      },
      {
        path: 'solutions',
        component: SolutionsComponent,
        title: 'Solutions — ABET for Africa',
      },
      { path: 'services', component: ServicesComponent, title: 'Services — ABET for Africa' },
      {
        path: 'projets',
        component: ProjectsComponent,
        title: 'Projets & références — ABET for Africa',
      },
      {
        path: 'ressources',
        component: ResourcesComponent,
        title: 'Ressources — ABET for Africa',
      },
      { path: 'contact', component: ContactComponent, title: 'Contact — ABET for Africa' },
      {
        path: 'mentions',
        component: LegalNoticeComponent,
        title: 'Mentions légales — ABET for Africa',
      },
      {
        path: 'confidentialite',
        component: PrivacyPolicyComponent,
        title: 'Confidentialité — ABET for Africa',
      },
      { path: '**', redirectTo: '/' },
    ],
  },
];
