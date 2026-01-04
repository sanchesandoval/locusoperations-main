import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const stackItems = [
  {
    layer: "01",
    title: "Acquisition",
    outline: "Turn ad spend into qualified leads with high-converting campaigns.",
    description: "Premium lead generation with high-converting ads, compelling offers, and optimized landing pages",
  },
  {
    layer: "02",
    title: "Capture",
    outline: "Never lose a lead—capture, organize, and route instantly.",
    description: "Automated CRM pipeline setup to capture, organize, and route every lead instantly",
  },
  {
    layer: "03",
    title: "Engage",
    outline: "Turn cold leads into booked consults with multi-touch follow-up.",
    description: "Multi-touch SMS and email sequences with AI voice qualification and live transfer to your team",
  },
  {
    layer: "04",
    title: "Convert",
    outline: "Fill your calendar with confirmed appointments, not no-shows.",
    description: "Seamless booking system with automated reminders, confirmations, and no-show reactivation",
  },
  {
    layer: "05",
    title: "Optimize",
    outline: "Continuously improve ROI with data-driven iteration.",
    description: "Weekly iteration and continuous improvement to maximize your ROI",
  },
];

const SolutionSection = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = itemRefs.current.indexOf(entry.target as HTMLDivElement);
          if (entry.isIntersecting && index !== -1) {
            setVisibleItems((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-spacing relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px] -translate-y-1/2" />

      <div className="container-main relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary font-medium mb-4">The Solution</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            What Locus Installs
          </h2>
          <p className="text-lg text-muted-foreground">
            A complete lead-to-booked-appointment engine. Every piece works together.
          </p>
        </div>

        {/* Stack visualization */}
        <div className="max-w-2xl mx-auto relative">
          {/* Connecting line */}
          <div className="absolute left-[27px] top-8 bottom-8 w-px bg-gradient-to-b from-primary/50 via-primary/30 to-primary/10" />

          <div className="space-y-6">
            {stackItems.map((item, index) => (
              <div
                key={index}
                ref={(el) => (itemRefs.current[index] = el)}
                className={`relative flex items-start gap-6 group transition-all duration-500 ease-out ${
                  visibleItems.has(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Node */}
                <div className="relative z-10 w-16 h-16 rounded-xl bg-card border border-border flex items-center justify-center flex-shrink-0 group-hover:border-primary/50 transition-colors">
                  <span className="text-sm font-mono text-primary">{item.layer}</span>
                </div>

                {/* Content */}
                <div className="flex-1 pt-3 pb-5">
                  <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-primary/80 font-medium mb-2">
                    {item.outline}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>

                {/* Glow on hover */}
                <div className="absolute inset-0 -left-4 -right-4 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
              </div>
            ))}
          </div>
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

export default SolutionSection;
