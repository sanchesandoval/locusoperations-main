import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import ProblemSection from "@/components/home/ProblemSection";
import SolutionSection from "@/components/home/SolutionSection";


import ResearchDataSection from "@/components/home/ResearchDataSection";
import ServicesSection from "@/components/home/ServicesSection";
import DashboardPreview from "@/components/home/DashboardPreview";
import FAQSection from "@/components/home/FAQSection";
import LeadMagnetCTA from "@/components/home/LeadMagnetCTA";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />

        <ResearchDataSection />
        <ServicesSection />
        <DashboardPreview />

        <FAQSection />
        <LeadMagnetCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
