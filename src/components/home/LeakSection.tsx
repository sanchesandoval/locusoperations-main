import { ClockSpeedIcon, RefreshLoopIcon, CalendarSlotIcon } from "@/components/icons/BrandIcons";
const leakItems = [{
  icon: ClockSpeedIcon,
  title: "Speed-to-Lead Failure",
  description: "Leads contacted within 5 minutes are 10-20x more likely to book.\n\nMost businesses take 2+ hours to respond.",
  cost: "8–15% of monthly revenue"
}, {
  icon: RefreshLoopIcon,
  title: "Follow-Up Inconsistency",
  description: "59% of qualified callers never book an appointment.\n\nMost practices stop after one attempt.",
  cost: "10–18% of monthly revenue"
}, {
  icon: CalendarSlotIcon,
  title: "No-Show & Cancellation Bleed",
  description: "Medical practices see 10–30% no-show rates.\n\nAutomated reminders cut this by 25–40%.",
  cost: "5–10% of monthly revenue"
}];
const LeakSection = () => {
  return <section className="section-spacing relative">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-destructive/5 blur-[120px]" />

      <div className="container-main relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary font-medium mb-4">Problem</p>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold mb-8">
            You Don't Have a Lead Problem.{" "}
            <span className="text-muted-foreground">You Have a Revenue Leak Problem.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Most appointment-based businesses lose <strong className="text-foreground">20–40% of potential revenue</strong> on leads that never convert. Three fixable failures cause this:
          </p>
        </div>

        {/* Leak list */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {leakItems.map((item, index) => <div key={index} className="card-premium-hover p-6 group">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center flex-shrink-0 group-hover:bg-destructive/20 transition-colors">
                    <item.icon className="w-5 h-5 text-destructive/80" />
                  </div>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
                <div className="pt-3 border-t border-border/50">
                  <p className="text-sm font-medium text-destructive/90">Cost: {item.cost}</p>
                </div>
              </div>
            </div>)}
        </div>

        {/* Summary text */}
        <div className="max-w-2xl mx-auto text-center mt-12 space-y-2">
          <p className="text-lg text-muted-foreground">
            Combined, these three failures cost most clinics <strong className="text-foreground">20–40% of potential revenue</strong>.
          </p>
          <p className="text-xl font-semibold text-foreground">
            One system fixes all three.
          </p>
        </div>
      </div>
    </section>;
};
export default LeakSection;