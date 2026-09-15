import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import type { RoutePath } from '@/lib/router';

interface FeaturedProjectsProps {
  navigate: (path: RoutePath) => void;
}

const projects = [
  {
    title: 'Featured Project 01',
    category: 'Building Construction',
    image:
      'https://images.pexels.com/photos/532562/pexels-photo-532562.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Contemporary building with glass facade and geometric patterns',
    large: true,
  },
  {
    title: 'Featured Project 02',
    category: 'Infrastructure Development',
    image:
      'https://images.pexels.com/photos/11701517/pexels-photo-11701517.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Aerial view of a highway construction site with machinery',
    large: false,
  },
  {
    title: 'Featured Project 03',
    category: 'Civil Engineering',
    image:
      'https://images.pexels.com/photos/29152268/pexels-photo-29152268.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Construction site with large concrete columns and earthwork',
    large: false,
  },
];

export default function FeaturedProjects({ navigate }: FeaturedProjectsProps) {
  return (
    <section className="py-section sm:py-section-sm lg:py-section">
      <div className="container-app">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.15em] text-sky-600">
                Selected Work
              </span>
              <h2 className="mt-4 max-w-2xl text-3xl font-bold leading-tight text-navy-800 sm:text-4xl">
                Projects that speak through quality.
              </h2>
            </div>
            <button
              onClick={() => navigate('/projects')}
              className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-semibold text-navy-800 transition-colors hover:text-sky-600"
            >
              View All Projects
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <ProjectCard project={projects[0]} navigate={navigate} />
          </Reveal>
          <div className="grid gap-6">
            <Reveal delay={120}>
              <ProjectCard project={projects[1]} navigate={navigate} />
            </Reveal>
            <Reveal delay={240}>
              <ProjectCard project={projects[2]} navigate={navigate} />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  navigate,
}: {
  project: (typeof projects)[number];
  navigate: (path: RoutePath) => void;
}) {
  return (
    <button
      onClick={() => navigate('/projects')}
      className="group relative block h-full w-full overflow-hidden rounded-xl text-left"
    >
      <div className={`overflow-hidden ${project.large ? 'h-[300px] sm:h-[440px]' : 'h-[200px] sm:h-[212px]'}`}>
        <img
          src={project.image}
          alt={project.alt}
          className="h-full w-full object-cover transition-transform duration-500 ease-smooth group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <span className="text-xs font-semibold uppercase tracking-wider text-sky-400">
          {project.category}
        </span>
        <h3 className="mt-2 text-xl font-bold text-white">{project.title}</h3>
        <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-white/90 transition-colors group-hover:text-sky-400">
          View Project
          <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </button>
  );
}
