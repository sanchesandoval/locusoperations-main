import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

export const siteConfig = {
  name: "Locus",
  description: "Turn ad spend into booked appointments",
  url: "https://locusaiconsulting.com",
  links: {
    email: "hello@locusaiconsulting.com",
    twitter: "https://twitter.com/locusops",
    linkedin: "https://linkedin.com/company/locus",
    instagram: "https://instagram.com/locusops/",
  },
  header: [
    { href: "#problem", label: "The Problem" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#testimonials", label: "Results" },
    { href: "#faq", label: "FAQ" },
  ],
  faqs: [
    {
      question: "What is Locus and how does it help my clinic?",
      answer:
        "Locus is an AI-powered lead operations platform built specifically for med spas and aesthetic clinics. We help you convert more of your paid leads into booked appointments by fixing the gaps in your follow-up process.",
    },
    {
      question: "How quickly can I see results?",
      answer:
        "Most clinics see measurable improvements within the first 2 weeks. Our AI responds to leads within 60 seconds, which alone can double your contact rate. Full optimization typically takes 4-6 weeks.",
    },
    {
      question: "Do you replace my existing booking system?",
      answer:
        "No, we integrate with your existing systems like Boulevard, Mangomint, Vagaro, and others. Locus works alongside your current tech stack to fill the gaps, not replace what's already working.",
    },
    {
      question: "How does pricing work?",
      answer:
        "We offer transparent, performance-based pricing. After your free Leak Finder assessment, we'll recommend a package based on your clinic's specific needs and volume. No long-term contracts required.",
    },
    {
      question: "What integrations do you support?",
      answer:
        "We integrate with major CRMs (HubSpot, Salesforce), booking platforms (Boulevard, Mangomint, Vagaro, Zenoti), communication tools (Slack), and most marketing platforms. Custom integrations are also available.",
    },
  ],
  footer: [
    {
      title: "Product",
      links: [
        { href: "/book-call", label: "Book a Call" },
      ],
    },
    {
      title: "Company",
      links: [
        { href: "#how-it-works", label: "How It Works" },
        { href: "#testimonials", label: "Results" },
        { href: "#faq", label: "FAQ" },
      ],
    },
  ],
  socialLinks: [
    { href: "https://twitter.com/locusops", icon: FaTwitter, label: "Twitter" },
    {
      href: "https://linkedin.com/company/locus",
      icon: FaLinkedin,
      label: "LinkedIn",
    },
    {
      href: "https://instagram.com/locusops/",
      icon: RiInstagramFill,
      label: "Instagram",
    },
  ],
};

export type SiteConfig = typeof siteConfig;
