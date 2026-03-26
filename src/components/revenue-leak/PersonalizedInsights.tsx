import { AlertTriangle } from "lucide-react";

interface CategoryScore {
  name: string;
  gaps: number;
  total: number;
}

const insightMap: Record<string, string> = {
  "Speed-to-Lead":
    "Your leads are waiting too long for a response. Leads contacted within 5 minutes are 21x more likely to qualify. Every hour of delay costs you pipeline you already paid to generate.",
  "Follow-Up":
    "You're generating leads but not converting them. 59% of qualified leads never convert because follow-up is inconsistent. A multi-touch sequence across SMS, email, and voice changes this completely.",
  Conversion:
    "Leads who can't self-schedule drop off. Friction in the demo or intro call flow kills conversion before the conversation even starts.",
  "Pipeline Retention":
    "You're getting meetings on the calendar but losing them before they happen. Automated confirmation and re-engagement sequences reduce no-show rates and recover ghosted opportunities.",
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
