import { Link } from "react-router-dom";
import locusLogo from "@/assets/locus-logo.png";
import { siteConfig } from "@/lib/config";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12">
      {/* Top accent line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent mb-12" />
      
      <div className="container-main">
        <div className="grid md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <img src={locusLogo} alt="Locus" className="h-6 w-auto" />
            <p className="text-sm text-muted-foreground max-w-xs">
              Growth operations for High-Performance Medical Wellness.
            </p>
            
            {/* Social links */}
            <div className="flex items-center gap-4 pt-2">
              {siteConfig.socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer link groups */}
          {siteConfig.footer.map((group) => (
            <div key={group.title}>
              <h4 className="font-semibold text-foreground mb-4">{group.title}</h4>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("#") ? (
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-12 pt-8 border-t border-border/30">
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
