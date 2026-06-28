'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import content from '@/lib/content.json';
import { cn } from '@/lib/utils';

export function FAQ() {
  const { kicker, headline, questions } = content.faq;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-surface/20 border-t border-border">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs font-mono text-accent uppercase tracking-widest mb-4">{kicker}</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">{headline}</h2>
        </div>

        <div className="space-y-4">
          {questions.map((q, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="border border-border rounded-lg bg-background overflow-hidden">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="font-medium text-lg">{q.question}</span>
                  <ChevronDown className={cn(
                    "w-5 h-5 text-foreground/50 transition-transform duration-200",
                    isOpen && "rotate-180"
                  )} />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-6 pb-6 text-foreground/70">
                        {q.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
