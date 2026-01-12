import { useEffect } from "react";
const CalendlySection = () => {
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
  return <section id="book-call" className="section-spacing relative">
      <div className="container-main relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-primary font-medium mb-4">Get Started</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Book Your Pipeline Diagnostic
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">30 minutes. No fluff. We map where your bookings leak and provide the blueprint to fix them.          </p>
        </div>

        {/* Calendly embed */}
        <div className="max-w-4xl mx-auto card-premium overflow-hidden">
        <div className="calendly-inline-widget" data-url="https://calendly.com/locusops?hide_landing_page_details=1" style={{
          minWidth: "320px",
          height: "700px"
        }} />
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