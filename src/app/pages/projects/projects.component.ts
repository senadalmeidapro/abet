import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PartnerGridComponent } from '../../shared/partner-grid/partner-grid.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterLink, PartnerGridComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {}
