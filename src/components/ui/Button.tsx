import type { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  as?: 'button';
}

interface LinkButtonProps {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  href: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

const variantClasses: Record<Variant, string> = {
  primary: 'bg-navy-800 text-white hover:bg-navy-900 focus-visible:bg-navy-900',
  secondary: 'bg-sky-500 text-white hover:bg-sky-600 focus-visible:bg-sky-600',
  outline: 'border border-border bg-white text-navy-800 hover:border-sky-400 hover:text-sky-600',
  ghost: 'text-navy-800 hover:bg-navy-50 hover:text-navy-900',
};

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors duration-200 ease-smooth disabled:opacity-50 disabled:cursor-not-allowed';

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function LinkButton({
  variant = 'primary',
  size = 'md',
  children,
  href,
  className = '',
  onClick,
}: LinkButtonProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </a>
  );
}
