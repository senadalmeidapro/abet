import { Injectable, computed, inject, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { DEFAULT_LANG, Lang, langFromPath, withLang } from './language.utils';
import { TRANSLATIONS, type TranslationDict } from './translations';

type Dict = Record<string, unknown>;

function getValue(dict: Dict, key: string): unknown {
  return key.split('.').reduce<unknown>((acc, part) => {
    if (acc && typeof acc === 'object' && part in (acc as Dict)) return (acc as Dict)[part];
    return undefined;
  }, dict);
}

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly router = inject(Router);
  readonly lang = signal<Lang>(DEFAULT_LANG);
  readonly isEnglish = computed(() => this.lang() === 'en');
  readonly dict = computed<TranslationDict>(() => TRANSLATIONS[this.lang()]);

  constructor() {
    this.lang.set(langFromPath(this.router.url));
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => this.lang.set(langFromPath(event.urlAfterRedirects)));
  }

  t(key: string): string {
    const value = getValue(this.dict() as unknown as Dict, key) ?? getValue(TRANSLATIONS.fr as unknown as Dict, key);
    return typeof value === 'string' ? value : key;
  }

  localizePath(path: string, lang: Lang = this.lang()): string {
    return withLang(path, lang);
  }

  switchPath(target: Lang): string {
    return withLang(this.router.url, target);
  }

  switchLang(target: Lang): void {
    const next = this.switchPath(target);
    this.lang.set(target);
    this.router.navigateByUrl(next);
  }
}
