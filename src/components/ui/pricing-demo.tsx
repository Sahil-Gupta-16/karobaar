"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PricingCard } from "@/components/ui/dark-gradient-pricing";
import content from "@/lib/content.json";
import { cn } from "@/lib/utils";

function PricingDemo() {
  const { kicker, headline, trialNote, tiers } = content.pricing;
  const [isYearly, setIsYearly] = useState(true);

  return (
    <section
      className="relative overflow-hidden bg-background text-foreground py-44 border-t border-border"
      id="pricing"
    >
      <div className="relative z-10 mx-auto max-w-5xl px-4 md:px-8">
        <div className="mb-8 space-y-3">
          <p className="text-center text-xs font-mono text-accent uppercase tracking-widest mb-4">
            {kicker}
          </p>
          <h2 className="text-center text-3xl font-semibold leading-tight sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
            {headline}
          </h2>
          <p className="text-center text-base text-muted-foreground md:text-lg">{trialNote}</p>
        </div>

        {/* Monthly / Yearly Toggle */}
        <div className="flex justify-center items-center gap-4 mb-16 relative z-30">
          <span
            className={cn(
              "text-sm font-semibold transition-colors",
              !isYearly ? "text-foreground" : "text-foreground/50",
            )}
          >
            Monthly
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className="w-12 h-6 rounded-full bg-accent/20 border border-accent/30 p-1 flex items-center transition-colors relative"
            aria-label="Toggle pricing interval"
          >
            <motion.div
              layout
              className="w-4 h-4 rounded-full bg-accent"
              animate={{ x: isYearly ? 22 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          </button>
          <span
            className={cn(
              "text-sm font-semibold transition-colors flex items-center gap-1.5",
              isYearly ? "text-accent" : "text-foreground/50",
            )}
          >
            Yearly{" "}
            <span className="bg-accent/15 border border-accent/30 text-accent text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
              Save 17%
            </span>
          </span>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 items-stretch">
          {tiers.map((tier, idx) => (
            <PricingCard
              key={idx}
              tier={tier.name}
              price={tier.priceMonthly}
              priceMonthly={tier.priceMonthly}
              priceYearly={tier.priceYearly}
              yearlyTotal={tier.yearlyTotal}
              yearlySavings={tier.yearlySavings}
              isYearly={isYearly}
              interval={tier.interval}
              isPopular={tier.isPopular}
              bestFor={tier.for}
              CTA={tier.name === "Enterprise" ? "Contact Us" : "Start 1-month free trial"}
              benefits={tier.benefits || []}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export { PricingDemo };
