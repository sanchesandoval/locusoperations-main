import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Header from "@/components/layout/Header";

interface QuizQuestion {
  id: string;
  question: string;
  options: { label: string; value: string; points: number }[];
}

const questions: QuizQuestion[] = [
  {
    id: "lead_volume",
    question: "How many leads does your clinic generate per month?",
    options: [
      { label: "0-20 leads", value: "0-20", points: 0 },
      { label: "21-50 leads", value: "21-50", points: 1 },
      { label: "51-100 leads", value: "51-100", points: 2 },
      { label: "100+ leads", value: "100+", points: 3 },
    ],
  },
  {
    id: "ad_spend",
    question: "What is your monthly ad spend?",
    options: [
      { label: "Under $2,000", value: "under_2k", points: 0 },
      { label: "$2,000 - $5,000", value: "2k-5k", points: 1 },
      { label: "$5,000 - $15,000", value: "5k-15k", points: 2 },
      { label: "$15,000+", value: "15k+", points: 3 },
    ],
  },
  {
    id: "booking_rate",
    question: "What percentage of leads actually book appointments?",
    options: [
      { label: "60%+ book", value: "60+", points: 0 },
      { label: "40-60% book", value: "40-60", points: 1 },
      { label: "20-40% book", value: "20-40", points: 2 },
      { label: "Under 20% book", value: "under_20", points: 3 },
    ],
  },
  {
    id: "response_time",
    question: "How quickly does your team respond to new leads?",
    options: [
      { label: "Under 5 minutes", value: "under_5min", points: 0 },
      { label: "5-30 minutes", value: "5-30min", points: 1 },
      { label: "1-4 hours", value: "1-4h", points: 2 },
      { label: "4+ hours or next day", value: "4h+", points: 3 },
    ],
  },
  {
    id: "after_hours",
    question: "How do you handle leads that come in after hours?",
    options: [
      { label: "Automated response within minutes", value: "automated_fast", points: 0 },
      { label: "Next morning follow-up", value: "next_morning", points: 1 },
      { label: "Whenever someone gets to it", value: "whenever", points: 2 },
      { label: "No system in place", value: "none", points: 3 },
    ],
  },
  {
    id: "follow_up",
    question: "What does your lead follow-up process look like?",
    options: [
      { label: "Automated multi-touch sequence", value: "automated_multi", points: 0 },
      { label: "Manual follow-up (2-3 attempts)", value: "manual_few", points: 1 },
      { label: "One call/text, then stop", value: "one_and_done", points: 2 },
      { label: "No structured follow-up", value: "none", points: 3 },
    ],
  },
  {
    id: "no_show_rate",
    question: "What is your no-show rate?",
    options: [
      { label: "Under 10%", value: "under_10", points: 0 },
      { label: "10-20%", value: "10-20", points: 1 },
      { label: "20-30%", value: "20-30", points: 2 },
      { label: "Over 30%", value: "over_30", points: 3 },
    ],
  },
  {
    id: "reminders",
    question: "How do you remind patients about upcoming appointments?",
    options: [
      { label: "Multiple text + email reminders", value: "multi_reminders", points: 0 },
      { label: "One reminder before appointment", value: "one_reminder", points: 1 },
      { label: "Sometimes, inconsistently", value: "sometimes", points: 2 },
      { label: "No reminder system", value: "none", points: 3 },
    ],
  },
  {
    id: "reactivation",
    question: "How do you handle leads who didn't book or past no-shows?",
    options: [
      { label: "Automated reactivation campaigns", value: "automated", points: 0 },
      { label: "Occasional manual outreach", value: "occasional", points: 1 },
      { label: "Not a focus for us", value: "not_focus", points: 2 },
      { label: "Not sure / never tried", value: "never", points: 3 },
    ],
  },
  {
    id: "biggest_challenge",
    question: "What's your biggest challenge right now?",
    options: [
      { label: "Not enough leads coming in", value: "not_enough_leads", points: 1 },
      { label: "Can't respond to leads fast enough", value: "slow_response", points: 2 },
      { label: "Leads inquire but don't book", value: "dont_book", points: 3 },
      { label: "Too many no-shows", value: "no_shows", points: 2 },
    ],
  },
];

