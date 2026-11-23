import { Component, DestroyRef, HostListener, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';
import { LanguageService } from '../../core/i18n/language.service';
import { Lang } from '../../core/i18n/language.utils';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  menuOpen = false;
  solutionsOpen = false;

  readonly nav = [
    { key: 'nav.home', path: '/' },
    { key: 'nav.services', path: '/services' },
    { key: 'nav.solutions', path: '/solutions' },
    { key: 'nav.partners', path: '/partenaires' },
    { key: 'nav.team', path: '/equipe' },
    { key: 'nav.about', path: '/a-propos' },
  ];

  readonly solutions = [
    {
      label: 'IACD & EEZ Scanner',
      path: '/solutions/iacd-eez-scanner',
      domainKey: 'solutions.iacd.domain',
      descriptionKey: 'solutions.iacd.description',
    },
    {
      label: 'Africa Blue & Green Environmental Registry',
      path: '/solutions/registre-carbone',
      domainKey: 'solutions.carbon.domain',
      descriptionKey: 'solutions.carbon.description',
    },
  ];

  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);
  readonly language = inject(LanguageService);
  private closeTimer?: ReturnType<typeof setTimeout>;

  constructor() {
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe(() => this.closeMenus());
  }

  isActive(path: string): boolean {
    const current = this.router.url.split('?')[0];
    const localized = this.language.localizePath(path);
    return current === localized || (path === '/solutions' && current.includes('/solutions'));
  }

  path(path: string): string {
    return this.language.localizePath(path);
  }

  setLang(lang: Lang): void {
    this.closeMenus();
    this.language.switchLang(lang);
  }

  toggleSolutions(): void {
    this.clearCloseTimer();
    this.solutionsOpen = !this.solutionsOpen;
  }

  openSolutions(): void {
    this.clearCloseTimer();
    this.solutionsOpen = true;
  }

  scheduleCloseSolutions(): void {
    if (typeof window !== 'undefined' && window.matchMedia('(max-width: 900px)').matches) return;
    this.clearCloseTimer();
    this.closeTimer = setTimeout(() => {
      this.solutionsOpen = false;
      this.closeTimer = undefined;
    }, 180);
  }

  onMegaMenuLeave(event: MouseEvent): void {
    if (typeof window !== 'undefined' && window.matchMedia('(max-width: 900px)').matches) return;
    const next = event.relatedTarget as Node | null;
    const wrapper = (event.currentTarget as HTMLElement).closest('.nav-solutions');
    if (next && wrapper?.contains(next)) return;
    this.clearCloseTimer();
    this.solutionsOpen = false;
  }

  closeMenus(): void {
    this.clearCloseTimer();
    this.menuOpen = false;
    this.solutionsOpen = false;
  }

  private clearCloseTimer(): void {
    if (this.closeTimer) {
      clearTimeout(this.closeTimer);
      this.closeTimer = undefined;
    }
  }

  onSolutionsFocusOut(event: FocusEvent): void {
    const current = event.currentTarget as HTMLElement;
    const next = event.relatedTarget as Node | null;
    if (!next || !current.contains(next)) {
      this.solutionsOpen = false;
    }
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeMenus();
  }
}
