import { Component, Input, inject } from '@angular/core';
import { LanguageService } from '../../core/i18n/language.service';

interface PartnerLogo {
  name: string;
  src: string;
  logoClass: string;
  url: string;
  descriptionFr: string;
  descriptionEn: string;
}

@Component({
  selector: 'app-partner-grid',
  standalone: true,
  templateUrl: './partner-grid.component.html',
  styleUrl: './partner-grid.component.scss',
})
export class PartnerGridComponent {
  readonly language = inject(LanguageService);
  @Input() compact = false;

    readonly partners = [
    { name: 'TOGO', src: '/logo_togo.png', logoClass: 'logo-togo' },
    { name: 'RDC', src: '/logo_rdc.jpg', logoClass: 'logo-rdc' },
    { name: 'AIRUDI', src: '/logo_airudi.png', logoClass: 'logo-airudi' },
    { name: 'Best For Africa Group', src: '/bfa_mspo%20(1).png', logoClass: 'logo-bfa' },
    { name: 'HAIRUN', src: '/logo_hairun.png', logoClass: 'logo-hairun' },
    { name: 'DATA PROTECT', src: '/dataprotect_logo.png', logoClass: 'logo-data' },
  ];
  get descriptions() { return this.language.dict().partners.items; }
}
