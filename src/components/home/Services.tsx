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
      'Construction solutions for residential, commercial and industrial buildings, from planning through completion.',
  },
  {
    number: '02',
    title: 'Civil Engineering',
    description:
      'Civil engineering solutions supporting site development, infrastructure and practical project requirements.',
  },
  {
    number: '03',
    title: 'Road Construction & Infrastructure',
    description:
      'Road construction and infrastructure works focused on reliable execution, functionality and lasting value.',
  },
  {
    number: '04',
    title: 'Borehole Drilling & Water Projects',
    description:
      'Borehole drilling and water-related projects designed to support dependable access to essential water resources.',
  },
  {
    number: '05',
    title: 'Procurement & General Supply',
    description:
      'Procurement and general supply services supporting construction, engineering and project requirements.',
  },
  {
    number: '06',
    title: 'Petroleum Products Supply',
    description:
      'Supply of petroleum products to support commercial, construction and operational requirements.',
  },
  {
    number: '07',
    title: 'Project Management',
    description:
      'Structured project coordination focused on planning, communication, quality control and delivery.',
  },
  {
    number: '08',
    title: 'Renovation & Maintenance',
    description:
      'Renovation, refurbishment and maintenance solutions for existing buildings and facilities.',
  },
  {
    number: '09',
    title: 'Structural Works',
    description:
      'Structural construction and reinforcement works approached with attention to precision, durability and project requirements.',
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
            Construction, engineering and supply solutions.
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