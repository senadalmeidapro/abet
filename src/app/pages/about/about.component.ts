import { Component, inject } from '@angular/core';
import { LanguageService } from '../../core/i18n/language.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  readonly language = inject(LanguageService);
  get c() { return this.language.dict().about; }

}
