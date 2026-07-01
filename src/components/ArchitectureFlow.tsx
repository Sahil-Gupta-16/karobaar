"use client";
import { useState } from "react";
import { motion, AnimatePresence, type TargetAndTransition } from "framer-motion";
import {
  FileText,
  Users,
  LayoutDashboard,
  Search,
  Bell,
  Box,
  Activity,
  UserCircle,
} from "lucide-react";
import content from "@/lib/content.json";

// Custom SVG Cursor for actions
const Cursor = ({ animation }: { animation: TargetAndTransition }) => (
  <motion.div
    initial={{ x: 300, y: 300, opacity: 0 }}
    animate={animation}
    className="absolute z-50 pointer-events-none drop-shadow-xl"
  >
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.5 3.21V20.8C5.5 21.45 6.27 21.78 6.74 21.33L11.4 16.85L15.34 23.63C15.53 23.96 15.96 24.06 16.3 23.87L18.66 22.5C18.99 22.31 19.1 21.89 18.91 21.56L15.02 14.85H20.5C21.15 14.85 21.49 14.07 21.03 13.61L6.92 2.76C6.48 2.33 5.5 2.64 5.5 3.21Z"
        fill="white"
        stroke="#B87333"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  </motion.div>
);

const DashboardMockup = ({ type }: { type: string }) => {
  return (
    <div className="w-full h-full bg-background rounded-xl border border-border shadow-2xl flex flex-col overflow-hidden relative">
      {/* Header */}
      <div className="h-12 bg-surface border-b border-border flex items-center px-4 justify-between relative z-20">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="flex gap-4">
          <Search className="w-4 h-4 text-foreground/40" />
          <Bell className="w-4 h-4 text-foreground/40" />
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden relative">
        {/* Sidebar */}
        <div className="w-16 md:w-48 bg-surface/50 border-r border-border p-4 hidden sm:flex flex-col gap-5 z-20">
          <div className="text-xs font-bold text-foreground/40 uppercase tracking-widest mb-2 hidden md:block">
            Main Menu
          </div>
          {[
            { icon: LayoutDashboard, label: "Dashboard", active: type === "analytics" },
            { icon: Box, label: "Catalog", active: false },
            { icon: Activity, label: "Pipelines", active: type === "pipeline" },
            { icon: Users, label: "Parties", active: type === "party" },
            { icon: FileText, label: "Quotations", active: type === "quotation" },
          ].map((item, i) => (
            <div
              key={i}
              className={`flex items-center gap-3 transition-colors ${item.active ? "opacity-100 text-accent font-medium" : "opacity-60 hover:opacity-100 text-foreground"}`}
            >
              <item.icon className="w-5 h-5" />
              <div className="text-sm hidden md:block">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Dynamic Content */}
        <div className="flex-1 bg-background p-6 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={type}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full relative"
            >
              {/* 1. PIPELINE: Dragging a lead */}
              {type === "pipeline" && (
                <>
                  <Cursor
                    animation={{
                      opacity: [0, 1, 1, 1, 1, 0, 0, 0],
                      x: [250, 80, 80, 240, 240, 300, 300, 300],
                      y: [250, 140, 140, 140, 140, 250, 250, 250],
                      scale: [1, 1, 0.8, 0.8, 1, 1, 1, 1],
                      transition: {
                        duration: 10,
                        times: [0, 0.05, 0.1, 0.3, 0.35, 0.45, 0.9, 1],
                        repeat: Infinity,
                      },
                    }}
                  />
                  <div className="flex flex-col h-full gap-4 relative">
                    <div className="text-lg font-bold text-foreground">Sales Pipeline</div>
                    <div className="flex gap-4 h-full relative">
                      {/* Column 1 */}
                      <div className="flex-1 bg-surface/30 rounded-lg p-3 border border-border/50">
                        <div className="text-sm font-semibold text-foreground/80 mb-4 flex justify-between">
                          Negotiation{" "}
                          <span className="bg-foreground/10 px-2 rounded-full text-xs">2</span>
                        </div>
                        <div className="w-full bg-surface border border-border rounded-md p-3 shadow-sm mb-3">
                          <div className="font-semibold text-sm text-foreground">
                            Stark Industries
                          </div>
                          <div className="text-xs text-foreground/60 mt-1">₹12,50,000</div>
                        </div>
                        {/* The dragged card */}
                        <motion.div
                          animate={{
                            x: [0, 0, 155, 155, 155, 155, 0, 0],
                            y: [0, 0, 0, 0, 0, 0, 0, 0],
                            scale: [1, 1.05, 1.05, 1, 1, 0.9, 0.9, 1],
                            opacity: [1, 1, 1, 1, 1, 0, 0, 0],
                            rotate: [0, -2, -2, 0, 0, 0, 0, 0],
                            boxShadow: [
                              "none",
                              "0px 10px 20px rgba(0,0,0,0.2)",
                              "0px 10px 20px rgba(0,0,0,0.2)",
                              "0px 5px 15px rgba(34,197,94,0.2)",
                              "0px 5px 15px rgba(34,197,94,0.2)",
                              "none",
                              "none",
                              "none",
                            ],
                            borderColor: [
                              "rgba(184,115,51,0.4)",
                              "rgba(184,115,51,1)",
                              "rgba(184,115,51,1)",
                              "rgba(34,197,94,1)",
                              "rgba(34,197,94,1)",
                              "rgba(34,197,94,0)",
                              "rgba(184,115,51,0)",
                              "rgba(184,115,51,0)",
                            ],
                          }}
                          transition={{
                            duration: 10,
                            times: [0, 0.1, 0.3, 0.35, 0.55, 0.65, 0.9, 1],
                            repeat: Infinity,
                          }}
                          className="w-full bg-surface border rounded-md p-3 shadow-md border-l-2 relative z-10 cursor-grab"
                        >
                          <div className="font-bold text-sm text-foreground">Acme Corp Deal</div>
                          <div className="text-xs text-accent mt-1">₹4,50,000</div>
                        </motion.div>
                      </div>
                      {/* Column 2 */}
                      <div className="flex-1 bg-surface/30 rounded-lg p-3 border border-border/50 relative">
                        <div className="text-sm font-semibold text-green-500 mb-4 flex justify-between">
                          Closed Won{" "}
                          <span className="bg-green-500/10 px-2 rounded-full text-xs">1</span>
                        </div>
                        <div className="w-full bg-surface border border-border rounded-md p-3 shadow-sm mb-3">
                          <div className="font-semibold text-sm text-foreground">
                            Wayne Enterprises
                          </div>
                          <div className="text-xs text-green-500/80 mt-1">₹8,00,000</div>
                        </div>
                        {/* Target placeholder dropzone */}
                        <div className="w-full h-20 border-2 border-dashed border-border/50 rounded-md" />
                      </div>
                    </div>

                    {/* Success Toast */}
                    <motion.div
                      animate={{
                        opacity: [0, 0, 0, 1, 1, 0, 0, 0],
                        y: [20, 20, 20, 0, 0, 20, 20, 20],
                      }}
                      transition={{
                        duration: 10,
                        times: [0, 0.3, 0.35, 0.4, 0.6, 0.65, 0.9, 1],
                        repeat: Infinity,
                      }}
                      className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-green-500/20 border border-green-500/50 text-green-500 px-4 py-2 rounded-full shadow-lg text-xs font-bold z-50 flex items-center gap-2 backdrop-blur-md"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Deal Won: Acme Corp
                    </motion.div>
                  </div>
                </>
              )}

              {/* 2. PARTY: Clicking to open profile */}
              {type === "party" && (
                <>
                  <Cursor
                    animation={{
                      opacity: [0, 1, 1, 1, 0],
                      x: [250, 150, 150, 150, 250],
                      y: [250, 80, 80, 80, 250],
                      scale: [1, 1, 0.8, 1, 1],
                      transition: { duration: 4.5, times: [0, 0.2, 0.3, 0.4, 1], repeat: Infinity },
                    }}
                  />
                  <div className="flex flex-col h-full gap-6">
                    {/* The Row getting clicked */}
                    <motion.div
                      animate={{
                        backgroundColor: [
                          "rgba(255,255,255,0)",
                          "rgba(255,255,255,0)",
                          "rgba(184,115,51,0.1)",
                          "rgba(184,115,51,0)",
                          "rgba(184,115,51,0)",
                        ],
                      }}
                      transition={{
                        duration: 4.5,
                        times: [0, 0.25, 0.3, 0.5, 1],
                        repeat: Infinity,
                      }}
                      className="flex items-center gap-4 border border-border rounded-xl p-4 transition-colors"
                    >
                      <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                        <UserCircle className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-bold text-lg text-foreground">Acme Corporation</div>
                        <div className="text-xs text-foreground/60">
                          Client since 2021 • B2B Enterprise
                        </div>
                      </div>
                    </motion.div>

                    {/* The expanding profile that reveals after click */}
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: [0, 0, 0, 1, 1], height: [0, 0, 0, "auto", "auto"] }}
                      transition={{
                        duration: 4.5,
                        times: [0, 0.3, 0.35, 0.5, 1],
                        repeat: Infinity,
                      }}
                      className="grid grid-cols-2 gap-4 overflow-hidden"
                    >
                      <div className="bg-surface/40 border border-border rounded-lg p-4">
                        <div className="text-sm font-semibold text-foreground/80 mb-4">
                          Financial Overview
                        </div>
                        <div className="space-y-3 text-sm">
                          <div className="flex justify-between">
                            <span className="text-foreground/60">Total Lifetime Value</span>
                            <span className="font-bold">₹45,50,000</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-foreground/60">Pending Invoices</span>
                            <span className="font-bold text-red-400">₹2,00,000</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-surface/40 border border-border rounded-lg p-4 relative">
                        <div className="text-sm font-semibold text-accent mb-4">
                          Activity Timeline
                        </div>
                        <div className="absolute left-6 top-10 bottom-4 w-px bg-accent/30" />
                        <div className="pl-6 space-y-4 relative text-sm">
                          <div className="flex items-start gap-2 relative">
                            <div className="absolute left-[-29px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent" />
                            <div>
                              <div className="text-foreground font-medium">
                                Deal Won: Q3 Licenses
                              </div>
                              <div className="text-xs text-foreground/50">Today at 2:30 PM</div>
                            </div>
                          </div>
                          <div className="flex items-start gap-2 relative">
                            <div className="absolute left-[-28px] top-1.5 w-2 h-2 rounded-full bg-border" />
                            <div>
                              <div className="text-foreground/70">Quotation sent by Rahul</div>
                              <div className="text-xs text-foreground/50">Yesterday</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </>
              )}

              {/* 3. QUOTATIONS: Generating quote */}
              {type === "quotation" && (
                <>
                  <Cursor
                    animation={{
                      opacity: [0, 1, 1, 1, 0],
                      x: [100, 100, 100, 100, 100],
                      y: [200, 250, 250, 250, 200],
                      scale: [1, 1, 0.8, 1, 1],
                      transition: { duration: 4.5, times: [0, 0.2, 0.3, 0.4, 1], repeat: Infinity },
                    }}
                  />
                  <div className="flex gap-4 h-full relative">
                    <div className="w-1/3 flex flex-col gap-3 pt-6">
                      <div className="text-sm font-semibold mb-2">Build Quotation</div>
                      <div className="w-full bg-surface border border-border rounded flex flex-col p-3 gap-1">
                        <div className="text-xs text-foreground/50">Item 1</div>
                        <div className="flex items-center gap-2">
                          <Box className="w-4 h-4 text-accent/50" />
                          <span className="text-sm">Enterprise License</span>
                        </div>
                      </div>
                      <div className="w-full bg-surface border border-border rounded flex flex-col p-3 gap-1">
                        <div className="text-xs text-foreground/50">Item 2</div>
                        <div className="flex items-center gap-2">
                          <Box className="w-4 h-4 text-accent/50" />
                          <span className="text-sm">Support SLA (1 Yr)</span>
                        </div>
                      </div>

                      {/* Generate Button being clicked */}
                      <motion.div
                        animate={{
                          scale: [1, 1, 0.95, 1, 1],
                          backgroundColor: [
                            "rgba(184,115,51,0.1)",
                            "rgba(184,115,51,0.1)",
                            "rgba(184,115,51,0.3)",
                            "rgba(184,115,51,0.1)",
                            "rgba(184,115,51,0.1)",
                          ],
                        }}
                        transition={{
                          duration: 4.5,
                          times: [0, 0.25, 0.3, 0.4, 1],
                          repeat: Infinity,
                        }}
                        className="w-full mt-4 h-10 border border-accent/50 text-accent rounded flex items-center justify-center text-xs font-bold uppercase tracking-wider"
                      >
                        Generate PDF
                      </motion.div>
                    </div>

                    {/* The generated quote sliding in */}
                    <div className="flex-1 overflow-hidden relative pt-6">
                      <motion.div
                        initial={{ x: "100%", opacity: 0 }}
                        animate={{
                          x: ["100%", "100%", "0%", "0%", "0%"],
                          opacity: [0, 0, 1, 1, 1],
                        }}
                        transition={{
                          duration: 4.5,
                          times: [0, 0.3, 0.5, 0.9, 1],
                          repeat: Infinity,
                        }}
                        className="w-full h-full border border-border bg-surface/30 rounded-lg p-6 flex flex-col relative shadow-[0_0_30px_rgba(184,115,51,0.1)] text-sm"
                      >
                        <div className="absolute top-0 right-0 w-20 h-20 bg-accent/10 blur-xl rounded-full" />
                        <div className="relative z-10 flex-grow">
                          <div className="flex justify-between items-start border-b border-border pb-4 mb-4">
                            <div>
                              <div className="font-bold text-lg tracking-widest text-foreground">
                                QUOTATION
                              </div>
                              <div className="text-xs text-foreground/50 mt-1">
                                To: Acme Corporation
                              </div>
                            </div>
                            <div className="bg-accent/20 border border-accent/40 rounded text-accent text-[10px] px-2 py-1 font-mono uppercase">
                              Generated
                            </div>
                          </div>

                          <div className="space-y-2 mb-8">
                            <div className="flex justify-between p-2 bg-background/50 rounded border border-border">
                              <span>Enterprise License (x5)</span>
                              <span>₹4,00,000</span>
                            </div>
                            <div className="flex justify-between p-2 bg-background/50 rounded border border-border">
                              <span>Support SLA (1 Yr)</span>
                              <span>₹50,000</span>
                            </div>
                          </div>
                        </div>
                        <div className="border-t border-border pt-4 flex justify-between relative z-10">
                          <div className="text-foreground/70 font-semibold">Total Amount:</div>
                          <div className="text-lg font-bold text-accent">₹4,50,000</div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </>
              )}

              {/* 4. ANALYTICS: Refreshing Dashboard */}
              {type === "analytics" && (
                <>
                  <Cursor
                    animation={{
                      opacity: [0, 1, 1, 1, 0],
                      x: [250, 350, 350, 350, 250],
                      y: [200, 30, 30, 30, 200],
                      scale: [1, 1, 0.8, 1, 1],
                      transition: { duration: 4.5, times: [0, 0.2, 0.3, 0.4, 1], repeat: Infinity },
                    }}
                  />
                  <div className="flex flex-col h-full gap-4 relative">
                    <div className="flex justify-between items-center mb-2">
                      <div className="text-lg font-bold">Business Overview</div>
                      {/* Refresh Button getting clicked */}
                      <motion.div
                        animate={{
                          scale: [1, 1, 0.9, 1, 1],
                          backgroundColor: [
                            "rgba(0,0,0,0)",
                            "rgba(0,0,0,0)",
                            "rgba(184,115,51,0.2)",
                            "rgba(0,0,0,0)",
                            "rgba(0,0,0,0)",
                          ],
                        }}
                        transition={{
                          duration: 4.5,
                          times: [0, 0.25, 0.3, 0.4, 1],
                          repeat: Infinity,
                        }}
                        className="w-8 h-8 border border-border rounded flex items-center justify-center text-foreground/40 cursor-pointer"
                      >
                        <Search className="w-4 h-4" />
                      </motion.div>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { label: "Monthly Revenue", value: "₹24.5L" },
                        { label: "Win Rate", value: "68%" },
                        { label: "Active Deals", value: "42" },
                      ].map((stat, i) => (
                        <div
                          key={i}
                          className="bg-surface/40 border border-border rounded-lg p-4 flex flex-col gap-1"
                        >
                          <div className="text-xs text-foreground/60">{stat.label}</div>
                          <motion.div
                            animate={{ opacity: [1, 1, 0.5, 1, 1], scale: [1, 1, 0.95, 1, 1] }}
                            transition={{
                              duration: 4.5,
                              times: [0, 0.3, 0.35, 0.5, 1],
                              repeat: Infinity,
                            }}
                            className="text-xl font-bold text-accent"
                          >
                            {stat.value}
                          </motion.div>
                        </div>
                      ))}
                    </div>
                    <div className="flex-1 flex gap-4 mt-2">
                      <div className="flex-[2] bg-surface/30 border border-border rounded-lg p-4 flex flex-col justify-end gap-2 overflow-hidden relative">
                        <div className="absolute top-4 left-4 text-xs font-semibold text-foreground/50">
                          Revenue Growth (Q3)
                        </div>
                        <div className="flex items-end justify-between gap-2 h-32 w-full mt-4">
                          {[30, 45, 25, 60, 40, 75, 55].map((h, i) => (
                            <motion.div
                              key={i}
                              animate={{ height: ["0%", "0%", "0%", `${h}%`, `${h}%`] }}
                              transition={{
                                duration: 4.5,
                                times: [0, 0.3, 0.4, 0.7, 1],
                                ease: "easeOut",
                                repeat: Infinity,
                              }}
                              className="w-full bg-accent/50 rounded-t-sm"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

interface FlowStep {
  id: string;
  step: string;
  title: string;
  description: string;
  uiType: string;
}

export function ArchitectureFlow() {
  const { kicker, headline, subline, flowSteps } = content.architecture;
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-44 bg-background relative overflow-hidden border-y border-border">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <p className="text-xs font-mono text-accent uppercase tracking-widest mb-4">{kicker}</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-foreground max-w-4xl mx-auto">
            {headline}
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">{subline}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center h-auto lg:h-[600px]">
          {/* LEFT: Flow Steps */}
          <div className="lg:col-span-5 flex flex-col gap-6 relative">
            <div className="absolute left-6 top-6 bottom-6 w-px bg-border hidden lg:block" />

            {flowSteps.map((step: FlowStep, idx: number) => {
              const isActive = activeStep === idx;
              return (
                <div
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  onMouseEnter={() => setActiveStep(idx)}
                  className={`relative pl-0 lg:pl-16 cursor-pointer transition-all duration-300 group ${
                    isActive ? "opacity-100" : "opacity-40 hover:opacity-70"
                  }`}
                >
                  <div
                    className={`hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 -ml-2.5 w-5 h-5 rounded-full border-4 items-center justify-center transition-colors duration-300 z-10 ${
                      isActive ? "border-accent bg-background" : "border-border bg-background"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeStepNode"
                        className="w-2 h-2 rounded-full bg-accent"
                      />
                    )}
                  </div>

                  <div
                    className={`p-6 rounded-2xl border transition-all duration-300 ${
                      isActive
                        ? "bg-surface/80 border-accent/30 shadow-[0_0_30px_rgba(184,115,51,0.1)]"
                        : "bg-transparent border-transparent"
                    }`}
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <span
                        className={`font-mono text-sm ${isActive ? "text-accent" : "text-foreground/50"}`}
                      >
                        {step.step}
                      </span>
                      <h3
                        className={`text-xl font-bold ${isActive ? "text-foreground" : "text-foreground/70"}`}
                      >
                        {step.title}
                      </h3>
                    </div>
                    <p
                      className={`text-foreground/70 leading-relaxed ${isActive ? "block" : "hidden lg:block"}`}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT: Dashboard Window Simulation */}
          <div className="lg:col-span-7 h-[450px] lg:h-full w-full relative">
            <DashboardMockup type={flowSteps[activeStep].uiType} />
            <div className="absolute -inset-4 bg-accent/5 blur-[60px] -z-10 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
