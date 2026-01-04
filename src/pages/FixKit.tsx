import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { LeakDropIcon, CalendarSlotIcon, ClockSpeedIcon, RefreshLoopIcon } from "@/components/icons/BrandIcons";
import locusLogo from "@/assets/locus-logo.png";

interface QuizResults {
  answers: { [key: string]: { value: string; points: number } };
  score: number;
  tier: string;
  completedAt: string;
}

interface UserData {
  name: string;
  email: string;
}

const leakExplanations: { [key: string]: { title: string; explanation: string; fix: string } } = {
  lead_volume: {
    title: "High Lead Volume",
    explanation: "With 100+ leads monthly, manual handling becomes a bottleneck.",
    fix: "Automated lead capture and instant response system",
  },
  ad_spend: {
    title: "Significant Ad Investment",
    explanation: "Spending $5k+ monthly means every missed lead is expensive.",
    fix: "Full-funnel tracking and conversion optimization",
  },
  booking_rate: {
    title: "Low Booking Rate",
    explanation: "Less than 40% of leads booking means conversion leaks.",
    fix: "Multi-touch follow-up sequences and AI qualification",
  },
  response_time: {
    title: "Slow Response Time",
    explanation: "Responding after 30+ minutes loses leads to competitors.",
    fix: "Instant automated response under 60 seconds",
  },
  after_hours: {
    title: "After-Hours Gap",
    explanation: "50%+ of leads come outside business hours.",
    fix: "24/7 AI response and qualification system",
  },
  follow_up: {
    title: "Weak Follow-Up",
    explanation: "Single attempts miss 80% of potential bookings.",
    fix: "Automated multi-touch SMS and email sequences",
  },
  no_show_rate: {
    title: "High No-Show Rate",
    explanation: "20%+ no-shows means significant revenue loss.",
    fix: "Automated confirmation and reminder systems",
  },
  reminders: {
    title: "Inconsistent Reminders",
    explanation: "No reminders = forgotten appointments = empty chairs.",
    fix: "Multiple text and email reminders before appointments",
  },
  reactivation: {
    title: "Dead Lead Database",
    explanation: "Past leads and no-shows are untapped revenue.",
    fix: "Automated reactivation campaigns for warm leads",
  },
  biggest_challenge: {
    title: "Core Challenge Identified",
    explanation: "Your primary bottleneck needs focused attention.",
    fix: "Custom strategy based on your specific challenge",
  },
};

const scripts = [
  {
    id: "60_second",
    title: "The 60-Second Response Script",
    relatedLeaks: ["response_time", "after_hours"],
    content: `Hi [First Name], this is [Your Name] from [Clinic Name]. Thanks for reaching out about [service they inquired about]. 

I wanted to connect quickly while you're thinking about it. Do you have 2 minutes for a quick question about what you're looking for?

[If yes] Great! What's the main result you're hoping to achieve with [treatment]?

[Listen, then] Perfect. Based on what you're describing, I think you'd be a great fit for a consultation with our team. I have a few openings this week—would [Day] at [Time] or [Day] at [Time] work better for you?`,
  },
  {
    id: "day_1",
    title: "Day 1 Follow-Up Script",
    relatedLeaks: ["follow_up", "booking_rate"],
    content: `Hi [First Name]! Following up from yesterday about your interest in [treatment] at [Clinic Name].

I know life gets busy, but I wanted to make sure you got a chance to ask any questions before your consultation. 

Is there anything specific you'd like to know about [treatment] or our approach? I'm happy to help.

If you're ready to book, I have a few spots available this week. Just let me know what works for you!`,
  },
  {
    id: "confirmation",
    title: "24-Hour Confirmation Script",
    relatedLeaks: ["no_show_rate", "reminders"],
    content: `Hi [First Name]! 👋 

Just a friendly reminder about your appointment at [Clinic Name] tomorrow at [Time].

Please reply "CONFIRMED" to confirm, or let us know if you need to reschedule.

We're looking forward to seeing you!

📍 [Address]
⏰ Please arrive 10 minutes early`,
  },
  {
    id: "revival",
    title: "Past Lead Revival Script",
    relatedLeaks: ["reactivation"],
    content: `Hi [First Name], this is [Your Name] from [Clinic Name]. 

We spoke back in [Month] about [treatment], and I wanted to check in. 

A lot has changed since then—we've had some great results with patients who had similar goals to yours. 

If [treatment] is still on your radar, I'd love to set up a quick call to see if we can help. Would that be useful?

No pressure either way—just wanted to reach out since you were interested before.`,
  },
];

