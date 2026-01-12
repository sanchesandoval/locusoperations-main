import { Link } from "react-router-dom";
import { NumberTicker } from "@/components/magicui/number-ticker";

const researchCards = [
  {
    value: 21,
    suffix: "x",
    title: "Higher Qualification Rate",
    description: "Leads contacted within 5 minutes are 21x more likely to be qualified than those reached after 30 minutes. In the elective medical space, response speed is the primary driver of patient acquisition.",
    source: "LeadResponseManagement / InsideSales Study",
  },
  {
    value: 10,
    suffix: "%",
    prefix: "<",
    title: "After-Hours Capture",
    description: "Most wellness clinics capture less than 10% of bookings after 5 PM, despite a massive share of high-ticket inquiries arriving in the evening. Our AI Front Desk closes this gap 24/7.",
    source: "Mangomint Med-Spa Booking Statistics",
  },
  {
    value: 5,
    suffix: "–7",
    title: "Essential Touchpoints",
    description: "High-ticket wellness patients require 5–7 touches across SMS, email, and phone before committing to a cash-pay consult. If your team stops after one call, you are subsidizing your competitors.",
    source: "Digital Marketing Med-Spa Sales Funnel Guides",
  },
  {
    value: 70,
    suffix: "%+",
    title: "Booking Rate on Old Leads",
    description: "Automated reactivation of dormant databases routinely yields a 70%+ lead-to-booking rate. Your old inquiries are clinical assets; Locus turns them into realized revenue.",
    source: "GoHighLevel Case Example & CRM Playbooks",
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
                {card.prefix && <span>{card.prefix}</span>}
                <NumberTicker value={card.value} suffix={card.suffix} />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {card.description}
              </p>
              <span className="text-xs text-muted-foreground/70">
                {card.source}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ResearchSection;
