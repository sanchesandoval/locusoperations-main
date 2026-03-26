import { PipelineNodesIcon, XMarkIcon, SignalWavesIcon } from "@/components/icons/BrandIcons";

const leakItems = [
  {
    icon: PipelineNodesIcon,
    title: "The Handoff is Broken",
    description: "Marketing says the leads are good. Sales says they're missing info. Meanwhile the lead goes cold waiting for someone to own it.\n\nBy then, the conversation has already started with your competitor.",
    cost: "8–15% of qualified pipeline lost",
  },
  {
    icon: XMarkIcon,
    title: "The Follow-up that Never Happens",
    description: "You get the lead. Then it takes 3-4 days to reach out. By then they've already talked to your competitor.\n\nNo system. No visibility. No accountability.",
    cost: "10–20% of pipeline velocity lost",
  },
  {
    icon: SignalWavesIcon,
    title: "Customer Success is Reactive",
    description: "You find out a customer is churning when they cancel. Not when the signals appeared three weeks earlier.\n\nChurn is an ops problem disguised as a product problem.",
    cost: "5–12% of ARR at risk",
  },
];

const ProblemSection = () => {
  return <section className="section-spacing relative">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-destructive/5 blur-[120px]" />

      <div className="container-main relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <p className="text-primary font-medium mb-4">The Problem</p>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold mb-6 sm:mb-8">
            Your revenue isn't the problem.<br />
            <span className="text-muted-foreground">Your Ops are.</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Most B2B teams at $50K–$500K MRR are losing <strong className="text-foreground">20–40% of potential revenue</strong> through gaps they've never audited. Three patterns show up every time:
          </p>
        </div>

        {/* Leak cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 max-w-5xl mx-auto">
          {leakItems.map((item, index) => (
            <div key={index} className="card-premium-hover p-5 sm:p-6 group">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center flex-shrink-0 group-hover:bg-destructive/20 transition-colors">
                    <item.icon className="w-5 h-5 text-destructive/80" />
                  </div>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground whitespace-pre-line">{item.description}</p>
                <div className="pt-3 border-t border-border/50">
                  <p className="text-sm font-medium text-destructive/90">Estimated cost: {item.cost}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="max-w-2xl mx-auto text-center mt-10 sm:mt-12 space-y-2">
          <p className="text-base sm:text-lg text-muted-foreground">
            Combined, these three gaps are draining pipeline you already paid to generate.
          </p>
          <p className="text-lg sm:text-xl font-semibold text-foreground">
            One diagnostic finds all three. One build fixes them.
          </p>
        </div>
      </div>
    </section>;
};
export default ProblemSection;