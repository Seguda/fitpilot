import {
  FAQSection,
  FinalCTA,
  Footer,
  ExploreInterestsSection,
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
  GrowthTrackingSection,
} from "@/components/landing";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafaf9] text-stone-900">
      <Navbar />
      <main>
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <HeroSection />
        </div>

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <ProblemSection />
          <ExploreInterestsSection />
        </div>

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <WhyNotDIYSection />
          <SolutionSection />
          <WhatYouGetSection />
        </div>

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <SampleReportSection />
          <GrowthTrackingSection />
          <SocialProofSection />
          <PricingSection />
        </div>

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <LeadCaptureSection />
          <StudioPartnerSection />
          <LocalTrustSection />
        </div>

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <FAQSection />
          <FinalCTA />
        </div>
      </main>
      <Footer />
    </div>
  );
}
