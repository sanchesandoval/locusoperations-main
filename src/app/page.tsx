import { CompanyShowcase } from "@/components/sections/company-showcase";
import { CostComparisonSection } from "@/components/sections/cost-comparison-section";
import { CTASection } from "@/components/sections/cta-section";
import { FAQSection } from "@/components/sections/faq-section";
import { FooterSection } from "@/components/sections/footer-section";
import { HeroSection } from "@/components/sections/hero-section";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { ProblemSection } from "@/components/sections/problem-section";
import { SignalCategoriesSection } from "@/components/sections/signal-categories-section";
import { StackTransparencySection } from "@/components/sections/stack-transparency-section";
import { WhatYouGetSection } from "@/components/sections/what-you-get-section";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center divide-y divide-border min-h-screen w-full">
      <HeroSection />
      <CompanyShowcase />
      <ProblemSection />
      <HowItWorksSection />
      <StackTransparencySection />
      <SignalCategoriesSection />
      <WhatYouGetSection />
      <CostComparisonSection />
      <FAQSection />
      <CTASection />
      <FooterSection />
    </main>
  );
}
