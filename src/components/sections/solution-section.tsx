"use client";

import { Marquee } from "@/components/ui/marquee";

const layers = [
  {
    label: "Layer 01 — Signal & Data",
    description: "Who's in market, enriched with everything you need before the first touchpoint. The brain.",
    tools: [
      { name: "Ocean.io", src: "/logos/oceanio-logo.png", darkSrc: "/logos/oceanio-logo-dark.png" },
      { name: "DiscoLike", src: "/logos/discolike-logo.webp", imgClass: "h-6 dark:brightness-0 dark:invert" },
      { name: "LeadPipe", src: "/logos/leadpipe-logo.svg", darkSrc: "/logos/leadpipe-logo-dark.svg" },
      { name: "Trigify", src: "/logos/trigify-logo.svg", darkSrc: "/logos/trigify-logo-dark.svg" },
      { name: "Apify", src: "/logos/apify-large-logo.png", darkSrc: "/logos/apify-large-logo-dark.png" },
      { name: "Firecrawl", src: "/logos/firecrawl-large-logo.png", darkSrc: "/logos/firecrawl-large-logo-dark.png" },
      { name: "Clay", src: "/logos/clay.webp", darkSrc: "/logos/clay-dark.webp", imgClass: "h-7" },
      { name: "Prospeo", src: "/logos/prospeo-big-logo.png", imgClass: "h-[78px]" },
      { name: "FullEnrich", src: "/logos/fullenrich-logo.svg", imgClass: "h-6 dark:brightness-0 dark:invert" },
    ],
  },
  {
    label: "Layer 02 — Orchestration",
    description: "The logic that decides what to do with each signal, who gets it, and when.",
    tools: [
      { name: "n8n", src: "/logos/n8n.svg", darkSrc: "/logos/n8n-dark.svg", imgClass: "h-7" },
      { name: "Claude", src: "/logos/claude-large-logo.png", darkSrc: "/logos/claude-large-logo-dark.png" },
    ],
  },
  {
    label: "Layer 03 — Execution",
    description: "Automated outreach and rep alerts that fire when orchestration says go.",
    tools: [
      { name: "Smartlead", src: "/logos/smartlead-full-logo.webp", darkSrc: "/logos/smartlead-full-logo-dark.webp" },
      { name: "Instantly", src: "/logos/InstantlyAI.png" },
      { name: "HeyReach", src: "/logos/heyreach-large-logo.png", darkSrc: "/logos/heyreach-dark.png", imgClass: "h-7" },
      { name: "Cal.com", src: "/logos/cal-com-logo-small.png" },
    ],
  },
];

const crmTools = [
  { name: "HubSpot", src: "/logos/hubspot-new.png", darkSrc: "/logos/hubspot-new-dark.png" },
  { name: "Salesforce", src: "/logos/salesforce-new.png", imgClass: "h-9" },
  { name: "Attio", src: "/logos/blacktext-attio-logo.png", imgClass: "h-6 dark:brightness-0 dark:invert" },
];

const marqueeTools = [
  { name: "Pipedrive", src: "/logos/pipedrive.png", imgClass: "h-6 dark:brightness-0 dark:invert" },
  { name: "Close", src: "/logos/close-crm-logo.png", darkSrc: "/logos/close-crm-logo-dark.png" },
  { name: "Notion", src: "/logos/notion-small-logo.png", imgClass: "h-6 dark:brightness-0 dark:invert" },
  { name: "Airtable", src: "/logos/airtable-logo.png", darkSrc: "/logos/airtable-logo-dark.png" },
  { name: "Calendly", src: "/logos/calendly.png", imgClass: "h-7" },
  { name: "Zapier", src: "/logos/zapier.png" },
  { name: "Make", src: "/logos/make-logo.webp", imgClass: "h-6 dark:brightness-0 dark:invert" },
  { name: "Slack", src: "/logos/slack.png", darkSrc: "/logos/slack-dark.png", imgClass: "h-7" },
  { name: "LinkedIn Sales Navigator", src: "/logos/linkedin-sales-navigator-logo.png", darkSrc: "/logos/linkedin-sales-navigator-logo-dark.png", imgClass: "h-8" },
];

function ToolCard({
  name,
  src,
  darkSrc,
  imgClass = "h-6",
}: {
  name: string;
  src?: string;
  darkSrc?: string;
  imgClass?: string;
}) {
  return (
    <div className="flex items-center justify-center h-14 w-28 rounded-lg border border-border bg-muted/50 px-3 py-2 shrink-0">
      {src ? (
        <img
          src={src}
          alt={name}
          className={`${imgClass}${darkSrc ? " dark:hidden" : ""} max-w-full object-contain opacity-90 hover:opacity-100 transition-all duration-200`}
          onError={(e) => {
            const img = e.currentTarget as HTMLImageElement;
            img.style.display = "none";
            const label = img.parentElement?.querySelector("span");
            if (label) label.classList.remove("hidden");
          }}
        />
      ) : null}
      {darkSrc ? (
        <img
          src={darkSrc}
          alt={name}
          className={`${imgClass} hidden dark:block max-w-full object-contain opacity-90 hover:opacity-100 transition-all duration-200`}
        />
      ) : null}
      <span className={`text-xs font-medium text-muted-foreground${src ? " hidden" : ""}`}>
        {name}
      </span>
    </div>
  );
}

export function SolutionSection() {
  return (
    <section
      id="solution"
      className="flex flex-col items-center justify-center gap-12 py-20 w-full px-6 scroll-mt-48"
    >
      <div className="text-center max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-secondary mb-3">
          The Solution
        </p>
        <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-balance mb-4">
          The infrastructure we run inside.
        </h2>
        <p className="text-muted-foreground text-center text-balance font-medium">
          Most teams start with the execution layer. A sending tool, a CRM, and
          hope. Without signal capture and orchestration underneath it, it has
          nothing to run on. We build all three.
        </p>
      </div>

      <div className="w-full max-w-2xl mx-auto flex flex-col gap-8 px-2">
        {layers.map((layer) => (
          <div key={layer.label} className="flex flex-col gap-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {layer.label}
            </p>
            <p className="text-sm text-muted-foreground">{layer.description}</p>
            <div className="flex flex-wrap gap-3 mt-1">
              {layer.tools.map((tool) => (
                <ToolCard
                  key={tool.name}
                  name={tool.name}
                  src={tool.src}
                  darkSrc={tool.darkSrc}
                  imgClass={tool.imgClass}
                />
              ))}
            </div>
          </div>
        ))}

        <div className="flex flex-col gap-2 pt-4 border-t border-border/40">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Connects into your existing CRM
          </p>
          <div className="flex flex-wrap gap-3 mt-1">
            {crmTools.map((tool) => (
              <ToolCard
                key={tool.name}
                name={tool.name}
                src={tool.src}
                darkSrc={tool.darkSrc}
                imgClass={tool.imgClass}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="w-full overflow-hidden">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground text-center mb-4">
          Also fluent in
        </p>
        <Marquee pauseOnHover className="[--duration:40s]">
          {marqueeTools.map((tool) => (
            <ToolCard
              key={tool.name}
              name={tool.name}
              src={tool.src}
              darkSrc={tool.darkSrc}
              imgClass={tool.imgClass}
            />
          ))}
        </Marquee>
      </div>

      <p className="text-sm text-muted-foreground italic text-center">
        Signal capture. Orchestration. Execution. These three layers compound
        when they&apos;re wired together. Most teams only have the last one.
      </p>
    </section>
  );
}
