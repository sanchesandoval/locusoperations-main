import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do you do ads or just automation?",
    answer: "We do both. Locus handles the full funnel—from premium lead generation (ads, offers, landing pages) through to automation (follow-up, AI qualification, booking, reminders, and reactivation). You get a complete lead-to-booked system, not just one piece.",
  },
  {
    question: "Will AI sound robotic?",
    answer: "No. Our AI voice agents are trained to sound natural and conversational—not like a call center bot. They're designed to represent your brand professionally, qualify leads effectively, and hand off to your human team seamlessly when needed.",
  },
  {
    question: "We already have a front desk. Does this replace them?",
    answer: "Not at all. Locus complements your front desk team by handling the repetitive, high-volume tasks—after-hours calls, initial follow-ups, reminders, and reactivation. Your team can focus on what they do best: creating an exceptional in-person client experience.",
  },
  {
    question: "How fast can we launch?",
    answer: "Most clinics are live within 2-3 weeks. Complex multi-location setups or custom integrations may take 4-6 weeks. We move fast because leads don't wait.",
  },
  {
    question: "Can you work with our existing CRM?",
    answer: "Yes. We primarily build on GoHighLevel (GHL) for its robust automation capabilities, but we can integrate with existing systems like HubSpot, Salesforce, or practice management tools like Zenoti, Boulevard, and more.",
  },
  {
    question: "What does 'HIPAA-ready' mean here?",
    answer: "HIPAA readiness depends on your tools, configuration, and clinic policies. We align systems to HIPAA requirements when applicable—including BAAs with vendors, secure data handling, and compliant workflows. We do not provide legal or compliance advice.",
  },
  {
    question: "What if we have multiple providers/locations?",
    answer: "We handle multi-location and multi-provider setups on our Enterprise tier. Each location gets its own pipeline, routing rules, and reporting while you maintain centralized oversight.",
  },
  {
    question: "What results should we expect in the first 30 days?",
    answer: "In month one, you'll see faster lead response times (under 60 seconds), structured follow-up sequences running automatically, and improved booking rates. Full optimization typically takes 2-3 months as we refine offers, messaging, and automation based on data.",
  },
  {
    question: "How do we get started?",
    answer: "Start with our free Leak Finder assessment to identify where your bookings are slipping through the cracks. Then book a 15-minute Pipeline Diagnostic call where we'll map your leaks and recommend the right engagement level.",
  },
];

const FAQSection = () => {
  return (
    <section className="section-spacing relative">
      <div className="container-main">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary font-medium mb-4">Questions</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Frequently Asked
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="card-premium px-6 border-border/50"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
