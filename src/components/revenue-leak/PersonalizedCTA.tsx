import { Link } from "react-router-dom";
import { ArrowRight, Lightbulb } from "lucide-react";

interface CategoryScore {
  name: string;
  gaps: number;
  total: number;
}

const quickWins: Record<string, string> = {
  "Speed-to-Lead":
    "Set up an auto-reply (SMS + email) that fires within 60 seconds of a new inquiry.",
  "Follow-Up":
    "Create a 3-touch follow-up sequence (Day 1, Day 3, Day 7) for every unconverted lead.",
  Booking:
    "Add an online booking link to your website, email signature, and auto-replies.",
  "No-Shows":
    "Send an automated reminder 24 hours and 1 hour before each appointment.",
  Reactivation:
    "Run a simple 're-engagement' text to all leads who went dark in the last 90 days.",
};

interface Props {
  score: number;
  q16Answer: string | null;
  categoryScores: CategoryScore[];
}

const PersonalizedCTA = ({ score, q16Answer, categoryScores }: Props) => {
  const weakest = [...categoryScores]
    .filter((c) => c.gaps > 0)
    .sort((a, b) => b.gaps / b.total - a.gaps / a.total)
    .slice(0, 3);

  const isFullService =
    q16Answer === "I want someone to build and manage the entire system for me";
  const isBuildHandoff =
    q16Answer === "I want someone to build it, then I'll run it myself";

  if (isFullService) {
    return (
      <div className="card-premium p-6 sm:p-8 text-center space-y-5">
        <p className="text-foreground font-semibold text-lg">
          Your pipeline has {score} critical leak{score !== 1 ? "s" : ""}.
        </p>
        <p className="text-muted-foreground">
          Recommended: Book a free 30-minute pipeline review with our team.
          We'll walk through your specific results and show you exactly what to
          fix first.
        </p>
        <Link
          to="/book-call"
          className="btn-primary inline-flex items-center gap-2 text-base px-8 py-4"
        >
          Book My Free Pipeline Review
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    );
  }

  if (isBuildHandoff) {
    return (
      <div className="card-premium p-6 sm:p-8 text-center space-y-5">
        <p className="text-foreground font-semibold text-lg">
          Your pipeline has {score} leak{score !== 1 ? "s" : ""} that{" "}
          {score !== 1 ? "are" : "is"} costing you revenue.
        </p>
        <p className="text-muted-foreground">
          Recommended: Book a free 30-minute pipeline review to see what your
          fix plan would look like.
        </p>
        <Link
          to="/book-call"
          className="btn-primary inline-flex items-center gap-2 text-base px-8 py-4"
        >
          Book My Free Pipeline Review
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    );
  }

  // Softer CTA for "learn myself" or "audit only"
  return (
    <div className="card-premium p-6 sm:p-8 space-y-6">
      <p className="text-foreground font-semibold text-lg text-center">
        Your pipeline has room to improve. Here are 3 things you can fix this
        week:
      </p>
      <div className="space-y-3">
        {weakest.map((cat) => (
          <div
            key={cat.name}
            className="flex items-start gap-3 p-3 rounded-lg bg-muted/50"
          >
            <Lightbulb className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-foreground">{cat.name}</p>
              <p className="text-sm text-muted-foreground">
                {quickWins[cat.name]}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center pt-4 border-t border-border space-y-3">
        <p className="text-sm text-muted-foreground">
          When you're ready for a full system:
        </p>
        <Link
          to="/book-call"
          className="btn-primary inline-flex items-center gap-2 text-base px-8 py-4"
        >
          Book a Free Pipeline Review
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
};

export default PersonalizedCTA;
