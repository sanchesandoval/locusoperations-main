import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import LeakSection from "@/components/home/LeakSection";
import SolutionSection from "@/components/home/SolutionSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ResearchSection from "@/components/home/ResearchSection";
import PricingSection from "@/components/home/PricingSection";
import FAQSection from "@/components/home/FAQSection";
import CalendlySection from "@/components/home/CalendlySection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <LeakSection />
        <SolutionSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <ResearchSection />
        <PricingSection />
        <FAQSection />
        <CalendlySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
