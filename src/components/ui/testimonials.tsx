"use client";

import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

interface Testimonial {
  image: string;
  name: string;
  username: string;
  text: string;
  social: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
  className?: string;
  title?: string;
  description?: string;
}

export function Testimonials({
  testimonials,
  className,
  title = "Read what people are saying",
  description = "Dummy feedback from virtual customers using our component library.",
}: TestimonialsProps) {
  const vikasTestimonial = testimonials.find((t) => t.name.includes("Vikas")) || testimonials[2];
  const aryanTestimonial = testimonials.find((t) => t.name.includes("Aryan")) || testimonials[1];
  const ankitTestimonial = testimonials.find((t) => t.name.includes("Ankit")) || testimonials[0];

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .substring(0, 2)
      .toUpperCase();
  };

  return (
    <div className={cn("py-44", className)}>
      <div className="flex flex-col items-center justify-center mb-16">
        <div className="flex flex-col gap-4 mb-8 text-center max-w-2xl">
          <p className="text-xs font-mono text-accent uppercase tracking-widest">TESTIMONIALS</p>
          <h2 className="text-center text-4xl md:text-5xl font-bold tracking-tight">{title}</h2>
          <p className="text-center text-muted-foreground text-lg">{description}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Symmetric 3-column row with identical card heights via items-stretch */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* Card 1: VikasRaj (GST-Billing) */}
          {vikasTestimonial && (
            <Card className="p-6 md:p-8 flex flex-col justify-between border border-border/80 bg-gradient-to-br from-card/40 to-card/95 shadow-xl relative overflow-hidden group hover:border-accent/25 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/[0.02] rounded-full blur-2xl" />
              <div>
                <p className="text-foreground/90 font-medium leading-relaxed text-sm md:text-base italic">
                  &ldquo;{vikasTestimonial.text}&rdquo;
                </p>
              </div>

              <div className="flex items-center mt-6">
                <div className="flex-shrink-0 w-11 h-11 rounded-full bg-accent/15 text-accent flex items-center justify-center font-bold text-base border border-accent/20">
                  {getInitials(vikasTestimonial.name)}
                </div>
                <div className="flex flex-col pl-3">
                  <span className="font-semibold text-sm md:text-base text-foreground">
                    {vikasTestimonial.name}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {vikasTestimonial.username} @{" "}
                    <span className="text-accent/80 font-semibold">{vikasTestimonial.social}</span>
                  </span>
                </div>
              </div>
            </Card>
          )}

          {/* Card 2: Aryan Bhosle (WhatsApp Leads) */}
          {aryanTestimonial && (
            <Card className="p-6 md:p-8 flex flex-col justify-between border border-border/80 bg-gradient-to-br from-card/40 to-card/95 shadow-xl relative overflow-hidden group hover:border-accent/25 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/[0.02] rounded-full blur-2xl" />
              <div>
                <p className="text-foreground/90 font-medium leading-relaxed text-sm md:text-base italic">
                  &ldquo;{aryanTestimonial.text}&rdquo;
                </p>
              </div>

              <div className="flex items-center mt-6">
                <div className="flex-shrink-0 w-11 h-11 rounded-full bg-accent/15 text-accent flex items-center justify-center font-bold text-base border border-accent/20">
                  {getInitials(aryanTestimonial.name)}
                </div>
                <div className="flex flex-col pl-3">
                  <span className="font-semibold text-sm md:text-base text-foreground">
                    {aryanTestimonial.name}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {aryanTestimonial.username} @{" "}
                    <span className="text-accent/80 font-semibold">{aryanTestimonial.social}</span>
                  </span>
                </div>
              </div>
            </Card>
          )}

          {/* Card 3: Ankit (Media Production) */}
          {ankitTestimonial && (
            <Card className="p-6 md:p-8 flex flex-col justify-between border border-border/80 bg-gradient-to-br from-card/40 to-card/95 shadow-xl relative overflow-hidden group hover:border-accent/25 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/[0.02] rounded-full blur-2xl" />
              <div>
                <p className="text-foreground/90 font-medium leading-relaxed text-sm md:text-base italic">
                  &ldquo;{ankitTestimonial.text}&rdquo;
                </p>
              </div>

              <div className="flex items-center mt-6">
                <div className="flex-shrink-0 w-11 h-11 rounded-full bg-accent/15 text-accent flex items-center justify-center font-bold text-base border border-accent/20">
                  {getInitials(ankitTestimonial.name)}
                </div>
                <div className="flex flex-col pl-3">
                  <span className="font-semibold text-sm md:text-base text-foreground">
                    {ankitTestimonial.name}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {ankitTestimonial.username} @{" "}
                    <span className="text-accent/80 font-semibold">{ankitTestimonial.social}</span>
                  </span>
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
