import {
  FAQSection,
  FinalCTA,
  Footer,
  HeroSection,
  InsightReportSection,
  FounderNoteSection,
  LeadCaptureSection,
  Navbar,
  ProblemSection,
  SolutionSection,
  WhatYouReceiveSection,
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
        <WhatYouReceiveSection />
        <FounderNoteSection />
        <InsightReportSection />
        <WhyParentsSection />
        <LeadCaptureSection />
        <FinalCTA />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
