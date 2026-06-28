"use client"

import { useState } from "react"

import { X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface Testimonial {
  image: string
  name: string
  username: string
  text: string
  social: string
}

interface TestimonialsProps {
  testimonials: Testimonial[]
  className?: string
  title?: string
  description?: string
  maxDisplayed?: number
}

export function Testimonials({
  testimonials,
  className,
  title = "Read what people are saying",
  description = "Dummy feedback from virtual customers using our component library.",
  maxDisplayed = 6,
}: TestimonialsProps) {
  const [showAll, setShowAll] = useState(false)

  const openInNewTab = (url: string) => {
    window.open(url, "_blank")?.focus()
  }

  return (
    <div className={className}>
      <div className="flex flex-col items-center justify-center pt-5">
        <div className="flex flex-col gap-5 mb-8">
          <h2 className="text-center text-4xl font-medium tracking-tight">{title}</h2>
          <p className="text-center text-muted-foreground">
            {description.split("<br />").map((line, i) => (
              <span key={i}>
                {line}
                {i !== description.split("<br />").length - 1 && <br />}
              </span>
            ))}
          </p>
        </div>
      </div>

      <div className="relative">
        <div
          className={cn(
            "flex justify-center items-center gap-5 flex-wrap",
            !showAll &&
              testimonials.length > maxDisplayed &&
              "max-h-[720px] overflow-hidden",
          )}
        >
          {testimonials
            .slice(0, showAll ? undefined : maxDisplayed)
            .map((testimonial, index) => (
              <Card
                key={index}
                className="w-80 h-auto p-5 relative bg-card border-border shadow-md"
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 text-accent flex items-center justify-center font-bold text-lg border border-accent/30">
                    {testimonial.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()}
                  </div>
                  <div className="flex flex-col pl-4">
                    <span className="font-semibold text-base text-foreground">
                      {testimonial.name}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {testimonial.username}
                    </span>
                  </div>
                </div>
                <div className="mt-5 mb-5">
                  <p className="text-foreground/80 font-medium leading-relaxed">
                    {testimonial.text}
                  </p>
                </div>
                <button
                  onClick={() => openInNewTab(testimonial.social)}
                  className="absolute top-4 right-4 text-foreground/40 hover:text-accent transition-colors"
                  aria-label={`Open ${testimonial.name}'s profile`}
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              </Card>
            ))}
        </div>

        {testimonials.length > maxDisplayed && !showAll && (
          <>
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background via-background/80 to-transparent z-10" />
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
              <Button variant="secondary" onClick={() => setShowAll(true)}>
                Load More
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
