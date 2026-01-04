import { useEffect } from "react";
import { Link } from "react-router-dom";
import locusLogo from "@/assets/locus-logo.png";

const BookCall = () => {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="container-main">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link to="/" className="flex items-center">
              <img 
                src={locusLogo} 
                alt="Locus" 
                className="h-8 lg:h-9 w-auto"
              />
            </Link>
            <Link
              to="/start-leak-finder"
              className="btn-primary text-xs sm:text-sm px-3 sm:px-4"
            >
              Start Leak Finder
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

          {/* Calendly embed */}
          <div className="max-w-4xl mx-auto card-premium overflow-hidden">
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/locusops?hide_gdpr_banner=1&background_color=141414&text_color=fafafa&primary_color=4a9d8e" 
              style={{
                minWidth: "320px",
                height: "700px"
              }} 
            />
          </div>

          {/* Privacy note */}
          <p className="text-center text-xs text-muted-foreground/60 mt-6 max-w-md mx-auto">
            By booking a call, you agree to receive communications from Locus. 
            We respect your privacy and will never share your information.
          </p>
        </div>
      </main>
    </div>
  );
};

export default BookCall;
