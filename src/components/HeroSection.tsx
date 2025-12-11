import heroImage from "@/assets/hero-gavel.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Legal books and gavel representing professional legal services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-overlay/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 py-20 mt-20">
        <h1 className="heading-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary-foreground mb-6 animate-fade-up">
          Aaron B. Millar
        </h1>
        <p className="font-body text-lg sm:text-xl text-primary-foreground/80 tracking-wide animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Divorce & Business Dispute Lawyer
        </p>
      </div>

      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-50" />
    </section>
  );
};

export default HeroSection;
