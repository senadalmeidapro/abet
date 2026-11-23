import { Component, inject } from '@angular/core';
import { LanguageService } from '../../core/i18n/language.service';
import { RouterLink } from '@angular/router';
import { PartnerGridComponent } from '../../shared/partner-grid/partner-grid.component';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [RouterLink, PartnerGridComponent],
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.scss',
})
export class PartnersComponent {
  readonly language = inject(LanguageService);
}
