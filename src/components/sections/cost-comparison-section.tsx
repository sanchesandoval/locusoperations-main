"use client";

import { Check, X } from "lucide-react";

const rows = [
  {
    category: "Outbound execution",
    detail: "SDR team, 2 reps + OTE commission",
    oldWay: "$180–250K/yr",
    withLocus: "AI system, no hire needed",
    locusGood: true,
  },
  {
    category: "Prospecting & sales tools",
    detail: "Apollo, Clay, HubSpot, enrichment",
    oldWay: "$40–100K/yr",
    withLocus: "Covered in engagement",
    locusGood: true,
  },
  {
    category: "Ops management",
    detail: "Ops oversight or dedicated ops role",
    oldWay: "$60–100K/yr",
    withLocus: "Managed end-to-end by Locus",
    locusGood: true,
  },
  {
    category: "Time to first results",
    detail: "From kickoff to first audit deliverable",
    oldWay: "90–180 days",
    withLocus: "< 14 days",
    locusGood: true,
  },
  {
    category: "Audit before building anything",
    detail: "Find leaks before recommending a fix",
    oldWay: null,
    withLocus: true,
    locusGood: true,
  },
  {
    category: "Baseline set on day one",
    detail: "Numbers agreed before we touch anything",
    oldWay: null,
    withLocus: true,
    locusGood: true,
  },
  {
    category: "Your total investment",
    detail: "Annual all-in cost",
    oldWay: "$280–450K/yr",
    withLocus: "Fraction of one SDR salary",
    locusGood: true,
  },
];

export function CostComparisonSection() {
  return (
    <section
      id="cost-comparison"
      className="flex flex-col items-center justify-center gap-10 py-20 w-full px-6"
    >
      <div className="text-center max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-secondary mb-3">
          The Real Cost
        </p>
        <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-balance mb-4">
          The cost of keeping things the way they are.
        </h2>
        <p className="text-muted-foreground text-lg">
          Locus isn&apos;t free. But it costs a fraction of what you&apos;d
          spend hiring the team to do the same work. You get results in 14
          days, not 6 months.
        </p>
      </div>

      <div className="w-full max-w-3xl overflow-hidden rounded-xl border border-border">
        {/* Header row */}
        <div className="grid grid-cols-3 bg-muted text-sm font-semibold">
          <div className="px-5 py-4 text-muted-foreground">What you&apos;re comparing</div>
          <div className="px-5 py-4 border-l border-border text-muted-foreground text-center">
            Doing it yourself
          </div>
          <div className="px-5 py-4 border-l border-border text-secondary text-center">
            With Locus
          </div>
        </div>

        {/* Data rows */}
        {rows.map((row, i) => (
          <div
            key={i}
            className={`grid grid-cols-3 border-t border-border text-sm ${i === rows.length - 1 ? "bg-muted/40" : ""}`}
          >
            <div className="px-5 py-4">
              <p className="font-medium">{row.category}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{row.detail}</p>
            </div>
            <div className="px-5 py-4 border-l border-border text-center text-muted-foreground flex items-center justify-center">
              {row.oldWay === null ? (
                <X className="w-4 h-4 text-destructive opacity-60" />
              ) : (
                row.oldWay
              )}
            </div>
            <div className="px-5 py-4 border-l border-border text-center flex items-center justify-center font-medium text-secondary">
              {row.withLocus === true ? (
                <Check className="w-4 h-4 text-secondary" />
              ) : (
                row.withLocus
              )}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
