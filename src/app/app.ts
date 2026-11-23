import { DOCUMENT } from '@angular/common';
import { afterNextRender, Component, DestroyRef, inject, Inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import AOS from 'aos';
import { filter } from 'rxjs';
import { langFromPath, stripLang, withLang } from './core/i18n/language.utils';
import { SITE_URL } from './core/seo.config';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly meta = inject(Meta);
  private readonly title = inject(Title);
  private readonly destroyRef = inject(DestroyRef);

  constructor(@Inject(DOCUMENT) private readonly document: Document) {
    afterNextRender(() => {
      AOS.init({
        once: true,
        duration: 650,
        easing: 'ease-out-cubic',
        offset: 80,
        mirror: false,
      });
      this.updateSeo();

      this.router.events
        .pipe(
          filter((event): event is NavigationEnd => event instanceof NavigationEnd),
          takeUntilDestroyed(this.destroyRef),
        )
        .subscribe(() => {
          AOS.refreshHard();
          this.updateSeo();
        });
    });
  }

  private updateSeo(): void {
    let snapshot = this.route.snapshot;
    while (snapshot.firstChild) {
      snapshot = snapshot.firstChild;
    }

    const path = this.router.url.split('?')[0].split('#')[0] || '/';
    const lang = langFromPath(path);
    const basePath = stripLang(path);
    this.document.documentElement.lang = lang;

    const description =
      (snapshot.data[lang === 'en' ? 'descriptionEn' : 'description'] as string | undefined) ??
      (snapshot.data['description'] as string | undefined);
    if (description) {
      this.meta.updateTag({ name: 'description', content: description });
    }

    const title =
      (snapshot.data[lang === 'en' ? 'titleEn' : 'titleFr'] as string | undefined) ??
      (typeof snapshot.title === 'string' ? snapshot.title : undefined);
    if (title) this.title.setTitle(title);

    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    const frUrl = `${SITE_URL}${withLang(basePath, 'fr')}`;
    const enUrl = `${SITE_URL}${withLang(basePath, 'en')}`;
    const canonical = lang === 'en' ? enUrl : frUrl;
    this.setLink('canonical', canonical);
    this.setLink('alternate', frUrl, 'fr');
    this.setLink('alternate', enUrl, 'en');
    this.setLink('alternate', frUrl, 'x-default');
  }

  private setLink(rel: string, href: string, hreflang?: string): void {
    const selector = `link[rel="${rel}"]${hreflang ? `[hreflang="${hreflang}"]` : ''}`;
    let link = this.document.head.querySelector<HTMLLinkElement>(selector);

    if (!link) {
      link = this.document.createElement('link');
      link.rel = rel;
      if (hreflang) {
        link.hreflang = hreflang;
      }
      this.document.head.appendChild(link);
    }

    link.href = href;
  }
}
