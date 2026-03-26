import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is this just AI automation or are you actually building something custom?",
    answer:
      "Custom every time. We don't sell packages or plug in pre-built templates and call it done. We run the diagnostic first, scope exactly what's broken, and build specifically to that. Every system is built inside your existing tools and documented so your team can own it.",
  },
  {
    question: "Why not just hire a full-time RevOps person?",
    answer:
      "A senior RevOps hire costs $150K-$200K and takes 3-6 months to be effective. With Locus you get the diagnostic, the build, and the ongoing support for a fraction of that cost. You're live in weeks not months. And when the engagement ends, you own everything we built.",
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
      "Operational improvements show up within the first two weeks of deployment: faster lead response, automated follow-up running, no-shows dropping. Revenue impact typically becomes measurable within the first 90 days as the pipeline data accumulates and the system compounds.",
  },
  {
    question: "Is this a recurring cost forever or do we actually own the system?",
    answer:
      "You own it. This isn't a retainer that stops working when you stop paying. We build the system, document everything, and hand it off clean. If you want us to keep running it, that's an option. If you want to take it in-house, we give you everything you need to do that. The system is yours either way.",
  },
  {
    question: "We've tried automation tools before and they didn't stick. What's different here?",
    answer:
      "Most automation projects fail because they automate a broken process. The tool wasn't the problem. The foundation was. We run the diagnostic before we build anything, which means we fix the process first and automate second. That's not how most agencies work. It's the only way we work.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-spacing relative">
      <div className="container-main">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Common Questions</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Straight answers.</h2>
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
