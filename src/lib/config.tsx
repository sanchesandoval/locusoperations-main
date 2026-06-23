import { cn } from "@/lib/utils";

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "p-1 py-0.5 font-medium dark:font-semibold text-secondary",
        className,
      )}
    >
      {children}
    </span>
  );
};

export const BLUR_FADE_DELAY = 0.15;

export const siteConfig = {
  name: "Locus | AI GTM Infrastructure",
  footerDescription: "The AI-Native GTM partner that audits your revenue motion, finds the leaks, and builds the systems to fix them.",
  description:
    "Locus builds AI GTM infrastructure for B2B SaaS companies. We audit your revenue motion, capture buying signals, and build automated systems that generate qualified pipeline without adding headcount.",
  cta: "Find My Revenue Leaks",
  url: process.env.NEXT_PUBLIC_APP_URL || "https://locusops.com",
  keywords: [
    "Revenue Operations",
    "AI GTM",
    "B2B SaaS",
    "Pipeline Audit",
    "Sales Ops",
    "Marketing Ops",
  ],
  links: {
    email: "chris@locusops.com",
    linkedin: "https://linkedin.com/company/locusops",
  },
  nav: {
    links: [
      { id: 1, name: "Home", href: "/#hero" },
      { id: 2, name: "How it Works", href: "/#how-it-works" },
    ],
  },
  hero: {
    badge: "For B2B SaaS Companies",
    title: "Your pipeline is leaking revenue. We find it, prove it, and fix it.",
    description:
      "We audit your full revenue motion: marketing, sales, and customer success. We surface exactly where pipeline is leaking, and fix it inside your existing stack. No new headcount. Nothing ripped out.",
    cta: {
      primary: {
        text: "Find My Revenue Leaks",
        href: "/book-call",
      },
    },
  },
  companyShowcase: {
    companyLogos: [
      {
        id: 1,
        name: "HubSpot",
        logo: (
          <img
            src="/logos/hubspot-new.png"
            alt="HubSpot"
            className="h-7 object-contain opacity-80 transition-all duration-200"
          />
        ),
      },
      {
        id: 2,
        name: "Clay",
        logo: (
          <img
            src="/logos/clay.webp"
            alt="Clay"
            className="h-7 object-contain opacity-80 transition-all duration-200"
          />
        ),
      },
      {
        id: 3,
        name: "Apollo",
        logo: (
          <img
            src="/logos/apolloio.avif"
            alt="Apollo"
            className="h-7 object-contain opacity-80 transition-all duration-200"
          />
        ),
      },
      {
        id: 4,
        name: "GoHighLevel",
        logo: (
          <img
            src="/logos/highlevel.png"
            alt="GoHighLevel"
            className="h-[50px] object-contain opacity-80 transition-all duration-200"
          />
        ),
      },
      {
        id: 5,
        name: "n8n",
        logo: (
          <img
            src="/logos/n8n.svg"
            alt="n8n"
            className="h-7 object-contain opacity-80 transition-all duration-200"
          />
        ),
      },
      {
        id: 6,
        name: "Smartlead",
        logo: (
          <img
            src="/logos/smartlead-full-logo.webp"
            alt="Smartlead"
            className="h-7 object-contain opacity-80 transition-all duration-200"
          />
        ),
      },
      {
        id: 7,
        name: "Instantly",
        logo: (
          <img
            src="/logos/InstantlyAI.png"
            alt="Instantly"
            className="h-7 object-contain opacity-80 transition-all duration-200"
          />
        ),
      },
      {
        id: 8,
        name: "Lemlist",
        logo: (
          <img
            src="/logos/lemlist-large-logo.png"
            alt="Lemlist"
            className="h-7 object-contain opacity-80 transition-all duration-200"
          />
        ),
      },
    ],
  },
  problemSection: {
    title: "Most revenue teams are operating on vibes.",
    description:
      "The real leaks aren't in the close. They're in the three ops layers nobody touches together: marketing, sales, and CS. And nobody's measuring any of it.",
    without: [
      "Speed-to-lead averaging 47+ hours — leads go cold before sales sees them",
      "Attribution tracked in a spreadsheet, sometimes",
      "CRM is a graveyard — contacts rotting, no follow-up since last quarter",
      "Site visitors, hiring triggers, and funding signals routing to nobody",
      "CS onboards without knowing what sales promised",
      "Renewals have no owner and no timeline",
      "No baseline — every report starts a debate about whose numbers are right",
      "Strategy built on gut feel and last quarter's memory",
    ],
    with: [
      "Speed-to-lead under 5 minutes, triggered automatically",
      "Every source traced to pipeline",
      "CRM updated by workflow — every contact enriched, every stage accurate",
      "Buying signals captured and routed the moment they fire",
      "Sales-to-CS handoff is documented and automatic",
      "Renewal sequences fire before anyone has to ask",
      "One baseline, set on day one — every result measured against it",
      "Decisions backed by the numbers you set on day one",
    ],
  },
  howItWorksSection: {
    badge: "How it Works",
    title: "Three steps. One revenue motion.",
    description:
      "We find the leaks in 2 weeks. We build the fixes in a month. We optimize and prove results in the final 6 weeks.",
    items: [
      {
        id: 1,
        step: "01",
        timeline: "Weeks 1-2",
        title: "Audit",
        description:
          "We map your full revenue motion across marketing, sales, and CS. Every signal that exists, what's being captured, and what's going unacted on. You get the full picture before we recommend a single fix.",
        deliverables: [
          "Full motion mapped across all three layers",
          "Prioritized leak list with dollar estimates attached",
          "Baseline metrics locked before any build begins",
          "Clear recommendation: what to fix first and why",
        ],
      },
      {
        id: 2,
        step: "02",
        timeline: "Weeks 3-6",
        title: "Build",
        description:
          "We build signal-to-action pipelines inside the stack you already run. One system at a time, prioritized by what the audit found. Every build measured against the baseline we set during the audit.",
        deliverables: [
          "Signal capture and CRM enrichment wired in",
          "Outreach execution automated end-to-end",
          "Each fix tied directly to a leak from the audit",
          "Every build measured against your day-one baseline",
        ],
      },
      {
        id: 3,
        step: "03",
        timeline: "Weeks 7-12",
        title: "Scale",
        description:
          "Systems are live. Now we optimize. We tighten what's working, cut what isn't, and re-measure everything against the baseline we set on day one.",
        deliverables: [
          "Ongoing optimization across all active systems",
          "Full performance review against day-one baseline",
          "You own every workflow, prompt, and config we built",
          "Continue, expand, or walk away. Your call.",
        ],
      },
    ],
  },
  signalCategoriesSection: {
    badge: "Signal Intelligence",
    title: "We act on signals your competitors haven't seen yet.",
    description:
      "Buying intent doesn't announce itself. These six signal types tell us who's in-market, why, and when to act — before they fill out a competitor's form.",
  },
  faqSection: {
    title: "Answered plainly.",
    description:
      "What B2B founders and operators ask before they commit.",
    faQitems: [
      {
        id: 1,
        question: "What makes Locus different from a typical RevOps firm?",
        answer:
          "We audit before we build. Most firms are paid to build something, so they always recommend building. We're paid to find what's actually leaking. Sometimes that's a $200/mo fix, not a $20K project. The strategy call is free — you get the audit findings before you commit to anything.",
      },
      {
        id: 2,
        question: "What does the 90-day pilot include?",
        answer:
          "Audit and baseline locked in weeks 1-2. Systems built and live in weeks 3-6. Optimization and proof of impact in weeks 7-12. At day 90 we either continue running the system or you walk away with the playbook and the working system.",
      },
      {
        id: 3,
        question: "What if you find we don't need a build?",
        answer:
          "That's the audit working correctly. Our pricing is structured so the audit itself is the deliverable. If you don't need a build, you don't pay for one.",
      },
      {
        id: 4,
        question: "Who is this for?",
        answer:
          "B2B SaaS companies doing $50K+ per month with a 1 to 5 person GTM team. Your pipeline is unpredictable and you don't have the internal bandwidth to fix it. You're growing fast enough that the gaps are expensive, but not yet at the size where you'd hire a full ops function. You want scalable systems, not a bigger headcount.",
      },
      {
        id: 10,
        question: "Can our team run this without you after the engagement?",
        answer:
          "Yes. You receive the n8n workflows, documented prompts, signal configs, and any custom tooling we built. Everything is built to be operated by your existing team. We can stay on for ongoing optimization if you want it, but you're never locked in.",
      },
      {
        id: 5,
        question: "How is this different from hiring a RevOps consultant?",
        answer:
          "A RevOps consultant builds a playbook and hands it to you. We audit first to find what's actually leaking, then build AI systems tuned to what your specific funnel needs. You don't get a deck. You get a working system with a before and after baseline.",
      },
      {
        id: 6,
        question: "Do you use AI?",
        answer:
          "Yes. AI is the speed layer — it handles research, personalization, and execution at scale. We own the logic layer: the strategy, the sequencing, and the decisions about what to build and when. AI doesn't replace judgment. It removes the bottleneck between a good decision and it actually happening.",
      },
      {
        id: 7,
        question: "How much time will this require from me?",
        answer:
          "2-3 hours in week 1 for the audit interview and system tour. 1 hour weekly thereafter for working sessions. Less than hiring an SDR.",
      },
      {
        id: 8,
        question: "What does pricing look like?",
        answer:
          "The strategy call is free. We run a live audit on it, map your revenue motion, and price the build against what we find. If the audit doesn't surface enough to justify the investment, there's nothing to pay. Build pricing is scoped on the call so you know exactly what you're committing to before you do.",
      },
    ],
  },
  ctaSection: {
    id: "cta",
    backgroundImage: "/agent-cta-background.png",
    title: "Find out exactly where your pipeline is leaking.",
    button: {
      text: "Find My Revenue Leaks",
      href: "/book-call",
    },
    subtext: "If we don't put 5 qualified meetings on your calendar within 30 days of your system going live, we work free until we do. The strategy call is free. The audit happens on it.",
  },
  footerLinks: [
    {
      title: "Services",
      links: [
        { id: 1, title: "How It Works", url: "/#how-it-works" },
        { id: 2, title: "The Infrastructure", url: "/#stack" },
      ],
    },
    {
      title: "Resources",
      links: [
        { id: 5, title: "FAQs", url: "/#faq" },
      ],
    },
    {
      title: "Connect",
      links: [
        { id: 8, title: "Find My Revenue Leaks", url: "/book-call" },
        { id: 10, title: "LinkedIn", url: "https://linkedin.com/in/christopherjsanchez" },
      ],
    },
  ],
};

export type SiteConfig = typeof siteConfig;
