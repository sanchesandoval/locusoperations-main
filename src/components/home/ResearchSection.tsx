import { Link } from "react-router-dom";
import { NumberTicker } from "@/components/magicui/number-ticker";

const researchCards = [
  {
    value: 20,
    suffix: "x",
    prefix: "10-",
    title: "Higher Conversion",
    description: "Leads contacted within 5 minutes are 10-20x more likely to book than those contacted after 30 minutes.",
    source: "InfluxMD 2026 Healthcare Lead Conversion Study",
  },
  {
    value: 25,
    suffix: "%",
    title: "After-Hours Missed Revenue",
    description: "Over 25% of inbound calls to medical practices go unanswered. If your system is \"closed,\" you're losing booked appointments to competitors who respond 24/7.",
    source: "InfluxMD 2026",
  },
  {
    value: 5,
    suffix: "x",
    prefix: "2-",
    title: "Multi-Touch Follow-Up",
    description: "Automated multi-touch follow-up converts 2-5x more leads than manual, one-off attempts. 59% of qualified callers never book when follow-up is inconsistent.",
    source: "InfluxMD 2026",
  },
  {
    value: 40,
    suffix: "%",
    prefix: "25-",
    title: "No-Show Reduction",
    description: "Automated SMS and phone reminders cut no-shows by 25-40% compared to clinics with manual or no reminder systems.",
    source: "2020 RCT + 2013 Systematic Review",
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
