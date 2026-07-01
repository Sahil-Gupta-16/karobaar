"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ArrowRight,
  CheckCircle2,
  IndianRupee,
  Users,
  MousePointer,
  Search,
  Loader2,
} from "lucide-react";
import content from "@/lib/content.json";

// 1. KANBAN STATE-MACHINE ANIMATION
const KanbanMockup = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setStep(1), 400);
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 5);
    }, 1800);
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="w-full h-56 bg-surface/30 rounded-xl border border-border p-4 flex flex-col justify-between overflow-hidden relative">
      <div className="flex gap-3 h-full">
        {/* Column 1: WhatsApp Ingress */}
        <div className="w-1/3 h-full space-y-2 border-r border-border/30 pr-2">
          <span className="text-[10px] font-mono text-muted-foreground uppercase block">
            WhatsApp
          </span>

          <AnimatePresence>
            {step === 1 && (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className="w-full bg-[#25D366]/10 border border-[#25D366]/30 rounded-lg p-2 flex flex-col gap-1"
              >
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                  <span className="text-[8px] font-bold text-foreground">New Chat</span>
                </div>
                <p className="text-[9px] text-foreground/80 leading-tight">
                  &ldquo;Ready to buy!&rdquo;
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Column 2: Active Pipeline */}
        <div className="w-1/3 h-full space-y-2 border-r border-border/30 px-2 flex flex-col justify-start">
          <span className="text-[10px] font-mono text-muted-foreground uppercase block">
            Pipeline
          </span>

          <AnimatePresence>
            {step === 2 && (
              <motion.div
                initial={{ x: -60, opacity: 0, scale: 0.9 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                exit={{ x: 60, opacity: 0, scale: 0.9 }}
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className="w-full bg-primary/10 rounded-lg border border-primary p-2 flex flex-col gap-1.5 shadow-md relative"
              >
                <div className="flex justify-between items-center">
                  <span className="text-[9px] font-bold">Verma Deal</span>
                  <span className="text-[7px] bg-primary text-primary-foreground px-1 rounded font-mono">
                    Negotiation
                  </span>
                </div>
                <div className="w-full h-1 bg-foreground/20 rounded" />
                {/* Virtual Cursor Dragging */}
                <motion.div
                  animate={{ x: [0, 40, 40], y: [0, 20, 20] }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  className="absolute bottom-1 right-1 text-primary pointer-events-none"
                >
                  <MousePointer className="w-3 h-3 fill-current" />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Column 3: Closed Won */}
        <div className="w-1/3 h-full space-y-2 pl-2">
          <span className="text-[10px] font-mono text-muted-foreground uppercase block">
            Won Deals
          </span>

          <AnimatePresence>
            {step === 3 && (
              <motion.div
                initial={{ x: -60, opacity: 0, scale: 0.9 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className="w-full bg-green-500/10 border border-green-500/20 rounded-lg p-2 flex flex-col gap-1"
              >
                <div className="flex justify-between items-center">
                  <span className="text-[9px] font-bold text-green-500">Won!</span>
                  <span className="text-[8px] bg-green-500/20 text-green-400 px-1 rounded font-mono">
                    Rs.25,000
                  </span>
                </div>
                <div className="w-full h-1 bg-green-500/20 rounded" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="absolute bottom-2 left-4 right-4 bg-background/80 border border-border rounded px-2.5 py-1 text-[9px] text-muted-foreground flex justify-between items-center">
        <span>
          {step === 0 && "Waiting for incoming events..."}
          {step === 1 && "Step 1: Client sends WhatsApp message"}
          {step === 2 && "Step 2: Auto-creates & advances Kanban lead"}
          {step === 3 && "Step 3: Closed Won deals track directly in revenue"}
          {step === 4 && "Success: Lead logged and won without manual input!"}
        </span>
        <CheckCircle2
          className={`w-3.5 h-3.5 ${step === 4 ? "text-green-500" : "text-muted-foreground"}`}
        />
      </div>
    </div>
  );
};

// 2. PROFILE STATE-MACHINE ANIMATION
const ProfileMockup = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setStep(1), 400);
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 5);
    }, 1800);
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="w-full h-56 bg-surface/30 rounded-xl border border-border p-4 flex flex-col justify-between overflow-hidden relative">
      {/* Step 0: Search Interface */}
      {step === 0 && (
        <div className="flex-grow flex flex-col justify-center items-center gap-3">
          <div className="flex items-center gap-2 border border-border rounded-lg bg-background px-3 py-1.5 w-3/4 relative">
            <Search className="w-3.5 h-3.5 text-muted-foreground" />
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "auto" }}
              transition={{ ease: "easeOut", duration: 0.8 }}
              className="text-xs text-foreground font-mono overflow-hidden whitespace-nowrap block"
            >
              Verma Logistics
            </motion.span>
            <motion.div
              animate={{ x: [0, 40, 40], y: [10, 0, 0] }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute -right-2 -bottom-2 text-primary"
            >
              <MousePointer className="w-3.5 h-3.5 fill-current" />
            </motion.div>
          </div>
          <span className="text-[10px] text-muted-foreground font-mono">
            Searching customer ledger...
          </span>
        </div>
      )}

      {/* Step 1-4: Customer Ledger Timeline */}
      {step > 0 && (
        <>
          <div className="flex items-center gap-3 border-b border-border pb-2.5">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center border border-border">
              <Users className="w-4 h-4 text-primary" />
            </div>
            <div>
              <h4 className="text-xs font-semibold">Amit Verma (Verma Logistics)</h4>
              <p className="text-[8px] text-muted-foreground">Ledger Profile: Verified</p>
            </div>
          </div>

          <div className="flex-grow py-2 space-y-1.5 overflow-hidden">
            {step >= 1 && (
              <motion.div
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
                className="flex items-center gap-2 text-[10px] text-foreground/80 bg-background/50 border border-border rounded px-2.5 py-1"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                <span className="font-mono text-[8px] text-muted-foreground">10:00 AM</span>
                <span className="flex-grow">WhatsApp Log: &ldquo;Interested in CRM&rdquo;</span>
              </motion.div>
            )}

            {step >= 2 && (
              <motion.div
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
                className="flex items-center gap-2 text-[10px] text-foreground/80 bg-background/50 border border-border rounded px-2.5 py-1"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span className="font-mono text-[8px] text-muted-foreground">11:15 AM</span>
                <span className="flex-grow">Quotation #QT-948 Sent (Rs.45,000)</span>
              </motion.div>
            )}

            {step >= 3 && (
              <motion.div
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
                className="flex items-center gap-2 text-[10px] text-foreground/80 bg-background/50 border border-border rounded px-2.5 py-1"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                <span className="font-mono text-[8px] text-muted-foreground">12:30 PM</span>
                <span className="flex-grow">Invoice #INV-102 Paid via UPI</span>
              </motion.div>
            )}
          </div>
        </>
      )}

      <div className="absolute bottom-2 left-4 right-4 bg-background/80 border border-border rounded px-2.5 py-1 text-[9px] text-muted-foreground flex justify-between items-center">
        <span>
          {step === 0 && "Enter party name to view single source timeline"}
          {step === 1 && "Loading 1: Instant WhatsApp communication log"}
          {step === 2 && "Loading 2: Auto-linked Quotation parameters"}
          {step === 3 && "Loading 3: Accounting, direct UPI settlement"}
          {step === 4 && "Ledger Sync complete! 360-degree visibility."}
        </span>
        <CheckCircle2
          className={`w-3.5 h-3.5 ${step === 4 ? "text-green-500" : "text-muted-foreground"}`}
        />
      </div>
    </div>
  );
};

