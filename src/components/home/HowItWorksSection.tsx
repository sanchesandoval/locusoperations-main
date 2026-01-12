import { Link } from "react-router-dom";
import { BlurFade } from "@/components/magicui/blur-fade";

const steps = [
  {
    step: "01",
    title: "Systems Mapping",
    tag: "S/C",
    description: "We perform a deep-dive audit of your current tech stack, documenting your clinical workflow and consolidating your fragmented assets into the Locus Canvas.",
  },
  {
    step: "02",
    title: "Infrastructure Deployment",
    tag: "A/L",
    description: "We build, integrate, and launch your Locus OS. This includes deploying your \"Digital Cortex\" (AI Front Desk) and configuring your automated lead-to-consult pipelines.",
  },
  {
    step: "03",
    title: "Performance Intelligence",
    tag: "E",
    description: "We transition from integration to optimization. We evaluate your weekly KPIs, refine your AI prompts, and tune your ad \"fuel\" to maximize your cost-per-consult.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="section-spacing relative">
      <div className="container-main">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <BlurFade delay={0.1}>
            <p className="text-primary font-medium mb-4">Process</p>
          </BlurFade>
          <BlurFade delay={0.15}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              The Locus "Build & Release" Protocol
            </h2>
          </BlurFade>
          <BlurFade delay={0.2}>
            <p className="text-lg text-muted-foreground">
              A three-phase technical integration to install your clinic's Central Nervous System.
            </p>
          </BlurFade>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((item, index) => (
            <BlurFade key={index} delay={0.25 + index * 0.1}>
              <div className="bg-card border border-border rounded-2xl p-6 lg:p-8 space-y-4 h-full transition-all duration-300 hover:border-primary/30 hover:shadow-[0_8px_16px_-4px_hsl(168_40%_45%_/_0.2)]">
                <span className="text-4xl lg:text-5xl font-light text-primary">{item.step}</span>
                <h3 className="text-xl font-bold">
                  {item.title} <span className="text-primary font-medium">({item.tag})</span>
                </h3>
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
