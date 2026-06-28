"use client";

import { motion } from "framer-motion"
import { Check, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface BenefitProps {
  text: string
  checked: boolean
}

const Benefit = ({ text, checked }: BenefitProps) => {
  return (
    <div className="flex items-center gap-3">
      {checked ? (
        <span className="grid size-4 place-content-center rounded-full bg-primary text-sm text-primary-foreground">
          <Check className="size-2.5 stroke-[3px]" />
        </span>
      ) : (
        <span className="grid size-4 place-content-center rounded-full bg-foreground/10 text-sm text-foreground/40">
          <X className="size-2.5 stroke-[3px]" />
        </span>
      )}
      <span className="text-sm text-foreground/80">{text}</span>
    </div>
  )
}

interface PricingCardProps {
  tier: string
  price: string
  bestFor: string
  CTA: string
  benefits: Array<{ text: string; checked: boolean }>
  className?: string
}

export const PricingCard = ({
  tier,
  price,
  bestFor,
  CTA,
  benefits,
  className,
}: PricingCardProps) => {
  const isPro = tier === "Pro";
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
          "relative h-full w-full overflow-hidden border p-6 transition-all duration-300",
          isPro 
            ? "border-primary bg-gradient-to-br from-primary/5 to-card/95 shadow-md" 
            : "border-border bg-gradient-to-br from-card/50 to-card/95 shadow-sm",
          className,
        )}
      >
        {isPro && (
          <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-[10px] font-bold px-3 py-1 rounded-bl-lg tracking-wider">
            MOST POPULAR
          </div>
        )}
        
        <div className="flex flex-col items-center border-b pb-6 border-border">
          <span className="mb-4 inline-block text-foreground font-semibold uppercase tracking-wider text-xs">
            {tier}
          </span>
          <span className="mb-2 inline-block text-4xl font-bold text-foreground">
            {price}
          </span>
          <span className="bg-gradient-to-r from-foreground to-foreground/50 bg-clip-text text-center text-transparent font-medium text-sm">
            {bestFor}
          </span>
        </div>
        
        <div className="space-y-4 py-8">
          {benefits.map((benefit, index) => (
            <Benefit key={index} {...benefit} />
          ))}
        </div>
        
        <Button
          className="w-full font-medium transition-all duration-200"
          variant={isPro ? "default" : "outline"}
        >
          {CTA}
        </Button>
      </Card>
    </motion.div>
  )
}
