export type Lang = 'fr' | 'en';

export const LANGS: Lang[] = ['fr', 'en'];
export const DEFAULT_LANG: Lang = 'fr';

export function isLang(value: string | null | undefined): value is Lang {
  return value === 'fr' || value === 'en';
}

export function normalizePath(path: string): string {
  const clean = (path.split('?')[0].split('#')[0] || '/').replace(/\/+$/, '');
  return clean === '' ? '/' : clean;
}

export function stripLang(path: string): string {
  const normalized = normalizePath(path);
  if (normalized === '/en') return '/';
  if (normalized.startsWith('/en/')) return normalized.slice(3) || '/';
  return normalized;
}

export function withLang(path: string, lang: Lang): string {
  const base = stripLang(path);
  if (lang === 'fr') return base;
  return base === '/' ? '/en' : `/en${base}`;
}

export function langFromPath(path: string): Lang {
  const normalized = normalizePath(path);
  return normalized === '/en' || normalized.startsWith('/en/') ? 'en' : 'fr';
}
