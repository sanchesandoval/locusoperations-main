import { LeakDropIcon, PipelineNodesIcon, RefreshLoopIcon } from "@/components/icons/BrandIcons";

const steps = [
  {
    step: "01",
    icon: LeakDropIcon,
    title: "Diagnose Leaks",
    description: "Take the Leak Finder assessment and get a custom audit of where your bookings are slipping through the cracks.",
  },
  {
    step: "02",
    icon: PipelineNodesIcon,
    title: "Install Engine",
    description: "We build, integrate, and launch your complete lead-to-booking system. Pipeline, automation, and AI—all configured for your clinic.",
  },
  {
    step: "03",
    icon: RefreshLoopIcon,
    title: "Optimize & Scale",
    description: "Weekly optimizations, A/B testing, and performance reviews to continuously improve your booking rate and reduce cost per acquisition.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="section-spacing relative">
      <div className="container-main">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary font-medium mb-4">The Process</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Three phases to transform your lead operations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((item, index) => (
            <div key={index} className="relative group">
              {/* Connector line (desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[calc(50%+60px)] w-[calc(100%-120px)] h-px bg-border" />
              )}

              <div className="text-center space-y-6">
                {/* Icon container */}
                <div className="relative inline-flex">
                  <div className="w-32 h-32 rounded-2xl bg-card border border-border flex items-center justify-center group-hover:border-primary/50 transition-all duration-300">
                    <item.icon className="w-12 h-12 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                    <span className="text-xs font-bold text-primary-foreground">{item.step}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
