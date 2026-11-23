import { Component, inject } from '@angular/core';
import { LanguageService } from '../../core/i18n/language.service';

@Component({
  selector: 'app-home-diagram',
  standalone: true,
  templateUrl: './home-diagram.component.html',
  styleUrl: './home-diagram.component.scss',
})
export class HomeDiagramComponent {
  readonly language = inject(LanguageService);
}
