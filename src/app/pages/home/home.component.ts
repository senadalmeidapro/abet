import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../core/i18n/language.service';
import { PartnerGridComponent } from '../../shared/partner-grid/partner-grid.component';
import { HomeDiagramComponent } from './home-diagram.component';
import { HomeSolutionCardComponent } from './home-solution-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeDiagramComponent, HomeSolutionCardComponent, PartnerGridComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  readonly language = inject(LanguageService);

  readonly expertiseFr = [
    { title: "Appui aux États et aux organisations", text: "Conception et gestion de projets maritimes, portuaires et aéroportuaires." },
    { title: "Vérification environnementale", text: "Appui à la certification carbone." },
    { title: "Ingénierie logicielle", text: "Intelligence des données." },
    { title: "Conseil", text: "Assistance technique et formation." },
    { title: "Plateformes numériques et environnementales", text: "Mise en place de plateformes." },
    { title: "Économie bleue et verte durable en Afrique", text: "Promotion et protection des ressources." },
  ];
  readonly expertiseEn = [
    { title: "Support to states and organizations", text: "Design and management of maritime, port, and airport projects." },
    { title: "Environmental verification", text: "Support for carbon certification." },
    { title: "Software engineering", text: "Data intelligence." },
    { title: "Consulting", text: "Technical assistance and training." },
    { title: "Digital and environmental platforms", text: "Platform implementation." },
    { title: "Sustainable blue and green economy in Africa", text: "Promotion and protection of resources." },
  ];

  get expertise() {
    return this.language.lang() === 'en' ? this.expertiseEn : this.expertiseFr;
  }
}
