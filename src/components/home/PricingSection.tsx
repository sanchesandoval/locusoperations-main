import { Link } from "react-router-dom";
import { CheckCircleIcon } from "@/components/icons/BrandIcons";

const tiers = [
  {
    name: "Locus Core",
    label: "The Operating System — For clinics who want the infrastructure and can deploy it themselves.",
    features: [
      "Locus OS (booking + follow-up automation)",
      "DIY clinical workflow templates",
      "Missed-call text-back automation",
      "Automated lead nurture engine",
      "Technical support bot",
    ],
    popular: false,
    ctaText: "Watch 5-Min System Demo",
    ctaLink: "/system-demo",
  },
  {
    name: "Locus Ops",
    label: "Full Deployment + Revenue Operations — For clinics ready to go live fast with professional installation and AI front desk.",
    features: [
      "Everything in Locus Core",
      "Full systems mapping & implementation",
      "AI Digital Cortex (voice/SMS front desk)",
      "Database reactivation campaign",
      "Monthly revenue operations support",
    ],
    popular: true,
    ctaText: "Book Strategy Call",
    ctaLink: "/book-call",
  },
  {
    name: "Locus Command",
    label: "Enterprise Infrastructure + Fractional COO — For multi-location clinics or owners who want ongoing optimization and custom builds.",
    features: [
      "Everything in Locus Ops",
      "Multi-location support (if applicable)",
      "Custom tech stack integrations (EMR/EHR)",
      "Fractional COO operations partnership",
      "Clinical staff training & placement",
      "Advanced KPI intelligence & analytics",
    ],
    popular: false,
    ctaText: "Book Strategy Call",
    ctaLink: "/book-call",
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Three Ways to Work With Locus</h2>
          <p className="text-lg text-muted-foreground">
            Pick the level of support that fits your clinic.
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
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Growth Fuel (Ad Spend) managed directly by client. We install the engine; you provide the fuel.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
