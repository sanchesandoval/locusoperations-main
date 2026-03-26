import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { supabase } from "@/integrations/supabase/client";
import QualifyingQuestions from "@/components/revenue-leak/QualifyingQuestions";
import ScoreGauge from "@/components/revenue-leak/ScoreGauge";
import PersonalizedInsights from "@/components/revenue-leak/PersonalizedInsights";
import PersonalizedCTA from "@/components/revenue-leak/PersonalizedCTA";

type Answer = "yes" | "no" | null;

const categories = [
  {
    name: "Speed-to-Lead",
    questions: [
      "Do you respond to every new lead within 5 minutes?",
      "Do inbound leads receive an automated response outside of business hours?",
      "Does every lead source (forms, calls, DMs, ads) feed into one system?",
    ],
  },
  {
    name: "Follow-Up",
    questions: [
      "Does your team follow up more than once with unconverted leads?",
      "Do you use automated sequences (SMS + email) for follow-up?",
      "Is there a defined handoff between marketing leads and sales follow-up?",
    ],
  },
  {
    name: "Conversion",
    questions: [
      "Can leads self-schedule a demo or intro call without going through a rep?",
      "Do you qualify leads before they hit your calendar?",
    ],
  },
  {
    name: "Pipeline Retention",
    questions: [
      "Do you send automated meeting prep and confirmation sequences?",
      "Do you have a system to re-engage no-shows within 24 hours?",
    ],
  },
  {
    name: "Reactivation",
    questions: [
      "Do you re-engage leads who went dark in the last 90 days?",
      "Do you follow up with prospects who completed a consultation but didn't buy?",
    ],
  },
  {
    name: "CS & Retention",
    questions: [
      "Do new customers receive an automated onboarding sequence after signing?",
      "Do you have visibility into which customers are at risk of churning before they cancel?",
      "Do you have a system to identify upsell or expansion opportunities within your existing customer base?",
    ],
  },
  {
    name: "Data & Visibility",
    questions: [
      "Can your sales and marketing teams see the same data on every lead and deal in real time?",
      "Do you know which pipeline stage deals most commonly stall or go dark?",
    ],
  },
];

const allQuestions = categories.flatMap((c) => c.questions);

const RevenueLeakFinder = () => {
  const [answers, setAnswers] = useState<Answer[]>(
    new Array(allQuestions.length).fill(null)
  );
  const [submitted, setSubmitted] = useState(false);
  const [mrrRange, setMrrRange] = useState<string | null>(null);
  const [q14, setQ14] = useState<string | null>(null);
  const [q15, setQ15] = useState<string | null>(null);
  const [q16, setQ16] = useState<string | null>(null);
  const [q17, setQ17] = useState("");

  const handleAnswer = (index: number, value: "yes" | "no") => {
    const next = [...answers];
    next[index] = value;
    setAnswers(next);
  };

  const allScoredAnswered = answers.every((a) => a !== null);
  const qualifyingReady = q14 !== null && q15 !== null && q16 !== null;
  const canSubmit = allScoredAnswered && qualifyingReady;

  const score = answers.filter((a) => a === "no").length;

  // Compute category scores
  const computeCategoryScores = () => {
    let qi = 0;
    return categories.map((cat) => {
      const gaps = cat.questions.filter((_, i) => answers[qi + i] === "no").length;
      const total = cat.questions.length;
      qi += total;
      return { name: cat.name, gaps, total };
    });
  };

  const categoryScores = computeCategoryScores();

  let questionIndex = 0;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-16">
        <div className="container-main">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Your Revenue Leak Diagnostic
            </h1>
            <p className="text-lg text-muted-foreground">
              Answer a few quick questions. Get your score. See which leaks to fix first.
            </p>
          </div>

          {/* Scored Questions */}
          <div className="max-w-2xl mx-auto space-y-8">
            {categories.map((category) => (
              <div key={category.name}>
                <h3 className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                  {category.name}
                </h3>
                <div className="space-y-3">
                  {category.questions.map((question) => {
                    const idx = questionIndex++;
                    return (
                      <div
                        key={idx}
                        className="card-premium p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4"
                      >
                        <p className="text-sm sm:text-base text-foreground flex-1">
                          {idx + 1}. {question}
                        </p>
                        <div className="flex gap-2 flex-shrink-0">
                          <button
                            onClick={() => handleAnswer(idx, "yes")}
                            className={`px-4 py-1.5 rounded-lg text-sm font-medium border transition-all ${
                              answers[idx] === "yes"
                                ? "bg-primary text-primary-foreground border-primary"
                                : "border-border text-muted-foreground hover:border-primary/50"
                            }`}
                          >
                            Yes
                          </button>
                          <button
                            onClick={() => handleAnswer(idx, "no")}
                            className={`px-4 py-1.5 rounded-lg text-sm font-medium border transition-all ${
                              answers[idx] === "no"
                                ? "bg-destructive text-destructive-foreground border-destructive"
                                : "border-border text-muted-foreground hover:border-destructive/50"
                            }`}
                          >
                            No
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Qualifying Questions */}
          <div className="max-w-2xl mx-auto">
            <QualifyingQuestions
              mrrRange={mrrRange} onMrrRange={setMrrRange}
              q14={q14} q15={q15} q16={q16} q17={q17}
              onQ14={setQ14} onQ15={setQ15} onQ16={setQ16} onQ17={setQ17}
            />
          </div>

          {/* Submit / Results */}
          <div className="max-w-2xl mx-auto mt-12">
            {!submitted ? (
              <button
                onClick={() => {
                  setSubmitted(true);
                  const answersObj: Record<string, string> = {};
                  answers.forEach((a, i) => { if (a) answersObj[String(i)] = a; });
                  supabase.from("leak_finder_submissions").insert({
                    answers: answersObj,
                    category_scores: categoryScores,
                    score,
                    result_label: score <= 5 ? "Low Risk" : score <= 11 ? "Moderate Risk" : "Critical",
                    qualifying_answers: {
                      monthly_revenue: mrrRange,
                      desired_outcome: q14,
                      biggest_obstacle: q15,
                      preferred_solution: q16,
                      additional_notes: q17 || null,
                    },
                  } as any).then(() => {});
                }}
                disabled={!canSubmit}
                className="btn-primary w-full py-4 text-lg disabled:opacity-40 disabled:cursor-not-allowed"
              >
                See My Score
              </button>
            ) : (
              <div className="space-y-8">
                <ScoreGauge score={score} mrrRange={mrrRange} />
                <PersonalizedInsights categoryScores={categoryScores} />
                <PersonalizedCTA
                  score={score}
                  q16Answer={q16}
                  categoryScores={categoryScores}
                />
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RevenueLeakFinder;
