import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
}

export default function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <button
      onClick={() => onOpen(project)}
      className="group relative block h-full w-full overflow-hidden rounded-xl text-left"
    >
      <div className="h-[260px] overflow-hidden sm:h-[320px]">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 ease-smooth group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <span className="text-xs font-semibold uppercase tracking-wider text-sky-400">
          {project.category}
        </span>
        <h3 className="mt-2 text-lg font-bold text-white sm:text-xl">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-navy-100">
          {project.description}
        </p>
        <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-white/90 transition-colors group-hover:text-sky-400">
          View Project
          <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </button>
  );
}
