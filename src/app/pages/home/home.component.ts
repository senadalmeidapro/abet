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
  get expertise() { return this.language.dict().home.expertise; }
}
