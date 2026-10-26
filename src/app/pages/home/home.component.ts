import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HomeApproachDiagramComponent } from './home-approach-diagram.component';
import { HomeSolutionCardComponent } from './home-solution-card.component';
import { PartnerGridComponent } from '../../shared/partner-grid/partner-grid.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HomeApproachDiagramComponent,
    HomeSolutionCardComponent,
    PartnerGridComponent,
    RouterLink,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
