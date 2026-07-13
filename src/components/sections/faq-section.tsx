import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { siteConfig } from "@/lib/config";

export function FAQSection() {
  const { faqSection } = siteConfig;

  return (
    <section
      id="faq"
      className="flex flex-col items-center justify-center gap-4 pb-10 w-full relative"
    >
      <div className="w-full p-10 pb-0 md:p-14 md:pb-0">
        <div className="max-w-xl mx-auto flex flex-col items-center justify-center gap-2">
          <p className="text-xs font-semibold uppercase tracking-widest text-secondary">
            Frequently Asked Questions
          </p>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance">
            {faqSection.title}
          </h2>
          <p className="text-muted-foreground text-center text-balance font-medium">
            {faqSection.description}
          </p>
        </div>
      </div>

      <div className="max-w-3xl w-full mx-auto px-10">
        <Accordion
          type="single"
          collapsible
          className="w-full border-b-0 grid gap-2"
        >
          {faqSection.faQitems.map((faq, index) => (
            <AccordionItem
              key={index}
              value={index.toString()}
              className="border-0 grid gap-2"
            >
              <AccordionTrigger className="border bg-accent border-border rounded-lg px-4 py-3.5 cursor-pointer no-underline hover:no-underline data-[state=open]:ring data-[state=open]:ring-primary/20">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="p-3 border text-primary rounded-lg bg-accent">
                <p className="text-primary font-medium leading-relaxed">
                  {faq.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
