import type { ReactNode } from 'react';
import { cn } from '../lib/cn';

type HeroSectionProps = {
  children: ReactNode;
  className?: string;
  glow?: boolean;
};

export function HeroSection({ children, className, glow = true }: HeroSectionProps) {
  return (
    <section className={cn('relative bg-black text-white overflow-hidden', className)}>
      {glow && (
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none" aria-hidden="true">
          <div className="absolute -top-24 -left-24 w-[32rem] h-[32rem] bg-white rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-[32rem] h-[32rem] bg-white rounded-full blur-3xl" />
        </div>
      )}
      {children}
    </section>
  );
}
