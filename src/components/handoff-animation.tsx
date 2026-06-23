"use client";

import { Check } from "lucide-react";

const handoffItems = [
  "Workflows, fully documented",
  "AI prompts and signal configs",
  "Team training session included",
  "Full operational playbook",
  "You own every build. No lock-in.",
];

export function HandoffAnimation() {
  return (
    <div className="flex items-center justify-center h-full w-full p-8">
      <div className="w-full max-w-xs bg-background border border-border rounded-xl p-5 shadow-sm flex flex-col gap-3">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-2 h-2 rounded-full bg-secondary" />
          <p className="text-xs font-semibold uppercase tracking-widest text-secondary">
            Your Handoff Package
          </p>
        </div>
        {handoffItems.map((item, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="shrink-0 w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center mt-0.5">
              <Check className="w-3 h-3 text-secondary" />
            </div>
            <p className="text-sm text-foreground/80">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
