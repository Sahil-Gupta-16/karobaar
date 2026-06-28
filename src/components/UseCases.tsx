'use client';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, ToggleRight, Settings2, FileText } from 'lucide-react';
import content from '@/lib/content.json';
import { cn } from '@/lib/utils';

const PipelineBuilderDemo = () => (
  <div className="w-full h-full bg-background rounded-xl flex flex-col overflow-hidden relative border border-border p-4">
    <div className="flex justify-between items-center mb-4 border-b border-border pb-3">
      <div className="text-sm font-bold text-foreground flex items-center gap-2"><Settings2 className="w-4 h-4 text-accent" /> Workflow Editor</div>
      <motion.div 
        animate={{ scale: [1, 1.05, 1], backgroundColor: ["rgba(184,115,51,0.1)", "rgba(184,115,51,0.3)", "rgba(184,115,51,0.1)"] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="bg-accent/20 text-accent text-xs px-2 py-1 rounded font-bold cursor-pointer border border-accent/30 flex items-center gap-1"
      >
        <span className="text-lg leading-none">+</span> Node
      </motion.div>
    </div>
    
    <div className="flex-1 relative flex items-center justify-center w-full h-full overflow-hidden">
      {/* Background Dot Grid */}
      <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)', backgroundSize: '16px 16px' }} />

      <div className="relative w-[360px] h-[200px]">
        {/* Connecting Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <defs>
            <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#B87333" />
            </marker>
          </defs>
          
          {/* Initial Line: Node 1 -> Node 3 */}
          <motion.line 
            x1="90" y1="100" x2="265" y2="100"
            stroke="#B87333" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrowhead)"
            animate={{ opacity: [0.5, 0.5, 0, 0] }}
            transition={{ duration: 10, times: [0, 0.15, 0.2, 1], repeat: Infinity }}
          />

          {/* Line: Node 1 -> Node 2 */}
          <motion.line 
            x1="90" y1="100" x2="135" y2="100"
            stroke="#B87333" strokeWidth="2" markerEnd="url(#arrowhead)"
            animate={{ opacity: [0, 0, 1, 1] }}
            transition={{ duration: 10, times: [0, 0.2, 0.25, 1], repeat: Infinity }}
          />

          {/* Animated Line: Node 2 -> Node 3 */}
          <motion.line 
            x1="220" y1="100"
            stroke="#B87333" strokeWidth="2" markerEnd="url(#arrowhead)"
            animate={{ 
              x2: [220, 220, 265, 265, 265],
              y2: [100, 100, 100, 100, 100],
              opacity: [0, 0, 1, 1, 1]
            }}
            transition={{ duration: 10, times: [0, 0.45, 0.6, 0.9, 1], repeat: Infinity }}
          />
        </svg>

        {/* Node 1: Lead */}
        <div className="absolute left-[10px] top-[80px] w-[80px] h-[40px] bg-surface border border-border rounded shadow flex items-center justify-center text-xs font-bold z-10 text-foreground/80">
          Lead
        </div>

        {/* Node 2: Custom Stage (Appears dynamically) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: [0, 0, 1, 1, 1], scale: [0.8, 0.8, 1, 1, 1] }}
          transition={{ duration: 10, times: [0, 0.15, 0.2, 0.9, 1], repeat: Infinity }}
          className="absolute left-[140px] top-[80px] w-[80px] h-[40px] bg-accent/20 border-2 border-accent rounded shadow-[0_0_15px_rgba(184,115,51,0.2)] flex items-center justify-center text-xs font-bold z-10 text-accent backdrop-blur-md"
        >
          Follow Up
        </motion.div>

        {/* Node 3: Negotiation */}
        <div className="absolute left-[270px] top-[80px] w-[80px] h-[40px] bg-surface border border-border rounded shadow flex items-center justify-center text-xs font-bold z-10 text-foreground/80">
          Negotiation
        </div>

        {/* Animated Cursor */}
        <motion.div
          initial={{ x: 180, y: 150, opacity: 0 }}
          animate={{
            opacity: [0, 1, 1, 1, 1, 1, 0, 0],
            x: [180, 250, 250, 220, 220, 270, 270, 270],
            y: [150, -40, -40, 100, 100, 100, 100, 100],
            scale: [1, 1, 0.8, 1, 0.8, 1, 1, 1]
          }}
          transition={{ duration: 10, times: [0, 0.05, 0.1, 0.35, 0.45, 0.6, 0.8, 1], repeat: Infinity }}
          className="absolute z-50 pointer-events-none drop-shadow-2xl"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.5 3.21V20.8C5.5 21.45 6.27 21.78 6.74 21.33L11.4 16.85L15.34 23.63C15.53 23.96 15.96 24.06 16.3 23.87L18.66 22.5C18.99 22.31 19.1 21.89 18.91 21.56L15.02 14.85H20.5C21.15 14.85 21.49 14.07 21.03 13.61L6.92 2.76C6.48 2.33 5.5 2.64 5.5 3.21Z" fill="white" stroke="#B87333" strokeWidth="1.5" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </div>

      {/* Success Toast */}
      <motion.div 
        animate={{ opacity: [0, 0, 0, 1, 1, 0, 0], y: [10, 10, 10, 0, 0, 10, 10] }}
        transition={{ duration: 10, times: [0, 0.7, 0.75, 0.85, 0.9, 0.95, 1], repeat: Infinity }}
        className="absolute bottom-4 bg-green-500/20 text-green-500 text-xs font-bold px-3 py-1.5 rounded-full border border-green-500/30 shadow-xl"
      >
        Workflow Saved
      </motion.div>
    </div>
  </div>
);

