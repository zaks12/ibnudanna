import { ShieldCheck, Ruler, Clock, HeartHandshake } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

const pillars = [
  {
    icon: ShieldCheck,
    title: 'Quality',
    description:
      'We hold every build to rigorous quality standards, from materials selection to final inspection.',
  },
  {
    icon: Ruler,
    title: 'Precision',
    description:
      'Accurate engineering and careful execution ensure every detail meets specification.',
  },
  {
    icon: Clock,
    title: 'Reliability',
    description:
      'We deliver on commitments, meeting timelines and budgets with disciplined project management.',
  },
  {
    icon: HeartHandshake,
    title: 'Integrity',
    description:
      'Transparent communication and honest practices guide every client relationship and decision.',
  },
];

export default function WhyIbnuDanna() {
  return (
    <section className="bg-navy-800 py-section sm:py-section-sm lg:py-section">
      <div className="container-app">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-[0.15em] text-sky-400">
            Why Work With Us
          </span>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl">
            Built around the standards that matter.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 100}>
              <div className="group border-t border-navy-700 pt-6">
                <pillar.icon className="h-8 w-8 text-sky-400 transition-transform duration-200 group-hover:scale-110" />
                <h3 className="mt-5 text-lg font-bold text-white">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-100">
                  {pillar.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
