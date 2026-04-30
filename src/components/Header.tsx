import { Phone, Mail, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Practice Areas", href: "#practice" },
    { label: "Qualifications", href: "#qualifications" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container-wide">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-heading text-xl font-bold">M</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-heading text-xl font-semibold text-foreground tracking-tight">MILLAR</span>
              <span className="font-heading text-xl font-light text-muted-foreground ml-1">LEGAL</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-body text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden md:flex items-center gap-6">
            <a href="tel:8014245280" className="flex items-center gap-2 text-primary font-medium text-sm">
              <Phone className="w-4 h-4" />
              <span>801 424 5280</span>
            </a>
            <Button variant="default" size="sm" asChild>
              <a href="/schedule-a-consultation">Schedule Consultation</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border py-4">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="font-body text-base font-medium text-muted-foreground hover:text-primary transition-colors px-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a href="tel:8014245280" className="flex items-center gap-2 text-primary font-medium px-2">
                <Phone className="w-4 h-4" />
                <span>801 424 5280</span>
              </a>
              <a
                href="/schedule-a-consultation"
                onClick={() => setIsMenuOpen(false)}
                className="mx-2 mt-2 bg-primary text-primary-foreground text-sm font-medium text-center py-2.5 px-4"
              >
                Schedule Consultation
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
