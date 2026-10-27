import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PartnerGridComponent } from '../../shared/partner-grid/partner-grid.component';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [RouterLink, PartnerGridComponent],
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.scss',
})
export class PartnersComponent {}
