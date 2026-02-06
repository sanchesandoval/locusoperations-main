import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowRight } from "lucide-react";
import { CheckCircleIcon } from "@/components/icons/BrandIcons";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const features = [
  "Locus OS (booking + follow-up automation)",
  "Missed-call text-back (after-hours capture)",
  "Multi-touch follow-up sequences",
  "No-show prevention reminders",
  "Pipeline tracking dashboard",
  "Technical support",
];

const demoFaqs = [
  {
    question: "Do I need technical skills?",
    answer: "No. Setup guides walk you through connecting your calendar, phone, and email. If you'd rather we handle it, book a call for Locus Ops.",
  },
  {
    question: "Can I upgrade to Locus Ops later?",
    answer: "Absolutely. Core is the right choice if you're building your foundation or want full control of the system. Many clinics stay on Core indefinitely. Others upgrade to Ops when they want done-for-you implementation, or to Command when they scale to multiple locations. We'll migrate everything seamlessly.",
  },
  {
    question: "What if it doesn't work for my clinic?",
    answer: "Cancel anytime. No contracts. If you're not seeing more booked appointments in 30 days, we'll help you troubleshoot or you can cancel.",
  },
];

const SystemDemo = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-36 pb-16">
        <div className="container-main">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-primary font-medium mb-4">See The System In Action</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              See How Locus Fixes Revenue Leaks in 5 Minutes
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Watch how the system responds to leads in under 60 seconds, follows up automatically, and cuts no-shows—so you stop losing $5K-15K/month on leads that never book.
            </p>
          </div>

          {/* Video Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="card-premium p-2 rounded-2xl">
              <div className="aspect-video bg-muted/50 rounded-xl flex items-center justify-center border border-border/50">
                <div className="text-center p-8">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <div className="w-0 h-0 border-l-[24px] border-l-primary border-y-[14px] border-y-transparent ml-2" />
                  </div>
                  <p className="text-muted-foreground mb-2">Loom Video Embed</p>
                  <p className="text-sm text-muted-foreground/60">
                    Replace this placeholder with your Loom embed code
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Locus Core Pricing Card */}
          <div className="max-w-xl mx-auto mb-12 mt-20">
            <div className="card-premium p-6 lg:p-8 flex flex-col">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-foreground mb-1">Locus Core</h3>
                <p className="font-bold text-foreground mb-4">The Operating System</p>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-foreground">$297</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="text-sm text-muted-foreground">No setup fee. Cancel anytime.</p>
              </div>

              {/* CTA */}
              <Link
                to="/book-call"
                className="block text-center py-3 rounded-xl font-semibold transition-all duration-300 mb-6 btn-primary"
              >
                Get Started
              </Link>

              {/* Features */}
              <div className="space-y-3 flex-1">
                <p className="text-sm font-medium text-muted-foreground">What's Included:</p>
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/90">{feature}</span>
                  </div>
                ))}
              </div>

              <p className="text-sm text-muted-foreground text-center mt-6">
                Self-install. Full control. No sales call needed.
              </p>
            </div>
          </div>

          {/* Secondary Upgrade CTA */}
          <div className="max-w-xl mx-auto text-center border-t border-border/30 pt-10">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Want us to install it for you?
            </h3>
            <p className="text-muted-foreground mb-6">
              Book a Strategy Call for Locus Ops — We build it, deploy it, and train your team. Live in 2-3 weeks.
            </p>
            <Link
              to="/book-call"
              className="btn-secondary inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
            >
              Book Strategy Call
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* FAQ Section */}
          <section id="demo-faq" className="mt-20">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-primary font-medium mb-4">Questions</p>
              <h2 className="text-3xl sm:text-4xl font-bold">Frequently Asked</h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {demoFaqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="card-premium px-6 border-border/50">
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
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SystemDemo;
