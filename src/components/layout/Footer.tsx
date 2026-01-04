import { Link } from "react-router-dom";
import locusLogo from "@/assets/locus-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="container-main">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <img src={locusLogo} alt="Locus" className="h-7 w-auto" />
            <p className="text-sm text-muted-foreground max-w-xs">
              Growth operations for aesthetic and wellness clinics. Turn ad spend into booked appointments.
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <Link
              to="/leak-finder"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Leak Finder
            </Link>
            <a
              href="https://calendly.com/locusops"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Book a Call
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-8 border-t border-border/30">
          <p className="text-xs text-muted-foreground/60 max-w-2xl">
            HIPAA readiness depends on your tools, configuration, and clinic policies. We align systems to HIPAA requirements when applicable. Locus does not provide legal or compliance advice.
          </p>
          <p className="text-xs text-muted-foreground/40 mt-4">
            © {new Date().getFullYear()} Locus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
