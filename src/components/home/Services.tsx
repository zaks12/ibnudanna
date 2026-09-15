import { ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import type { RoutePath } from '@/lib/router';

interface ServicesProps {
  navigate: (path: RoutePath) => void;
}

const services = [
  {
    number: '01',
    title: 'Building Construction',
    description:
      'Comprehensive building construction services covering residential, commercial, and industrial structures from foundation to finish.',
  },
  {
    number: '02',
    title: 'Civil Engineering',
    description:
      'Civil engineering solutions for site development, structural design, and infrastructure support systems.',
  },
  {
    number: '03',
    title: 'Structural Works',
    description:
      'Structural construction and reinforcement works engineered for strength, durability, and compliance.',
  },
  {
    number: '04',
    title: 'Infrastructure Development',
    description:
      'Roads, drainage, utilities, and large-scale infrastructure projects built to specification.',
  },
  {
    number: '05',
    title: 'Project Management',
    description:
      'End-to-end project management ensuring timelines, budgets, and quality standards are met.',
  },
  {
    number: '06',
    title: 'Renovation & Maintenance',
    description:
      'Renovation, refurbishment, and ongoing maintenance services for existing structures and facilities.',
  },
];

export default function Services({ navigate }: ServicesProps) {
  return (
    <section className="bg-light-blue py-section sm:py-section-sm lg:py-section">
      <div className="container-app">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-[0.15em] text-sky-600">
            What We Do
          </span>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold leading-tight text-navy-800 sm:text-4xl">
            Construction expertise for ambitious projects.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.number} delay={i * 80}>
              <article className="group flex h-full flex-col bg-white p-8 transition-colors duration-200 ease-smooth hover:bg-navy-800">
                <div className="flex items-start justify-between">
                  <span className="text-sm font-bold tracking-wider text-sky-500">
                    {service.number}
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-border transition-colors duration-200 group-hover:text-sky-400" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-navy-800 transition-colors duration-200 group-hover:text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted transition-colors duration-200 group-hover:text-navy-100">
                  {service.description}
                </p>
                <button
                  onClick={() => navigate('/services')}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-800 transition-colors duration-200 group-hover:text-sky-400"
                >
                  Learn More
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
