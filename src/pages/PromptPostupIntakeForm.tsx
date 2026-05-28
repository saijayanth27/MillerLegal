import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PromptPostupIntakeForm = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col pt-20">
        <iframe
          src="https://forms.zohopublic.com/millarlegal1/form/PromptPostupIntakeForm/formperma/3OedbVO2Wbkb-xizLNGQUWzrVxVZ6MunIfaHIFYIy2A"
          style={{ flex: 1, width: "100%", border: "none", minHeight: "calc(100vh - 80px)" }}
          allow="geolocation"
          title="Prompt Postup Intake Form"
        />
      </main>
      <Footer />
    </div>
  );
};

export default PromptPostupIntakeForm;
