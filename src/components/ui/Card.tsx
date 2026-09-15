import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <div
      className={`rounded-xl border border-border bg-white p-6 shadow-card ${
        hover ? 'transition-all duration-200 ease-smooth hover:-translate-y-0.5 hover:shadow-card-hover' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
