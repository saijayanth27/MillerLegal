import attorneyPortrait from "@/assets/attorney-portrait.jpg";

const QuoteSection = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Quote */}
          <div className="order-2 lg:order-1">
            <blockquote className="relative">
              <span className="absolute -top-8 -left-4 text-8xl text-gold/20 font-heading">"</span>
              <p className="heading-serif-italic text-2xl sm:text-3xl lg:text-4xl text-foreground leading-relaxed">
                Aaron is an attorney of integrity that is genuine, sincere, and honest.
              </p>
              <span className="absolute -bottom-12 right-0 text-8xl text-gold/20 font-heading">"</span>
            </blockquote>
            <div className="mt-12 w-16 h-1 bg-gold" />
            
            <div className="mt-12 space-y-6 text-body text-muted-foreground">
              <p>
                <strong className="text-foreground">Aaron B. Millar</strong> is a passionate advocate for good people going through tough times. 
                Aaron is a skilled litigator whose practice focuses on divorce and family law and business disputes.
              </p>
              <p>
                Before forming Millar Legal, he practiced at an international law firm in <strong className="text-foreground">Los Angeles</strong> and 
                at a highly regarded law firm in <strong className="text-foreground">Salt Lake City</strong>. His years of big firm experience 
                allow him to handle even the most complex of cases.
              </p>
              <p>
                Regardless of the size of the case, Aaron excels at finding creative, cost-effective solutions that fit his clients' 
                individual needs. When the occasion demands, he is a tenacious litigator willing to take a case to trial and even to appeal.
              </p>
            </div>
          </div>

          {/* Portrait */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-secondary rounded-sm" />
              <img
                src={attorneyPortrait}
                alt="Aaron B. Millar - Divorce and Business Dispute Attorney"
                className="relative w-full max-w-md aspect-[3/4] object-cover shadow-strong"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
