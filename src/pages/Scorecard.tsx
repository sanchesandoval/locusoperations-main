import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Scorecard = () => {
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
      <main className="pt-32 pb-16">
        <div className="container-main">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Find Out Which Revenue Leaks Are Costing You the Most
              <span className="text-primary">...</span>in under 3 minutes.
            </h1>
          </div>

          <div className="max-w-3xl mx-auto card-premium" style={{ minHeight: "800px", overflow: "hidden" }}>
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/p61qThW6q0uTt7jSreIK"
              style={{ display: "none", width: "100%", height: "800px", border: "none", borderRadius: "20px", overflow: "hidden" }}
              id="inline-p61qThW6q0uTt7jSreIK"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="leadCollected"
              data-deactivation-value=""
              data-form-name="Locus LP Lead Magnet Assessment Form"
              data-height="732"
              data-layout-iframe-id="inline-p61qThW6q0uTt7jSreIK"
              data-form-id="p61qThW6q0uTt7jSreIK"
              title="Locus LP Lead Magnet Assessment Form"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Scorecard;
