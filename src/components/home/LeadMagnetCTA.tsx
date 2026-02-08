import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const LeadMagnetCTA = () => {
  return (
    <section className="section-spacing relative">
      <div className="container-main relative z-10">
        <div className="max-w-3xl mx-auto card-premium p-8 sm:p-12 lg:p-16 text-center">
          <p className="text-primary font-medium mb-4">Free Assessment</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Discover Which Revenue Leaks Are Costing You the Most
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
            Answer 12 quick questions and get a personalized scorecard showing exactly where your pipeline is bleeding revenue.
          </p>
          <Link
            to="/scorecard"
            className="btn-primary text-base sm:text-lg px-8 py-4 inline-flex items-center gap-2"
          >
            Find My Revenue Leaks
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-xs text-muted-foreground/60 mt-6">
            Takes under 3 minutes. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnetCTA;
