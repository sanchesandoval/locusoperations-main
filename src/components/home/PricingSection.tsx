import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { CheckCircleIcon } from "@/components/icons/BrandIcons";

const services = [
  {
    step: "01",
    label: "IDENTIFY",
    title: "We find where your revenue is leaking.",
    description:
      "We start with a deep diagnostic of your entire lead-to-appointment pipeline. We map every stage — from first contact to booked appointment — and pinpoint the exact leaks costing you money.",
    features: [
      "60-minute pipeline diagnostic",
      "Full funnel mapping (visual)",
      "Top 3 revenue leaks identified",
      "1–2 quick wins fixed live",
      "1-page fix plan delivered same day",
    ],
  },
  {
    step: "02",
    label: "BUILD",
    title: "We build the system that plugs every leak.",
    description:
      "We design and install your complete AI-powered revenue operations system inside your existing tools. No new platforms to learn. No rip-and-replace. Just automation that works 24/7.",
    features: [
      "AI lead response (under 60 seconds)",
      "Multi-channel follow-up (SMS, email, voice)",
      "Smart qualification + booking flows",
      "No-show recovery sequences",
      "Database reactivation campaigns",
      "Live in 2–4 weeks",
    ],
  },
  {
    step: "03",
    label: "OPERATE",
    title: "You run it — or we run it for you.",
    description:
      "Once the system is live, you choose your path. Take it over with our resources and monthly updates, or keep us embedded as your ongoing revenue operations partner. Either way, the system is yours.",
    features: [
      "Monthly workshops + optimization",
      "Template + snapshot library",
      "KPI dashboards + reporting",
      "Optional: ongoing DFY management",
      "Optional: weekly strategy calls",
    ],
  },
];

interface CardMouseState {
  x: number;
  y: number;
  active: boolean;
}

const ServiceCard = ({
  service,
}: {
  service: (typeof services)[number];
}) => {
  const [mouse, setMouse] = useState<CardMouseState>({ x: 0, y: 0, active: false });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top, active: true });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMouse((p) => ({ ...p, active: false }))}
      className="relative card-premium p-6 lg:p-10 overflow-hidden"
    >
      {/* Hover glow */}
      {mouse.active && (
        <div
          className="absolute inset-0 pointer-events-none z-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px circle at ${mouse.x}px ${mouse.y}px, hsl(168 40% 45% / 0.1), transparent 60%)`,
          }}
        />
      )}

      <div className="relative z-10 md:grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* Left — copy */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm font-bold text-primary tracking-widest">{service.step}</span>
            <span className="text-sm font-bold text-primary tracking-widest">{service.label}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">{service.title}</h3>
          <p className="text-muted-foreground leading-relaxed">{service.description}</p>
        </div>

        {/* Right — features */}
        <div className="mt-6 md:mt-0 flex flex-col justify-center">
          <p className="text-sm font-medium text-muted-foreground mb-4">What's Included</p>
          <div className="space-y-3">
            {service.features.map((feature, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircleIcon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground/90">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const PricingSection = () => {
  return (
    <section id="our-services" className="section-spacing relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px] -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px] -translate-y-1/2" />

      <div className="container-main relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary font-medium mb-4">Our Services</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Three Ways to Work With Locus</h2>
          <p className="text-lg text-muted-foreground">
            From diagnosis to deployment to ongoing optimization.
          </p>
        </div>

        <div className="space-y-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link to="/book-call" className="btn-primary text-lg px-8 py-4">
            Book a Free Consultation
          </Link>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Growth Fuel (Ad Spend) managed directly by client. We install the engine; you provide the fuel.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