// 3. INVOICING STATE-MACHINE ANIMATION
const InvoiceMockup = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setStep(1), 400);
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 6);
    }, 1800);
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="w-full h-56 bg-surface/30 rounded-xl border border-border p-4 flex flex-col justify-between overflow-hidden relative">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-border pb-2.5">
        <div className="space-y-0.5">
          <span className="text-[9px] font-mono text-muted-foreground uppercase">
            1-Click Billing
          </span>
          <h4 className="text-xs font-semibold">Auto-Generated Invoice</h4>
        </div>
        <div className="w-7 h-7 bg-primary/5 rounded-full border border-border flex items-center justify-center">
          {step === 4 ? (
            <Loader2 className="w-3.5 h-3.5 text-primary animate-spin" />
          ) : (
            <IndianRupee className="w-3.5 h-3.5 text-primary" />
          )}
        </div>
      </div>

      {/* Main Form Fields */}
      <div className="flex-grow py-3 space-y-2">
        {step >= 1 && (
          <div className="flex justify-between text-[11px] items-center">
            <span className="text-muted-foreground">Client Profile:</span>
            <motion.span
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
              className="font-medium text-foreground font-mono"
            >
              Sharma Enterprises
            </motion.span>
          </div>
        )}

        {step >= 2 && (
          <div className="flex justify-between text-[11px] items-center">
            <span className="text-muted-foreground">Billing Item:</span>
            <motion.span
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
              className="font-medium text-foreground/80"
            >
              Karobaar Pro License
            </motion.span>
          </div>
        )}

        {step >= 3 && (
          <div className="flex justify-between text-[11px] items-center">
            <span className="text-muted-foreground">GST Addition (18%):</span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="font-bold text-foreground"
            >
              +Rs. 6,300.00
            </motion.span>
          </div>
        )}
      </div>

      {/* Bottom Success / CTA Trigger */}
      <div className="flex justify-between items-center border-t border-border pt-2.5">
        {step >= 5 ? (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", bounce: 0.4, duration: 0.6 }}
            className="text-[9px] bg-green-500/10 border border-green-500/20 text-green-500 rounded px-2.5 py-1 flex items-center gap-1.5 font-bold font-mono"
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>LEDGER UPDATED</span>
          </motion.div>
        ) : (
          <div className="flex gap-2">
            <span className="text-[10px] text-muted-foreground font-semibold">Status:</span>
            <span className="text-[10px] font-bold text-primary font-mono">
              {step === 4 ? "Syncing..." : "Pending"}
            </span>
          </div>
        )}

        <div className="text-right">
          <span className="text-[10px] text-muted-foreground block text-right">Grand Total</span>
          <span className="text-sm font-extrabold font-mono">
            {step >= 3 ? "Rs. 41,300.00" : "Rs. 0.00"}
          </span>
        </div>
      </div>

      {/* Virtual click trigger */}
      <AnimatePresence>
        {step === 3 && (
          <motion.div
            initial={{ scale: 1, opacity: 0 }}
            animate={{ scale: [1, 1.5, 1], opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute bottom-5 left-1/3 w-8 h-8 rounded-full border border-primary bg-primary/10 flex items-center justify-center"
          >
            <MousePointer className="w-4 h-4 fill-current text-primary" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute bottom-2 left-4 right-4 bg-background/80 border border-border rounded px-2.5 py-1 text-[9px] text-muted-foreground flex justify-between items-center pointer-events-none">
        <span>
          {step === 0 && "Click 'Generate GST' on Lead to begin..."}
          {step === 1 && "Step 1: Invoicing form details auto-populate"}
          {step === 2 && "Step 2: Line items automatically computed"}
          {step === 3 && "Step 3: Clicking 'Sync & Send via WhatsApp'"}
          {step === 4 && "Step 4: Updating centralized financial ledger..."}
          {step === 5 && "Ledger updated! Sent to client's phone."}
        </span>
      </div>
    </div>
  );
};

// 4. PAYROLL STATE-MACHINE ANIMATION
const PayrollMockup = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setStep(1), 400);
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 6);
    }, 1800);
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="w-full h-56 bg-surface/30 rounded-xl border border-border p-4 flex flex-col justify-between overflow-hidden relative">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border pb-2.5">
        <div className="space-y-0.5">
          <span className="text-[9px] font-mono text-muted-foreground uppercase">
            Real-Time Payroll
          </span>
          <h4 className="text-xs font-semibold">Zero-Entry Payroll calculator</h4>
        </div>
        <span className="text-[9px] bg-primary/10 border border-border text-foreground px-2 py-0.5 rounded font-mono">
          {step >= 2 ? "Present: 30 Days" : "Present: counting..."}
        </span>
      </div>

      {/* Main Flow Visuals */}
      <div className="flex items-center gap-3 py-2 w-full justify-center flex-grow">
        {/* Left: Attendance */}
        <div className="bg-background border border-border rounded-lg p-2 flex flex-col items-center gap-1.5 text-[9px]">
          <span className="text-muted-foreground font-mono text-[8px]">Attendance Sync</span>
          <div className="flex gap-0.5 font-bold">
            <span className={step >= 1 ? "text-green-500" : "text-muted-foreground opacity-30"}>
              Y
            </span>
            <span className={step >= 1 ? "text-green-500" : "text-muted-foreground opacity-30"}>
              Y
            </span>
            <span className={step >= 1 ? "text-green-500" : "text-muted-foreground opacity-30"}>
              Y
            </span>
            <span className={step >= 1 ? "text-green-500" : "text-muted-foreground opacity-30"}>
              Y
            </span>
            <span className={step >= 1 ? "text-green-500" : "text-muted-foreground opacity-30"}>
              Y
            </span>
          </div>
        </div>

        {/* Streaming Arrow */}
        <div className="flex flex-col items-center flex-grow relative px-1">
          <div className="w-full h-0.5 bg-border relative overflow-hidden">
            {step === 2 && (
              <motion.div
                initial={{ left: "-100%" }}
                animate={{ left: "100%" }}
                transition={{ duration: 1.5, ease: "linear" }}
                className="absolute w-12 h-full bg-gradient-to-r from-transparent via-primary to-transparent"
              />
            )}
          </div>
          <span className="text-[7px] text-muted-foreground font-mono mt-1">Direct Sync</span>
        </div>

        {/* Right: Payroll Recipient */}
        <div className="bg-background border border-border rounded-lg p-2.5 flex flex-col items-center gap-1 text-[9px]">
          <span className="text-muted-foreground font-mono text-[8px]">Total Payout</span>
          <span className="font-extrabold text-foreground font-mono text-center">
            {step >= 3 ? "Rs. 45,000.00" : "Rs. 0.00"}
          </span>
        </div>
      </div>

      {/* Status Bar */}
      <div className="bg-primary/5 border border-border rounded px-2.5 py-1.5 text-[10px] text-muted-foreground flex justify-between items-center">
        <span>
          {step === 0 && "1. Recording attendance logs..."}
          {step === 1 && "2. Attendance captured on biometric/app"}
          {step === 2 && "3. Synced: Flowing data directly to payroll"}
          {step === 3 && "4. Calculating taxes, PF and deductions"}
          {step === 4 && "5. Disbursing: Releasing direct payout..."}
          {step === 5 && "6. Payout complete! Direct disbursal successful."}
        </span>

        {step === 5 ? (
          <span className="text-[8px] bg-green-500/20 text-green-500 px-1.5 py-0.5 rounded font-extrabold font-mono animate-bounce">
            PAID
          </span>
        ) : (
          <span className="text-[8px] bg-primary/10 text-foreground px-1.5 py-0.5 rounded font-mono">
            {step >= 4 ? "Disbursing..." : "Processing"}
          </span>
        )}
      </div>
    </div>
  );
};

