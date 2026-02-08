import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import LeakSection from "@/components/home/LeakSection";
import SolutionSection from "@/components/home/SolutionSection";

import TestimonialsSection from "@/components/home/TestimonialsSection";
import ResearchSection from "@/components/home/ResearchSection";
import PricingSection from "@/components/home/PricingSection";
import FAQSection from "@/components/home/FAQSection";
import LeadMagnetCTA from "@/components/home/LeadMagnetCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <LeakSection />
        <SolutionSection />
        <PricingSection />
        <TestimonialsSection />
        <ResearchSection />
        <FAQSection />
        <LeadMagnetCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
