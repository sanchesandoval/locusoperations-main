import { siteConfig } from "@/lib/config";
import { Eye, Layers, Target, TrendingUp, UserPlus, Zap } from "lucide-react";

const signals = [
  {
    id: 1,
    title: "Buying Intent",
    description:
      "Prospects actively comparing solutions, reading category reviews, and engaging with competitor content. Research behavior that happens before any form gets filled.",
    icon: <Target className="size-5" />,
  },
  {
    id: 2,
    title: "Hiring Signals",
    description:
      "A GTM, sales, or marketing hire signals approved budget and a build starting. Be positioned before the role is filled and the vendor list closes.",
    icon: <UserPlus className="size-5" />,
  },
  {
    id: 3,
    title: "Funding & Leadership",
    description:
      "New funding and leadership changes reset buying cycles. A new CRO or VP of Marketing has 90 days to show results. That's the window.",
    icon: <TrendingUp className="size-5" />,
  },
  {
    id: 4,
    title: "Site & Content Behavior",
    description:
      "Companies repeatedly visiting solution pages and consuming category content without converting. Warm intent with no form submitted.",
    icon: <Eye className="size-5" />,
  },
  {
    id: 5,
    title: "Tech Stack Signals",
    description:
      "A company adopting a new CRM, automation tool, or outbound platform is building something and hitting a ceiling. Tool adoption signals an execution gap.",
    icon: <Layers className="size-5" />,
  },
  {
    id: 6,
    title: "Growth Signals",
    description:
      "Rapid headcount growth, new market entries, and product launches. When a company is scaling fast, their GTM capacity can't keep pace. That's the gap.",
    icon: <Zap className="size-5" />,
  },
];

export function SignalCategoriesSection() {
  const { signalCategoriesSection } = siteConfig;

  return (
    <section
      id="signals"
      className="flex flex-col items-center justify-center gap-10 py-20 w-full px-6"
    >
      <div className="text-center max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-secondary mb-3">
          {signalCategoriesSection.badge}
        </p>
        <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-balance mb-4">
          {signalCategoriesSection.title}
        </h2>
        <p className="text-muted-foreground text-base md:text-lg text-balance">
          {signalCategoriesSection.description}
        </p>
      </div>

      <div className="w-full max-w-5xl grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {signals.map((signal) => (
          <article
            key={signal.id}
            className="border border-border/70 bg-card/30 flex h-full flex-col gap-3 rounded-3xl p-6"
          >
            <span className="bg-secondary/10 text-secondary flex size-12 items-center justify-center rounded-full shrink-0">
              {signal.icon}
            </span>
            <h3 className="text-lg font-semibold tracking-tight">
              {signal.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-6">
              {signal.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
