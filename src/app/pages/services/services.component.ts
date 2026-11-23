import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../core/i18n/language.service';

@Component({ selector: 'app-services', standalone: true, imports: [RouterLink], templateUrl: './services.component.html', styleUrl: './services.component.scss' })
export class ServicesComponent {
  readonly language = inject(LanguageService);
  get c() { return this.language.dict().servicesPage; }
}
