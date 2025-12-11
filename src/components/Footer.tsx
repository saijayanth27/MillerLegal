import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark py-12">
      <div className="container-wide">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gold flex items-center justify-center">
                <span className="text-navy-dark font-heading text-xl font-bold">M</span>
              </div>
              <div>
                <span className="font-heading text-xl font-semibold text-primary-foreground tracking-tight">MILLAR</span>
                <span className="font-heading text-xl font-light text-primary-foreground/70 ml-1">LEGAL</span>
              </div>
            </div>
            <p className="text-body text-primary-foreground/60 text-sm leading-relaxed">
              Dedicated legal representation for divorce, family law, and business disputes in Utah.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <a href="#about" className="block text-primary-foreground/60 hover:text-gold text-sm transition-colors">About Aaron</a>
              <a href="#practice" className="block text-primary-foreground/60 hover:text-gold text-sm transition-colors">Practice Areas</a>
              <a href="#qualifications" className="block text-primary-foreground/60 hover:text-gold text-sm transition-colors">Qualifications</a>
              <a href="#contact" className="block text-primary-foreground/60 hover:text-gold text-sm transition-colors">Contact Us</a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-4">Contact</h4>
            <div className="space-y-3">
              <a href="tel:8014245280" className="flex items-center gap-2 text-primary-foreground/60 hover:text-gold text-sm transition-colors">
                <Phone className="w-4 h-4" />
                <span>801 424 5280</span>
              </a>
              <a href="mailto:info@millarlegal.com" className="flex items-center gap-2 text-primary-foreground/60 hover:text-gold text-sm transition-colors">
                <Mail className="w-4 h-4" />
                <span>info@millarlegal.com</span>
              </a>
              <div className="flex items-center gap-2 text-primary-foreground/60 text-sm">
                <MapPin className="w-4 h-4" />
                <span>Salt Lake City, Utah</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8">
          <p className="text-center text-primary-foreground/40 text-sm">
            © {currentYear} Millar Legal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
