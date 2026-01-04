const researchCards = [
  {
    stat: "10x",
    title: "Slow Replies Send Leads to Competitors",
    description: "Leads usually contact multiple providers at once, and 78% of patients end up choosing the clinic that replies first. Many clinics still take 12-24 hours to respond, by then the prospect has already booked somewhere else.",
    source: "MIT / InsideSales Lead Response Study",
    sourceUrl: "https://www.leadresponsemanagement.org/lrm_study",
  },
  {
    stat: "8x",
    title: "Conversion drops fast after 5 minutes",
    description: "InsideSales analyzed 55M+ sales activities and found conversion rates are 8x higher when the first contact attempt happens within 5 minutes.",
    source: "InsideSales Lead Response 2021",
    sourceUrl: "https://www.insidesales.com/wp-content/uploads/2021/02/infographic_LeadRespMgmt2021.pdf",
  },
  {
    stat: "45%",
    title: "After-hours booking is nearly half the demand",
    description: "Zocdoc reports 45% of appointments booked on their platform happen after hours. If you only respond when staff is in, you miss high-intent patients.",
    source: "Zocdoc After-Hours Booking",
    sourceUrl: "https://www.zocdoc.com/resources/blog/article/why-not-offering-after-hours-booking-is-driving-away-patients/",
  },
  {
    stat: "21x",
    title: "Speed wins the qualification race",
    description: "Lead response research shows you're ~21x more likely to qualify a lead when you respond in 5 minutes versus waiting 30 minutes.",
    source: "InsideSales / Oldroyd summary",
    sourceUrl: "https://resources.insidesales.com/blog/what-is-lead-response-management/",
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
            If you're buying leads but responding late, you're funding your competitor's calendar.
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
