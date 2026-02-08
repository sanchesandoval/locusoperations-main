import { AlertTriangle } from "lucide-react";

interface CategoryScore {
  name: string;
  gaps: number;
  total: number;
}

const insightMap: Record<string, string> = {
  "Speed-to-Lead":
    "Your leads are waiting too long for a response. Research shows that leads contacted within 5 minutes are 10-20x more likely to book. Every hour of delay costs you booked appointments.",
  "Follow-Up":
    "You're generating leads but not converting them. 59% of qualified leads never book because follow-up is inconsistent. A multi-touch sequence across SMS, email, and voice changes this completely.",
  Booking:
    "Leads who can't self-book drop off. Requiring a phone call to schedule creates friction that kills conversion rates.",
  "No-Shows":
    "You're booking appointments but losing them to no-shows and cancellations. Automated confirmation and reminder sequences reduce this by 25-40%.",
  Reactivation:
    "You have a database of past leads and prospects who went cold. Without a reactivation system, this revenue stays locked up.",
};

interface Props {
  categoryScores: CategoryScore[];
}

const PersonalizedInsights = ({ categoryScores }: Props) => {
  const weakest = [...categoryScores]
    .filter((c) => c.gaps > 0)
    .sort((a, b) => b.gaps / b.total - a.gaps / a.total)
    .slice(0, 3);

  if (weakest.length === 0) return null;

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-center">Your Biggest Leaks</h3>
      <div className="grid gap-4">
        {weakest.map((cat) => (
          <div key={cat.name} className="card-premium p-5 sm:p-6 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-destructive" />
                <h4 className="font-semibold text-foreground">{cat.name}</h4>
              </div>
              <span className="text-xs font-medium text-destructive bg-destructive/10 px-2 py-1 rounded-full">
                {cat.gaps} of {cat.total} gaps
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {insightMap[cat.name] || "This area needs attention."}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalizedInsights;
