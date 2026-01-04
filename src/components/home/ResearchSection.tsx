import { Link } from "react-router-dom";

const researchCards = [
  {
    stat: "78%",
    title: "Slow Replies Send Leads to Competitors",
    description: "Leads usually contact multiple providers at once, and 78% of patients end up choosing the clinic that replies first. Many clinics still take 12-24 hours to respond, by then the prospect has already booked somewhere else.",
    source: "Egg Health Hub - Med spa Automation",
    sourceUrl: "https://www.egghealthhub.com/blogs/med-spa-automation-workflows-to-boost-bookings",
  },
  {
    stat: "21x",
    title: "Speed-to-Lead turns Clicks into Bookings",
    description: "Following up within 5 minutes makes you 21x more likely to qualify a lead than waiting 30 minutes. Automation keeps you inside the 5-minute window even when your front desk is busy or the clinic is closed.",
    source: "Lead Response Management Study",
    sourceUrl: "https://cdn2.hubspot.net/hub/25649/file-13535879-pdf/docs/mit_study.pdf"
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
    source: "MangoMint + Aesthetic Record - Online Booking",
    sourceUrl: "https://www.mangomint.com/blog/med-spa-booking-statistics/",
  },
];

const ResearchSection = () => {
  return (
    <section className="section-spacing relative">

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

        <div className="text-center mt-12">
          <Link to="/leak-finder" className="btn-primary text-base px-8 py-4">
            Start Leak Finder
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
