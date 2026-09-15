import type { ReactNode } from 'react';
import Container from './Container';

interface SectionProps {
  children: ReactNode;
  className?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  id?: string;
}

export default function Section({
  children,
  className = '',
  eyebrow,
  title,
  description,
  id,
}: SectionProps) {
  return (
    <section id={id} className={`py-section sm:py-section-sm lg:py-section ${className}`}>
      <Container>
        {(eyebrow || title || description) && (
          <header className="mb-10 max-w-2xl">
            {eyebrow && (
              <span className="inline-block text-sm font-semibold uppercase tracking-wider text-sky-600">
                {eyebrow}
              </span>
            )}
            {title && (
              <h2 className="mt-2 text-3xl font-bold leading-tight text-navy-800 sm:text-4xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 text-lg leading-relaxed text-ink-muted">{description}</p>
            )}
          </header>
        )}
        {children}
      </Container>
    </section>
  );
}
