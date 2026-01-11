import { BlurFade } from "@/components/magicui/blur-fade";
import { NumberTicker } from "@/components/magicui/number-ticker";

const stats = [
  {
    value: 78,
    suffix: "%",
    label: "Avg Booking Rate",
    description: "Lead to appointment conversion",
  },
  {
    value: 2.5,
    suffix: "x",
    label: "Revenue Increase",
    description: "Within first 90 days",
  },
  {
    value: 60,
    suffix: "%",
    label: "Fewer No-Shows",
    description: "Through smart reminders",
  },
];

const StatsSection = () => {
  return (
    <section className="section-spacing relative overflow-hidden border-y border-border/30">
      <div className="container-main">
        <BlurFade delay={0.1}>
          <div className="text-center mb-12">
            <p className="text-primary font-medium mb-4">Results That Speak</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
              Performance Metrics
            </h2>
          </div>
        </BlurFade>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <BlurFade key={index} delay={0.2 + index * 0.1}>
              <div className="text-center">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-2">
                  <NumberTicker
                    value={stat.value}
                    suffix={stat.suffix}
                    decimalPlaces={stat.value % 1 !== 0 ? 1 : 0}
                  />
                </div>
                <p className="text-lg font-semibold text-foreground mb-1">
                  {stat.label}
                </p>
                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
