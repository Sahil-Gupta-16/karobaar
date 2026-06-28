'use client';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import content from '@/lib/content.json';
import LogoLoop from './LogoLoop';

function AnimatedCounter({ from = 0, to, duration = 2 }: { from?: number, to: number, duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!inView) return;
    
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Easing function (easeOutQuart)
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeProgress * (to - from) + from));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [inView, from, to, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

export function MetricsTicker() {
  const { kicker, stats, logos } = content.metrics;

  return (
    <section className="py-16 border-y border-border bg-surface/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-mono text-foreground/50 uppercase tracking-widest mb-10">{kicker}</p>
        
        {logos && logos.length > 0 && (
          <div className="mb-16">
            <LogoLoop
              logos={logos}
              speed={50}
              direction="left"
              logoHeight={32}
              gap={64}
              fadeOut
              scaleOnHover
              fadeOutColor="var(--bg-base)"
            />
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-border">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="flex flex-col items-center justify-center pt-8 md:pt-0 first:pt-0 relative"
            >
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2 flex items-center relative z-10">
                <AnimatedCounter to={parseFloat(stat.value.replace(/,/g, ''))} />
                <span className="text-accent">{stat.suffix}</span>
              </div>
              <p className="text-sm md:text-base text-foreground/70 font-medium relative z-10">{stat.label}</p>
              
              {/* Subtle spotlight glow behind numbers */}
              <div className="absolute inset-0 bg-accent/5 blur-[50px] rounded-full z-0 pointer-events-none scale-50" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
