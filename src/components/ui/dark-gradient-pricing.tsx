"use client";

import { motion } from "framer-motion"
import { Check, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface BenefitProps {
  text: string
  checked: boolean
  highlight?: boolean
}

const Benefit = ({ text, checked, highlight }: BenefitProps) => {
  return (
    <div className="flex items-center gap-3">
      {checked ? (
        <span className={cn("grid size-4 place-content-center rounded-full text-sm text-primary-foreground shrink-0", highlight ? "bg-accent" : "bg-primary")}>
          <Check className="size-2.5 stroke-[3px]" />
        </span>
      ) : (
        <span className="grid size-4 place-content-center rounded-full bg-foreground/10 text-sm text-foreground/40 shrink-0">
          <X className="size-2.5 stroke-[3px]" />
        </span>
      )}
      <span className={cn("text-sm", highlight ? "text-accent font-bold" : checked ? "text-foreground/80" : "text-foreground/40")}>{text}</span>
    </div>
  )
}

interface PricingCardProps {
  tier: string
  price: string
  interval?: string
  isPopular?: boolean
  bestFor: string
  CTA: string
  benefits: Array<{ text: string; checked: boolean; highlight?: boolean }>
  className?: string
  isYearly?: boolean
  priceMonthly?: string
  priceYearly?: string
  yearlyTotal?: string
  yearlySavings?: string
}

export const PricingCard = ({
  tier,
  price,
  interval = "/mo",
  isPopular,
  bestFor,
  CTA,
  benefits,
  className,
  isYearly,
  priceMonthly,
  priceYearly,
  yearlyTotal,
  yearlySavings,
}: PricingCardProps) => {
  const isPro = isPopular || tier === "Pro" || tier === "Growth";
  return (
    <motion.div
      initial={{ filter: "blur(2px)", opacity: 0, y: 20 }}
      whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="h-full"
    >
      <Card
        className={cn(
          "relative h-full w-full overflow-hidden border p-6 transition-all duration-300 flex flex-col justify-between",
          isPro 
            ? "border-primary bg-gradient-to-br from-primary/5 to-card/95 shadow-md scale-[1.02]" 
            : "border-border bg-gradient-to-br from-card/50 to-card/95 shadow-sm",
          className,
        )}
      >
        {isPro && (
          <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-[10px] font-bold px-4 py-1.5 rounded-bl-lg tracking-wider">
            RECOMMENDED
          </div>
        )}
        
        <div className="flex-1 flex flex-col">
          <div className="flex flex-col items-center border-b pb-6 border-border">
            <span className="mb-4 inline-block text-foreground font-semibold uppercase tracking-wider text-xs">
              {tier}
            </span>
            <div className="mb-2 flex items-baseline gap-1">
              {isYearly && priceMonthly && priceYearly ? (
                <>
                  <span className="text-foreground/40 line-through text-lg font-semibold mr-1">
                    {priceMonthly}
                  </span>
                  <span className="text-4xl font-extrabold text-primary">
                    {priceYearly}
                  </span>
                </>
              ) : (
                <span className="text-4xl font-extrabold text-foreground">
                  {priceMonthly || price}
                </span>
              )}
              <span className="text-foreground/60 text-sm">{interval}</span>
            </div>
            {isYearly && yearlyTotal && (
              <span className="text-[11px] text-primary font-bold mb-4 text-center">
                Billed {yearlyTotal} annually <br /> Save {yearlySavings}/yr
              </span>
            )}
            <span className="bg-gradient-to-r from-foreground to-foreground/50 bg-clip-text text-center text-transparent font-medium text-sm">
              {bestFor}
            </span>
          </div>
          
          <div className="space-y-4 py-8 flex-1">
            {benefits.map((benefit, index) => (
              <Benefit key={index} {...benefit} />
            ))}
          </div>
        </div>
        
        <Button
          className="w-full font-medium transition-all duration-200 mt-auto"
          variant={isPro ? "default" : "outline"}
        >
          {CTA}
        </Button>
      </Card>
    </motion.div>
  )
}
