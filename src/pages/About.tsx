import {
  ArrowRight,
  ShieldCheck,
  Ruler,
  Clock,
  HeartHandshake,
  Eye,
  Target,
} from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import Container from '@/components/ui/Container';
import { useRoute, type RoutePath } from '@/lib/router';

const heroImage =
  'https://images.pexels.com/photos/31197870/pexels-photo-31197870.jpeg?auto=compress&cs=tinysrgb&w=1920';

const introImage =
  'https://images.pexels.com/photos/13758319/pexels-photo-13758319.jpeg?auto=compress&cs=tinysrgb&w=1200';

const portraitImages = [
  '/assets/images/YUD1.jpeg',
  '/assets/images/YUD2.jpeg',
  '/assets/images/YUD3.jpeg',
  '/assets/images/YUD4.jpeg',
];

const coreValues = [
  {
    icon: ShieldCheck,
    title: 'Quality',
    description:
      'We hold every build to rigorous quality standards, from materials selection to final inspection, ensuring outcomes that endure.',
  },
  {
    icon: Ruler,
    title: 'Precision',
    description:
      'Accurate engineering and careful execution ensure every detail meets specification and every structure performs as designed.',
  },
  {
    icon: Clock,
    title: 'Reliability',
    description:
      'We deliver on commitments, meeting timelines and budgets with disciplined project management and clear communication.',
  },
  {
    icon: HeartHandshake,
    title: 'Integrity',
    description:
      'Transparent communication and honest practices guide every client relationship, partnership, and project decision.',
  },
];

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
      'We deliver on commitments with disciplined project management and clear communication.',
  },
  {
    icon: HeartHandshake,
    title: 'Integrity',
    description:
      'Transparent communication and honest practices guide every client relationship and decision.',
  },
];

