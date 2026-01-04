import { Link, useLocation } from "react-router-dom";
import locusLogo from "@/assets/locus-logo.png";

const Header = () => {
  const location = useLocation();
  const isLeakFinderPage = location.pathname === "/leak-finder";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container-main">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={locusLogo} 
              alt="Locus" 
              className="h-8 lg:h-9 w-auto"
            />
          </Link>

          {/* CTAs */}
          <div className="flex items-center gap-3">
            <Link
              to="/book-call"
              className="btn-secondary text-sm"
            >
              Book a Call
            </Link>
            {!isLeakFinderPage && (
              <Link
                to="/leak-finder"
                className="btn-primary text-xs sm:text-sm px-3 sm:px-4"
              >
                <span className="hidden sm:inline">Start Leak Finder</span>
                <span className="sm:hidden">Leak Finder</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
