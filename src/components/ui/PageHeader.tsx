import type { ReactNode } from 'react';
import Container from './Container';

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}

export default function PageHeader({ eyebrow, title, description, children }: PageHeaderProps) {
  return (
    <section className="border-b border-border bg-navy-800">
      <Container>
        <div className="py-16 sm:py-20 lg:py-24">
          {eyebrow && (
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-sky-400">
              {eyebrow}
            </span>
          )}
          <h1 className="mt-3 text-4xl font-bold leading-tight text-white sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-navy-100">
              {description}
            </p>
          )}
          {children}
        </div>
      </Container>
    </section>
  );
}
