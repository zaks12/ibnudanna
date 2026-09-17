import type { RoutePath } from './router';

export interface SeoMeta {
  title: string;
  description: string;
}

export const SITE_NAME = 'IBNU DANNA INTERNATIONAL LIMITED';
export const SITE_LOCALE = 'en_NG';
export const SITE_URL = 'https://ibnudanna.com';

export const seoData: Record<RoutePath, SeoMeta> = {
  '/': {
    title:
      'IBNU DANNA INTERNATIONAL LIMITED | Construction, Engineering & Supply',
    description:
      'IBNU DANNA INTERNATIONAL LIMITED provides construction, engineering, infrastructure, water, procurement and supply solutions in Nigeria.',
  },

  '/about': {
    title: 'About IBNU DANNA INTERNATIONAL LIMITED | Nigeria',
    description:
      'Learn about IBNU DANNA INTERNATIONAL LIMITED, its leadership, values and approach to construction, engineering, infrastructure and related services.',
  },

  '/services': {
    title:
      'Construction, Engineering & Supply Services | IBNU DANNA',
    description:
      'Explore IBNU DANNA INTERNATIONAL LIMITED services including building construction, civil engineering, road construction, borehole projects, procurement, general supply and petroleum products supply.',
  },

  '/projects': {
    title: 'Projects | IBNU DANNA INTERNATIONAL LIMITED',
    description:
      'Explore projects and representative work presented by IBNU DANNA INTERNATIONAL LIMITED across construction, engineering and infrastructure.',
  },

  '/approach': {
    title: 'Our Approach | IBNU DANNA INTERNATIONAL LIMITED',
    description:
      'Discover the project approach of IBNU DANNA INTERNATIONAL LIMITED, from understanding and planning through execution and delivery.',
  },

  '/contact': {
    title: 'Contact IBNU DANNA INTERNATIONAL LIMITED',
    description:
      'Contact IBNU DANNA INTERNATIONAL LIMITED to discuss construction, engineering, infrastructure, water, procurement or supply requirements.',
  },
};

function getOrCreateMeta(
  attr: 'name' | 'property',
  key: string
): HTMLMetaElement | null {
  return document.head.querySelector(`meta[${attr}="${key}"]`);
}

function setMeta(
  attr: 'name' | 'property',
  key: string,
  content: string
): void {
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

  const canonicalUrl =
    path === '/' ? SITE_URL : `${SITE_URL}${path}`;

  document.title = meta.title;

  // Standard SEO
  setMeta('name', 'description', meta.description);
  setMeta('name', 'robots', 'index, follow');

  // Canonical
  setLink('canonical', canonicalUrl);

  // Open Graph
  setMeta('property', 'og:title', meta.title);
  setMeta('property', 'og:description', meta.description);
  setMeta('property', 'og:url', canonicalUrl);
  setMeta('property', 'og:site_name', SITE_NAME);
  setMeta('property', 'og:type', 'website');
  setMeta('property', 'og:locale', SITE_LOCALE);

  // Twitter
  setMeta('name', 'twitter:card', 'summary_large_image');
  setMeta('name', 'twitter:title', meta.title);
  setMeta('name', 'twitter:description', meta.description);
}