import { Link } from "react-router-dom";
import { CheckCircleIcon } from "@/components/icons/BrandIcons";

const tiers = [
  {
    name: "Locus Core",
    label: "The Foundation: For clinics needing DIY growth tools and robust infrastructure.",
    features: [
      "Locus OS",
      "DIY Clinical Ad Library",
      "Missed-Call Text-Back Automation",
      "Automated Lead Nurture Engine",
      "Technical Support Bot",
    ],
    popular: false,
    ctaText: "Watch 5-Min System Demo",
    ctaLink: "/system-demo",
    pricingText: "Investment Revealed in Demo",
  },
  {
    name: "Locus Growth",
    label: "Build & Release: For clinics ready to scale via AI automation and system implementation.",
    features: [
      "Everything in Locus Core",
      "Build & Release (SCALE Implementation)",
      "AI Digital Cortex (Voice/SMS Front Desk Receptionist)",
      "Database Reactivation Campaign",
      "Monthly Revenue Operations (RevOps) Audit",
    ],
    popular: true,
    ctaText: "Watch 5-Min System Demo",
    ctaLink: "/system-demo",
    pricingText: "Investment Revealed in Demo",
  },
  {
    name: "Locus Elite",
    label: "The Systems Partner: For multi-location enterprises seeking fractional operations and total autonomy.",
    features: [
      "Everything in Locus Growth",
      "Multi location support (if applicable)",
      "Full & Custom Tech Stack Integrations (EMR/EHR)",
      "Fractional COO Support",
      "Clinical Staff Training & Placement",
      "KPI Intelligence with advanced analytics",
    ],
    popular: false,
    ctaText: "Book Pipeline Diagnostic",
    ctaLink: "/pipeline-diagnostic",
    pricingText: "Request for pricing",
  },
];

const PricingSection = () => {
  return (
    <section className="section-spacing relative overflow-hidden">
      {/* Left glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px] -translate-y-1/2" />

      {/* Right glow */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px] -translate-y-1/2" />

      <div className="container-main relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary font-medium mb-4">Our Services</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Engineered Conversion Infrastructure</h2>
          <p className="text-lg text-muted-foreground">
            Locus installs the Central Nervous System your clinic needs to eliminate revenue leakage and force
            lead-to-appointment conversions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`relative card-premium p-6 lg:p-8 flex flex-col ${
                tier.popular ? "border-primary/50 ring-1 ring-primary/20" : ""
              }`}
            >
              {/* Popular badge */}
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                    Popular
                  </span>
                </div>
              )}

              {/* Header */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{tier.name}</h3>
                <p className="text-sm text-muted-foreground">{tier.label}</p>
              </div>

              {/* Pricing */}
              <div className="mb-6 pb-6 border-b border-border/50">
                <p className="text-2xl font-bold text-foreground">{tier.pricingText}</p>
              </div>

              {/* CTA */}
              <Link
                to={tier.ctaLink}
                className={`block text-center py-3 rounded-xl font-semibold transition-all duration-300 mb-6 ${
                  tier.popular ? "btn-primary" : "btn-secondary"
                }`}
              >
                {tier.ctaText}
              </Link>

              {/* Features */}
              <div className="space-y-3 flex-1">
                <p className="text-sm font-medium text-muted-foreground">What's Included:</p>
                {tier.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/90">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional notes */}
        <div className="mt-12 text-center space-y-2">
          <p className="text-sm text-muted-foreground">
            Growth Fuel (Ad Spend) managed directly by client. We install the engine; you provide the fuel.
          </p>
          <p className="text-xs text-muted-foreground/60">
            HIPAA readiness depends on your tools, configuration, and clinic policies. Locus provides the technical Central Nervous System; you maintain the clinical standard.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
