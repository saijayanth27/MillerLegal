import Header from "@/components/Header";
import Footer from "@/components/Footer";

const IntakeForm = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col pt-20">
        <iframe
          src="https://forms.zohopublic.com/millarlegal1/form/LegalIntakeForm1/formperma/2wU2Pje4H6PEwhqeF3awTufUG4fG5YrXaq772--Ypto"
          style={{ flex: 1, width: "100%", border: "none", minHeight: "calc(100vh - 80px)" }}
          allow="geolocation"
          title="Legal Intake Form"
        />
      </main>
      <Footer />
    </div>
  );
};

export default IntakeForm;
