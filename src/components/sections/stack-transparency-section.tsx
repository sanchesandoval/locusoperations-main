"use client";

import { Marquee } from "@/components/ui/marquee";

const layers = [
  {
    label: "Layer 01 — Signal & Data",
    description: "Who's in market, enriched with everything you need before the first touchpoint. The brain.",
    tools: [
      { name: "LeadPipe", src: "/logos/leadpipe-logo.svg" },
      { name: "RB2B", src: "/logos/rb2b%20logo.webp" },
      { name: "Apify", src: "/logos/apify-large-logo.png" },
      { name: "Firecrawl", src: "/logos/firecrawl-large-logo.png" },
      { name: "Clay", src: "/logos/clay.webp" },
      { name: "Prospeo", src: "/logos/prospeo-big-logo.png", imgClass: "h-[78px]" },
      { name: "FullEnrich", src: "/logos/fullenrich-logo.svg" },
      { name: "Blitz", src: "/logos/blitzapi-large-logo.avif" },
    ],
  },
  {
    label: "Layer 02 — Orchestration",
    description: "The logic that decides what to do with each signal, who gets it, and when. Built in n8n, run by AI.",
    tools: [
      { name: "n8n", src: "/logos/n8n.svg", imgClass: "h-7" },
      { name: "Claude", src: "/logos/claude-large-logo.png" },
    ],
  },
  {
    label: "Layer 03 — Execution",
    description: "Automated outreach and rep alerts that fire when orchestration says go.",
    tools: [
      { name: "Smartlead", src: "/logos/smartlead-full-logo.webp" },
      { name: "Instantly", src: "/logos/InstantlyAI.png" },
      { name: "HeyReach", src: "/logos/heyreach-large-logo.png" },
      { name: "Cal.com", src: "/logos/cal-com-logo-small.png" },
    ],
  },
];

const crmTools = [
  { name: "HubSpot", src: "/logos/hubspot-new.png" },
  { name: "GoHighLevel", src: "/logos/highlevel.png", imgClass: "h-9" },
  { name: "Attio", src: "/logos/blacktext-attio-logo.png" },
];

const marqueeTools = [
  { name: "Zapier", src: "/logos/zapier.png" },
  { name: "Calendly", src: "/logos/calendly.png", imgClass: "h-7" },
  { name: "Apollo", src: "/logos/apolloio.avif" },
  { name: "Pipedrive", src: "/logos/pipedrive.png" },
  { name: "Slack", src: "/logos/slack.png", imgClass: "h-7" },
];

function ToolCard({
  name,
  src,
  imgClass = "h-6",
}: {
  name: string;
  src?: string;
  imgClass?: string;
}) {
  return (
    <div className="flex items-center justify-center h-14 w-28 rounded-lg border border-border bg-muted/50 px-3 py-2 shrink-0">
      {src ? (
        <img
          src={src}
          alt={name}
          className={`${imgClass} max-w-full object-contain opacity-90 hover:opacity-100 transition-all duration-200`}
          onError={(e) => {
            const img = e.currentTarget as HTMLImageElement;
            img.style.display = "none";
            const label = img.nextElementSibling as HTMLElement | null;
            if (label) label.classList.remove("hidden");
          }}
        />
      ) : null}
      <span className={`text-xs font-medium text-muted-foreground${src ? " hidden" : ""}`}>
        {name}
      </span>
    </div>
  );
}

export function StackTransparencySection() {
  return (
    <section
      id="stack"
      className="flex flex-col items-center justify-center gap-12 py-20 w-full px-6"
    >
      <div className="text-center max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-secondary mb-3">
          The Infrastructure
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
