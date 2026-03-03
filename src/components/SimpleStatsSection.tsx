import { useRef, useEffect, useState } from 'react';
import { Car, Star, Clock, Shield } from 'lucide-react';

const stats = [
  {
    icon: Car,
    rawValue: 500,
    suffix: '+',
    label: 'Cars Detailed',
    description: 'Premium detailing services',
  },
  {
    icon: Star,
    rawValue: 4.9,
    suffix: '',
    decimals: 1,
    label: 'Google Rating',
    description: 'Based on customer reviews',
  },
  {
    icon: Clock,
    rawValue: 5,
    suffix: '+',
    label: 'Years Experience',
    description: 'Professional expertise',
  },
  {
    icon: Shield,
    rawValue: 100,
    suffix: '%',
    label: 'Satisfaction',
    description: 'Customer guarantee',
  },
];

// Animates from 0 → target over ~1.4 s once `active` flips true
function useCountUp(target: number, decimals = 0, active: boolean) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!active) return;

    const duration = 1400;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(parseFloat((eased * target).toFixed(decimals)));
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [active, target, decimals]);

  return value;
}

function StatCard({ stat, active }: { stat: typeof stats[0]; active: boolean }) {
  const count = useCountUp(stat.rawValue, stat.decimals ?? 0, active);

  return (
    <div className="bg-card border border-border rounded-xl p-6 text-center hover:border-xera-red/50 transition-all duration-300 hover:shadow-lg hover:shadow-xera-red/10">
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-xera-red/10 mb-4">
        <stat.icon className="w-7 h-7 text-xera-red" />
      </div>
      <div className="text-3xl md:text-4xl font-bold text-foreground mb-1 tabular-nums">
        {count.toLocaleString('en-IN', { minimumFractionDigits: stat.decimals ?? 0, maximumFractionDigits: stat.decimals ?? 0 })}
        {stat.suffix}
      </div>
      <div className="text-sm font-semibold text-xera-red mb-1">{stat.label}</div>
      <div className="text-xs text-muted-foreground">{stat.description}</div>
    </div>
  );
}

const SimpleStatsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="py-16 bg-gradient-to-b from-background to-xera-darkgray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by <span className="text-xera-red">Kerala's</span> Car Enthusiasts
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our commitment to excellence has made us the preferred choice for premium auto detailing
            in Ottapalam and surrounding areas.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} active={hasAnimated} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimpleStatsSection;
