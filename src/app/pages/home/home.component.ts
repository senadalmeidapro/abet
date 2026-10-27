import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HomeDiagramComponent } from './home-diagram.component';
import { HomeSolutionCardComponent } from './home-solution-card.component';
import { PartnerGridComponent } from '../../shared/partner-grid/partner-grid.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HomeDiagramComponent,
    HomeSolutionCardComponent,
    PartnerGridComponent,
    RouterLink,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
