import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import Logo from '@/components/ui/Logo';
import { LinkButton } from '@/components/ui/Button';
import { routes, useRoute, type RoutePath } from '@/lib/router';

export default function Header() {
  const [currentPath, navigate] = useRoute();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [currentPath]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [mobileOpen]);

  const handleNav = (path: RoutePath) => {
    navigate(path);
    setMobileOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur-sm transition-shadow duration-200 ease-smooth ${
        scrolled ? 'shadow-nav' : 'border-b border-border'
      }`}
    >
      <div className="container-app flex h-16 items-center justify-between px-7 sm:px-8 lg:px-10 lg:h-20">
        
      <button onClick={() => handleNav('/')} className="flex h-12 w-44 translate-x-3 items-center sm:h-14 sm:w-52" aria-label="Go to home">
  <Logo />
</button>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {routes.map((route) => (
            <button
              key={route.path}
              onClick={() => handleNav(route.path)}
              className={`rounded-lg px-4 py-2 text-sm font-semibold transition-colors duration-200 ease-smooth ${
                currentPath === route.path
                  ? 'text-sky-600'
                  : 'text-ink hover:text-navy-800'
              }`}
              aria-current={currentPath === route.path ? 'page' : undefined}
            >
              {route.label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:block">
          <LinkButton href="/contact" variant="secondary" size="md" onClick={() => handleNav('/contact')}>
            Start a Project
            <ArrowRight className="h-4 w-4" />
          </LinkButton>
        </div>

        <button
          className="flex items-center justify-center rounded-lg p-2 text-navy-800 transition-colors hover:bg-navy-50 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-white lg:hidden" role="dialog" aria-modal="true" aria-label="Mobile navigation menu">
          <nav className="container-app flex flex-col gap-1 py-4" aria-label="Mobile navigation">
            {routes.map((route) => (
              <button
                key={route.path}
                onClick={() => handleNav(route.path)}
                className={`rounded-lg px-4 py-3 text-left text-sm font-semibold transition-colors ${
                  currentPath === route.path
                    ? 'bg-sky-50 text-sky-600'
                    : 'text-ink hover:bg-navy-50 hover:text-navy-800'
                }`}
                aria-current={currentPath === route.path ? 'page' : undefined}
                role="menuitem"
              >
                {route.label}
              </button>
            ))}
            <button
              onClick={() => handleNav('/contact')}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-sky-600"
              role="menuitem"
            >
              Start a Project
              <ArrowRight className="h-4 w-4" />
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
