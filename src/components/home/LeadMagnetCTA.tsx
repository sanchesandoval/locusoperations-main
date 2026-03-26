import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
const LeadMagnetCTA = () => {
  return <section className="section-spacing relative">
      <div className="container-main relative z-10">
        <div className="max-w-3xl mx-auto card-premium p-8 sm:p-12 lg:p-16 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Free Revenue Leak Diagnostic</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            You're losing revenue somewhere.{" "}
            <span className="text-muted-foreground">This tells you where.</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto mb-8">
            Answer 12 quick questions across speed-to-lead, follow-up, and retention. Get a personalized diagnostic showing exactly which leaks to fix first.
          </p>
          <Link to="/diagnostic" className="btn-primary text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4 inline-flex items-center gap-2">
            Take the Revenue Leak Diagnostic
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-xs text-muted-foreground/60 mt-6">
            Takes under 3 minutes. Completely free. Results delivered instantly.
          </p>
        </div>
      </div>
    </section>;
};
export default LeadMagnetCTA;