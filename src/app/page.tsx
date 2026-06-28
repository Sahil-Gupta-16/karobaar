import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { MetricsTicker } from "@/components/MetricsTicker";
import { ProblemSolution } from "@/components/ProblemSolution";
import { ArchitectureFlow } from "@/components/ArchitectureFlow";
import { UseCases } from "@/components/UseCases";
import { Benchmark } from "@/components/Benchmark";
import { TestimonialsDemo } from "@/components/ui/demo";
import { PricingDemo } from "@/components/ui/pricing-demo";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/*<Announcement />*/}
      <Navbar />
      <Hero />
      <MetricsTicker />
      <ProblemSolution />
      <ArchitectureFlow />
      <UseCases />
      <Benchmark />
      <TestimonialsDemo />
      <PricingDemo />
      <FAQ />
      <Footer />
    </main>
  );
}
