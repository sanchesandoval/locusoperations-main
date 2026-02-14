import { useEffect } from "react";
const CalendlySection = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return <section id="calendly" className="section-spacing relative">
      <div className="container-main relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-primary font-medium mb-4">Get Started</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Book Your Pipeline Diagnostic
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">15 minutes. No fluff. We map where your bookings slip through and provide the blueprint to fix them.</p>
        </div>

        <div className="max-w-4xl mx-auto overflow-hidden">
        <iframe
          src="https://api.leadconnectorhq.com/widget/booking/TqgqhfmP8rOA9BTwevpK"
           style={{ width: "100%", border: "none", overflow: "hidden", minHeight: "1000px" }}
          scrolling="no"
          id="TqgqhfmP8rOA9BTwevpK_1771083505613"
        />
        </div>

        {/* Privacy note */}
        <p className="text-center text-xs text-muted-foreground/60 mt-6 max-w-md mx-auto">
          By booking a call, you agree to receive communications from Locus. 
          We respect your privacy and will never share your information.
        </p>
      </div>
    </section>;
};
export default CalendlySection;