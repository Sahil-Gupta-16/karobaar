import { PricingCard } from "@/components/ui/dark-gradient-pricing"
import content from "@/lib/content.json"

function PricingDemo() {
  const { kicker, headline, trialNote, tiers } = content.pricing;

  return (
    <section className="relative overflow-hidden bg-background text-foreground py-20 border-t border-border">
      <div className="relative z-10 mx-auto max-w-5xl px-4 md:px-8">
        <div className="mb-12 space-y-3">
          <p className="text-center text-xs font-mono text-accent uppercase tracking-widest mb-4">{kicker}</p>
          <h2 className="text-center text-3xl font-semibold leading-tight sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
            {headline}
          </h2>
          <p className="text-center text-base text-muted-foreground md:text-lg">
            {trialNote}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {tiers.map((tier, idx) => (
            <PricingCard
              key={idx}
              tier={tier.name}
              price={tier.price + (tier.interval || "")}
              bestFor={tier.for}
              CTA={tier.isPopular ? "14-day free trial" : (tier.name === "Elite" ? "Contact us" : "Start free trial")}
              benefits={tier.benefits || []}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export { PricingDemo }
