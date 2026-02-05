import { Link } from "react-router-dom";
import locusLogo from "@/assets/locus-logo.png";

const Header = () => {

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
          <nav className="flex items-center gap-2 sm:gap-4 lg:gap-6 xl:gap-8">
            <a 
              href="#how-it-works" 
              className="text-[10px] sm:text-xs lg:text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Process
            </a>
            <a 
              href="#testimonials" 
              className="text-[10px] sm:text-xs lg:text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Results
            </a>
            <a 
              href="#calendly" 
              className="text-[10px] sm:text-xs lg:text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Get Started
            </a>
          </nav>

          {/* CTA */}
          <div className="flex items-center">
            <Link
              to="/book-call"
              className="btn-primary text-[10px] md:text-xs lg:text-sm px-2 md:px-4 lg:px-6 py-1.5 md:py-2 lg:py-3 text-center"
            >
              Book a Call
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
