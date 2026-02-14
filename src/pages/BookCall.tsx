import { useEffect } from "react";
import { Link } from "react-router-dom";
import locusLogo from "@/assets/locus-logo.png";
import Footer from "@/components/layout/Footer";
const BookCall = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/embed.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="container-main">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link to="/" className="flex items-center">
              <img alt="Locus" className="h-8 lg:h-9 w-auto" src="/lovable-uploads/da30ffe9-a858-45fe-9836-e5b94140a7b0.png" />
            </Link>
            <Link to="/" className="btn-secondary text-xs sm:text-sm px-3 sm:px-4">
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="pt-24 lg:pt-28 pb-16">
        <div className="container-main">
          {/* Headline section */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-primary font-medium mb-4">Get Started</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Book Your Pipeline Diagnostic
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              30 minutes. No fluff. We map where your bookings leak and what to install first.
            </p>
          </div>

          {/* GHL Booking embed */}
          <div className="max-w-4xl mx-auto card-premium overflow-hidden">
          <iframe
            src="https://api.leadconnectorhq.com/widget/booking/TqgqhfmP8rOA9BTwevpK"
            style={{ width: "100%", border: "none", overflow: "hidden", minHeight: "700px" }}
            scrolling="no"
            id="msgsndr-calendar"
          />
          </div>

          {/* Privacy note */}
          <p className="text-center text-xs text-muted-foreground/60 mt-6 max-w-md mx-auto">
            By booking a call, you agree to receive communications from Locus. 
            We respect your privacy and will never share your information.
          </p>
        </div>
      </main>
      <Footer />
    </div>;
};
export default BookCall;