const BillingDemo = () => (
  <div className="w-full h-full bg-background rounded-xl flex items-center justify-center relative overflow-hidden border border-border p-6">
    <div className="absolute top-[-50px] right-[-50px] w-32 h-32 bg-accent/10 blur-2xl rounded-full" />
    <div className="w-full max-w-sm bg-surface/80 border border-accent/20 rounded-lg p-5 shadow-2xl relative">
      <div className="flex justify-between items-start mb-6">
        <div>
          <div className="text-xs text-foreground/50 font-mono mb-1">INV-2024-089</div>
          <div className="text-sm font-bold">Acme Corp</div>
        </div>
        <FileText className="w-6 h-6 text-accent/50" />
      </div>
      
      <div className="space-y-2 mb-4 text-sm">
        <div className="flex justify-between text-foreground/70"><span>Subtotal</span><span>₹4,50,000</span></div>
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: [0, 1, 1], height: [0, 20, 20] }}
          transition={{ duration: 3, times: [0, 0.2, 1], repeat: Infinity, repeatDelay: 1 }}
          className="flex justify-between text-foreground/70 overflow-hidden"
        >
          <span>CGST (9%)</span><span>₹40,500</span>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: [0, 1, 1], height: [0, 20, 20] }}
          transition={{ duration: 3, times: [0, 0.3, 1], repeat: Infinity, repeatDelay: 1 }}
          className="flex justify-between text-foreground/70 overflow-hidden"
        >
          <span>SGST (9%)</span><span>₹40,500</span>
        </motion.div>
      </div>
      
      <div className="border-t border-border pt-4 flex justify-between items-center">
        <div className="text-sm font-semibold">Total Amount</div>
        <motion.div 
          initial={{ color: "var(--foreground)" }}
          animate={{ color: ["#fff", "#B87333", "#B87333"] }}
          transition={{ duration: 3, times: [0, 0.4, 1], repeat: Infinity, repeatDelay: 1 }}
          className="text-lg font-bold font-mono"
        >
          ₹5,31,000
        </motion.div>
      </div>

      {/* Auto-calculate badge */}
      <motion.div 
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 3, times: [0, 0.2, 0.5], repeat: Infinity, repeatDelay: 1 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-background text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap shadow-xl"
      >
        Auto-calculating Taxes...
      </motion.div>
    </div>
  </div>
);

