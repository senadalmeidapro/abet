import { Component, Input } from '@angular/core';

interface PartnerLogo {
  name: string;
  src: string;
  logoClass: string;
  url: string;
  description: string;
}

@Component({
  selector: 'app-partner-grid',
  standalone: true,
  templateUrl: './partner-grid.component.html',
  styleUrl: './partner-grid.component.scss',
})
export class PartnerGridComponent {
  @Input() compact = false;

  readonly partners: PartnerLogo[] = [
    {
      name: 'TOGO',
      src: '/logo_togo.png',
      logoClass: 'logo-togo',
      url: '',
      description: '',
    },
    {
      name: 'RDC',
      src: '/logo_rdc.jpg',
      logoClass: 'logo-rdc',
      url: '',
      description: '',
    },
    {
      name: 'AIRUDI',
      src: '/logo_airudi.png',
      logoClass: 'logo-airudi',
      url: '',
      description: '',
    },
    {
      name: 'Best For Africa Group',
      src: '/bfa_mspo%20(1).png',
      logoClass: 'logo-bfa',
      url: '',
      description: '',
    },
    {
      name: 'HAIRUN',
      src: '/logo_hairun.png',
      logoClass: 'logo-hairun',
      url: '',
      description: '',
    },
    {
      name: 'DATA PROTECT',
      src: '/dataprotect_logo.png',
      logoClass: 'logo-data',
      url: '',
      description: '',
    },
  ];
}
