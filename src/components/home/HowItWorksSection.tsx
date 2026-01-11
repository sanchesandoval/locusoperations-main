import { Link } from "react-router-dom";
import { BlurFade } from "@/components/magicui/blur-fade";

const steps = [
  {
    step: "01",
    title: "Diagnose Leaks",
    description: "Take the Leak Finder assessment and get a custom audit of where your bookings are slipping through the cracks.",
  },
  {
    step: "02",
    title: "Install Engine",
    description: "We build, integrate, and launch your complete lead-to-booking system. Pipeline, automation, and AI—all configured for your clinic.",
  },
  {
    step: "03",
    title: "Optimize & Scale",
    description: "Weekly optimizations, A/B testing, and performance reviews to continuously improve your booking rate and reduce cost per acquisition.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="section-spacing relative">
      <div className="container-main">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <BlurFade delay={0.1}>
            <p className="text-primary font-medium mb-4">The Process</p>
          </BlurFade>
          <BlurFade delay={0.15}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              How It Works
            </h2>
          </BlurFade>
          <BlurFade delay={0.2}>
            <p className="text-lg text-muted-foreground">
              Three phases to transform your lead operations.
            </p>
          </BlurFade>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((item, index) => (
            <BlurFade key={index} delay={0.25 + index * 0.1}>
              <div className="bg-card border border-border rounded-2xl p-6 lg:p-8 space-y-4 h-full transition-all duration-300 hover:border-primary/30 hover:shadow-[0_8px_16px_-4px_hsl(168_40%_45%_/_0.2)]">
                <span className="text-4xl lg:text-5xl font-light text-primary">{item.step}</span>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </BlurFade>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorksSection;
