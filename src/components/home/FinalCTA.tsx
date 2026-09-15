import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import type { RoutePath } from '@/lib/router';

interface FinalCTAProps {
  navigate: (path: RoutePath) => void;
}

export default function FinalCTA({ navigate }: FinalCTAProps) {
  return (
    <section className="bg-sky-500 py-section sm:py-section-sm lg:py-section">
      <div className="container-app">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Ready to build your next project?
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/90">
              Let's discuss your project and explore how we can turn your vision into a
              well-executed reality.
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="mt-10 inline-flex items-center gap-2 rounded-lg bg-navy-800 px-8 py-4 text-base font-semibold text-white transition-colors duration-200 ease-smooth hover:bg-navy-900"
            >
              Start a Project
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
