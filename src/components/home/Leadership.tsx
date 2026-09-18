import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import type { RoutePath } from '@/lib/router';

interface LeadershipProps {
  navigate: (path: RoutePath) => void;
}

 const portraitImage = '/assets/images/YUD1.jpeg';

export default function Leadership({ navigate }: LeadershipProps) {
  return (
    <section className="py-section sm:py-section-sm lg:py-section">
      <div className="container-app">
        <div className="grid items-center gap-12 lg:grid-cols-5 lg:gap-16">
          <Reveal className="lg:col-span-2">
            <div className="relative mx-auto max-w-sm">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={portraitImage}
                  alt="Professional portrait of Yakuba Usman Danna, Chief Executive Officer"
                  className="h-[480px] w-full object-cover transition-transform duration-500 ease-smooth hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute -right-4 -bottom-4 h-28 w-28 rounded-xl border-r-2 border-b-2 border-sky-500" />
            </div>
          </Reveal>

          <Reveal delay={150} className="lg:col-span-3">
            <span className="text-sm font-semibold uppercase tracking-[0.15em] text-sky-600">
              Leadership
            </span>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-navy-800 sm:text-4xl">
              Leadership with a clear vision for lasting value.
            </h2>
            <div className="mt-6">
              <h3 className="text-xl font-bold text-navy-800">Yakuba Usman Danna</h3>
              <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-sky-600">
                Chief Executive Officer
              </p>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-ink-muted">
                <p>
                  Yakuba Usman Danna leads IBNU DANNA International Limited with a focus on
                  engineering excellence, disciplined execution, and lasting client
                  relationships.
                </p>
                <p>
                  This is placeholder biography text and can be edited to reflect the full
                  background, experience, and vision of the company's leadership.
                </p>
              </div>
            </div>
            <button
              onClick={() => navigate('/about')}
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-navy-800 transition-colors hover:text-sky-600"
            >
              Meet Our Leadership
              <ArrowRight className="h-4 w-4" />
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
