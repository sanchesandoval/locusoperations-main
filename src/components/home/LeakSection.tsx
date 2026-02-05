import { ClockSpeedIcon, RefreshLoopIcon, CalendarSlotIcon } from "@/components/icons/BrandIcons";

const leakItems = [
  {
    icon: ClockSpeedIcon,
    title: "Speed-to-Lead Failure",
    description: "Leads contacted within 5 minutes are 10-20x more likely to convert than those contacted after 30 minutes. The average medical practice takes 2 hours to respond—and in healthcare, whoever answers first usually books the appointment. If your front desk is buried or it's after 5 PM, your $150 lead books with the competitor who responded instantly.",
    cost: "8-15% of monthly revenue in lost first-response appointments",
    example: "A $50K/month clinic loses $4,000-$7,500/month here alone"
  },
  {
    icon: RefreshLoopIcon,
    title: "Follow-Up Inconsistency",
    description: "Most leads need 5–7 touchpoints to book. Without automated sequences (call, SMS, email), your team either burns out chasing cold leads or gives up after one attempt—leaving \"almost-booked\" revenue on the table.",
    cost: "10–18% of monthly revenue in abandoned pipeline",
    example: "A $50K/month clinic loses $5,000–$9,000/month here alone"
  },
  {
    icon: CalendarSlotIcon,
    title: "No-Show & Cancellation Bleed",
    description: "Industry average: 25–40% no-show rate. Every ghost appointment is a double loss—you paid for the lead AND lost the revenue slot. Without reminder sequences and reconfirmation loops, your calendar is Swiss cheese.",
    cost: "5–10% of monthly revenue in empty time slots",
    example: "A $50K/month clinic loses $2,500–$5,000/month here alone"
  }
];

const LeakSection = () => {
  return (
    <section className="section-spacing relative">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-destructive/5 blur-[120px]" />

      <div className="container-main relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary font-medium mb-4">Problem</p>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold mb-6">
            Your Clinic Doesn't Have a Lead Problem.{" "}
            <span className="text-muted-foreground">You have a Revenue Recovery Problem.</span>
          </h2>
          <div className="text-lg text-muted-foreground max-w-2xl mx-auto space-y-4">
            <p>
              Most wellness clinics hit a revenue ceiling—not because they need more leads, but because they're losing <strong className="text-foreground">15–30% of potential revenue</strong> on leads that never convert.
            </p>
            <p>
              For a clinic doing $30K/month, that's <strong className="text-foreground">$4,500–$9,000</strong> disappearing every month. For a clinic doing $150K/month, it's <strong className="text-foreground">$22,500–$45,000</strong>.
            </p>
            <p>
              The gap between "ad click" and "booked appointment" is where your revenue bleeds. Without a system to respond instantly, follow up consistently, and capture after-hours inquiries, you're funding your competitors' calendars.
            </p>
          </div>
        </div>

        {/* Leak list */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {leakItems.map((item, index) => (
            <div key={index} className="card-premium-hover p-6 group">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center flex-shrink-0 group-hover:bg-destructive/20 transition-colors">
                    <item.icon className="w-5 h-5 text-destructive/80" />
                  </div>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
                <div className="pt-3 border-t border-border/50 space-y-1">
                  <p className="text-sm font-medium text-destructive/90">Cost: {item.cost}</p>
                  <p className="text-xs text-muted-foreground">({item.example})</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeakSection;