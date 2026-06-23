"use client";

import { HandoffAnimation } from "@/components/handoff-animation";
import { SecondBentoAnimation } from "@/components/second-bento-animation";
import { StackBurstAnimation } from "@/components/stack-burst-animation";
import { ThirdBentoAnimation } from "@/components/third-bento-animation";

const items = [
  {
    id: 1,
    label: "From the Audit",
    title: "A prioritized leak list with dollar values attached.",
    description:
      "Every gap mapped across marketing, sales, and CS. Every signal being missed. Every fix ranked by what it's worth, before we touch a single thing.",
    content: <SecondBentoAnimation />,
  },
  {
    id: 2,
    label: "From the Build",
    title: "AI GTM systems running live inside your stack.",
    description:
      "Signal capture, enrichment, and outreach execution wired into one motion. Built inside the tools you already run. First system live within 6 weeks of kickoff.",
    content: <StackBurstAnimation />,
  },
  {
    id: 3,
    label: "From the Results",
    title: "Before-and-after proof with real pipeline numbers.",
    description:
      "Qualified meetings booked, pipeline generated, revenue recovered. All measured against the baseline we set on day one. You see exactly what changed and what it's worth.",
    content: (
      <ThirdBentoAnimation
        data={[18, 24, 22, 32, 28, 42, 38, 55, 50, 68, 62, 80]}
        toolTipValues={[12400, 28700, 47000, 82000]}
        prefix="$"
      />
    ),
  },
  {
    id: 4,
    label: "After the Engagement",
    title: "A system your team can run without us.",
    description:
      "Every workflow, prompt, and configuration we built is documented and handed off. Your team gets training and a full operational playbook. We build to release. You own it whether we stay involved or not.",
    content: <HandoffAnimation />,
  },
];

export function WhatYouGetSection() {
  return (
    <section
      id="what-you-get"
      className="flex flex-col items-center justify-center w-full relative px-5 md:px-10"
    >
      <div className="border-x mx-5 md:mx-10 relative w-full">
        <div className="absolute top-0 -left-4 md:-left-14 h-full w-4 md:w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]" />
        <div className="absolute top-0 -right-4 md:-right-14 h-full w-4 md:w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]" />

        <div className="text-center py-12 px-6 border-b border-border">
          <p className="text-xs font-semibold uppercase tracking-widest text-secondary mb-3">
            What You Get
          </p>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-balance">
            Four deliverables. One outcome.
          </h2>
          <p className="text-muted-foreground mt-3 text-balance max-w-xl mx-auto">
            Every engagement ends with a leak list, a working system, numbers that prove it, and a team that can run it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col p-0.5 relative before:absolute before:-left-0.5 before:top-0 before:z-10 before:h-screen before:w-px before:bg-border before:content-[''] after:absolute after:-top-0.5 after:left-0 after:z-10 after:h-px after:w-screen after:bg-border after:content-['']"
            >
              <div className="h-[360px] relative overflow-hidden border-b border-border">
                {item.content}
              </div>
              <div className="flex flex-col gap-3 p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-secondary">
                  {item.label}
                </p>
                <h3 className="text-lg tracking-tighter font-semibold leading-snug">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
