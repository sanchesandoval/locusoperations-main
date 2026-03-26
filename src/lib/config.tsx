import { FaLinkedin } from "react-icons/fa";

export const siteConfig = {
  name: "Locus",
  description: "AI-powered revenue operations for fast-moving B2B companies.",
  url: "https://www.locusops.com",
  links: {
    linkedin: "https://linkedin.com/company/locusaiops",
    instagram: "https://instagram.com/locusops/",
  },
  header: [
    { href: "#problem", label: "The Problem" },
    { href: "#method", label: "The Method" },
    { href: "#pricing", label: "Services" },
    { href: "#faq", label: "FAQ" },
  ],
  faqs: [
    {
      question: "Is this just AI automation or are you actually building something custom?",
      answer:
        "Custom every time. We don't sell packages or plug in pre-built templates and call it done. We run the diagnostic first, scope exactly what's broken, and build specifically to that. Every system is built inside your existing tools and documented so your team can own it.",
    },
    {
      question: "Why not just hire a full-time RevOps person?",
      answer:
        "A senior RevOps hire costs $150K–$200K and takes 3–6 months to be effective. With Locus, you get a diagnostician, a systems architect, and an implementation partner for a fraction of that cost, and you're live in weeks not months. When the engagement ends, you own everything we built.",
    },
    {
      question: "Our CRM and data are a mess. Do we need to clean that up before working with you?",
      answer:
        "No. Messy data is usually the first thing we find on the diagnostic. We clean the architecture while we build the automation so you're not running new systems on top of broken foundations. Most clients don't realize how bad the data problem is until we show them on screen.",
    },
    {
      question: "We already use HubSpot, GoHighLevel, Zapier, and a few other tools. Do we have to switch anything?",
      answer:
        "Nothing gets ripped out. We build inside whatever you're already using and act as the connective layer between tools that aren't talking to each other. You own the infrastructure at the end. Zero new software required unless the audit reveals a specific gap your current stack genuinely can't fill.",
    },
    {
      question: "How quickly will we actually see results?",
      answer:
        "Operational improvements show up within the first two weeks of deployment — faster lead response, automated follow-up running, no-shows dropping. Revenue impact typically becomes measurable within the first 90 days as the pipeline data accumulates and the system compounds.",
    },
    {
      question: "Is this a recurring cost forever or do we actually own the system?",
      answer:
        "You own it. This isn't a retainer that stops working when you stop paying. We build the system, document everything, and hand it off clean. If you want us to keep running it, that's an option. If you want to take it in-house, we give you everything you need to do that. The system is yours either way.",
    },
    {
      question: "We've tried automation tools before and they didn't stick. What's different here?",
      answer:
        "Most automation projects fail because they automate a broken process. The tool wasn't the problem — the foundation was. We run the diagnostic before we build anything, which means we fix the process first and automate second. That's not how most agencies work. It's the only way we work.",
    },
  ],
  footer: [
    {
      title: "Get Started",
      links: [
        { href: "/book-call", label: "Book a Free Consultation" },
        { href: "/diagnostic", label: "Revenue Leak Diagnostic" },
      ],
    },
    {
      title: "Company",
      links: [
        { href: "/#our-services", label: "Services" },
        { href: "/#faq", label: "FAQs" },
      ],
    },
  ],
  socialLinks: [
    {
      href: "https://linkedin.com/company/locusaiops",
      icon: FaLinkedin,
      label: "LinkedIn",
    },
  ],
};

export type SiteConfig = typeof siteConfig;
