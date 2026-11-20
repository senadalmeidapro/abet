import { DOCUMENT } from '@angular/common';
import { afterNextRender, Component, DestroyRef, inject, Inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import AOS from 'aos';
import { filter } from 'rxjs';
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
  private readonly destroyRef = inject(DestroyRef);

  constructor(@Inject(DOCUMENT) private readonly document: Document) {
    afterNextRender(() => {
      AOS.init();
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

    const description = snapshot.data['description'] as string | undefined;
    if (description) {
      this.meta.updateTag({ name: 'description', content: description });
    }
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    const path = this.router.url.split('?')[0].split('#')[0] || '/';
    const url = `${SITE_URL}${path}`;
    this.setLink('canonical', url);
    this.setLink('alternate', `${SITE_URL}/en${path === '/' ? '' : path}`, 'en');
    this.setLink('alternate', url, 'x-default');
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
