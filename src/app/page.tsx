import {
  FAQSection,
  FinalCTA,
  Footer,
  HeroSection,
  LeadCaptureSection,
  LocalTrustSection,
  Navbar,
  PricingSection,
  ProblemSection,
  WhyNotDIYSection,
  SampleReportSection,
  SocialProofSection,
  SolutionSection,
  StudioPartnerSection,
  WhatYouGetSection,
} from "@/components/landing";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <Navbar />
      <main className="mx-auto flex max-w-6xl flex-col gap-20 px-4 pb-24 pt-16 sm:px-6 sm:pt-20 lg:px-8 lg:gap-24 lg:pt-24">
        <HeroSection />
        <div className="space-y-20 lg:space-y-24">
          <ProblemSection />
          <WhyNotDIYSection />
          <SolutionSection />
          <WhatYouGetSection />
        </div>
        <div className="space-y-20 rounded-3xl border border-neutral-200 bg-white/60 p-6 shadow-sm sm:p-10 lg:space-y-24">
          <SampleReportSection />
          <SocialProofSection />
          <PricingSection />
        </div>
        <div className="space-y-12 py-8 sm:py-12">
          <LeadCaptureSection />
        </div>
        <div className="space-y-20 lg:space-y-24">
          <StudioPartnerSection />
          <LocalTrustSection />
        </div>
        <div className="space-y-14 border-t border-neutral-200 pt-14 lg:space-y-16 lg:pt-16">
          <FAQSection />
          <FinalCTA />
        </div>
      </main>
      <Footer />
    </div>
  );
}
