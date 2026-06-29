"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play, CheckCircle2, FileText, Users, BarChart3 } from "lucide-react";
import content from "@/lib/content.json";
import SoftAurora from "./SoftAurora";
import { useState, useEffect } from "react";

const HeroSequence = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative rounded-2xl border border-border bg-surface/50 p-2 shadow-2xl backdrop-blur-md w-full">
      <div className="aspect-[4/3] lg:aspect-video w-full rounded-xl overflow-hidden bg-background border border-border flex flex-col relative">
        {/* Mockup Header */}
        <div className="absolute top-0 left-0 w-full h-10 bg-surface border-b border-border flex items-center px-4 gap-2 z-20">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          <div className="ml-4 flex gap-2">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className={`h-1.5 w-8 rounded-full transition-colors duration-500 ${step === i ? "bg-accent" : "bg-border"}`}
              />
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 pt-10 relative bg-background/50">
          <AnimatePresence mode="wait">
            {/* STEP 0: PIPELINE */}
            {step === 0 && (
              <motion.div
                key="step0"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full p-4 flex flex-col"
              >
                <div className="text-sm font-bold text-foreground mb-3 flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-accent" /> Sales Pipeline
                </div>
                <div className="flex gap-3 h-full">
                  <div className="flex-1 bg-surface/30 rounded border border-border p-2">
                    <div className="text-xs font-semibold text-foreground/70 mb-2">Negotiation</div>
                    {/* Empty placeholder to show it moved */}
                    <div className="w-full h-16 border border-dashed border-border/50 rounded" />
                  </div>
                  <div className="flex-1 bg-surface/30 rounded border border-border p-2 relative">
                    <div className="text-xs font-semibold text-green-500 mb-2">Closed Won</div>
                    <motion.div
                      initial={{ y: -50, scale: 1.1, opacity: 0 }}
                      animate={{ y: 0, scale: 1, opacity: 1 }}
                      transition={{ type: "spring", bounce: 0.4, delay: 0.2 }}
                      className="w-full bg-background border border-green-500/50 border-l-2 border-l-green-500 rounded p-2 shadow-lg"
                    >
                      <div className="text-xs font-bold text-foreground">Stark Industries</div>
                      <div className="text-[10px] text-foreground/60 mt-1">
                        ₹12,50,000 • Enterprise
                      </div>
                    </motion.div>
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1 z-30"
                >
                  <CheckCircle2 className="w-3 h-3" /> Deal Closed
                </motion.div>
              </motion.div>
            )}

            {/* STEP 1: INVOICING */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full p-4 flex flex-col items-center justify-center relative"
              >
                <div className="absolute top-4 left-4 text-sm font-bold text-foreground flex items-center gap-2">
                  <FileText className="w-4 h-4 text-accent" /> GST Billing
                </div>

                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="w-[85%] bg-surface border border-border rounded-lg shadow-xl p-4 mt-6"
                >
                  <div className="flex justify-between border-b border-border pb-2 mb-2">
                    <div>
                      <div className="text-[10px] text-foreground/50 font-bold uppercase">
                        Tax Invoice
                      </div>
                      <div className="text-xs font-bold text-foreground">INV-2026</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] text-foreground/50 uppercase">Billed To</div>
                      <div className="text-xs font-bold text-foreground">Stark Industries</div>
                    </div>
                  </div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-foreground/80">Enterprise License</span>
                    <span className="font-semibold text-foreground">₹12,50,000</span>
                  </div>
                  <div className="flex justify-between text-[10px] mb-2 text-foreground/60">
                    <span>IGST (18%)</span>
                    <span>₹2,25,000</span>
                  </div>
                  <div className="flex justify-between text-xs font-bold border-t border-border pt-2 text-accent">
                    <span>Total Amount</span>
                    <span>₹14,75,000</span>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ scale: 2, opacity: 0, rotate: -20 }}
                  animate={{ scale: 1, opacity: 1, rotate: -10 }}
                  transition={{ delay: 0.8, type: "spring" }}
                  className="absolute z-30 border-2 border-green-500 text-green-500 font-black uppercase text-xl px-4 py-1 rounded shadow-lg bg-background/80 backdrop-blur"
                >
                  Paid
                </motion.div>
              </motion.div>
            )}

            {/* STEP 2: PAYROLL */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full p-4 flex flex-col"
              >
                <div className="text-sm font-bold text-foreground mb-3 flex items-center gap-2">
                  <Users className="w-4 h-4 text-accent" /> HR & Payroll
                </div>
                <div className="flex gap-4 mb-4">
                  <div className="flex-1 bg-surface border border-border rounded-lg p-3">
                    <div className="text-[10px] text-foreground/50 uppercase font-bold">
                      Active Employees
                    </div>
                    <div className="text-2xl font-bold text-foreground">54</div>
                  </div>
                  <div className="flex-1 bg-surface border border-border rounded-lg p-3">
                    <div className="text-[10px] text-foreground/50 uppercase font-bold">
                      Payroll Processed
                    </div>
                    <div className="text-2xl font-bold text-foreground">₹18.4L</div>
                  </div>
                </div>
                <div className="space-y-2">
                  {[
                    { name: "Ankit", role: "Developer", amt: "₹85,000" },
                    { name: "Aryan", role: "Designer", amt: "₹75,000" },
                  ].map((emp, i) => (
                    <motion.div
                      key={i}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex justify-between items-center bg-surface/50 border border-border p-2 rounded"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-accent/20 text-accent text-[10px] flex items-center justify-center font-bold">
                          {emp.name[0]}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-foreground">{emp.name}</div>
                          <div className="text-[10px] text-foreground/60">{emp.role}</div>
                        </div>
                      </div>
                      <div className="text-xs font-bold text-green-500 bg-green-500/10 px-2 py-0.5 rounded">
                        {emp.amt}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 3: ANALYTICS */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full p-4 flex flex-col relative"
              >
                <div className="text-sm font-bold text-foreground mb-4 flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-accent" /> Business Overview
                </div>

                <div className="flex gap-4">
                  <div className="flex-[2] bg-surface/50 border border-border rounded-lg p-3 h-32 relative overflow-hidden flex flex-col justify-between">
                    <div>
                      <div className="text-[10px] text-foreground/50 uppercase font-bold">
                        Total Revenue
                      </div>
                      <div className="text-xl font-bold text-foreground">₹42.8L</div>
                    </div>
                    {/* Animated Bar Chart */}
                    <div className="flex items-end gap-1 h-16 w-full">
                      {[30, 45, 25, 60, 40, 75, 55, 100].map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: "0%" }}
                          animate={{ height: `${h}%` }}
                          transition={{ duration: 1, delay: 0.2 + i * 0.05, ease: "easeOut" }}
                          className="flex-1 bg-accent/80 rounded-t-sm"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col gap-3">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.6 }}
                      className="bg-surface/50 border border-border rounded-lg p-3 flex-1 flex flex-col justify-center"
                    >
                      <div className="text-[10px] text-foreground/50 uppercase font-bold">
                        Win Rate
                      </div>
                      <div className="text-2xl font-bold text-green-500">68%</div>
                    </motion.div>
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.7 }}
                      className="bg-surface/50 border border-border rounded-lg p-3 flex-1 flex flex-col justify-center"
                    >
                      <div className="text-[10px] text-foreground/50 uppercase font-bold">
                        Active Deals
                      </div>
                      <div className="text-2xl font-bold text-foreground">124</div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export function Hero() {
  const { kicker, headline, subline, ctaPrimary, ctaSecondary } = content.hero;

  return (
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden min-h-[90vh] flex items-center border-b border-border">
      {/* Background SoftAurora */}
      <div className="absolute inset-0 z-0">
        <SoftAurora
          speed={0.5}
          scale={1.2}
          brightness={1.2}
          color1="#4f4f5a"
          color2="#08080a"
          enableMouseInteraction={true}
          mouseInfluence={0.5}
          bandSpread={1.5}
        />
        {/* Fade out gradient so it blends nicely */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
      </div>

      <div className="w-full px-6 md:px-12 lg:px-20 2xl:px-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Header and Text */}
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6 px-4 py-1.5 rounded-full border border-border bg-background/50 backdrop-blur-md shadow-sm"
            >
              <span className="text-xs font-mono text-foreground/80 uppercase tracking-widest font-bold">
                {kicker}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6"
            >
              {headline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-foreground/80 mb-10 font-medium"
            >
              {subline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <Link
                href={ctaPrimary.href}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3.5 rounded-md text-base font-semibold shadow-sm transition-all"
              >
                {ctaPrimary.label}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={ctaSecondary.href}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-background/80 backdrop-blur-md hover:bg-surface border border-border text-foreground px-8 py-3.5 rounded-md text-base font-bold transition-colors shadow-sm"
              >
                <Play className="w-4 h-4 fill-current" />
                {ctaSecondary.label}
              </Link>
            </motion.div>
          </div>

          {/* Right: Sequence Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative w-full"
          >
            <HeroSequence />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
