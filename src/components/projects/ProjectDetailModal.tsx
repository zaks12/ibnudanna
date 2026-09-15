import { useEffect, useState } from 'react';
import { X, MapPin, CircleDot, CheckCircle2 } from 'lucide-react';
import type { Project } from '@/data/projects';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    setActiveImage(0);
  }, [project]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project) return null;

  const gallery = project.detail.gallery.length > 0 ? project.detail.gallery : [project.image];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-navy-900/80 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Project details"
    >
      <div
        className="relative my-8 w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-lg bg-white/90 text-navy-800 shadow-sm transition-colors hover:bg-white hover:text-sky-600"
          aria-label="Close project details"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="relative h-[280px] overflow-hidden sm:h-[400px]">
          <img
            src={gallery[activeImage]}
            alt={project.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-sky-400">
              {project.category}
            </span>
            <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
              {project.title}
            </h2>
          </div>
        </div>

        {gallery.length > 1 && (
          <div className="flex gap-2 px-6 pt-4 sm:px-8">
            {gallery.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className={`h-16 w-20 overflow-hidden rounded-lg border-2 transition-colors ${
                  activeImage === i ? 'border-sky-500' : 'border-border hover:border-sky-300'
                }`}
              >
                <img src={img} alt={`${project.title} — image ${i + 1}`} className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        )}

        <div className="p-6 sm:p-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-lg bg-sky-50 px-4 py-2">
            <CircleDot className="h-4 w-4 text-sky-600" />
            <span className="text-sm font-semibold text-sky-700">{project.detail.status}</span>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-sky-600">
                Overview
              </h3>
              <p className="mt-3 text-base leading-relaxed text-ink-muted">
                {project.detail.overview}
              </p>

              <h3 className="mt-8 text-sm font-semibold uppercase tracking-wider text-sky-600">
                Scope
              </h3>
              <ul className="mt-4 space-y-3">
                {project.detail.scope.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-base text-ink-muted">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-sky-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-1">
              <div className="rounded-xl border border-border bg-cream p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-navy-800">
                  Project Details
                </h3>
                <dl className="mt-4 space-y-4">
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-wider text-ink-muted">
                      Location
                    </dt>
                    <dd className="mt-1 flex items-center gap-2 text-sm font-semibold text-navy-800">
                      <MapPin className="h-4 w-4 text-sky-500" />
                      {project.detail.location}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-wider text-ink-muted">
                      Status
                    </dt>
                    <dd className="mt-1 text-sm font-semibold text-navy-800">
                      {project.detail.status}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-wider text-ink-muted">
                      Category
                    </dt>
                    <dd className="mt-1 text-sm font-semibold text-navy-800">
                      {project.category}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-lg border border-border bg-navy-50/50 p-4">
            <p className="text-xs leading-relaxed text-ink-muted">
              This is a representative demo entry. Project details will be updated with verified
              information when confirmed company projects are added.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
