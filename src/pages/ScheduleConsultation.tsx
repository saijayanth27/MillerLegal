import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, Mail, Star, FileText } from "lucide-react";

const testimonials = [
  {
    text: "Aaron went far beyond the call of duty. He was always available when I needed him, thoroughly prepared for every hearing, and genuinely cared about my situation. I couldn't have asked for a better attorney.",
    author: "Former Client",
  },
  {
    text: "From the very first consultation, Aaron was responsive, professional, and completely honest about what to expect. His preparation and attention to detail made all the difference in my case.",
    author: "Former Client",
  },
  {
    text: "Aaron achieved an outcome I didn't think was possible. He fought hard for me and kept me informed every step of the way. I highly recommend Millar Legal to anyone facing a difficult legal situation.",
    author: "Former Client",
  },
];

const ScheduleConsultation = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="bg-primary pt-32 pb-16">
        <div className="container-narrow text-center">
          <h1 className="heading-display text-4xl sm:text-5xl text-primary-foreground mb-4">
            Schedule a Consultation
          </h1>
          <p className="text-primary-foreground/70 text-base max-w-xl mx-auto leading-relaxed">
            All information you share is strictly confidential and protected by attorney-client privilege.
          </p>
        </div>
      </section>

      {/* Intake Form */}
      <section className="py-20 bg-background">
        <div className="container-narrow flex justify-center">
          <button
            onClick={() => navigate("/intake-form")}
            className="group border-2 border-border hover:border-primary transition-all duration-200 p-10 flex flex-col items-center text-center cursor-pointer shadow-soft bg-card w-full max-w-md"
          >
            <div className="w-14 h-14 bg-muted group-hover:bg-primary flex items-center justify-center mb-5 transition-colors">
              <FileText className="w-6 h-6 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
            </div>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
              Complete Intake Form
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Please complete our intake form so Aaron can review your case details in advance
              and make the most of your appointment time.
            </p>
            <span className="inline-flex items-center gap-1 text-sm font-semibold uppercase tracking-wide text-muted-foreground group-hover:text-primary transition-colors">
              Open Intake Form →
            </span>
          </button>
        </div>
      </section>

      {/* Have a Question? */}
      <section className="py-16 bg-secondary border-t border-border">
        <div className="container-narrow text-center">
          <h2 className="heading-display text-3xl text-foreground mb-3">Have a Question?</h2>
          <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
            If you'd prefer to reach out directly, Aaron and his team are happy to help.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <a
              href="tel:8014245280"
              className="flex items-center gap-4 text-foreground hover:text-primary transition-colors"
            >
              <div className="w-12 h-12 bg-primary flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground uppercase tracking-wide font-medium mb-1">Call Us</p>
                <p className="font-semibold text-base">801 424 5280</p>
              </div>
            </a>
            <div className="hidden sm:block w-px h-12 bg-border" />
            <a
              href="mailto:info@millarlegal.com"
              className="flex items-center gap-4 text-foreground hover:text-primary transition-colors"
            >
              <div className="w-12 h-12 bg-primary flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground uppercase tracking-wide font-medium mb-1">Email Us</p>
                <p className="font-semibold text-base">info@millarlegal.com</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container-wide">
          <div className="text-center mb-14">
            <h2 className="heading-display text-3xl sm:text-4xl text-foreground">
              What Our Clients Are Saying…
            </h2>
            <div className="w-12 h-0.5 bg-primary mx-auto mt-5" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-card border border-border p-8 shadow-soft flex flex-col">
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground leading-relaxed flex-1 italic text-sm">
                  "{t.text}"
                </blockquote>
                <p className="mt-6 text-sm font-semibold text-foreground border-t border-border pt-4">
                  — {t.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ScheduleConsultation;
