import { CheckCircleIcon } from "@/components/icons/BrandIcons";

const tiers = [
  {
    name: "Starter",
    label: "For clinics starting with automation",
    features: [
      "Ads management + basic funnel",
      "CRM pipeline setup",
      "SMS/email follow-up sequences",
      "Basic reporting dashboard",
      "Email & chat support",
    ],
    popular: false,
  },
  {
    name: "Professional",
    label: "For clinics ready to scale bookings",
    features: [
      "Everything in Starter",
      "AI voice qualification",
      "Live transfer to your team",
      "Reactivation campaigns",
      "Weekly optimization calls",
      "Priority support",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    label: "For multi-location or high-volume clinics",
    features: [
      "Everything in Professional",
      "Multi-location support",
      "Custom integrations",
      "Dedicated account manager",
      "Advanced analytics & insights",
      "HIPAA-ready workflows",
    ],
    popular: false,
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
            lead-to-consult conversions.
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
                <p className="text-2xl font-bold text-foreground">Request for pricing</p>
              </div>

              {/* CTA */}
              <a
                href="https://calendly.com/locusops"
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center py-3 rounded-xl font-semibold transition-all duration-300 mb-6 ${
                  tier.popular ? "btn-primary" : "btn-secondary"
                }`}
              >
                Schedule a call
              </a>

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
            Ad spend managed directly by client • 3-month minimum recommended for optimization cycles
          </p>
          <p className="text-xs text-muted-foreground/60">
            HIPAA readiness depends on your tools, configuration, and clinic policies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