const SecurityDemo = () => (
  <div className="w-full h-full bg-background rounded-xl flex flex-col overflow-hidden relative border border-border p-4">
    <div className="flex items-center gap-2 mb-6 text-sm font-bold text-foreground border-b border-border pb-3">
      <ShieldCheck className="w-4 h-4 text-accent" /> Role Permissions
    </div>
    
    <div className="flex items-center justify-between bg-surface/50 p-3 rounded-lg border border-border mb-4">
      <div>
        <div className="text-sm font-semibold">Export Party Data</div>
        <div className="text-xs text-foreground/50">Allow Sales Reps to export CSVs</div>
      </div>
      <motion.div
        animate={{ color: ["#4ade80", "#64748b", "#64748b", "#4ade80"] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <ToggleRight className="w-8 h-8" />
      </motion.div>
    </div>

    {/* Live Audit Log Terminal */}
    <div className="flex-1 bg-[#09090b] rounded-lg border border-border/50 p-3 font-mono text-[10px] sm:text-xs overflow-hidden flex flex-col justify-end relative">
      <div className="absolute top-2 left-3 text-foreground/30 text-[10px] uppercase tracking-widest">Live Audit Trail</div>
      <div className="space-y-2 mt-6">
        <div className="text-foreground/40">[14:02:01] System: Initiated sync protocol</div>
        <div className="text-foreground/40">[14:02:05] Admin logged in from IP 192.168.1.1</div>
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: [0, 1, 1, 0], x: [-10, 0, 0, 0] }}
          transition={{ duration: 4, times: [0, 0.1, 0.9, 1], repeat: Infinity }}
          className="text-red-400"
        >
          [14:02:08] CRITICAL: Admin revoked [Export] permission for Role [Sales Rep]
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: [0, 0, 1, 0], x: [-10, -10, 0, 0] }}
          transition={{ duration: 4, times: [0, 0.8, 0.9, 1], repeat: Infinity }}
          className="text-green-400"
        >
          [14:02:11] SUCCESS: Admin granted [Export] permission for Role [Sales Rep]
        </motion.div>
      </div>
    </div>
  </div>
);

const FeatureDemo = ({ num }: { num: string }) => {
  if (num === "01") return <PipelineBuilderDemo />;
  if (num === "02") return <BillingDemo />;
  if (num === "03") return <SecurityDemo />;
  return null;
};

export function UseCases() {
  const { kicker, headline, sections } = content.useCases;

  return (
    <section className="py-32 overflow-hidden bg-surface/10" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <p className="text-xs font-mono text-accent uppercase tracking-widest mb-4">{kicker}</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{headline}</h2>
        </div>

        <div className="space-y-32">
          {sections.map((section, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={idx} 
                className={cn(
                  "flex flex-col lg:flex-row items-center gap-12 lg:gap-20",
                  !isEven && "lg:flex-row-reverse"
                )}
              >
                {/* Text Content */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="flex-1 space-y-6"
                >
                  <span className="text-6xl md:text-8xl font-bold text-accent/20 tracking-tighter block mb-[-20px]">
                    {section.number}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold">{section.title}</h3>
                  <p className="text-lg text-foreground/70">{section.description}</p>
                  
                  <ul className="space-y-3 pt-4">
                    {section.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent" />
                        <span className="text-foreground/90 font-medium">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Media/Mockup */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex-1 w-full"
                >
                  <div className="aspect-[4/3] sm:aspect-video lg:aspect-square xl:aspect-[4/3] w-full rounded-2xl bg-surface border border-border flex items-center justify-center p-3 shadow-2xl relative group overflow-hidden">
                     <FeatureDemo num={section.number} />
                     <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 to-transparent pointer-events-none" />
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
