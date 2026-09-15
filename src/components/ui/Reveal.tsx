import type { ReactNode, CSSProperties } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'li' | 'span';
  style?: CSSProperties;
}

export default function Reveal({
  children,
  delay = 0,
  className = '',
  as: Tag = 'div',
  style,
}: RevealProps) {
  const { ref, visible } = useScrollReveal();

  return (
    <Tag
      ref={ref as never}
      className={`transition-all duration-700 ease-smooth ${className} ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </Tag>
  );
}
