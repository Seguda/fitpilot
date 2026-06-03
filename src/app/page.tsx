import {
  FAQSection,
  FinalCTA,
  Footer,
  GrowthTrackingSection,
  HeroSection,
  InsightReportSection,
  LeadCaptureSection,
  Navbar,
  ProblemSection,
  SolutionSection,
  WhyParentsSection,
} from "@/components/landing";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafaf9] text-stone-900">
      <Navbar />
      <main className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <InsightReportSection />
        <GrowthTrackingSection />
        <WhyParentsSection />
        <LeadCaptureSection />
        <FinalCTA />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
