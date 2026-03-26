import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Diagnostic = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    const handleMessage = (event: MessageEvent) => {
      if (
        typeof event.data === "object" &&
        event.data !== null &&
        (event.data.type === "leadConnector:leadCollected" ||
          event.data.type === "form_submitted" ||
          event.data.event === "leadConnector:leadCollected" ||
          JSON.stringify(event.data).toLowerCase().includes("leadcollected") ||
          JSON.stringify(event.data).toLowerCase().includes("form_submitted"))
      ) {
        navigate("/revenue-leak-finder");
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      document.body.removeChild(script);
      window.removeEventListener("message", handleMessage);
    };
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container-main">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
              Find out which revenue leaks are costing you the most.
            </h1>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-muted-foreground mb-6"><span className="text-primary">Takes under 3 minutes.</span></h1>
            <div className="text-base text-muted-foreground space-y-3 text-center">
              <p>This diagnostic measures and scores you across three critical areas of your revenue operations:</p>
              <ul className="space-y-2 list-none pl-0 text-left">
                <li><span className="font-semibold text-foreground">Speed & Capture:</span> How fast and reliably you respond to new leads</li>
                <li><span className="font-semibold text-foreground">Follow-Up & Conversion:</span> Whether your follow-up converts or falls through the cracks</li>
                <li><span className="font-semibold text-foreground">Pipeline & Retention:</span> How well you move deals forward and re-engage lost opportunities</li>
              </ul>
            </div>
          </div>

          <div className="ghl-form-wrap mt-10">
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/OPaDhXKtxiiFMZqRaSQ9"
              id="inline-OPaDhXKtxiiFMZqRaSQ9"
              className="ghl-form-iframe"
              title="Locus LP Lead Magnet Diagnostic Form"
              style={{ border: "none", borderRadius: "20px" }}
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-activation-type="alwaysActivated"
              data-deactivation-type="neverDeactivate"
              data-form-name="Locus LP Lead Magnet Diagnostic Form"
              data-height="728"
              data-layout-iframe-id="inline-OPaDhXKtxiiFMZqRaSQ9"
              data-form-id="OPaDhXKtxiiFMZqRaSQ9"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Diagnostic;
