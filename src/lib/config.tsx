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
  name: "Locus | Go-to-Market Systems for B2B Software Companies",
  footerDescription: "The AI-native GTM partner for B2B software companies.",
  description:
    "Locus is the AI-native GTM partner for early-stage B2B software companies. We run signal-based outbound across email and LinkedIn and book qualified meetings straight onto your calendar, or build the same system inside your own stack.",
  cta: "Start Getting Meetings",
  url: process.env.NEXT_PUBLIC_APP_URL || "https://locusops.com",
  keywords: [
    "Revenue Operations",
    "AI GTM",
    "B2B SaaS",
    "Qualified Meetings",
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
      { id: 3, name: "Services", href: "/#services" },
    ],
  },
  hero: {
    badge: "For B2B Software Companies",
    title: (
      <>
        Qualified Meetings Delivered to You
        <br />
        <Highlight className="dark:font-medium">Every Single Month</Highlight>
      </>
    ),
    description: (
      <>
        We build and run the revenue system that books qualified meetings straight into your calendar and CRM. One setup fee to start, then{" "}
        <span className="underline decoration-secondary/60 underline-offset-4">you only pay for what lands</span>.
      </>
    ),
    microcopy:
      "100% performance-backed. If we don't book you a qualified meeting within 30 days of launch, you get your setup fee back.",
    cta: {
      primary: {
        text: "Start Getting Meetings",
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
          <>
            <img
              src="/logos/hubspot-new.png"
              alt="HubSpot"
              className="h-7 object-contain opacity-80 transition-all duration-200 dark:hidden"
            />
            <img
              src="/logos/hubspot-new-dark.png"
              alt="HubSpot"
              className="h-7 object-contain opacity-80 transition-all duration-200 hidden dark:block"
            />
          </>
        ),
      },
      {
        id: 2,
        name: "Attio",
        logo: (
          <img
            src="/logos/blacktext-attio-logo.png"
            alt="Attio"
            className="h-7 object-contain opacity-80 transition-all duration-200 dark:brightness-0 dark:invert"
          />
        ),
      },
      {
        id: 3,
        name: "n8n",
        logo: (
          <>
            <img
              src="/logos/n8n.svg"
              alt="n8n"
              className="h-7 object-contain opacity-80 transition-all duration-200 dark:hidden"
            />
            <img
              src="/logos/n8n-dark.svg"
              alt="n8n"
              className="h-7 object-contain opacity-80 transition-all duration-200 hidden dark:block"
            />
          </>
        ),
      },
      {
        id: 4,
        name: "Clay",
        logo: (
          <>
            <img
              src="/logos/clay.webp"
              alt="Clay"
              className="h-7 object-contain opacity-80 transition-all duration-200 dark:hidden"
            />
            <img
              src="/logos/clay-dark.webp"
              alt="Clay"
              className="h-7 object-contain opacity-80 transition-all duration-200 hidden dark:block"
            />
          </>
        ),
      },
      {
        id: 5,
        name: "Prospeo",
        logo: (
          <img
            src="/logos/prospeo-big-logo.png"
            alt="Prospeo"
            className="h-[78px] object-contain opacity-80 transition-all duration-200"
          />
        ),
      },
      {
        id: 6,
        name: "Smartlead",
        logo: (
          <>
            <img
              src="/logos/smartlead-full-logo.webp"
              alt="Smartlead"
              className="h-7 object-contain opacity-80 transition-all duration-200 dark:hidden"
            />
            <img
              src="/logos/smartlead-full-logo-dark.webp"
              alt="Smartlead"
              className="h-7 object-contain opacity-80 transition-all duration-200 hidden dark:block"
            />
          </>
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
        name: "HeyReach",
        logo: (
          <>
            <img
              src="/logos/heyreach-large-logo.png"
              alt="HeyReach"
              className="h-7 object-contain opacity-80 transition-all duration-200 dark:hidden"
            />
            <img
              src="/logos/heyreach-dark.png"
              alt="HeyReach"
              className="h-7 object-contain opacity-80 transition-all duration-200 hidden dark:block"
            />
          </>
        ),
      },
    ],
  },
  problemSection: {
    title: "Most revenue teams are operating on vibes.",
    description:
      "Reps spend their time building lists and sending messages, not talking to buyers. There's no repeatable system underneath any of it, and nobody's tracking where a meeting actually came from.",
    without: [
      "Outbound happens in bursts, then goes quiet for weeks",
      "Reps build lists and send messages instead of talking to buyers",
      "No repeatable process, every rep does outbound their own way",
      "No idea who's actually in-market right now, so it's volume over timing",
      "CRM full of contacts with zero context",
      "No way to trace a meeting back to what actually caused it",
      "Meetings on the calendar are a coin flip",
      "No way to know what's actually working",
    ],
    with: [
      "Outbound runs every week, on a schedule",
      "Reps spend their time talking to buyers and closing deals",
      "One repeatable system, every rep works from the same playbook",
      "Buying signals tracked and acted on the moment they happen, timing over volume",
      "Every contact synced to your CRM, fully enriched",
      "Every meeting traced back to its exact source",
      "Qualified meetings land on your calendar every month",
      "Every result measured, so you know what's working",
    ],
  },
  howItWorksSection: {
    badge: "How it Works",
    title: "From Cold Prospect to Booked Meeting in Two Weeks.",
    description:
      "Two weeks to set everything up right. Then outbound runs, meetings land, and we tune it every week based on what's actually working.",
    items: [
      {
        id: 1,
        step: "01",
        timeline: "Week 1",
        title: "We Learn Your Business",
        description:
          "We look at your current outbound, your signals, your replies, and what's actually working today. We map your ICP and your total addressable market, and build the account list from there.",
        deliverables: [
          "Current outbound and data reviewed",
          "ICP and TAM mapped, account list built",
          "Buying signals chosen for your specific market",
        ],
      },
      {
        id: 2,
        step: "02",
        timeline: "Week 2",
        title: "We Build the Infrastructure",
        description:
          "Email domains warm up, verified contacts get pulled in, and we set the signals that trigger outreach. For example, a hiring signal plus new funding means we reach out. Everything is tested before a single message goes out.",
        deliverables: [
          "Email infrastructure built and warming",
          "LinkedIn outbound wired in",
          "Buying signals set to trigger outreach automatically",
        ],
      },
      {
        id: 3,
        step: "03",
        timeline: "Week 3",
        title: "Outbound Goes Live",
        description:
          "Email and LinkedIn campaigns launch across your best-fit accounts. The moment someone replies interested, in 10 minutes or less they get a booking link, and your team gets a Slack and CRM alert with the full context. Call them for a warmer shot, or let them book straight onto the calendar. Either way, that's a qualified meeting delivered.",
        deliverables: [
          "Hot replies routed in 10 minutes or less",
          "Prospect gets a link to book, your team gets a Slack and CRM alert",
          "Qualified meeting delivered the moment it's booked",
        ],
      },
      {
        id: 4,
        step: "04",
        timeline: "Weeks 4-12",
        title: "The System That Compounds",
        description:
          "We review every campaign weekly. We double down on what's booking meetings, cut what isn't, and ship changes in days, not months. Keep it running with us, or once it's proven, we build the same system into your own infrastructure.",
        deliverables: [
          "Weekly review across every active campaign",
          "Winners scaled, losers cut, changes shipped fast",
          "Keep it running with us, or once it's proven, we build it into your own infrastructure",
        ],
      },
    ],
  },
  signalCategoriesSection: {
    badge: "The Playbook",
    title: "We act on buying intent your competitors haven't seen yet.",
    description:
      "Buying intent doesn't announce itself. Here's what we track, and the exact play we run the moment each signal fires.",
    closingNote:
      "These six barely scratch the surface. Every play we build is designed around your buyers and the signals that actually predict the deal for you.",
  },
  servicesSection: {
    badge: "Services",
    title: (
      <>
        1. <Highlight>Operate.</Highlight> We run it for you. 2.{" "}
        <Highlight>Build.</Highlight> We build it, you own it.
      </>
    ),
    description:
      "Two ways to work with us. Start wherever makes sense, there's no required order.",
    closingNote: {
      prefix: "Not sure which one fits?",
      linkText: "Book a free call and we'll figure it out together →",
    },
    plans: [
      {
        id: 1,
        tag: "Done For You",
        timeline: "Monthly, Start Now",
        title: "We Run Your Outbound",
        description:
          "For teams that want qualified meetings without adding headcount. We run outbound ourselves, email and LinkedIn, using our own stack. You just show up to the meetings.",
        features: [
          "Email and LinkedIn outreach, run for you",
          "Qualified meetings booked straight to your calendar",
          "Signal-based outbound, not generic blasts",
          "Weekly optimization, built into the engagement",
          "Setup fee to start, then pay per qualified meeting",
          "30-day guarantee on your setup fee",
        ],
        cta: { text: "Start Getting Meetings", href: "/book-call" },
        emphasized: true,
      },
      {
        id: 2,
        tag: "Own The System",
        timeline: "90-Day Project",
        title: "Build Your Outbound Engine",
        description:
          "For teams with a specific gap we diagnose first: messy CRM data, no signal tracking, disconnected tools, or outreach still done by hand. We rebuild what's broken inside your own stack, running it while we build, so outbound never stops. In 90 days, you own the whole system.",
        features: [
          "Signal capture and enrichment wired into your CRM",
          "Orchestration logic connecting every tool you use",
          "Outreach sequences built and ready to run",
          "We run it for you while it's being built",
          "Hand it off to your team, or keep us running it, your call",
          "One project fee, scoped on a call",
        ],
        cta: { text: "Build the Foundation", href: "/book-call" },
        emphasized: false,
      },
    ],
  },
  faqSection: {
    title: "Answered plainly.",
    description:
      "What B2B founders and operators ask before they commit.",
    faQitems: [
      {
        id: 1,
        question: "Who is this for?",
        answer:
          "Early-stage B2B software companies who need qualified meetings landing on their calendar and don't have the time, team, or systems to run outbound themselves. If you already have a full outbound engine running and just want a tune-up, this is probably more than you need.",
      },
      {
        id: 2,
        question:
          "How is this different from another agency, an AI SDR tool, or hiring our own SDR?",
        answer:
          "Most agencies get paid whether or not it works. Most AI SDR tools send more volume, not more meetings. An SDR costs you salary and months of ramp before you see a result. We get paid when a qualified meeting actually lands, so our incentive is the same as yours from day one.",
      },
      {
        id: 3,
        question: "How does pay-per-qualified-meeting pricing work?",
        answer:
          "For Operate, you pay one setup fee to get everything built and live: ICP definition, inbox warmup, campaign build. After that, you're billed per qualified meeting, not a flat monthly number. If we don't book meetings, you don't pay beyond the setup fee. Exact numbers get scoped on the call based on your deal size.",
      },
      {
        id: 4,
        question: "What counts as a qualified meeting?",
        answer:
          "We agree on the criteria in writing before a single email sends: right company, right person, a real reason to buy. You confirm every meeting against that bar before it counts. If it doesn't clear the bar, it doesn't get billed.",
      },
      {
        id: 5,
        question: "What channels do you actually run?",
        answer:
          "Email and LinkedIn. No cold calling, no paid ads. Two channels run well beats five channels run half-heartedly.",
      },
      {
        id: 6,
        question: "Isn't outbound dead? My inbox is already full of AI spam.",
        answer:
          "Generic blasts are dead. What still works is reaching the right person the week something actually changes for them, a new hire, a funding round, a tool they just adopted. That's the opposite of a blast, and it's the whole premise of what we run.",
      },
      {
        id: 7,
        question: "Will this hurt my reputation with prospects?",
        answer:
          "Every inbox warms for two weeks minimum before it sends a single message. Every campaign is written off a real signal, not a template with a first name dropped in. If a message reads like spam, it doesn't go out under your name.",
      },
      {
        id: 8,
        question: "Do you replace our tools or our team?",
        answer:
          "No. Operate runs on our own stack, so nothing changes on your end except meetings landing on your calendar. Build gets built inside your existing tools, so you end up owning more of what you already pay for, not less.",
      },
      {
        id: 9,
        question: "What happens if it doesn't work?",
        answer:
          "We don't promise a number upfront, results depend on your ICP and market. What's guaranteed: if we haven't booked a qualified meeting within 30 days of launch, you get 100% of your setup fee back.",
      },
      {
        id: 10,
        question: "Is there a setup fee, retainer, or long contract?",
        answer:
          "Operate has a setup fee to get live, then pay-per-meeting after that, with a 3-month minimum so the system has time to actually compound. Build is a single project fee, scoped on the call. Nothing auto-renews without you saying yes.",
      },
    ],
  },
  ctaSection: {
    id: "cta",
    backgroundImage: "/agent-cta-background.png",
    title: "Let's get qualified meetings on your calendar.",
    button: {
      text: "Start Getting Meetings",
      href: "/book-call",
    },
    subtext: "Free strategy call. If we don't book a qualified meeting within 30 days of launch, you get 100% of your setup fee back.",
  },
  footerLinks: [
    {
      title: "Services",
      links: [
        { id: 1, title: "How It Works", url: "/#how-it-works" },
        { id: 2, title: "The Solution", url: "/#solution" },
        { id: 3, title: "Operate or Build", url: "/#services" },
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
        { id: 8, title: "Start Getting Meetings", url: "/book-call" },
        { id: 10, title: "LinkedIn", url: "https://linkedin.com/in/christopherjsanchez" },
      ],
    },
  ],
};

export type SiteConfig = typeof siteConfig;
