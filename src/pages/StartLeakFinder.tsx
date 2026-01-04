import { useEffect } from "react";
import Header from "@/components/layout/Header";

const StartLeakFinder = () => {
  useEffect(() => {
    // Load GHL form embed script
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 pb-16">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <p className="text-primary font-medium mb-4">Get Started</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Find Your Revenue Leaks
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Complete this quick form to unlock your personalized Leak Finder assessment.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/JPKxiapOfZQgYoebuikK"
              style={{ width: "100%", height: "600px", border: "none", borderRadius: "8px" }}
              id="inline-JPKxiapOfZQgYoebuikK"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="leadCollected"
              data-deactivation-value=""
              data-form-name="LP Lead Magnet Assessment Form"
              data-height="496"
              data-layout-iframe-id="inline-JPKxiapOfZQgYoebuikK"
              data-form-id="JPKxiapOfZQgYoebuikK"
              title="LP Lead Magnet Assessment Form"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default StartLeakFinder;
