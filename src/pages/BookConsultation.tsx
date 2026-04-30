import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingCalendar from "@/components/BookingCalendar";

const BookConsultation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-28 pb-20">
        <div className="container-narrow">
          <div className="text-center mb-10">
            <h1 className="heading-display text-3xl sm:text-4xl text-foreground mb-3">
              Book Your Consultation
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Select a date and time for your 60-minute phone strategy session with Aaron.
            </p>
          </div>
          <div className="border border-border shadow-medium">
            <BookingCalendar />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BookConsultation;
