'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import content from '@/lib/content.json';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { logoText, links, ctaLabel } = content.navigation;

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <Image
                src="/resources/logo.jpg"
                alt={logoText}
                width={120}
                height={32}
                className="h-8 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {links.map((link, idx) => (
                <Link 
                  key={idx} 
                  href={link.href}
                  className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <Link 
              href="/signup" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md text-sm font-medium transition-all"
            >
              {ctaLabel}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground/80 hover:text-foreground p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-surface border-b border-border px-4 pt-2 pb-4 space-y-1">
          {links.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground/80 hover:text-foreground hover:bg-background transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/signup"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center mt-4 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md text-base font-medium transition-colors"
          >
            {ctaLabel}
          </Link>
        </div>
      )}
    </nav>
  );
}
