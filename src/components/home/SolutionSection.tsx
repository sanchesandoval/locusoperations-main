const stackItems = [
  {
    layer: "01",
    title: "Ads + Offer + Landing",
    description: "Premium lead generation with high-converting offers and landing pages",
  },
  {
    layer: "02",
    title: "GHL Pipeline",
    description: "Automated CRM setup to capture and organize every lead",
  },
  {
    layer: "03",
    title: "Automated Follow-up",
    description: "Multi-touch SMS and email sequences that run 24/7",
  },
  {
    layer: "04",
    title: "AI Voice Qualification",
    description: "Instant lead qualification with live transfer to your team",
  },
  {
    layer: "05",
    title: "Booking + Reminders",
    description: "Seamless scheduling with automated confirmation systems",
  },
  {
    layer: "06",
    title: "Reactivation",
    description: "Turn past leads and no-shows into booked appointments",
  },
  {
    layer: "07",
    title: "Weekly Optimization",
    description: "Continuous improvement to maximize your ROI",
  },
];

const SolutionSection = () => {
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

          <div className="space-y-4">
            {stackItems.map((item, index) => (
              <div
                key={index}
                className="relative flex items-start gap-6 group"
              >
                {/* Node */}
                <div className="relative z-10 w-14 h-14 rounded-xl bg-card border border-border flex items-center justify-center flex-shrink-0 group-hover:border-primary/50 transition-colors">
                  <span className="text-xs font-mono text-primary">{item.layer}</span>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2 pb-4">
                  <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
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
    </section>
  );
};

export default SolutionSection;
