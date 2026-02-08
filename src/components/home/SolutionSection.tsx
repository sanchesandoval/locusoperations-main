import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
const stackItems = [{
  layer: "01",
  title: "Instant Response",
  description: "AI answers inquiries in under 60 seconds via call, SMS, and email—24/7, even after hours."
}, {
  layer: "02",
  title: "Automated Follow-Up",
  description: "Multi-touch sequences (call + SMS + email) convert leads your team would have lost after one attempt."
}, {
  layer: "03",
  title: "No-Show Prevention",
  description: "Automated reminders and reconfirmation loops cut no-shows by 25-40%."
}];
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
  return <section id="how-it-works" className="section-spacing relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px] -translate-y-1/2" />

      <div className="container-main relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary font-medium mb-4">Solution</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            How Locus Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Three systems that fix the revenue leaks in your clinic.
          </p>
        </div>

        {/* Stack visualization */}
        <div className="max-w-2xl mx-auto relative">
          {/* Connecting line */}
          <div className="absolute left-[27px] top-8 bottom-8 w-px bg-gradient-to-b from-primary/50 via-primary/30 to-primary/10" />

          <div className="space-y-8">
            {stackItems.map((item, index) => <div key={index} ref={el => itemRefs.current[index] = el} className={`relative flex items-start gap-6 group transition-all duration-500 ease-out ${visibleItems.has(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{
            transitionDelay: `${index * 100}ms`
          }}>
                {/* Node */}
                <div className="relative z-10 w-16 h-16 rounded-xl bg-card border border-border flex items-center justify-center flex-shrink-0 group-hover:border-primary/50 transition-colors">
                  <span className="text-sm font-mono text-primary">{item.layer}</span>
                </div>

                {/* Content */}
                <div className="flex-1 pt-3 pb-5">
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>

                {/* Glow on hover */}
                <div className="absolute inset-0 -left-4 -right-4 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
              </div>)}
          </div>
        </div>

      </div>
    </section>;
};
export default SolutionSection;