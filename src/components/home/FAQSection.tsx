import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do you do ads or just automation?",
    answer:
      `We do both. Ads are just the "fuel." We build the "engine" (infrastructure) that makes the fuel valuable.`,
  },
  {
    question: "Will AI sound robotic?",
    answer:
      `No. We deploy a "Digital Cortex" specifically trained on your clinic's protocols and tone of voice. It is engineered to handle medical FAQs and qualify patients using natural language, ensuring the transition from inquiry to booked appointment feels professional and personal, 24/7.`,
  },
  {
    question: "Does Locus replace my front desk?",
    answer:
      `Not at all. Locus complements your front desk team. We remove the low-leverage, repetitive tasks—like answering "Do you offer Semaglutide?" at 2 AM—so your clinical staff can focus on high-value, in-person patient care and optimizing the clinic experience.`,
  },
  {
    question: "How does Locus integrate with my current EHR (Zenoti, Mangomint, etc.)",
    answer:
      `Locus acts as the Central Nervous System that bridges the gap between your acquisition channels and your clinical software. We use advanced system integrator "plumbing" to ensure that when an appointment is booked in Locus, it is reflected in your existing patient management system without manual data entry.`,
  },
  {
    question: "How fast can we launch?",
    answer:
      "Most clinics are live within 2-3 weeks. Complex multi-location setups or custom integrations may take 4-6 weeks. We move fast because leads don't wait.",
  },
  {
    question: "Is this a monthly marketing tax or an asset?",
    answer:
      `Locus is a business asset. Unlike a traditional agency where results stop when you stop paying, we follow the "Build & Release" model. We install the infrastructure into your business; if you ever choose to move operations in-house, you own the system we've built.`,
  },
  {
    question: "How fast will I see an increase in booked appointments?",
    answer:
      `Most clinics see immediate revenue recovery within the first 14 days by launching an automated Database Reactivation on their dormant leads. Our "Speed-to-Lead" infrastructure ensures you capture the 21x higher conversion probability that occurs when responding to new leads in under 5 minutes.`,
  },
  {
    question: "Why Locus instead of a standard marketing agency?",
    answer:
      `Agencies provide labor; SIOs provide Infrastructure. Agencies often give you more "work" by dumping raw leads into your inbox. Locus installs the SCALE framework to ensure every lead is systemically moved to a booked appointment on your calendar automatically.`,
  },
  {
    question: "Is the system HIPAA-compliant?",
    answer:
      `We prioritize technical data integrity. Locus is configured for HIPAA-readiness, including secure messaging and encrypted data storage, ensuring your "Digital Cortex" operates within the security standards required for medical wellness.`,
  },
  {
    question: "Can Locus handle multi-location clinics?",
    answer:
      `Yes. Our Locus Elite tier is specifically designed for enterprises. We provide a "Command Center" view, allowing you to evaluate KPIs across all locations while maintaining standardized, automated booking infrastructures for each individual branch.`,
  },
];

const FAQSection = () => {
  return (
    <section className="section-spacing relative">
      <div className="container-main">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary font-medium mb-4">Questions</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Frequently Asked</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="card-premium px-6 border-border/50">
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
