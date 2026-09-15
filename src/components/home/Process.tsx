import Reveal from '@/components/ui/Reveal';
import type { RoutePath } from '@/lib/router';

interface ProcessProps {
  navigate: (path: RoutePath) => void;
}

const stages = [
  {
    number: '01',
    title: 'Discover',
    description:
      'We begin by understanding your vision, requirements, and site conditions to define the project scope.',
  },
  {
    number: '02',
    title: 'Plan',
    description:
      'Detailed planning, engineering design, and scheduling set the foundation for a controlled build.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'Construction is executed with skilled teams, quality materials, and continuous oversight.',
  },
  {
    number: '04',
    title: 'Deliver',
    description:
      'We hand over a completed project that meets specifications, standards, and your expectations.',
  },
];

export default function Process({ navigate }: ProcessProps) {
  return (
    <section className="bg-cream py-section sm:py-section-sm lg:py-section">
      <div className="container-app">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-[0.15em] text-sky-600">
            Our Approach
          </span>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold leading-tight text-navy-800 sm:text-4xl">
            From first conversation to final delivery.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {stages.map((stage, i) => (
            <Reveal key={stage.number} delay={i * 120}>
              <div className="relative lg:pr-8">
                {i < stages.length - 1 && (
                  <div className="absolute left-0 top-12 hidden h-px w-full bg-border lg:block" />
                )}
                <div className="relative flex items-center gap-4 lg:flex-col lg:items-start">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-sky-500 bg-cream text-sm font-bold text-sky-600">
                    {stage.number}
                  </span>
                  <h3 className="text-lg font-bold text-navy-800 lg:mt-5">{stage.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink-muted lg:pr-6">
                  {stage.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400}>
          <button
            onClick={() => navigate('/approach')}
            className="mt-12 inline-flex items-center gap-2 text-sm font-semibold text-navy-800 transition-colors hover:text-sky-600"
          >
            See Our Full Approach
          </button>
        </Reveal>
      </div>
    </section>
  );
}
