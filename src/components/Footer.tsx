import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import content from '@/lib/content.json';

export function Footer() {
  const { finalCta, footer } = content;

  return (
    <footer className="border-t border-border">
      {/* Final CTA Banner */}
      <div className="bg-surface border-b border-border py-20 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-foreground/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">{finalCta.headline}</h2>
          <p className="text-lg text-foreground/70 mb-10">{finalCta.subline}</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <Link 
              href={finalCta.ctaHref}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-md text-base font-semibold shadow-sm transition-all"
            >
              {finalCta.ctaLabel}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <p className="text-sm text-foreground/50">{finalCta.riskReducer}</p>
        </div>
      </div>

      {/* Standard Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-foreground/50 text-sm">{footer.copyright}</p>
          
          <div className="flex items-center gap-6 flex-wrap justify-center">
            {footer.links.map((link, idx) => (
              <Link 
                key={idx}
                href={link.href}
                className="text-sm text-foreground/60 hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
