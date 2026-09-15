import { useState, useMemo, useCallback } from 'react';
import { ArrowRight, Info } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import Container from '@/components/ui/Container';
import ProjectCard from '@/components/projects/ProjectCard';
import ProjectDetailModal from '@/components/projects/ProjectDetailModal';
import { useRoute, type RoutePath } from '@/lib/router';
import { projects, projectCategories, type Project, type ProjectCategory } from '@/data/projects';

type Filter = 'All' | ProjectCategory;

const heroImage =
  'https://images.pexels.com/photos/1431448/pexels-photo-1431448.jpeg?auto=compress&cs=tinysrgb&w=1920';

export default function Projects() {
  const [, navigate] = useRoute();
  const [filter, setFilter] = useState<Filter>('All');
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  const handleNav = useCallback(
    (path: RoutePath) => {
      setSelected(null);
      navigate(path);
    },
    [navigate]
  );

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[520px] items-center overflow-hidden sm:min-h-[600px]">
        <img
          src={heroImage}
          alt="Construction cranes and high-rise buildings against an urban skyline"
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
                Our Projects
              </span>
            </div>
            <h1
              className="mt-6 text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl"
              style={{
                animation: 'fadeInUp 0.7s cubic-bezier(0.4, 0, 0.2, 1) 0.15s forwards',
                opacity: 0,
              }}
            >
              Projects Built with Purpose.
            </h1>
            <p
              className="mt-6 max-w-xl text-lg leading-relaxed text-navy-100"
              style={{
                animation: 'fadeInUp 0.7s cubic-bezier(0.4, 0, 0.2, 1) 0.3s forwards',
                opacity: 0,
              }}
            >
              Explore a selection of construction and engineering project concepts presented to
              showcase the quality, precision and approach behind our work.
            </p>
          </div>
        </Container>
      </section>

      {/* Project Intro */}
      <section className="py-section sm:py-section-sm lg:py-section">
        <Container>
          <Reveal>
            <div className="max-w-3xl">
              <span className="text-sm font-semibold uppercase tracking-[0.15em] text-sky-600">
                Portfolio
              </span>
              <h2 className="mt-2 text-3xl font-bold leading-tight text-navy-800 sm:text-4xl">
                A Portfolio of Possibility
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-muted">
                <p>
                  The projects presented below are representative examples that illustrate the
                  range of construction and engineering work IBNU DANNA International Limited is
                  equipped to deliver. Each entry demonstrates the approach to planning, quality,
                  and execution that guides every build.
                </p>
                <p>
                  Detailed project information — including confirmed clients, locations, and
                  outcomes — will be added here as verified company projects are completed and
                  documented.
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Filters + Grid */}
      <section className="bg-cream pb-section sm:pb-section-sm lg:pb-section">
        <Container>
          {/* Demo notice */}
          <Reveal>
            <div className="mb-8 flex items-start gap-3 rounded-lg border border-sky-200 bg-sky-50 p-4">
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-sky-600" />
              <p className="text-sm leading-relaxed text-navy-800">
                The following project entries are representative demo content. They will be
                replaced with verified company projects as confirmed information becomes available.
              </p>
            </div>
          </Reveal>

          {/* Filters */}
          <Reveal>
            <div className="mb-10 flex flex-wrap gap-2">
              {projectCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat as Filter)}
                  className={`rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors duration-200 ease-smooth ${
                    filter === cat
                      ? 'bg-navy-800 text-white'
                      : 'border border-border bg-white text-navy-800 hover:border-sky-400 hover:text-sky-600'
                  }`}
                  aria-pressed={filter === cat}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project, i) => (
              <Reveal key={project.id} delay={(i % 3) * 100}>
                <ProjectCard project={project} onOpen={setSelected} />
              </Reveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="py-16 text-center text-lg text-ink-muted">
              No projects in this category yet.
            </p>
          )}
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-sky-500 py-section sm:py-section-sm lg:py-section">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Ready to Discuss Your Next Project?
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white/90">
                Let&apos;s talk about your construction or engineering requirements and explore how
                we can help bring your project forward.
              </p>
              <button
                onClick={() => handleNav('/contact')}
                className="mt-10 inline-flex items-center gap-2 rounded-lg bg-navy-800 px-8 py-4 text-base font-semibold text-white transition-colors duration-200 ease-smooth hover:bg-navy-900"
              >
                Start a Project
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </Reveal>
        </Container>
      </section>

      <ProjectDetailModal project={selected} onClose={() => setSelected(null)} />
    </>
  );
}
