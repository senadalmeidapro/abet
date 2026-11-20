import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { CarbonRegistryComponent } from './pages/carbon-registry/carbon-registry.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { LegalComponent } from './pages/legal/legal.component';
import { MaritimeComponent } from './pages/maritime/maritime.component';
import { PartnersComponent } from './pages/partners/partners.component';
import { ServicesComponent } from './pages/services/services.component';
import { SolutionsComponent } from './pages/solutions/solutions.component';
import { TeamComponent } from './pages/team/team.component';
import { LayoutComponent } from './shared/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        title: 'ABET for Africa - Accueil',
        data: {
          description:
            'Surveillance maritime, gestion des trafics et développement durable de l’économie bleue en Afrique.',
        },
      },
      {
        path: 'a-propos',
        component: AboutComponent,
        title: 'À propos - ABET for Africa',
        data: {
          description:
            'Découvrez les activités d’ABET for Africa : gouvernance maritime et aéroportuaire, registres environnementaux et transformation numérique.',
        },
      },
      {
        path: 'equipe',
        component: TeamComponent,
        title: 'Notre équipe - ABET for Africa',
        data: {
          description: 'Les femmes et les hommes qui portent la vision d’ABET for Africa.',
        },
      },
      {
        path: 'solutions/iacd-eez-scanner',
        component: MaritimeComponent,
        title: 'IACD & EEZ Scanner - ABET for Africa',
        data: {
          description:
            'Plateforme intégrée de surveillance maritime, de gouvernance portuaire et de suivi de la zone économique exclusive.',
        },
      },
      {
        path: 'solutions/registre-carbone',
        component: CarbonRegistryComponent,
        title: 'Africa Blue & Green Environmental Registry - ABET for Africa',
        data: {
          description:
            'Registre environnemental et carbone pour la mesure des émissions, la traçabilité des données et la fiscalité verte.',
        },
      },
      {
        path: 'solutions',
        component: SolutionsComponent,
        title: 'Solutions - ABET for Africa',
        data: {
          description:
            'Les solutions d’ABET for Africa pour les secteurs maritime, portuaire, aérien et environnemental.',
        },
      },
      {
        path: 'services',
        component: ServicesComponent,
        title: 'Domaines d’activités - ABET for Africa',
        data: {
          description:
            'Surveillance, gestion des trafics, ingénierie logicielle et accompagnement à la conformité environnementale.',
        },
      },
      {
        path: 'partenaires',
        component: PartnersComponent,
        title: 'Partenaires - ABET for Africa',
        data: {
          description: 'Les partenaires qui accompagnent ABET for Africa dans ses projets.',
        },
      },
      {
        path: 'contact',
        component: ContactComponent,
        title: 'Contact - ABET for Africa',
        data: {
          description: 'Contactez ABET for Africa pour toute demande concernant nos activités.',
        },
      },
      {
        path: 'mentions-legales',
        component: LegalComponent,
        title: 'Mentions légales - ABET for Africa',
        data: {
          page: 'mentions-legales',
          description: 'Informations relatives à l’éditeur du site ABET for Africa.',
        },
      },
      {
        path: 'politique-de-confidentialite',
        component: LegalComponent,
        title: 'Politique de confidentialité - ABET for Africa',
        data: {
          page: 'politique-de-confidentialite',
          description: 'Traitement des données personnelles collectées par ABET for Africa.',
        },
      },
      {
        path: 'conditions-d-utilisation',
        component: LegalComponent,
        title: 'Conditions d’utilisation - ABET for Africa',
        data: {
          page: 'conditions-d-utilisation',
          description: 'Conditions d’accès et d’utilisation du site ABET for Africa.',
        },
      },
      { path: '**', redirectTo: '/' },
    ],
  },
];
