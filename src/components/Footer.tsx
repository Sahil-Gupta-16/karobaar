import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, MessageCircle, Mail } from "lucide-react";
import content from "@/lib/content.json";

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.6 1.637-1.35 3.37-1.35 3.601 0 4.267 2.37 4.267 5.455v6.786zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.082.814-.259.814-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.151-1.305.197-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

export function Footer() {
  const { finalCta, footer } = content;

  return (
    <footer className="border-t border-border">
      {/* Final CTA Banner */}
      <div className="bg-surface border-b border-border py-20 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-foreground/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            {finalCta.headline}
          </h2>
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
          {/* Brand Info (Left Side) */}
          <div className="space-y-4 max-w-sm">
            <Link href="/" className="inline-block hover:opacity-90 transition-opacity">
              <Image
                src="/resources/logok.png"
                alt={content.navigation.logoText}
                width={150}
                height={40}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-foreground/70 text-sm leading-relaxed">
              Your business is your life’s work. We just built a beautiful place to house it.
            </p>
            {/* Social Icons inside Column 1 */}
            {footer.socials && (
              <div className="flex space-x-4 pt-2">
                {footer.socials.twitter && (
                  <Link
                    href={footer.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/50 hover:text-accent transition-colors"
                    aria-label="Twitter"
                  >
                    <TwitterIcon className="w-5 h-5" />
                  </Link>
                )}
                {footer.socials.linkedin && (
                  <Link
                    href={footer.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/50 hover:text-accent transition-colors"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon className="w-5 h-5" />
                  </Link>
                )}
                {footer.socials.github && (
                  <Link
                    href={footer.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/50 hover:text-accent transition-colors"
                    aria-label="GitHub"
                  >
                    <GithubIcon className="w-5 h-5" />
                  </Link>
                )}
              </div>
            )}
          </div>

          {/* Links (Right Side) */}
          <div className="flex flex-col sm:flex-row gap-12 md:gap-24">
            {/* Product Navigation */}
            <div>
              <h4 className="text-sm font-bold text-foreground tracking-wider uppercase mb-4">
                Product
              </h4>
              <ul className="space-y-3">
                {content.navigation.links.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="text-foreground/70 hover:text-accent text-sm transition-colors font-medium"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-bold text-foreground tracking-wider uppercase mb-4">
                Contact
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-accent shrink-0" />
                  <a
                    href="tel:+918303807051"
                    className="text-foreground/70 hover:text-accent text-sm transition-colors"
                  >
                    +91 83038 07051
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <MessageCircle className="w-4 h-4 text-green-500 shrink-0" />
                  <a
                    href="https://wa.me/918303807051"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/70 hover:text-green-500 text-sm font-semibold transition-colors"
                  >
                    WhatsApp Support
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-accent shrink-0" />
                  <a
                    href="mailto:gandhivatechnologies@gmail.com"
                    className="text-foreground/70 hover:text-accent text-sm transition-colors break-all"
                  >
                    gandhivatechnologies@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Accent Bar */}
        <div className="border-t border-border pt-8 mt-8 flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-foreground/50 text-xs">
            © 2026 Gandhiva Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