const LeakFinder = () => {
  const navigate = useNavigate();
  const [showGate, setShowGate] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: string]: { value: string; points: number } }>({});
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  // Listen for GHL form submission
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // GHL form submission detection
      if (
        event.data?.type === 'hsFormCallback' ||
        event.data?.formSubmitted ||
        event.data?.type === 'form:submit' ||
        (typeof event.data === 'string' && event.data.includes('formSubmitted'))
      ) {
        setShowGate(false);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  const handleAnswer = (value: string, points: number) => {
    setSelectedOption(value);
  };

  const handleNext = () => {
    if (!selectedOption) return;

    const question = questions[currentQuestion];
    const option = question.options.find((o) => o.value === selectedOption);
    
    const newAnswers = {
      ...answers,
      [question.id]: { value: selectedOption, points: option?.points || 0 },
    };
    setAnswers(newAnswers);
    setSelectedOption(null);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate score and save
      const totalScore = Object.values(newAnswers).reduce((sum, a) => sum + a.points, 0);
      
      let tier = "minor";
      if (totalScore >= 25) tier = "critical";
      else if (totalScore >= 18) tier = "significant";
      else if (totalScore >= 9) tier = "moderate";

      sessionStorage.setItem(
        "leakFinder_results",
        JSON.stringify({
          answers: newAnswers,
          score: totalScore,
          tier,
          completedAt: new Date().toISOString(),
        })
      );

      navigate("/fix-kit");
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      const prevQuestion = questions[currentQuestion - 1];
      setSelectedOption(answers[prevQuestion.id]?.value || null);
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex items-center justify-center p-6 pt-24">
        {/* Gate Dialog */}
        <Dialog open={showGate} onOpenChange={() => {}}>
          <DialogContent className="sm:max-w-md bg-transparent border-none shadow-none [&>button]:hidden">
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/JPKxiapOfZQgYoebuikK"
              style={{ width: '100%', height: '700px', border: 'none', borderRadius: '4px' }}
              id="inline-JPKxiapOfZQgYoebuikK"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="LP Lead Magnet Assessment Form"
              data-height="undefined"
              data-layout-iframe-id="inline-JPKxiapOfZQgYoebuikK"
              data-form-id="JPKxiapOfZQgYoebuikK"
              title="LP Lead Magnet Assessment Form"
            />
          </DialogContent>
        </Dialog>

        {/* Quiz Content */}
        {!showGate && (
          <div className="w-full max-w-2xl">
            {/* Progress bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                <span>Question {currentQuestion + 1} of {questions.length}</span>
                <span>{Math.round(progress)}% complete</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-brand-dark to-primary transition-all duration-500 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Question card */}
            <div className="card-premium p-8 lg:p-12 animate-fade-up">
              <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-8 text-balance">
                {questions[currentQuestion].question}
              </h2>

              <div className="space-y-3">
                {questions[currentQuestion].options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleAnswer(option.value, option.points)}
                    className={`w-full p-4 rounded-xl border text-left transition-all duration-200 ${
                      selectedOption === option.value
                        ? "border-primary bg-primary/10 text-foreground"
                        : "border-border bg-muted/30 text-foreground/80 hover:border-primary/50 hover:bg-muted/50"
                    }`}
                  >
                    <span className="font-medium">{option.label}</span>
                  </button>
                ))}
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-border/50">
                <button
                  onClick={handleBack}
                  disabled={currentQuestion === 0}
                  className="text-muted-foreground hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  ← Back
                </button>
                <button
                  onClick={handleNext}
                  disabled={!selectedOption}
                  className="btn-primary px-8 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {currentQuestion === questions.length - 1 ? "See Results" : "Next →"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeakFinder;
