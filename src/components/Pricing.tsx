'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import content from '@/lib/content.json';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

export function Pricing() {
  const { kicker, headline, trialNote, tiers } = content.pricing;

  return (
    <section className="py-24" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs font-mono text-accent uppercase tracking-widest mb-4">{kicker}</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">{headline}</h2>
          <p className="text-foreground/60">{trialNote}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className={cn(
                "rounded-2xl border p-8 flex flex-col relative overflow-hidden",
                tier.isPopular ? "border-accent bg-accent/5 shadow-[0_0_40px_rgba(245,158,11,0.1)] scale-[1.02]" : "border-border bg-surface"
              )}
            >
              {tier.isPopular && (
                <div className="absolute top-0 right-0 bg-accent text-background text-xs font-bold px-4 py-1.5 rounded-bl-lg">
                  RECOMMENDED
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
              <div className="flex items-end gap-1 mb-6">
                <span className="text-4xl font-bold">{tier.price}</span>
                <span className="text-foreground/60 mb-1">{tier.interval}</span>
              </div>
              <p className="text-foreground/80 mb-6">{tier.for}</p>
              
              {tier.benefits && (
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className={cn("w-4 h-4 mt-0.5 shrink-0", benefit.highlight ? "text-accent" : benefit.checked ? "text-foreground/50" : "text-foreground/20")} />
                      <span className={cn("text-sm", benefit.highlight ? "text-accent font-bold" : benefit.checked ? "text-foreground/80" : "text-foreground/40")}>{benefit.text}</span>
                    </li>
                  ))}
                </ul>
              )}
              
              <Link 
                href="/signup"
                className={cn(
                  "w-full py-3 px-4 rounded-md text-center font-medium transition-colors",
                  tier.isPopular 
                    ? "bg-accent text-background hover:bg-accent-hover" 
                    : "bg-surface hover:bg-surface/80 border border-border text-foreground"
                )}
              >
                Start free trial
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
