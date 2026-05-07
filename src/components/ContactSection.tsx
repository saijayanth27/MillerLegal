import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    const payload = {
      First_Name: data.get("firstName") as string,
      Last_Name: data.get("lastName") as string,
      Email: data.get("email") as string,
      Phone: data.get("phone") as string,
      Description: data.get("message") as string,
      Lead_Source: "Website",
      Lead_Status: "Intake",
      Source: "Marketing",
    };

    try {
      const res = await fetch("/api/zoho", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We will respond within 24 hours.",
      });
      form.reset();
    } catch (err) {
      toast({
        title: "Something went wrong",
        description: "Please try again or call us directly at 801 424 5280.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-primary">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div>
            <h2 className="heading-display text-3xl sm:text-4xl lg:text-5xl text-primary-foreground mb-6">
              Contact Aaron About Your Case
            </h2>
            <p className="text-body text-primary-foreground/80 mb-12 leading-relaxed">
              With over 15 years of experience, Millar Legal will guide you through the legal process,
              all the while committed to delivering the best result possible. We respond to your individual
              needs so you are empowered to make informed decisions that protect your rights.
            </p>

            <div className="space-y-6">
              <a href="tel:8014245280" className="flex items-center gap-4 text-primary-foreground hover:text-gold transition-colors">
                <div className="w-12 h-12 border border-primary-foreground/30 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">Call Us</p>
                  <p className="text-primary-foreground/70">801 424 5280</p>
                </div>
              </a>

              <a href="mailto:info@millarlegal.com" className="flex items-center gap-4 text-primary-foreground hover:text-gold transition-colors">
                <div className="w-12 h-12 border border-primary-foreground/30 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">Email Us</p>
                  <p className="text-primary-foreground/70">info@millarlegal.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-primary-foreground">
                <div className="w-12 h-12 border border-primary-foreground/30 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">Visit Us</p>
                  <p className="text-primary-foreground/70">Salt Lake City, Utah</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 lg:p-10 shadow-strong">
            <h3 className="font-heading text-2xl font-semibold text-foreground mb-6">
              Contact Us
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                    First Name *
                  </label>
                  <Input id="firstName" name="firstName" required className="bg-background" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                    Last Name *
                  </label>
                  <Input id="lastName" name="lastName" required className="bg-background" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email *
                </label>
                <Input id="email" name="email" type="email" required className="bg-background" />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone
                </label>
                <Input id="phone" name="phone" type="tel" className="bg-background" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  How can we help? *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="bg-background resize-none"
                  placeholder="Briefly describe your situation..."
                />
              </div>

              <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Submit Request"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
