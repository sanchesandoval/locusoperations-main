import { Textarea } from "@/components/ui/textarea";

const q14Options = [
  "Convert more pipeline from the leads I'm already generating",
  "Reduce churn and increase lifetime value from existing customers",
  "Stop deals from stalling and going dark in my pipeline",
  "Build a system that runs the full revenue motion without me managing it daily",
];

const q15Options = [
  "I don't have time to set this up myself",
  "I don't know what tools to use or how to connect them",
  "I've been burned by agencies/consultants before",
  "I'm not sure the ROI would justify the investment",
];

const q16Options = [
  "I want someone to build and manage the entire system for me",
  "I want someone to build it, then I'll run it myself",
  "I want to learn how to build it myself with resources",
  "I just want to know what's broken so I can fix it",
];

interface Props {
  q14: string | null;
  q15: string | null;
  q16: string | null;
  q17: string;
  onQ14: (v: string) => void;
  onQ15: (v: string) => void;
  onQ16: (v: string) => void;
  onQ17: (v: string) => void;
}

const RadioQuestion = ({
  label,
  question,
  options,
  value,
  onChange,
}: {
  label: string;
  question: string;
  options: string[];
  value: string | null;
  onChange: (v: string) => void;
}) => (
  <div>
    <h3 className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">
      {label}
    </h3>
    <div className="card-premium p-4 sm:p-6 space-y-3">
      <p className="text-sm sm:text-base text-foreground font-medium mb-3">
        {question}
      </p>
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onChange(opt)}
          className={`w-full text-left px-4 py-3 rounded-lg text-sm border transition-all ${
            value === opt
              ? "bg-primary text-primary-foreground border-primary"
              : "border-border text-muted-foreground hover:border-primary/50"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  </div>
);

const QualifyingQuestions = ({
  q14, q15, q16, q17,
  onQ14, onQ15, onQ16, onQ17,
}: Props) => (
  <div className="space-y-8 mt-12">
    <div className="text-center">
      <h2 className="text-xl sm:text-2xl font-bold mb-2">A Few More Questions</h2>
      <p className="text-sm text-muted-foreground">Help us understand your situation better.</p>
    </div>

    <RadioQuestion
      label="Goals"
      question="What's the #1 outcome you want to achieve in the next 90 days?"
      options={q14Options}
      value={q14}
      onChange={onQ14}
    />
    <RadioQuestion
      label="Obstacles"
      question="What's the biggest obstacle stopping you right now?"
      options={q15Options}
      value={q15}
      onChange={onQ15}
    />
    <RadioQuestion
      label="Preferred Solution"
      question="Which solution would suit you best?"
      options={q16Options}
      value={q16}
      onChange={onQ16}
    />

    <div>
      <h3 className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">
        Anything Else
      </h3>
      <div className="card-premium p-4 sm:p-6">
        <p className="text-sm sm:text-base text-foreground font-medium mb-3">
          Is there anything else we should know?{" "}
          <span className="text-muted-foreground font-normal">(Optional)</span>
        </p>
        <Textarea
          value={q17}
          onChange={(e) => onQ17(e.target.value)}
          placeholder="Tell us anything relevant..."
          className="bg-background"
        />
      </div>
    </div>
  </div>
);

export default QualifyingQuestions;
