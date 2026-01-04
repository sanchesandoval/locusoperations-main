const researchCards = [
  {
    stat: "78%",
    title: "Slow Replies Send Leads to Competitors",
    description: "Leads contact multiple providers at once, and 78% of patients end up choosing the clinic that replies first, so slow replies hand your ad spend to competitors."
    source: "Egg Health Hub - Med spa Automation",
    sourceUrl: "https://www.egghealthhub.com/blogs/med-spa-automation-workflows-to-boost-bookings,
  },
  {
    stat: "100x",
    title: "Speed-to-Lead Turns Clicks to Bookings",
    description: "Industry data shows that leads contacted within 5 minutes can be up to 100x more likely to convert. If you wait, your paid clicks turn into 'ghost' leads.",
    source: "salesMD - Med Spa Lead Response",
    sourceUrl: "https://www.salesmd.com/med-spa-leads-9-ways-to-get-them-booked/"
  },
  {
    stat: "5-7",
    title: "Most Leads Need Multiple Touches",
    description: "Many prospects don't book after one message. One industry source claims 5-7 touchpoints are often needed before scheduling, so one-and-done follow-ups waste the leads you already paid for.",
    source: "Digital Marketing - Med Spa Lead Generation Secrets",
    sourceUrl: "https://www.ednadigitalmarketing.com/med-spa-lead-generation-secrets",
  },
  {
    stat: "50-60%",
    title: "After-Hours Booking is Huge",
    description: "Some med spa sources report 50-60% of bookings happen after hours. If your clinic only responds during open hours, your calendar loses to the clinic that can book 24/7.",
    source: "MangoMint + Aesthetic Record - Online Booking"
    sourceUrl: "https://www.mangomint.com/blog/med-spa-booking-statistics/",
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
