import { Link, useLocation } from "react-router-dom";
import locusLogo from "@/assets/locus-logo.png";

const Header = () => {
  const location = useLocation();
  const hideLeakFinderButton = location.pathname === "/leak-finder" || location.pathname === "/get-results";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container-main">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={locusLogo} 
              alt="Locus" 
              className="h-5 sm:h-8 lg:h-9 w-auto"
            />
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <a 
              href="#how-it-works" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Process
            </a>
            <a 
              href="#testimonials" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Results
            </a>
            <a 
              href="#calendly" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Get Started
            </a>
            <Link 
              to="/client-login" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Client Login
            </Link>
          </nav>

          {/* CTAs */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              to="/book-call"
              className="btn-secondary text-xs sm:text-sm px-3 sm:px-6 py-2 sm:py-3"
            >
              Book a Call
            </Link>
            {!hideLeakFinderButton && (
              <Link
                to="/leak-finder"
                className="btn-primary text-xs sm:text-sm px-3 sm:px-6 py-2 sm:py-3"
              >
                <span className="hidden sm:inline">Run System Diagnostic</span>
                <span className="sm:hidden">System Diagnostic</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
