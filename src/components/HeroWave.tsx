import { cn } from '../lib/cn';

type HeroWaveProps = {
  fill?: string;
  className?: string;
};

export function HeroWave({ fill = '#F8F9FA', className }: HeroWaveProps) {
  const heightClass = 'h-16 md:h-20';

  return (
    <>
      {/* Reserve vertical space so the wave never overlaps hero content (varies by browser). */}
      <div className={heightClass} aria-hidden="true" />

      <div className={cn('absolute bottom-0 left-0 right-0 pointer-events-none', className)} aria-hidden="true">
        <svg
          viewBox="0 0 1440 120"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className={cn('block w-full', heightClass)}
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill={fill}
          />
        </svg>
      </div>
    </>
  );
}
