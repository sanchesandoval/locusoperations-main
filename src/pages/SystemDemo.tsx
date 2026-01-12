import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowRight, Clock, Zap, TrendingUp } from "lucide-react";

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
              Watch How Locus Eliminates Lead Decay in 5 Minutes
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover how automated infrastructure responds within the critical 5-minute window 
              where leads are 21x more likely to qualify.
            </p>
          </div>

          {/* Video Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="card-premium p-2 rounded-2xl">
              {/* Loom Video Placeholder - Replace with actual embed */}
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

          {/* Key Value Props */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="card-premium p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">5-Minute Response</h3>
                <p className="text-sm text-muted-foreground">
                  Automated follow-up within the critical window when leads are hottest
                </p>
              </div>
              <div className="card-premium p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">21x More Likely</h3>
                <p className="text-sm text-muted-foreground">
                  Leads contacted within 5 minutes are 21x more likely to qualify
                </p>
              </div>
              <div className="card-premium p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Zero Lead Decay</h3>
                <p className="text-sm text-muted-foreground">
                  Never lose another lead to slow response times again
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-2xl mx-auto text-center">
            <div className="card-premium p-8 lg:p-12">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                Ready to Install Your Central Nervous System?
              </h2>
              <p className="text-muted-foreground mb-8">
                Stop losing leads to slow response times. Get Locus installed and start 
                converting more leads into booked consultations.
              </p>
              <Link
                to="/book-call"
                className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-lg"
              >
                Get Started Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <p className="text-sm text-muted-foreground mt-4">
                No sales call required • Start converting leads today
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SystemDemo;
