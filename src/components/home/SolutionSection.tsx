import { useState, useEffect, useRef } from "react";
const stackItems = [
  {
    layer: "01",
    title: "We diagnose before we build.",
    description: "Most agencies quote before they understand. We audit first, every time. You never pay for a system built on assumptions.",
  },
  {
    layer: "02",
    title: "We work inside your existing stack.",
    description: "No new platforms forced on you. No rip-and-replace. We build inside HubSpot, Salesforce, GoHighLevel, n8n, Zapier. Whatever you're already using.",
  },
  {
    layer: "03",
    title: "We prove what changed.",
    description: "We set the baseline before we touch anything. When the build is done, you can see exactly what moved: speed-to-lead, show rate, pipeline velocity, churn rate. Not a slide deck. Actual numbers.",
  },
];
const SolutionSection = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const index = itemRefs.current.indexOf(entry.target as HTMLDivElement);
        if (entry.isIntersecting && index !== -1) {
          setVisibleItems(prev => new Set([...prev, index]));
        }
      });
    }, {
      threshold: 0.2,
      rootMargin: "0px 0px -50px 0px"
    });
    itemRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, []);
  return <section id="our-services" className="section-spacing relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px] -translate-y-1/2" />

      <div className="container-main relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <p className="text-primary font-medium mb-4">The Solution</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Revenue operations built for the way B2B companies actually grow.{" "}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Most teams don't have an ops person. They have a founder doing everything, a sales team doing their best, and gaps nobody owns. We own the gaps.
          </p>
        </div>

        {/* Stack visualization */}
        <div className="max-w-2xl mx-auto relative">
          {/* Connecting line */}
          <div className="absolute left-[27px] top-8 bottom-8 w-px bg-gradient-to-b from-primary/50 via-primary/30 to-primary/10" />

          <div className="space-y-6 sm:space-y-8">
            {stackItems.map((item, index) => (
              <div
                key={index}
                ref={el => itemRefs.current[index] = el}
                className={`relative flex items-start gap-4 sm:gap-6 group transition-all duration-500 ease-out ${visibleItems.has(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Node */}
                <div className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-card border border-border flex items-center justify-center flex-shrink-0 group-hover:border-primary/50 transition-colors">
                  <span className="text-sm font-mono text-primary">{item.layer}</span>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2 sm:pt-3 pb-4 sm:pb-5">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-3">
                    {item.title}
                  </h3>
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
      </div>
    </section>;
};
export default SolutionSection;