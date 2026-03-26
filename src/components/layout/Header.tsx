import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import locusLogo from "@/assets/locus-logo-white.png";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { href: "#our-services", label: "How It Works" },
    { href: "#services", label: "Services" },
  ];

  const handleSectionNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const sectionId = href.replace("#", "");
    setIsOpen(false);
    if (location.pathname === "/") {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container-main">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={locusLogo} alt="Locus" className="h-5 sm:h-8 lg:h-9 w-auto" />
          </Link>

          {/* Mobile Hamburger Menu */}
          <div className="sm:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button className="p-3 text-muted-foreground hover:text-foreground transition-colors">
                  <Menu className="h-5 w-5" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64 bg-background">
                <nav className="flex flex-col gap-4 mt-8">
                  {navLinks.map(link => (
                    <a key={link.href} href={link.href} className="text-base text-muted-foreground hover:text-foreground transition-colors py-2" onClick={(e) => handleSectionNav(e, link.href)}>
                      {link.label}
                    </a>
                  ))}
                  <Link to="/book-call" className="btn-primary text-sm px-4 py-2 text-center mt-2" onClick={() => setIsOpen(false)}>
                    Book a Free Consultation
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop/Tablet Navigation */}
          <nav className="hidden sm:flex items-center gap-4 lg:gap-6 xl:gap-8">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="text-xs lg:text-sm text-muted-foreground hover:text-foreground transition-colors" onClick={(e) => handleSectionNav(e, link.href)}>
                {link.label}
              </a>
            ))}
          </nav>

          {/* Primary CTA - Hidden on mobile */}
          <div className="hidden sm:flex items-center">
            <Link to="/book-call" className="btn-primary text-sm px-7 py-3.5 text-center">
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;