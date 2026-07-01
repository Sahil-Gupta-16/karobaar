"use client";
import { Check, X } from "lucide-react";
import content from "@/lib/content.json";
import { cn } from "@/lib/utils";

export function Benchmark() {
  const { kicker, headline, competitors, rows } = content.benchmark;

  return (
    <section className="py-44 bg-surface/20 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-xs font-mono text-accent uppercase tracking-widest mb-4">{kicker}</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">{headline}</h2>
        </div>

        <div className="overflow-x-auto pb-8">
          <div className="min-w-[800px] border border-border/60 rounded-2xl bg-surface/30 overflow-hidden relative shadow-2xl">
            {/* Header Row */}
            <div className="grid grid-cols-6 border-b border-border/80 bg-background/80 backdrop-blur p-4 relative z-10">
              <div className="col-span-2 font-semibold text-foreground/80 flex items-center px-6 text-sm uppercase tracking-wider">
                Feature Comparison
              </div>
              {competitors.map((comp, idx) => {
                const isKarobaar = comp === "Karobaar";
                return (
                  <div
                    key={idx}
                    className={cn(
                      "text-center py-3 rounded-lg font-bold transition-all duration-300 text-sm tracking-wide",
                      isKarobaar
                        ? "text-accent bg-accent/10 border border-accent/20 shadow-[0_0_20px_rgba(184,115,51,0.15)] text-base uppercase"
                        : "text-foreground/70",
                    )}
                  >
                    {comp}
                  </div>
                );
              })}
            </div>

            {/* Body Rows */}
            <div className="divide-y divide-border/30 relative z-10 bg-background/40">
              {rows.map((row, rIdx) => {
                const isLastRow = rIdx === rows.length - 1;
                return (
                  <div
                    key={rIdx}
                    className="grid grid-cols-6 p-4 items-center hover:bg-surface/40 transition-colors"
                  >
                    <div className="col-span-2 font-semibold text-foreground/90 px-6 text-base">
                      {row.feature}
                    </div>
                    {competitors.map((comp, cIdx) => {
                      const hasFeature = row[comp as keyof typeof row] as boolean;
                      const isKarobaar = comp === "Karobaar";
                      return (
                        <div
                          key={cIdx}
                          className={cn(
                            "flex justify-center py-3 rounded-lg mx-2 transition-colors",
                            isKarobaar ? "bg-accent/[0.04] border-x border-accent/10 py-4" : "",
                            isKarobaar && isLastRow ? "border-b border-accent/10" : "",
                          )}
                        >
                          {hasFeature ? (
                            <span
                              className={cn(
                                "flex items-center justify-center w-7 h-7 rounded-full",
                                isKarobaar
                                  ? "bg-accent/20 text-accent shadow-[0_0_12px_rgba(184,115,51,0.25)]"
                                  : "bg-foreground/5 text-foreground/60",
                              )}
                            >
                              <Check className="w-4 h-4 stroke-[3px]" />
                            </span>
                          ) : (
                            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-red-500/5 text-red-500/40">
                              <X className="w-4 h-4 stroke-[2.5px]" />
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
