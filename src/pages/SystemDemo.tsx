import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowRight } from "lucide-react";
import { CheckCircleIcon } from "@/components/icons/BrandIcons";

const features = [
  "Locus OS (booking + follow-up automation)",
  "Missed-call text-back (after-hours capture)",
  "Multi-touch follow-up sequences",
  "No-show prevention reminders",
  "Pipeline tracking dashboard",
  "Technical support",
];

const SystemDemo = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
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
          <div className="max-w-xl mx-auto mb-12">
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
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SystemDemo;