const FixKit = () => {
  const navigate = useNavigate();
  const [results, setResults] = useState<QuizResults | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [showAllScripts, setShowAllScripts] = useState(false);
  const [copiedScript, setCopiedScript] = useState<string | null>(null);

  useEffect(() => {
    const storedResults = sessionStorage.getItem("leakFinder_results");
    const storedUser = sessionStorage.getItem("leakFinder_user");

    if (!storedResults) {
      navigate("/leak-finder");
      return;
    }

    setResults(JSON.parse(storedResults));
    if (storedUser) setUserData(JSON.parse(storedUser));
  }, [navigate]);

  if (!results) return null;

  const isQualified = results.score >= 18;
  const tierLabel = {
    minor: "Minor Leaks",
    moderate: "Moderate Leaks",
    significant: "Significant Leaks",
    critical: "Critical Leaks",
  }[results.tier];

  // Find leak areas (questions with 2-3 points)
  const leakAreas = Object.entries(results.answers)
    .filter(([_, answer]) => answer.points >= 2)
    .map(([questionId]) => ({
      id: questionId,
      ...leakExplanations[questionId],
    }));

  // Calculate ad waste estimate
  const adSpendValue = results.answers.ad_spend?.value;
  const bookingRateValue = results.answers.booking_rate?.value;
  
  const adSpendMap: { [key: string]: number } = {
    under_2k: 1500,
    "2k-5k": 3500,
    "5k-15k": 10000,
    "15k+": 20000,
  };
  
  const bookingRateMap: { [key: string]: number } = {
    "60+": 0.3,
    "40-60": 0.5,
    "20-40": 0.7,
    under_20: 0.85,
  };

  const adSpend = adSpendMap[adSpendValue] || 0;
  const wasteRate = bookingRateMap[bookingRateValue] || 0.5;
  const estimatedWaste = Math.round(adSpend * wasteRate);

  // Get relevant scripts
  const relevantScripts = scripts.filter((script) =>
    script.relatedLeaks.some((leak) => leakAreas.some((area) => area.id === leak))
  );

  const displayScripts = showAllScripts ? scripts : relevantScripts;

  const copyScript = (scriptId: string, content: string) => {
    navigator.clipboard.writeText(content);
    setCopiedScript(scriptId);
    setTimeout(() => setCopiedScript(null), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 py-4">
        <div className="container-main flex items-center justify-between">
          <Link to="/">
            <img src={locusLogo} alt="Locus" className="h-5" />
          </Link>
          <Link to="/leak-finder" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Retake Assessment
          </Link>
        </div>
      </header>

      <main className="container-main py-12 lg:py-20">
        {/* Score Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          {userData && (
            <p className="text-muted-foreground mb-4">
              Results for {userData.name}
            </p>
          )}
          
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-card border border-border mb-6">
            <LeakDropIcon className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-foreground">{tierLabel}</span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Your Revenue Leak Score:{" "}
            <span className="gradient-text">{results.score}/30</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            {isQualified
              ? "Critical leaks detected. Your clinic is likely losing significant revenue from unconverted leads."
              : "Tighten the system and protect your bookings. Small improvements can make a big difference."}
          </p>
        </div>

        {/* Estimated Waste */}
        {estimatedWaste > 0 && (
          <div className="max-w-md mx-auto mb-12">
            <div className="card-premium p-6 text-center border-destructive/30">
              <p className="text-sm text-muted-foreground mb-2">Estimated Monthly Ad Waste</p>
              <p className="text-3xl font-bold text-destructive">${estimatedWaste.toLocaleString()}</p>
              <p className="text-xs text-muted-foreground mt-2">
                *Estimate based on your ad spend and booking rate
              </p>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="card-premium p-8 text-center">
            {isQualified ? (
              <>
                <h2 className="text-2xl font-bold mb-4">
                  Let's Fix Your Pipeline
                </h2>
                <p className="text-muted-foreground mb-6">
                  30 minutes. We map where your bookings leak and what to install first.
                </p>
                <Link
                  to="/book-call"
                  className="btn-primary text-base px-8 py-4 inline-block"
                >
                  Book Your Pipeline Diagnostic
                </Link>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-bold mb-4">
                  Get Weekly Revenue Tips
                </h2>
                <p className="text-muted-foreground mb-6">
                  Practical strategies to improve your lead conversion and reduce no-shows.
                </p>
                {/* GHL form placeholder */}
                <div className="max-w-sm mx-auto space-y-3">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                  <button className="w-full btn-primary py-3">
                    Subscribe
                  </button>
                  <p className="text-xs text-muted-foreground">
                    {/* Replace with GHL embed/script */}
                    Form placeholder - integrate with GHL
                  </p>
                </div>
                <div className="mt-6 pt-6 border-t border-border/50">
                  <Link
                    to="/book-call"
                    className="text-primary hover:text-brand-accent transition-colors"
                  >
                    Or book a call anyway →
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Leak Areas */}
        {leakAreas.length > 0 && (
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl font-bold mb-6">Your Biggest Leaks</h2>
            <div className="space-y-4">
              {leakAreas.map((leak) => (
                <div key={leak.id} className="card-premium p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center flex-shrink-0">
                      <LeakDropIcon className="w-5 h-5 text-destructive" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">{leak.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{leak.explanation}</p>
                      <div className="flex items-center gap-2">
                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                          Fix: {leak.fix}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Scripts */}
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Fix Kit Scripts</h2>
            {relevantScripts.length < scripts.length && (
              <button
                onClick={() => setShowAllScripts(!showAllScripts)}
                className="text-sm text-primary hover:text-brand-accent transition-colors"
              >
                {showAllScripts ? "Show relevant only" : "See all scripts"}
              </button>
            )}
          </div>

          <div className="space-y-4">
            {displayScripts.map((script) => (
              <div key={script.id} className="card-premium overflow-hidden">
                <div className="p-6 border-b border-border/50 flex items-center justify-between">
                  <h3 className="font-semibold text-foreground">{script.title}</h3>
                  <button
                    onClick={() => copyScript(script.id, script.content)}
                    className="text-sm px-3 py-1.5 rounded-lg bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
                  >
                    {copiedScript === script.id ? "Copied!" : "Copy"}
                  </button>
                </div>
                <div className="p-6 bg-muted/30">
                  <pre className="text-sm text-foreground/80 whitespace-pre-wrap font-sans leading-relaxed">
                    {script.content}
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="max-w-xl mx-auto mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Ready to install a complete lead-to-booking system?
          </p>
          <Link
            to="/book-call"
            className="btn-primary text-base px-8 py-4 inline-block"
          >
            Book Your Pipeline Diagnostic
          </Link>
        </div>
      </main>
    </div>
  );
};

export default FixKit;
