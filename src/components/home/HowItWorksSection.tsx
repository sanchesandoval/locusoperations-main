import { Link } from "react-router-dom";

const steps = [
  {
    step: "01",
    title: "Diagnose Leaks",
    description: "Take the Leak Finder assessment and get a custom audit of where your bookings are slipping through the cracks.",
  },
  {
    step: "02",
    title: "Install Engine",
    description: "We build, integrate, and launch your complete lead-to-booking system. Pipeline, automation, and AI—all configured for your clinic.",
  },
  {
    step: "03",
    title: "Optimize & Scale",
    description: "Weekly optimizations, A/B testing, and performance reviews to continuously improve your booking rate and reduce cost per acquisition.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="section-spacing relative">
      <div className="container-main">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary font-medium mb-4">The Process</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Three phases to transform your lead operations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((item, index) => (
            <div 
              key={index} 
              className="bg-card border border-border rounded-2xl p-6 lg:p-8 space-y-4"
            >
              <span className="text-4xl lg:text-5xl font-light text-primary">{item.step}</span>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
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

export default HowItWorksSection;
