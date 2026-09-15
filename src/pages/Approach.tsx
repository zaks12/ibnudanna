import {
  ArrowRight,
  Search,
  ClipboardList,
  Hammer,
  CheckCircle2,
  ShieldCheck,
  Ruler,
  Clock,
  HeartHandshake,
} from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import Container from '@/components/ui/Container';
import { useRoute, type RoutePath } from '@/lib/router';

const heroImage =
  'https://images.pexels.com/photos/8482551/pexels-photo-8482551.jpeg?auto=compress&cs=tinysrgb&w=1920';

const mindsetImage =
  'https://images.pexels.com/photos/8961260/pexels-photo-8961260.jpeg?auto=compress&cs=tinysrgb&w=1200';

const stages = [
  {
    number: '01',
    icon: Search,
    title: 'Discover',
    description:
      'Understand the project\u2019s objectives, requirements, priorities and expectations.',
  },
  {
    number: '02',
    icon: ClipboardList,
    title: 'Plan',
    description:
      'Define the scope, priorities, resources and execution strategy before work begins.',
  },
  {
    number: '03',
    icon: Hammer,
    title: 'Build',
    description:
      'Translate the plan into action through disciplined execution, coordination and attention to detail.',
  },
  {
    number: '04',
    icon: CheckCircle2,
    title: 'Deliver',
    description:
      'Complete the work with a focus on quality, review, handover and lasting value.',
  },
];

const principles = [
  {
    icon: ShieldCheck,
    title: 'Quality',
    description:
      'A consistent focus on workmanship, materials and project requirements.',
  },
  {
    icon: Ruler,
    title: 'Precision',
    description:
      'Careful planning and attention to the details that shape successful outcomes.',
  },
  {
    icon: Clock,
    title: 'Reliability',
    description:
      'Clear communication, responsible execution and dependable project coordination.',
  },
  {
    icon: HeartHandshake,
    title: 'Integrity',
    description:
      'Professional conduct, transparency and respect for project commitments.',
  },
];

export default function Approach() {
  const [, navigate] = useRoute();

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[520px] items-center overflow-hidden sm:min-h-[600px]">
        <img
          src={heroImage}
          alt="Engineer in hard hat reviewing architectural floor plans at a construction site"
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
                Our Approach
              </span>
            </div>
            <h1
              className="mt-6 text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl"
              style={{
                animation: 'fadeInUp 0.7s cubic-bezier(0.4, 0, 0.2, 1) 0.15s forwards',
                opacity: 0,
              }}
            >
              From Vision to Delivery.
            </h1>
            <p
              className="mt-6 max-w-xl text-lg leading-relaxed text-navy-100"
              style={{
                animation: 'fadeInUp 0.7s cubic-bezier(0.4, 0, 0.2, 1) 0.3s forwards',
                opacity: 0,
              }}
            >
              A structured approach to construction and engineering, built around clear planning,
              careful execution and a commitment to delivering projects with purpose.
            </p>
          </div>
        </Container>
      </section>

      {/* Introduction */}
      <section className="py-section sm:py-section-sm lg:py-section">
        <Container>
          <Reveal>
            <div className="max-w-3xl">
              <span className="text-sm font-semibold uppercase tracking-[0.15em] text-sky-600">
                Our Methodology
              </span>
              <h2 className="mt-2 text-3xl font-bold leading-tight text-navy-800 sm:text-4xl">
                A Clear Approach to Every Project
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-muted">
                <p>
                  Successful construction and engineering projects require more than construction
                  alone. They require a clear understanding of requirements, thoughtful planning,
                  coordinated execution, and attention to quality throughout the entire process.
                </p>
                <p>
                  Our approach is structured around four stages — from the first conversation
                  through to final delivery — ensuring that every project is guided by clear
                  decisions, defined scope, and a commitment to meeting expectations at each step.
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Four-Step Process */}
      <section className="bg-cream py-section sm:py-section-sm lg:py-section">
        <Container>
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <span className="text-sm font-semibold uppercase tracking-[0.15em] text-sky-600">
                How We Work
              </span>
              <h2 className="mt-2 text-3xl font-bold leading-tight text-navy-800 sm:text-4xl">
                A Four-Stage Process
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-ink-muted">
                Every project moves through a clear sequence — from understanding and planning
                through to execution and delivery.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {stages.map((stage, i) => (
              <Reveal key={stage.number} delay={i * 120}>
                <div className="relative lg:pr-8">
                  {/* Horizontal connecting line on desktop */}
                  {i < stages.length - 1 && (
                    <div className="absolute left-0 top-12 hidden h-px w-full bg-border lg:block" />
                  )}
                  {/* Vertical connecting line on mobile */}
                  {i < stages.length - 1 && (
                    <div className="absolute left-6 top-14 hidden h-[calc(100%-3.5rem)] w-px bg-border sm:hidden lg:hidden" />
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
        </Container>
      </section>

      {/* Principles — dark navy */}
      <section className="bg-navy-800 py-section sm:py-section-sm lg:py-section">
        <Container>
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <span className="text-sm font-semibold uppercase tracking-[0.15em] text-sky-400">
                What Guides Us
              </span>
              <h2 className="mt-2 text-3xl font-bold leading-tight text-white sm:text-4xl">
                Built Around the Right Principles.
              </h2>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle, i) => (
              <Reveal key={principle.title} delay={i * 100}>
                <div className="group border-t border-navy-700 pt-6">
                  <principle.icon className="h-8 w-8 text-sky-400 transition-transform duration-200 group-hover:scale-110" />
                  <h3 className="mt-5 text-lg font-bold text-white">{principle.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy-100">
                    {principle.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Project Mindset — two-column editorial */}
      <section className="py-section sm:py-section-sm lg:py-section">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <span className="text-sm font-semibold uppercase tracking-[0.15em] text-sky-600">
                Project Mindset
              </span>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-navy-800 sm:text-4xl">
                Thinking Beyond the Build.
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-muted">
                <p>
                  Construction projects are ultimately about creating useful, durable spaces and
                  infrastructure that serve their intended purpose. Every structure is built to be
                  used, to perform, and to last.
                </p>
                <p>
                  That means looking beyond the build itself — considering how a project fits
                  its environment, how it will function over time, and how the process from planning
                  to delivery can be managed to deliver the best possible outcome for the client.
                </p>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="relative">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={mindsetImage}
                    alt="Construction workers discussing plans on site"
                    className="h-[400px] w-full object-cover transition-transform duration-500 ease-smooth hover:scale-105 sm:h-[500px]"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 hidden h-32 w-32 rounded-xl border-l-2 border-t-2 border-sky-500 sm:block" />
                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-xl border-r-2 border-b-2 border-navy-300/40" />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-sky-500 py-section sm:py-section-sm lg:py-section">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Ready to Move Your Project Forward?
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white/90">
                Let&apos;s discuss your construction or engineering requirements and explore the
                right path from planning to delivery.
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
