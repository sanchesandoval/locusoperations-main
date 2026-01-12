import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
const stackItems = [{
  layer: "01",
  letter: "S",
  title: "ystemize",
  outline: "Map your unique clinical workflow.",
  description: "We map your unique clinical workflow, documenting the exact path from click to consult."
}, {
  layer: "02",
  letter: "C",
  title: "onsolidate",
  outline: "Eliminate tool fatigue.",
  description: "We eliminate \"tool fatigue\" by merging your assets and data into the Locus Canvas."
}, {
  layer: "03",
  letter: "A",
  title: "utomate",
  outline: "Deploy the Digital Cortex.",
  description: "We deploy the \"Digital Cortex\"—AI Front Desk agents that answer FAQs and book consults 24/7."
}, {
  layer: "04",
  letter: "L",
  title: "everage",
  outline: "Scale without adding staff.",
  description: "We install our proprietary Locus OS snapshots so your team can manage volume without adding staff."
}, {
  layer: "05",
  letter: "E",
  title: "valuate",
  outline: "Track the only metric that matters.",
  description: "We install real-time KPI tracking to measure the only metric that matters: Cost Per Booked Consult."
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
  return <section className="section-spacing relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px] -translate-y-1/2" />

      <div className="container-main relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary font-medium mb-4">Solution</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            The SCALE Framework
          </h2>
          <p className="text-lg text-muted-foreground">
            Engineering Your Lead-to-Consult Pipeline.
          </p>
        </div>

        {/* Stack visualization */}
        <div className="max-w-2xl mx-auto relative">
          {/* Connecting line */}
          <div className="absolute left-[27px] top-8 bottom-8 w-px bg-gradient-to-b from-primary/50 via-primary/30 to-primary/10" />

          <div className="space-y-6">
            {stackItems.map((item, index) => <div key={index} ref={el => itemRefs.current[index] = el} className={`relative flex items-start gap-6 group transition-all duration-500 ease-out ${visibleItems.has(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{
            transitionDelay: `${index * 100}ms`
          }}>
                {/* Node */}
                <div className="relative z-10 w-16 h-16 rounded-xl bg-card border border-border flex items-center justify-center flex-shrink-0 group-hover:border-primary/50 transition-colors">
                  <span className="text-sm font-mono text-primary">{item.layer}</span>
                </div>

                {/* Content */}
                <div className="flex-1 pt-3 pb-5">
                <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    <span className="text-primary">[{item.letter}]</span>{item.title}
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
              </div>)}
          </div>
        </div>

      </div>
    </section>;
};
export default SolutionSection;