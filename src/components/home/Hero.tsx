import { ArrowRight, ArrowDown } from 'lucide-react';
import { LinkButton } from '@/components/ui/Button';
import type { RoutePath } from '@/lib/router';

interface HeroProps {
  navigate: (path: RoutePath) => void;
}

const heroImage =
  'https://images.pexels.com/photos/7108785/pexels-photo-7108785.jpeg?auto=compress&cs=tinysrgb&w=1920';

export default function Hero({ navigate }: HeroProps) {
  return (
    <section className="relative flex min-h-[720px] items-center overflow-hidden">
      <img
        src={heroImage}
        alt="Modern concrete building under construction showcasing structural design"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-navy-800/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-800/70 to-transparent" />

      <div className="container-app relative z-10 py-24">
        <div className="max-w-2xl">
          <div style={{ animation: 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards', opacity: 0 }}>
            <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
              IBNU DANNA INTERNATIONAL LIMITED
            </span>
          </div>

          <h1
            className="mt-6 text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl"
            style={{ animation: 'fadeInUp 0.7s cubic-bezier(0.4, 0, 0.2, 1) 0.15s forwards', opacity: 0 }}
          >
            Building with Precision.
            <br />
            Delivering with Purpose.
          </h1>

          <p
            className="mt-6 max-w-xl text-lg leading-relaxed text-navy-100"
            style={{ animation: 'fadeInUp 0.7s cubic-bezier(0.4, 0, 0.2, 1) 0.3s forwards', opacity: 0 }}
          >
            Construction and engineering solutions built around quality, reliability and lasting value.
          </p>

          <div
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
            style={{ animation: 'fadeInUp 0.7s cubic-bezier(0.4, 0, 0.2, 1) 0.45s forwards', opacity: 0 }}
          >
            <LinkButton
              href="/projects"
              variant="secondary"
              size="lg"
              onClick={() => navigate('/projects')}
            >
              Explore Our Projects
              <ArrowRight className="h-5 w-5" />
            </LinkButton>
            <LinkButton
              href="/contact"
              variant="outline"
              size="lg"
              className="border-white/30 bg-white/5 text-white hover:border-sky-400 hover:bg-white/10 hover:text-sky-400"
              onClick={() => navigate('/contact')}
            >
              Start a Project
            </LinkButton>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        style={{ animation: 'fadeInUp 0.7s cubic-bezier(0.4, 0, 0.2, 1) 0.8s forwards', opacity: 0 }}
      >
        <span className="flex flex-col items-center gap-2 text-xs font-medium uppercase tracking-wider text-navy-200">
          Scroll to Explore
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </span>
      </div>
    </section>
  );
}
