import { NumberTicker } from "@/components/magicui/number-ticker";

const researchCards = [
  {
    value: 21,
    suffix: "x",
    prefix: "",
    label: "more likely to qualify",
    area: "Marketing Ops",
    title: "Speed-to-Lead Qualification",
    description:
      "Leads contacted within 5 minutes are 21x more likely to qualify. Your team averages 47+ hours. You're not slow. You just don't have a system.",
    source: "InsideSales / Harvard Business Review",
  },
  {
    value: 73,
    suffix: "%",
    prefix: "",
    label: "of leads never contacted",
    area: "Sales Ops",
    title: "Pipeline Never Worked",
    description:
      "Nearly 3 in 4 leads you paid to generate never hear from your team. That's not a sales problem. That's a systems problem.",
    source: "Drift / Salesforce State of Sales",
  },
  {
    value: 77,
    suffix: "%",
    prefix: "",
    label: "more revenue per rep",
    area: "Sales Ops",
    title: "AI Ops Revenue Lift",
    description:
      "Your reps are doing admin when they should be selling. Teams with AI-assisted sales ops generate 77% more revenue because their reps actually sell.",
    source: "Salesforce State of Sales 2024",
  },
  {
    value: 95,
    suffix: "%",
    prefix: "25–",
    label: "profit increase from 5% retention",
    area: "CS Ops",
    title: "Retention Drives Profit",
    description:
      "A 5% lift in retention increases profit by 25–95%. Most teams double down on acquisition while their best customers quietly churn. That's an ops problem.",
    source: "Harvard Business School / Bain & Company",
  },
];

const ResearchDataSection = () => {
  return (
    <section className="section-spacing relative">
      <div className="container-main relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <p className="text-primary font-medium mb-4">The Data</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            The Revenue Is Already There. <span className="text-muted-foreground">It's Just Leaking.</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            These aren't projections. They're what happens when marketing, sales, and CS finally work as one system.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {researchCards.map((card, index) => (
            <div
              key={index}
              className="card-premium-hover p-5 sm:p-6 text-center group flex flex-col"
            >
              {/* Area badge */}
              <span className="text-xs text-primary/60 border border-primary/20 rounded-full px-2 py-0.5 font-medium self-center mb-4">
                {card.area}
              </span>

              {/* Stat with scroll-triggered count-up */}
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-1">
                <NumberTicker
                  value={card.value}
                  suffix={card.suffix}
                  prefix={card.prefix}
                  delay={index * 0.15}
                />
              </div>
              <p className="text-xs text-muted-foreground/70 mb-4">{card.label}</p>

              <h3 className="font-semibold text-foreground mb-2 text-sm sm:text-base">
                {card.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {card.description}
              </p>

              <span className="text-xs text-muted-foreground/50 mt-4 block">
                {card.source}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchDataSection;
