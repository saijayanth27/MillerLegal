import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import QuoteSection from "@/components/QuoteSection";
import PracticeAreasSection from "@/components/PracticeAreasSection";
import QualificationsSection from "@/components/QualificationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <QuoteSection />
        <PracticeAreasSection />
        <QualificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
