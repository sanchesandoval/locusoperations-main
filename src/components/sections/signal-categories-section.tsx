import { siteConfig } from "@/lib/config";
import { Crown, Eye, Layers, TrendingUp, UserCheck, UserPlus } from "lucide-react";

const signals = [
  {
    id: 1,
    title: "The Hiring Play",
    description:
      "Job posts are budget decisions made public, for problems you solve. We match the job description's actual keywords to what your product replaces or supports.",
    icon: <UserPlus className="size-5" />,
  },
  {
    id: 2,
    title: "The Funding Play",
    description:
      "Fresh capital, fresh budget, a mandate to move fast. The 90 days after a raise are the easiest meetings you'll book.",
    icon: <TrendingUp className="size-5" />,
  },
  {
    id: 3,
    title: "The New Leader Play",
    description:
      "A new VP audits the whole stack in their first 90 days. Show up while it's still up for review.",
    icon: <Crown className="size-5" />,
  },
  {
    id: 4,
    title: "The Champion Play",
    description:
      "A past buyer changed jobs. They already know what you do and already trust you. It's the warmest outbound that exists.",
    icon: <UserCheck className="size-5" />,
  },
  {
    id: 5,
    title: "The Stack Signal Play",
    description:
      "A company adopts a new tool in your category and hits a ceiling fast. Tool adoption means they're building something, and building means they need help finishing it.",
    icon: <Layers className="size-5" />,
  },
  {
    id: 6,
    title: "The Content Play",
    description:
      "Companies repeatedly visiting solution pages and consuming category content without converting. Warm intent, no form submitted.",
    icon: <Eye className="size-5" />,
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

      <p className="text-muted-foreground text-sm text-center max-w-xl">
        {signalCategoriesSection.closingNote}
      </p>
    </section>
  );
}
