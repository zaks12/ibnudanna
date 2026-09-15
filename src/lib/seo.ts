import type { RoutePath } from './router';

export interface SeoMeta {
  title: string;
  description: string;
}

export const seoData: Record<RoutePath, SeoMeta> = {
  '/': {
    title: 'IBNU DANNA INTERNATIONAL LIMITED | Construction & Engineering',
    description:
      'IBNU DANNA INTERNATIONAL LIMITED delivers construction and engineering solutions focused on quality, precision, reliability and lasting value.',
  },
  '/about': {
    title: 'About Us | IBNU DANNA INTERNATIONAL LIMITED',
    description:
      'Learn about IBNU DANNA INTERNATIONAL LIMITED, our values, leadership, approach and commitment to quality construction and engineering solutions.',
  },
  '/services': {
    title: 'Construction & Engineering Services | IBNU DANNA',
    description:
      "Explore IBNU DANNA INTERNATIONAL LIMITED's construction and engineering services, from building construction and civil engineering to project management and infrastructure works.",
  },
  '/projects': {
    title: 'Projects | IBNU DANNA INTERNATIONAL LIMITED',
    description:
      'Explore construction and engineering projects presented by IBNU DANNA INTERNATIONAL LIMITED, including representative project work and project categories.',
  },
  '/approach': {
    title: 'Our Approach | IBNU DANNA INTERNATIONAL LIMITED',
    description:
      'Discover how IBNU DANNA INTERNATIONAL LIMITED approaches construction projects through careful discovery, planning, building and delivery.',
  },
  '/contact': {
    title: 'Contact Us | IBNU DANNA INTERNATIONAL LIMITED',
    description:
      'Contact IBNU DANNA INTERNATIONAL LIMITED to discuss your construction or engineering project and explore how we can support your next development.',
  },
};

export const SITE_NAME = 'IBNU DANNA INTERNATIONAL LIMITED';
export const SITE_LOCALE = 'en_NG';
export const SITE_URL = 'https://www.ibnudanna.com';

function getOrCreateMeta(attr: 'name' | 'property', key: string): HTMLMetaElement | null {
  return document.head.querySelector(`meta[${attr}="${key}"]`);
}

function setMeta(attr: 'name' | 'property', key: string, content: string): void {
  let el = getOrCreateMeta(attr, key);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function getOrCreateLink(rel: string): HTMLLinkElement | null {
  return document.head.querySelector(`link[rel="${rel}"]`);
}

function setLink(rel: string, href: string): void {
  let el = getOrCreateLink(rel);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export function applySeo(path: RoutePath): void {
  const meta = seoData[path] ?? seoData['/'];
  const canonicalUrl = `${SITE_URL}${path === '/' ? '' : path}`;

  document.title = meta.title;

  setMeta('name', 'description', meta.description);

  setLink('canonical', canonicalUrl);

  setMeta('property', 'og:title', meta.title);
  setMeta('property', 'og:description', meta.description);
  setMeta('property', 'og:url', canonicalUrl);
  setMeta('property', 'og:site_name', SITE_NAME);
  setMeta('property', 'og:type', 'website');
  setMeta('property', 'og:locale', SITE_LOCALE);

  setMeta('name', 'twitter:card', 'summary_large_image');
  setMeta('name', 'twitter:title', meta.title);
  setMeta('name', 'twitter:description', meta.description);
}
