const researchCards = [
  {
    stat: "10x",
    title: "Higher Contact Rates",
    description: "Leads contacted within 5 minutes are 10x more likely to be reached than those called after 30 minutes.",
    source: "MIT / InsideSales Lead Response Study",
    sourceUrl: "https://www.leadresponsemanagement.org/lrm_study",
  },
  {
    stat: "391%",
    title: "More Conversions",
    description: "Responding within 1 minute leads to 391% more conversions compared to waiting just 2 minutes.",
    source: "Vendasta Lead Response Report",
    sourceUrl: "https://www.vendasta.com/blog/speed-to-lead-statistics/",
  },
  {
    stat: "78%",
    title: "First Responder Wins",
    description: "78% of customers buy from the company that responds to their inquiry first.",
    source: "Lead Connect Study",
    sourceUrl: "https://www.business.com/articles/lead-response-management-best-practices/",
  },
  {
    stat: "50%+",
    title: "After-Hours Leads",
    description: "More than half of leads come in after business hours. Clinics without automation miss these entirely.",
    source: "Industry Analysis",
    sourceUrl: "#",
  },
];

const ResearchSection = () => {
  return (
    <section className="section-spacing relative">
      <div className="absolute inset-0 bg-card/50" />

      <div className="container-main relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary font-medium mb-4">The Data</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Speed Wins the Booking
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            When a lead is shopping Botox, GLP-1, TRT, or peptides, they contact multiple clinics. The first real response wins.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {researchCards.map((card, index) => (
            <div
              key={index}
              className="card-premium-hover p-6 text-center group"
            >
              <div className="text-4xl lg:text-5xl font-bold gradient-text mb-3">
                {card.stat}
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {card.description}
              </p>
              <a
                href={card.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-primary/70 hover:text-primary transition-colors"
              >
                {card.source} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
