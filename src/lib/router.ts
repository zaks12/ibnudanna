import { useEffect, useState, useCallback } from 'react';

export type RoutePath = '/' | '/about' | '/services' | '/projects' | '/approach' | '/contact';

export const routes: { path: RoutePath; label: string }[] = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/services', label: 'Services' },
  { path: '/projects', label: 'Projects' },
  { path: '/approach', label: 'Our Approach' },
  { path: '/contact', label: 'Contact Us' },
];

function normalizePath(raw: string): RoutePath {
  return routes.some((r) => r.path === raw) ? (raw as RoutePath) : '/';
}

let currentPath: RoutePath = normalizePath(window.location.pathname);
const listeners = new Set<(path: RoutePath) => void>();

function setSharedPath(next: RoutePath) {
  currentPath = next;
  listeners.forEach((fn) => fn(next));
}

export function useRoute(): [RoutePath, (path: RoutePath) => void] {
  const [path, setPath] = useState<RoutePath>(currentPath);

  useEffect(() => {
    const listener = (next: RoutePath) => setPath(next);
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  }, []);

  useEffect(() => {
    const onPop = () => setSharedPath(normalizePath(window.location.pathname));
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const navigate = useCallback((next: RoutePath) => {
    window.history.pushState({}, '', next);
    setSharedPath(next);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return [path, navigate];
}
