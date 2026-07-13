"use client";

import { Check } from "lucide-react";
import { useState } from "react";

const columns = ["Locus", "Hire SDRs", "AI SDR or tool", "Another agency", "Build internally"];

const rows = [
  {
    label: "How you pay",
    values: [
      "Setup fee, then per qualified meeting",
      "$96–132K/yr fully loaded",
      "Monthly fee, plus your own list and tools",
      "$5–10K/mo retainer",
      "$120–180K/yr fully loaded",
    ],
  },
  {
    label: "Time to first pipeline",
    values: [
      "3 weeks",
      "2–4 months (hiring plus ramp)",
      "Days, but you run it yourself",
      "60–90 days",
      "3–6 months",
    ],
  },
  {
    label: "Built inside your tools",
    values: [true, "uses whatever you give them", "their platform, not yours", "runs outside your stack", "yes, if you have the team"],
  },
  {
    label: "Fixes data, signals, and routing",
    values: [true, "doesn't touch it", "one piece of it", "campaigns, not plumbing", "months-long project"],
  },
  {
    label: "AI execution + human judgment",
    values: [true, "human, no system", "system, no judgment", "varies by account manager", "you build both, or neither"],
  },
  {
    label: "You own the system",
    values: [true, "leaves when they do", "rented, not owned", "locked to them", "yours, if it ships"],
  },
  {
    label: "Reduces headcount dependency",
    values: [true, "adds headcount", "still need someone to run it", "adds a vendor to manage", "adds a team"],
  },
  {
    label: "Risk if it doesn't work",
    values: [
      "30-day guarantee",
      "pipeline stalls, re-hire",
      "cancel and start over",
      "contract lock-in",
      "sunk cost, hard to unwind",
    ],
  },
];

export function CostComparisonSection() {
  const [hoveredCol, setHoveredCol] = useState<number | null>(null);

  return (
    <section
      id="why-locus"
      className="flex flex-col items-center justify-center gap-10 py-20 w-full px-6"
    >
      <div className="text-center max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-secondary mb-3">
          Why Locus
        </p>
        <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-balance mb-4">
          More tools, more hires, more agencies. None fix the system underneath.
        </h2>
        <p className="text-muted-foreground text-lg">
          Each of those adds a layer to manage. Locus builds the system, then runs it. Every column below is honest, only one is complete.
        </p>
      </div>

      <div className="w-full max-w-6xl overflow-x-auto">
        <div className="min-w-[900px] rounded-xl border border-border overflow-hidden">
          {/* Header row */}
          <div className="grid grid-cols-[1.4fr_repeat(5,1fr)] bg-muted text-sm font-semibold">
            <div className="px-5 py-4 text-muted-foreground">vs the usual fixes</div>
            {columns.map((col, i) => (
              <div
                key={col}
                onMouseEnter={() => i > 0 && setHoveredCol(i)}
                onMouseLeave={() => i > 0 && setHoveredCol(null)}
                className={`px-4 py-4 border-l border-border text-center transition-colors duration-200 ${
                  i === 0
                    ? "text-secondary bg-secondary/10"
                    : hoveredCol === i
                      ? "text-destructive bg-destructive/10"
                      : "text-muted-foreground"
                }`}
              >
                {col}
              </div>
            ))}
          </div>

          {/* Data rows */}
          {rows.map((row, i) => (
            <div
              key={row.label}
              className={`grid grid-cols-[1.4fr_repeat(5,1fr)] border-t border-border text-sm ${
                i === rows.length - 1 ? "bg-muted/40" : ""
              }`}
            >
              <div className="px-5 py-4 font-medium">{row.label}</div>
              {row.values.map((val, j) => (
                <div
                  key={j}
                  onMouseEnter={() => j > 0 && setHoveredCol(j)}
                  onMouseLeave={() => j > 0 && setHoveredCol(null)}
                  className={`px-4 py-4 border-l border-border text-center flex items-center justify-center transition-colors duration-200 ${
                    j === 0
                      ? "bg-secondary/5"
                      : hoveredCol === j
                        ? "bg-destructive/10 text-destructive"
                        : "text-muted-foreground"
                  }`}
                >
                  {val === true ? (
                    <Check className="w-4 h-4 text-secondary" />
                  ) : j === 0 ? (
                    <span className="font-medium text-secondary">{val}</span>
                  ) : (
                    <span>{val}</span>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
