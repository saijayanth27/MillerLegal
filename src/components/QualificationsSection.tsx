import { GraduationCap, Award, MapPin } from "lucide-react";

const QualificationsSection = () => {
  return (
    <section id="qualifications" className="py-20 lg:py-28 bg-background">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="heading-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Qualifications
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Extensive legal education and experience across multiple jurisdictions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* Bar Admissions */}
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gold/20 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-heading text-2xl font-semibold text-foreground">
                Bar Admissions
              </h3>
            </div>
            <ul className="space-y-3">
              <li className="text-body text-muted-foreground">
                <span className="text-foreground font-medium">Utah</span>, 2009
              </li>
              <li className="text-body text-muted-foreground">
                <span className="text-foreground font-medium">California</span>, 2004
              </li>
            </ul>
          </div>

          {/* Education */}
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gold/20 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-heading text-2xl font-semibold text-foreground">
                Education
              </h3>
            </div>
            <ul className="space-y-4">
              <li className="text-body">
                <p className="text-foreground font-medium">UCLA School of Law</p>
                <p className="text-muted-foreground text-sm">J.D., 2004</p>
              </li>
              <li className="text-body">
                <p className="text-foreground font-medium">Brigham Young University</p>
                <p className="text-muted-foreground text-sm">B.A. in Philosophy, <em>magna cum laude</em>, 2000</p>
              </li>
            </ul>
          </div>

          {/* Recognition */}
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gold/20 flex items-center justify-center">
                <Award className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-heading text-2xl font-semibold text-foreground">
                Recognition
              </h3>
            </div>
            <ul className="space-y-3">
              <li className="text-body text-muted-foreground">
                <span className="text-foreground font-medium">Super Lawyers</span> Rising Star
              </li>
              <li className="text-body text-muted-foreground">
                <span className="text-foreground font-medium">Avvo</span> 10.0 Rating
              </li>
              <li className="text-body text-muted-foreground">
                Multiple victories at <span className="text-foreground font-medium">Tenth Circuit Court of Appeals</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualificationsSection;
