import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { CarbonRegistryComponent } from './pages/carbon-registry/carbon-registry.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { MaritimeComponent } from './pages/maritime/maritime.component';
import { ProjectsComponent } from './pages/projects/projects.component';
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
        title: 'Africa Blue Port and Airport Carbone Registry — ABET for Africa',
      },
      {
        path: 'solutions',
        component: SolutionsComponent,
        title: 'Solutions — ABET for Africa',
      },
      {
        path: 'services',
        component: ServicesComponent,
        title: 'Domaines d’activités — ABET for Africa',
      },
      {
        path: 'partenaires',
        component: ProjectsComponent,
        title: 'Partenaires — ABET for Africa',
      },
      { path: 'projets', redirectTo: 'partenaires', pathMatch: 'full' },
      { path: 'ressources', redirectTo: 'solutions', pathMatch: 'full' },
      { path: 'contact', component: ContactComponent, title: 'Contact — ABET for Africa' },
      { path: 'mentions', redirectTo: 'contact', pathMatch: 'full' },
      { path: 'confidentialite', redirectTo: 'contact', pathMatch: 'full' },
      { path: '**', redirectTo: '/' },
    ],
  },
];
