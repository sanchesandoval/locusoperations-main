import { ClockSpeedIcon, RefreshLoopIcon, LeadSignalIcon, CalendarSlotIcon, ShieldIcon, LeakDropIcon, LowSignalIcon, TurtleIcon } from "@/components/icons/BrandIcons";
const leakItems = [{
  icon: LowSignalIcon,
  title: "Weak ad targeting",
  description: "Wrong audience = wasted budget"
}, {
  icon: TurtleIcon,
  title: "Slow response time",
  description: "Leads go cold in minutes, not hours"
}, {
  icon: LeadSignalIcon,
  title: "No follow-up sequence",
  description: "One call isn't enough to convert"
}, {
  icon: ShieldIcon,
  title: "After-hours leads ignored",
  description: "50%+ of leads come after 5pm"
}, {
  icon: CalendarSlotIcon,
  title: "No reminders = no-shows",
  description: "Confirmations prevent empty chairs"
}, {
  icon: RefreshLoopIcon,
  title: "No reactivation = dead database",
  description: "Past leads are money on the table"
}];
const LeakSection = () => {
  return <section className="section-spacing relative">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-destructive/5 blur-[120px]" />

      <div className="container-main relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary font-medium mb-4">The Problem</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Your ads are working.{" "}
            <span className="text-muted-foreground">Your booking system isn't.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">You're paying for leads you can't convert. Slow response, missed calls, after-hours gaps, staff overload, and inconsistent follow-up are bleeding your ad budget dry.</p>
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