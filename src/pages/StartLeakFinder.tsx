import Header from "@/components/layout/Header";
import { useEffect } from "react";

const StartLeakFinder = () => {
  useEffect(() => {
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
      
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/JPKxiapOfZQgYoebuikK"
        style={{ display: "none", width: "100%", height: "100%", border: "none", borderRadius: "4px" }}
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
      
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-foreground">Loading your assessment...</h1>
          <p className="text-muted-foreground mt-2">Please complete the form to continue</p>
        </div>
      </div>
    </div>
  );
};

export default StartLeakFinder;
