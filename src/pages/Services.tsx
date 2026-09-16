import {
  ArrowRight,
  Building2,
  HardHat,
  Layers,
  Route,
  ClipboardList,
  Wrench,
  Search,
  CalendarCheck,
  Hammer,
  CheckCircle2,
} from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import Container from '@/components/ui/Container';
import { useRoute, type RoutePath } from '@/lib/router';

const heroImage =
  'https://images.pexels.com/photos/7107980/pexels-photo-7107980.jpeg?auto=compress&cs=tinysrgb&w=1920';

const services = [
  {
    number: '01',
    icon: Building2,
    title: 'Building Construction',
    description:
      'Construction solutions for residential, commercial and industrial buildings, from planning through completion.',
  },
  {
    number: '02',
    icon: HardHat,
    title: 'Civil Engineering',
    description:
      'Civil engineering solutions supporting site development, infrastructure and practical project requirements.',
  },
  {
    number: '03',
    icon: Layers,
    title: 'Structural Works',
    description:
      'Structural construction and reinforcement works approached with attention to precision, durability and project requirements.',
  },
  {
    number: '04',
    icon: Route,
    title: 'Road Construction & Infrastructure',
    description:
      'Road construction and infrastructure works focused on reliable execution, functionality and lasting value.',
  },
  {
    number: '05',
    icon: HardHat,
    title: 'Borehole Drilling & Water Projects',
    description:
      'Borehole drilling and water-related projects designed to support dependable access to essential water resources.',
  },
  {
    number: '06',
    icon: ClipboardList,
    title: 'Procurement & General Supply',
    description:
      'Procurement and general supply services supporting construction, engineering and project requirements.',
  },
  {
    number: '07',
    icon: ClipboardList,
    title: 'Petroleum Products Supply',
    description:
      'Supply of petroleum products to support commercial, construction and operational requirements.',
  },
  {
    number: '08',
    icon: ClipboardList,
    title: 'Project Management',
    description:
      'Structured project coordination focused on planning, communication, quality control and delivery.',
  },
  {
    number: '09',
    icon: Wrench,
    title: 'Renovation & Maintenance',
    description:
      'Renovation, refurbishment and maintenance solutions for existing buildings and facilities.',
  },
];

const approachSteps = [
  {
    icon: Search,
    title: 'Understand',
    description:
      'We begin by understanding the project scope, client goals, site conditions and technical requirements.',
  },
  {
    icon: CalendarCheck,
    title: 'Plan',
    description:
      'We develop a clear plan covering timelines, resources, quality standards and coordination across teams.',
  },
  {
    icon: Hammer,
    title: 'Execute',
    description:
      'We carry out the work with attention to precision, safety, and disciplined project management.',
  },
  {
    icon: CheckCircle2,
    title: 'Deliver',
    description:
      'We deliver completed projects that meet specifications, with a focus on quality and client satisfaction.',
  },
];

export default function Services() {
  const [, navigate] = useRoute();

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[520px] items-center overflow-hidden sm:min-h-[600px]">
        <img
          src={heroImage}
          alt="Concrete roadway overpass and pillars showcasing infrastructure engineering"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-navy-800/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-800/70 to-transparent" />

        <Container className="relative z-10 py-20 sm:py-28">
          <div className="max-w-2xl">
            <div
              style={{
                animation: 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards',
                opacity: 0,
              }}
            >
              <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
                Our Services
              </span>
            </div>
            <h1
              className="mt-6 text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl"
              style={{
                animation:
                  'fadeInUp 0.7s cubic-bezier(0.4, 0, 0.2, 1) 0.15s forwards',
                opacity: 0,
              }}
            >
              Construction &amp; Engineering Solutions
            </h1>
            <p
              className="mt-6 max-w-xl text-lg leading-relaxed text-navy-100"
              style={{
                animation:
                  'fadeInUp 0.7s cubic-bezier(0.4, 0, 0.2, 1) 0.3s forwards',
                opacity: 0,
              }}
            >
              Practical solutions built around quality, precision, reliability
              and lasting value.
            </p>
          </div>
        </Container>
      </section>

      {/* Services Introduction */}
      <section className="py-section sm:py-section-sm lg:py-section">
        <Container>
          <Reveal>
            <div className="max-w-2xl">
              <span className="text-sm font-semibold uppercase tracking-[0.15em] text-sky-600">
                What We Offer
              </span>
              <h2 className="mt-2 text-3xl font-bold leading-tight text-navy-800 sm:text-4xl">
                Built Around Your Project Needs
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-muted">
                <p>
                  IBNU DANNA International Limited provides construction and
                  engineering solutions focused on thoughtful planning,
                  quality execution, and dependable delivery. We work across a
                  range of project types, bringing technical expertise and
                  practical field experience to every build.
                </p>
                <p>
                  From initial concept through project completion, our approach
                  centres on coordination, communication, and a commitment to
                  meeting client needs. This is placeholder copy and can be
                  edited to reflect the full scope of services offered by IBNU
                  DANNA International Limited.
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Service Grid */}
      <section className="bg-cream py-section sm:py-section-sm lg:py-section">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.number} delay={(i % 3) * 100}>
                <div className="group flex h-full flex-col rounded-xl border border-border bg-white p-7 shadow-card transition-all duration-200 ease-smooth hover:-translate-y-0.5 hover:shadow-card-hover lg:p-8">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-sky-50 transition-colors duration-200 group-hover:bg-sky-100">
                      <service.icon className="h-6 w-6 text-sky-600" />
                    </div>
                    <span className="text-3xl font-bold text-navy-100 transition-colors duration-200 group-hover:text-sky-200">
                      {service.number}
                    </span>
                  </div>
                  <h3 className="mt-6 text-lg font-bold text-navy-800">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Service Approach */}
      <section className="bg-navy-800 py-section sm:py-section-sm lg:py-section">
        <Container>
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-[0.15em] text-sky-400">
              Our Approach
            </span>
            <h2 className="mt-4 max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl">
              Every project deserves a clear approach.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {approachSteps.map((step, i) => (
              <Reveal key={step.title} delay={i * 100}>
                <div className="group border-t border-navy-700 pt-6">
                  <step.icon className="h-8 w-8 text-sky-400 transition-transform duration-200 group-hover:scale-110" />
                  <h3 className="mt-5 text-lg font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy-100">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-sky-500 py-section sm:py-section-sm lg:py-section">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Ready to Discuss Your Project?
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white/90">
                Tell us what you are planning and let&apos;s explore the right
                way forward.
              </p>
              <button
                onClick={() => navigate('/contact' as RoutePath)}
                className="mt-10 inline-flex items-center gap-2 rounded-lg bg-navy-800 px-8 py-4 text-base font-semibold text-white transition-colors duration-200 ease-smooth hover:bg-navy-900"
              >
                Start a Project
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
