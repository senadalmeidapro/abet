import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LanguageService } from '../../core/i18n/language.service';

@Component({ selector: 'app-legal', standalone: true, templateUrl: './legal.component.html', styleUrl: './legal.component.scss' })
export class LegalComponent {
  private readonly route = inject(ActivatedRoute);
  readonly language = inject(LanguageService);

  get page() {
    const key = (this.route.snapshot.data['page'] as string) ?? 'mentions-legales';
    const legal = this.language.dict().legal as unknown as Record<string, { title: string; lead: string; sections: { heading: string; paragraphs?: string[]; items?: string[] }[] }>;
    return legal[key] ?? legal['mentions-legales'];
  }
}
