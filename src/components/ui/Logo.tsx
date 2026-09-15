interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light';
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <img
      src="/assets/images/4a487554-59cf-4077-bf24-7186df01e077.png"
      alt="IBNU DANNA INTERNATIONAL LIMITED"
      className={`h-auto w-full object-contain ${className}`}
    />
  );
}
