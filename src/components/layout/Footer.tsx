import { ArrowRight, Phone } from 'lucide-react';
import Logo from '@/components/ui/Logo';
import { routes, type RoutePath } from '@/lib/router';

interface FooterProps {
  navigate: (path: RoutePath) => void;
}

export default function Footer({ navigate }: FooterProps) {
  return (
    <footer className="bg-navy-800 text-navy-100">
      <div className="container-app py-16">
        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-20">
          <div className="lg:col-span-2">
            <div className="flex h-10 w-36 items-center sm:h-12 sm:w-44">
              <Logo />
            </div>
            <p className="mt-8 max-w-sm text-sm leading-relaxed text-navy-200">
              IBNU DANNA INTERNATIONAL LIMITED is a construction and engineering company.
              This space is reserved for a short company description.
            </p>
            <p className="mt-4 text-xs font-medium text-navy-300">
              RC: 1321679
            </p>
          </div>

          <div className="md:pt-16 lg:pt-0">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Navigation
            </h3>
            <ul className="mt-6 space-y-3">
              {routes.map((route) => (
                <li key={route.path}>
                  <button
                    onClick={() => navigate(route.path)}
                    className="text-sm text-navy-200 transition-colors hover:text-sky-400"
                  >
                    {route.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:pt-16 lg:pt-0">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Get in Touch
            </h3>
            <ul className="mt-6 space-y-3">
              <li>
                <a
                  href="tel:+2348063752574"
                  className="inline-flex items-center gap-2 text-sm text-navy-200 transition-colors hover:text-sky-400"
                >
                  <Phone className="h-4 w-4" />
                  +234 806 375 2574
                </a>
              </li>
              <li>
                <a
                  href="tel:+2348029616463"
                  className="inline-flex items-center gap-2 text-sm text-navy-200 transition-colors hover:text-sky-400"
                >
                  <Phone className="h-4 w-4" />
                  +234 802 961 6463
                </a>
              </li>
            </ul>
            <button
              onClick={() => navigate('/contact')}
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-sky-400 transition-colors hover:text-sky-300"
            >
              Start a Project
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-navy-700 pt-8 sm:flex-row">
          <p className="text-xs text-navy-300">
            &copy; {new Date().getFullYear()} IBNU DANNA International Limited. All rights reserved.
          </p>
          <p className="text-xs text-navy-300">RC: 1321679</p>
          <p className="text-xs text-navy-300">
            Designed by{' '}
            <a
              href="https://www.zarkode.com.ng"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-sky-400"
            >
              Zarkode Digital Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
