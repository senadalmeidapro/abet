import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  menuOpen = false;

  readonly nav = [
    // { label: 'Accueil', path: '/' },
    { label: 'À propos', path: '/a-propos' },
    { label: 'Solutions', path: '/solutions' },
    { label: 'Services', path: '/services' },
    { label: 'Cas d’usage', path: '/projets' },
    { label: 'Ressources', path: '/ressources' },
  ];

  constructor(private router: Router) {}

  isActive(path: string): boolean {
    const current = this.router.url.split('?')[0];
    return current === path || (path === '/solutions' && current.startsWith('/solutions/'));
  }
}
