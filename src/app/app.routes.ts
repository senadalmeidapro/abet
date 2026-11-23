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

const pageRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'ABET for Africa - Accueil',
    data: {
      description:
        'Surveillance maritime, gestion des trafics et développement durable de l’économie bleue en Afrique.',
      titleEn: 'ABET for Africa - Home',
      descriptionEn:
        'Maritime surveillance, traffic management, and sustainable development of Africa’s blue economy.',
    },
  },
  {
    path: 'a-propos',
    component: AboutComponent,
    title: 'À propos - ABET for Africa',
    data: {
      description:
        'Découvrez les activités d’ABET for Africa : gouvernance maritime et aéroportuaire, registres environnementaux et transformation numérique.',
      titleEn: 'About - ABET for Africa',
      descriptionEn:
        'Discover ABET for Africa’s activities: maritime and airport governance, environmental registries, and digital transformation.',
    },
  },
  {
    path: 'equipe',
    component: TeamComponent,
    title: 'Notre équipe - ABET for Africa',
    data: {
      description: 'Les femmes et les hommes qui portent la vision d’ABET for Africa.',
      titleEn: 'Our team - ABET for Africa',
      descriptionEn: 'The people carrying ABET for Africa’s vision.',
    },
  },
  {
    path: 'solutions/iacd-eez-scanner',
    component: MaritimeComponent,
    title: 'IACD & EEZ Scanner - ABET for Africa',
    data: {
      description:
        'Plateforme intégrée de surveillance maritime, de gouvernance portuaire et de suivi de la zone économique exclusive.',
      titleEn: 'IACD & EEZ Scanner - ABET for Africa',
      descriptionEn:
        'Integrated platform for maritime surveillance, port governance, and exclusive economic zone monitoring.',
    },
  },
  {
    path: 'solutions/registre-carbone',
    component: CarbonRegistryComponent,
    title: 'Africa Blue & Green Environmental Registry - ABET for Africa',
    data: {
      description:
        'Registre environnemental et carbone pour la mesure des émissions, la traçabilité des données et la fiscalité verte.',
      titleEn: 'Africa Blue & Green Environmental Registry - ABET for Africa',
      descriptionEn:
        'Environmental and carbon registry for emissions measurement, data traceability, and green taxation.',
    },
  },
  {
    path: 'solutions',
    component: SolutionsComponent,
    title: 'Solutions - ABET for Africa',
    data: {
      description:
        'Les solutions d’ABET for Africa pour les secteurs maritime, portuaire, aérien et environnemental.',
      titleEn: 'Solutions - ABET for Africa',
      descriptionEn:
        'ABET for Africa solutions for maritime, port, aviation, and environmental sectors.',
    },
  },
  {
    path: 'services',
    component: ServicesComponent,
    title: 'Domaines d’activités - ABET for Africa',
    data: {
      description:
        'Surveillance, gestion des trafics, ingénierie logicielle et accompagnement à la conformité environnementale.',
      titleEn: 'Areas of activity - ABET for Africa',
      descriptionEn:
        'Surveillance, traffic management, software engineering, and environmental compliance support.',
    },
  },
  {
    path: 'partenaires',
    component: PartnersComponent,
    title: 'Partenaires - ABET for Africa',
    data: {
      description: 'Les partenaires qui accompagnent ABET for Africa dans ses projets.',
      titleEn: 'Partners - ABET for Africa',
      descriptionEn: 'Partners supporting ABET for Africa’s projects.',
    },
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Contact - ABET for Africa',
    data: {
      description: 'Contactez ABET for Africa pour toute demande concernant nos activités.',
      titleEn: 'Contact - ABET for Africa',
      descriptionEn: 'Contact ABET for Africa for any inquiry about our activities.',
    },
  },
  {
    path: 'mentions-legales',
    component: LegalComponent,
    title: 'Mentions légales - ABET for Africa',
    data: {
      page: 'mentions-legales',
      description: 'Informations relatives à l’éditeur du site ABET for Africa.',
      titleEn: 'Legal notice - ABET for Africa',
      descriptionEn: 'Information about the publisher of the ABET for Africa website.',
    },
  },
  {
    path: 'politique-de-confidentialite',
    component: LegalComponent,
    title: 'Politique de confidentialité - ABET for Africa',
    data: {
      page: 'politique-de-confidentialite',
      description: 'Traitement des données personnelles collectées par ABET for Africa.',
      titleEn: 'Privacy policy - ABET for Africa',
      descriptionEn: 'How ABET for Africa processes personal data collected on this website.',
    },
  },
  {
    path: 'conditions-d-utilisation',
    component: LegalComponent,
    title: 'Conditions d’utilisation - ABET for Africa',
    data: {
      page: 'conditions-d-utilisation',
      description: 'Conditions d’accès et d’utilisation du site ABET for Africa.',
      titleEn: 'Terms of use - ABET for Africa',
      descriptionEn: 'Terms governing access to and use of the ABET for Africa website.',
    },
  },
  { path: '**', redirectTo: '' },
];

export const routes: Routes = [
  { path: 'en', component: LayoutComponent, children: pageRoutes },
  { path: '', component: LayoutComponent, children: pageRoutes },
];
