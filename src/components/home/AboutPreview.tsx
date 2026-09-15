import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import type { RoutePath } from '@/lib/router';

interface AboutPreviewProps {
  navigate: (path: RoutePath) => void;
}

const aboutImage =
  'https://images.pexels.com/photos/8961073/pexels-photo-8961073.jpeg?auto=compress&cs=tinysrgb&w=1200';

export default function AboutPreview({ navigate }: AboutPreviewProps) {
  return (
    <section className="py-section sm:py-section-sm lg:py-section">
      <div className="container-app">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-[0.15em] text-sky-600">
              About IBNU DANNA
            </span>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-navy-800 sm:text-4xl">
              Built on precision. Driven by purpose.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-muted">
              <p>
                IBNU DANNA International Limited is a construction and engineering company
                committed to delivering projects that meet the highest standards of quality,
                safety, and structural integrity. We approach every build with a focus on
                precision engineering and disciplined project execution.
              </p>
              <p>
                Our team brings together technical expertise and practical field experience to
                manage projects from concept through completion. We work across building
                construction, civil engineering, and infrastructure development, serving clients
                who value reliability and long-term value.
              </p>
              <p>
                This is placeholder company copy and can be edited to reflect the full story,
                background, and positioning of IBNU DANNA International Limited.
              </p>
            </div>
            <button
              onClick={() => navigate('/about')}
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-navy-800 transition-colors hover:text-sky-600"
            >
              Discover Our Story
              <ArrowRight className="h-4 w-4" />
            </button>
          </Reveal>

          <Reveal delay={150}>
            <div className="relative">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={aboutImage}
                  alt="Engineers reviewing architectural plans at a construction site"
                  className="h-[420px] w-full object-cover transition-transform duration-500 ease-smooth hover:scale-105 sm:h-[520px]"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden h-32 w-32 rounded-xl border-l-2 border-t-2 border-sky-500 sm:block" />
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-xl border-r-2 border-b-2 border-navy-300/40 sm:block" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
