import { Scale, Building2, Heart, FileText } from "lucide-react";

const practiceAreas = [
  {
    icon: Heart,
    title: "Divorce & Family Law",
    description: "Compassionate guidance through divorce, custody, support, and all family law matters.",
  },
  {
    icon: Building2,
    title: "Business Disputes",
    description: "Strategic litigation for contract disputes, partnership conflicts, and commercial matters.",
  },
  {
    icon: Scale,
    title: "Appeals",
    description: "Experienced appellate advocacy with multiple victories at the Tenth Circuit Court of Appeals.",
  },
  {
    icon: FileText,
    title: "Real Estate Litigation",
    description: "Resolution of property disputes, title issues, and real estate transaction conflicts.",
  },
];

const PracticeAreasSection = () => {
  return (
    <section id="practice" className="py-20 lg:py-28 bg-cream">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="heading-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Areas of Practice
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Dedicated legal representation tailored to your unique situation
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {practiceAreas.map((area) => (
            <div
              key={area.title}
              className="group bg-card p-8 shadow-soft hover:shadow-medium transition-shadow duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <area.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {area.title}
              </h3>
              <p className="text-body text-muted-foreground text-sm leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreasSection;