const MockupVisuals = ({ type }: { type: string }) => {
  switch (type) {
    case "kanban":
      return <KanbanMockup />;
    case "profile":
      return <ProfileMockup />;
    case "invoice":
      return <InvoiceMockup />;
    case "payroll":
      return <PayrollMockup />;
    default:
      return null;
  }
};

export function ProblemSolution() {
  const { kicker, headline, without, with: solution } = content.problemSolution;
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-40 md:py-48 relative overflow-hidden" id="how-it-works">
      {/* Premium ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-foreground/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4">
            {kicker}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            {headline}
          </h2>
        </div>

        {/* The Master Container */}
        <div className="relative rounded-[2rem] border border-border bg-surface/30 shadow-2xl overflow-hidden backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 relative min-h-[500px]">
            {/* LEFT: The Problem Selection (Interactive) */}
            <div className="lg:col-span-5 p-8 lg:p-12 relative bg-gradient-to-br from-background via-surface to-background border-r border-border/50">
              <div className="absolute top-0 left-0 w-full h-full bg-red-950/5 pointer-events-none" />

              <div className="relative z-10">
                <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono uppercase tracking-widest mb-8">
                  {without.title}
                </div>

                <div className="space-y-3 relative">
                  {without.painPoints.map((point: string, idx: number) => {
                    const isActive = idx === activeIndex;
                    return (
                      <div
                        key={idx}
                        onClick={() => setActiveIndex(idx)}
                        onMouseEnter={() => setActiveIndex(idx)}
                        className={`flex items-start gap-4 p-4 rounded-xl cursor-pointer transition-all duration-300 border ${
                          isActive
                            ? "bg-red-500/5 border-red-500/20 shadow-[0_0_15px_rgba(239,68,68,0.05)]"
                            : "bg-transparent border-transparent hover:bg-surface/50 opacity-60 hover:opacity-100"
                        }`}
                      >
                        <div
                          className={`mt-0.5 p-1.5 rounded-full transition-colors ${
                            isActive
                              ? "bg-red-500/20 text-red-500"
                              : "bg-surface border border-border text-foreground/40"
                          }`}
                        >
                          <X className="w-4 h-4" />
                        </div>
                        <span
                          className={`font-medium leading-relaxed transition-colors ${
                            isActive ? "text-foreground" : "text-foreground/70"
                          }`}
                        >
                          {point}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* CENTER: The Divider */}
            <div className="hidden lg:flex absolute top-0 bottom-0 left-[41.666%] -ml-[24px] w-[48px] items-center justify-center z-20">
              <div className="w-full h-full absolute inset-0 bg-gradient-to-b from-transparent via-border to-transparent w-px left-1/2 -translate-x-1/2" />

              <div className="w-12 h-12 rounded-full bg-surface border border-border shadow-sm flex items-center justify-center relative bg-gradient-to-br from-surface to-background z-10">
                <div className="absolute inset-0 rounded-full border border-primary/20 blur-sm" />
                <ArrowRight className="w-5 h-5 text-primary" />
              </div>
            </div>

            {/* RIGHT: The Solution Reveal (How it works) */}
            <div className="lg:col-span-7 p-8 lg:p-12 relative bg-gradient-to-br from-primary/5 via-background to-background flex flex-col justify-center">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-foreground/5 blur-[100px] rounded-full pointer-events-none" />

              <div className="relative z-10 w-full">
                <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-primary/10 border border-border text-foreground text-xs font-mono uppercase tracking-widest mb-8">
                  {solution.title}
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="w-full"
                  >
                    <div className="mb-8">
                      <div className="text-xs font-mono text-muted-foreground mb-2 uppercase tracking-wider">
                        {solution.interactiveSolutions[activeIndex].featureTag}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                        {solution.interactiveSolutions[activeIndex].title}
                      </h3>
                      <p className="text-foreground/70 leading-relaxed text-lg max-w-lg font-medium">
                        {solution.interactiveSolutions[activeIndex].description}
                      </p>
                    </div>

                    {/* The Visual Mockup of "HOW" */}
                    <div className="w-full max-w-lg relative">
                      {/* Subtle accent line highlighting the mockup */}
                      <div className="absolute -left-4 top-4 bottom-4 w-1 bg-primary/10 rounded-full" />
                      <MockupVisuals type={solution.interactiveSolutions[activeIndex].mockupType} />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
