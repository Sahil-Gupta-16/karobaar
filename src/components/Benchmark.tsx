'use client';
import { Check, X } from 'lucide-react';
import content from '@/lib/content.json';
import { cn } from '@/lib/utils';

export function Benchmark() {
  const { kicker, headline, competitors, rows } = content.benchmark;

  return (
    <section className="py-24 bg-surface/20 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs font-mono text-accent uppercase tracking-widest mb-4">{kicker}</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">{headline}</h2>
        </div>

        <div className="overflow-x-auto pb-8">
          <div className="min-w-[800px] border border-border rounded-2xl bg-surface/30 overflow-hidden relative shadow-2xl">
            {/* Header Row */}
            <div className="grid grid-cols-6 border-b border-border bg-background p-4 relative z-10">
              <div className="col-span-2 font-medium text-foreground/70 flex items-center px-4">Feature</div>
              {competitors.map((comp, idx) => (
                <div key={idx} className={cn(
                  "text-center py-2 rounded-lg font-semibold transition-all duration-300",
                  comp === "Karobaar" ? "text-accent bg-accent/10 border border-accent/20 shadow-[0_0_20px_rgba(184,115,51,0.1)] text-lg" : "text-foreground"
                )}>
                  {comp}
                </div>
              ))}
            </div>
            
            {/* Body Rows */}
            <div className="divide-y divide-border/50 relative z-10 bg-background/50">
              {rows.map((row, idx) => (
                <div key={idx} className="grid grid-cols-6 p-4 items-center hover:bg-surface/50 transition-colors">
                  <div className="col-span-2 font-medium text-foreground/90 px-4">{row.feature}</div>
                  {competitors.map((comp, cIdx) => {
                    const hasFeature = row[comp as keyof typeof row] as boolean;
                    return (
                      <div key={cIdx} className={cn(
                        "flex justify-center py-3 rounded-lg mx-2 transition-colors",
                        comp === "Karobaar" ? "bg-accent/5" : ""
                      )}>
                        {hasFeature ? (
                          <Check className={cn("w-5 h-5", comp === "Karobaar" ? "text-accent drop-shadow-[0_0_8px_rgba(184,115,51,0.5)]" : "text-foreground/50")} />
                        ) : (
                          <X className="w-5 h-5 text-red-500/30" />
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
