"use client";

import { Check, X } from "lucide-react";
import { siteConfig } from "@/lib/config";

export function ProblemSection() {
  const { problemSection } = siteConfig;

  return (
    <section
      id="problem"
      className="flex flex-col items-center justify-center gap-10 py-20 w-full px-6"
    >
      <div className="text-center max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-secondary mb-3">
          The Problem
        </p>
        <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-balance mb-4">
          {problemSection.title}
        </h2>
        <p className="text-muted-foreground text-base md:text-lg text-balance">
          {problemSection.description}
        </p>
      </div>

      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-xl border border-border bg-muted/40 p-6 flex flex-col gap-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Without a system
          </p>
          <ul className="flex flex-col gap-3">
            {problemSection.without.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm">
                <X className="w-4 h-4 text-destructive mt-0.5 shrink-0 opacity-70" />
                <span className="text-foreground/80">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-secondary/25 bg-secondary/5 p-6 flex flex-col gap-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-secondary">
            With Locus
          </p>
          <ul className="flex flex-col gap-3">
            {problemSection.with.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm">
                <Check className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                <span className="text-foreground/80">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