export default function About() {
  const [, navigate] = useRoute();

  return (
    <>
      {/* About Hero */}
      <section className="relative flex min-h-[520px] items-center overflow-hidden sm:min-h-[600px]">
        <img
          src={heroImage}
          alt="Modern steel framework structure showcasing architectural design"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-navy-800/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-800/70 to-transparent" />

        <Container className="relative z-10 py-20 sm:py-28">
          <div className="max-w-2xl">
            <div
              style={{
                animation:
                  'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards',
                opacity: 0,
              }}
            >
              <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
                About Us
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
              About IBNU DANNA INTERNATIONAL LIMITED
            </h1>

            <p
              className="mt-6 max-w-xl text-lg leading-relaxed text-navy-100"
              style={{
                animation:
                  'fadeInUp 0.7s cubic-bezier(0.4, 0, 0.2, 1) 0.3s forwards',
                opacity: 0,
              }}
            >
              Building with purpose, delivering with precision, and creating
              lasting value.
            </p>
          </div>
        </Container>
      </section>

      {/* Company Introduction */}
      <section className="py-section sm:py-section-sm lg:py-section">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <span className="text-sm font-semibold uppercase tracking-[0.15em] text-sky-600">
                Who We Are
              </span>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-navy-800 sm:text-4xl">
                Building Beyond Structures
              </h2>

              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-muted">
                <p>
                  IBNU DANNA INTERNATIONAL LIMITED is a Nigerian company
                  focused on construction, engineering, infrastructure,
                  project management and related supply solutions. The company
                  approaches its work with attention to quality, precision,
                  reliability and responsible project execution.
                </p>

                <p>
                  Its service areas include building construction, civil
                  engineering, structural works, road construction and
                  infrastructure, borehole drilling and water projects,
                  procurement and general supply, petroleum products supply,
                  project management, and renovation and maintenance.
                </p>

                <p>
                  IBNU DANNA INTERNATIONAL LIMITED, RC 1321679, works to
                  understand project requirements, coordinate resources and
                  deliver practical solutions aligned with client needs.
                  Attention to planning, communication, safety and quality
                  remains central to the company's approach.
                </p>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="relative">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={introImage}
                    alt="Construction site with surrounding modern buildings in an urban setting"
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

      {/* Vision & Mission */}
      <section className="bg-cream py-section sm:py-section-sm lg:py-section">
        <Container>
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <span className="text-sm font-semibold uppercase tracking-[0.15em] text-sky-600">
                Our Direction
              </span>

              <h2 className="mt-2 text-3xl font-bold leading-tight text-navy-800 sm:text-4xl">
                Vision &amp; Mission
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-2">
            <Reveal>
              <div className="group h-full rounded-2xl border border-border bg-white p-8 shadow-card transition-all duration-200 ease-smooth hover:-translate-y-0.5 hover:shadow-card-hover lg:p-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-sky-50 transition-colors duration-200 group-hover:bg-sky-100">
                  <Eye className="h-7 w-7 text-sky-600" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-navy-800">
                  Our Vision
                </h3>

                <p className="mt-4 text-base leading-relaxed text-ink-muted">
                  To be a construction and engineering company recognized for
                  quality delivery, responsible development, and lasting value
                  — building projects and relationships that stand the test of
                  time.
                </p>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="group h-full rounded-2xl border border-border bg-white p-8 shadow-card transition-all duration-200 ease-smooth hover:-translate-y-0.5 hover:shadow-card-hover lg:p-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy-50 transition-colors duration-200 group-hover:bg-navy-100">
                  <Target className="h-7 w-7 text-navy-600" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-navy-800">
                  Our Mission
                </h3>

                <p className="mt-4 text-base leading-relaxed text-ink-muted">
                  To deliver construction and engineering solutions that meet
                  client needs through precision planning, disciplined
                  execution, and a commitment to safety, quality, and
                  sustainable long-term growth.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Core Values */}
      <section className="py-section sm:py-section-sm lg:py-section">
        <Container>
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <span className="text-sm font-semibold uppercase tracking-[0.15em] text-sky-600">
                What Guides Us
              </span>

              <h2 className="mt-2 text-3xl font-bold leading-tight text-navy-800 sm:text-4xl">
                Core Values
              </h2>

              <p className="mt-4 text-lg leading-relaxed text-ink-muted">
                The principles that shape every project, partnership, and
                decision we make.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value, i) => (
              <Reveal key={value.title} delay={i * 100}>
                <div className="group h-full rounded-xl border border-border bg-white p-6 shadow-card transition-all duration-200 ease-smooth hover:-translate-y-0.5 hover:shadow-card-hover">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-sky-50 transition-colors duration-200 group-hover:bg-sky-100">
                    <value.icon className="h-6 w-6 text-sky-600" />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-navy-800">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Leadership */}
      <section className="bg-cream py-section sm:py-section-sm lg:py-section">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-5 lg:gap-16">
          <Reveal className="lg:col-span-2">
  <div className="relative">
    <div className="grid grid-cols-2 gap-3">
      {portraitImages.map((image, index) => (
        <div
          key={image}
          className={`overflow-hidden rounded-xl ${
            index === 0 ? 'col-span-2' : ''
          }`}
        >
          <img
            src={image}
            alt={`Yakuba Usman Danna, Chief Executive Officer of IBNU DANNA INTERNATIONAL LIMITED — photo ${index + 1}`}
            className={`w-full object-cover transition-transform duration-500 ease-smooth hover:scale-105 ${
              index === 0 ? 'h-[360px] sm:h-[420px]' : 'h-[180px] sm:h-[220px]'
            }`}
            loading="lazy"
          />
        </div>
      ))}
    </div>

    <div className="pointer-events-none absolute -right-4 -bottom-4 h-28 w-28 rounded-xl border-r-2 border-b-2 border-sky-500" />
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
                <h3 className="text-xl font-bold text-navy-800">
                  Yakuba Usman Danna
                </h3>

                <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-sky-600">
                  Chief Executive Officer
                </p>

                <div className="mt-5 space-y-4 text-base leading-relaxed text-ink-muted">
                  <p>
                    Yakuba Usman Danna provides strategic leadership at IBNU
                    DANNA INTERNATIONAL LIMITED, with a strong commitment to
                    excellence, innovation and sustainable development. His
                    leadership vision is centered on building a company
                    recognized for professionalism, quality delivery and
                    lasting value across the construction and engineering
                    sector.
                  </p>

                  <p>
                    Under his leadership, the company continues to pursue
                    opportunities that combine technical expertise, responsible
                    project execution and client-focused solutions.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Why IBNU DANNA */}
      <section className="bg-navy-800 py-section sm:py-section-sm lg:py-section">
        <Container>
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-[0.15em] text-sky-400">
              Why IBNU DANNA
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

                  <h3 className="mt-5 text-lg font-bold text-white">
                    {pillar.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-navy-100">
                    {pillar.description}
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
                Let&apos;s Build Something Remarkable.
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-white/90">
                Have a project in mind? Let&apos;s discuss how we can help turn
                your plans into reality.
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