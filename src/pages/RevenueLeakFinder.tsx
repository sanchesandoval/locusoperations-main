import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { supabase } from "@/integrations/supabase/client";

type Answer = "yes" | "no" | null;

const categories = [
  {
    name: "Speed-to-Lead",
    questions: [
      "Do you respond to every new lead within 5 minutes?",
      "Are after-hours inquiries answered by anything other than voicemail?",
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
    name: "Booking",
    questions: [
      "Can leads self-book an appointment without calling your office?",
      "Do you qualify leads before they hit your calendar?",
    ],
  },
  {
    name: "No-Shows",
    questions: [
      "Do you send automated appointment confirmations and reminders?",
      "Do you have a system to rebook no-shows within 24 hours?",
    ],
  },
  {
    name: "Reactivation",
    questions: [
      "Do you re-engage leads who went dark in the last 90 days?",
      "Do you follow up with prospects who completed a consultation but didn't buy?",
    ],
  },
];

const allQuestions = categories.flatMap((c) => c.questions);

const getResult = (score: number) => {
  if (score <= 3) {
    return {
      label: "Low Risk",
      color: "text-primary",
      message:
        "Your pipeline is in decent shape. A few tweaks could unlock meaningful revenue.",
    };
  }
  if (score <= 7) {
    return {
      label: "Moderate Risk",
      color: "text-yellow-400",
      message:
        "You're losing significant revenue. Most businesses at this score are leaving $3-5K/month on the table.",
    };
  }
  return {
    label: "Critical",
    color: "text-destructive",
    message:
      "This is critical. Your pipeline has major structural leaks that are costing you 20-40% of potential revenue.",
  };
};

const RevenueLeakFinder = () => {
  const [answers, setAnswers] = useState<Answer[]>(
    new Array(allQuestions.length).fill(null)
  );
  const [submitted, setSubmitted] = useState(false);

  const handleAnswer = (index: number, value: "yes" | "no") => {
    const next = [...answers];
    next[index] = value;
    setAnswers(next);
  };

  const allAnswered = answers.every((a) => a !== null);
  const score = answers.filter((a) => a === "no").length;
  const result = getResult(score);

  let questionIndex = 0;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-16">
        <div className="container-main">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Your Revenue Leak Scorecard
            </h1>
            <p className="text-lg text-muted-foreground">
              Answer 12 questions. Get your score. See which leaks to fix first.
            </p>
          </div>

          {/* Questions */}
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

          {/* Submit / Results */}
          <div className="max-w-2xl mx-auto mt-12">
            {!submitted ? (
              <button
                onClick={() => {
                  setSubmitted(true);
                  // Fire-and-forget: save submission to database
                  let qi = 0;
                  const categoryScores = categories.map((cat) => {
                    const gaps = cat.questions.filter((_, i) => answers[qi + i] === "no").length;
                    const total = cat.questions.length;
                    qi += total;
                    return { name: cat.name, gaps, total };
                  });
                  const answersObj: Record<string, string> = {};
                  answers.forEach((a, i) => { if (a) answersObj[String(i)] = a; });
                  supabase.from("leak_finder_submissions").insert({
                    answers: answersObj,
                    category_scores: categoryScores,
                    score,
                    result_label: result.label,
                  } as any).then(() => {});
                }}
                disabled={!allAnswered}
                className="btn-primary w-full py-4 text-lg disabled:opacity-40 disabled:cursor-not-allowed"
              >
                See My Score
              </button>
            ) : (
              <div className="card-premium p-8 text-center space-y-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Your Score
                  </p>
                  <p className={`text-6xl font-bold ${result.color}`}>
                    {score}
                    <span className="text-2xl text-muted-foreground">/12</span>
                  </p>
                  <p className={`text-lg font-semibold mt-2 ${result.color}`}>
                    {result.label}
                  </p>
                </div>
                <p className="text-muted-foreground max-w-lg mx-auto">
                  {result.message}
                </p>
                <div className="pt-4 border-t border-border">
                  <p className="text-foreground font-semibold mb-4">
                    Want to know exactly where YOUR revenue is leaking?
                  </p>
                  <Link
                    to="/book-call"
                    className="btn-primary inline-flex items-center gap-2 text-base px-8 py-4"
                  >
                    Book a Free 15-Minute Pipeline Review
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
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
