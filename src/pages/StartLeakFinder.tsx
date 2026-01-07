import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import locusLogo from "@/assets/locus-logo.png";

const StartLeakFinder = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const scriptId = "ghl-form-embed-script";
    
    // Prevent duplicate script loading
    if (document.getElementById(scriptId)) {
      return;
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    
    script.onload = () => {
      console.log("GHL form embed script loaded successfully");
    };
    
    script.onerror = () => {
      console.error("GHL form embed script failed to load");
      // Force iframe visible on script error
      if (iframeRef.current) {
        iframeRef.current.style.display = "block";
      }
    };

    document.body.appendChild(script);

    // Fallback: if iframe is still hidden after 2 seconds, force it visible
    const fallbackTimer = setTimeout(() => {
      if (iframeRef.current && iframeRef.current.style.display === "none") {
        console.log("GHL script didn't activate iframe, forcing visible");
        iframeRef.current.style.display = "block";
      }
    }, 2000);

    return () => {
      clearTimeout(fallbackTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header without Start Leak Finder button */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="container-main">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link to="/" className="flex items-center">
              <img src={locusLogo} alt="Locus" className="h-8 lg:h-9 w-auto" />
            </Link>
            <Link to="/book-call" className="btn-secondary text-sm">
              Book a Call
            </Link>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="pt-24 lg:pt-28 pb-16">
        <div className="container-main">
          {/* Headline section */}
          <div className="max-w-3xl mx-auto text-center mb-8">
            <p className="text-primary font-medium mb-4">Free Assessment</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Find Your Revenue Leaks</h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Enter your details below to start your personalized Leak Finder assessment.
            </p>
          </div>

          {/* GHL Form embed */}
          <div className="max-w-2xl mx-auto" style={{ minHeight: "550px" }}>
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/p61qThW6q0uTt7jSreIK"
              style={{ display: "none", width: "100%", height: "100%", border: "none", borderRadius: "4px" }}
              ref={iframeRef}
              id="inline-p61qThW6q0uTt7jSreIK"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="leadCollected"
              data-deactivation-value=""
              data-form-name="Locus LP Lead Magnet Assessment Form"
              data-height="550"
              data-layout-iframe-id="inline-p61qThW6q0uTt7jSreIK"
              data-form-id="p61qThW6q0uTt7jSreIK"
              title="Locus LP Lead Magnet Assessment Form"
            ></iframe>
          </div>

          {/* Privacy note */}
          <p className="text-center text-xs text-muted-foreground/60 mt-6 max-w-md mx-auto">
            By submitting this form, you agree to receive communications from Locus. We respect your privacy and will
            never share your information.
          </p>
        </div>
      </main>
    </div>
  );
};

export default StartLeakFinder;
