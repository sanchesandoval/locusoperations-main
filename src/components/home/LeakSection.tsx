import { Link } from "react-router-dom";
import { ClockSpeedIcon, RefreshLoopIcon, LeadSignalIcon, CalendarSlotIcon, ShieldIcon, LeakDropIcon, LowSignalIcon, TurtleIcon } from "@/components/icons/BrandIcons";
const leakItems = [{
  icon: LowSignalIcon,
  title: "Unfiltered Acquisition",
  description: "Low-quality, high-friction volume is clogging your pipelines and wasting clinical resources."
}, {
  icon: TurtleIcon,
  title: "Lead Decay",
  description: "Inquiries go cold in seconds. Without instant automation, you are losing the \"Speed-to-Lead\" race."
}, {
  icon: LeadSignalIcon,
  title: "Fragmented Nurture",
  description: "One-and-done follow-up isn't a strategy; it's a gamble. Most patients require 5–7 touches to commit."
}, {
  icon: ShieldIcon,
  title: "Missed After-Hours Leads",
  description: "50%+ of patient inquiries happen after 5 PM. If your system is \"closed,\" your competitors are booking."
}, {
  icon: CalendarSlotIcon,
  title: "Confirmation Slippage",
  description: "Human error in scheduling leads to empty chairs. Without a redundant confirmation loop, your ROI vanishes."
}, {
  icon: RefreshLoopIcon,
  title: "Stagnant Asset Equity",
  description: "Your old leads are clinical assets. Leaving them dormant is leaving thousands in realized revenue on the table."
}];
const LeakSection = () => {
  return <section className="section-spacing relative">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-destructive/5 blur-[120px]" />

      <div className="container-main relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary font-medium mb-4">Problem</p>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold mb-6">
            Your Clinic Doesn't Have a Lead Problem. <span className="text-muted-foreground">You have a Revenue Recovery Problem.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Most wellness clinics hit a revenue ceiling—not because they need more leads, but because they're losing 15–30% of potential revenue on leads that never convert. For a clinic doing $30K/month, that's $4,500–$9,000 disappearing every month. For a clinic doing $150K/month, it's $22,500–$45,000. The gap between "ad click" and "booked appointment" is where your revenue bleeds. Without a system to respond instantly, follow up consistently, and capture after-hours inquiries, you're funding your competitors' calendars.
          </p>
        </div>

        {/* Leak list */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {leakItems.map((item, index) => <div key={index} className="card-premium-hover p-6 group">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center flex-shrink-0 group-hover:bg-destructive/20 transition-colors">
                  <item.icon className="w-5 h-5 text-destructive/80" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default LeakSection;