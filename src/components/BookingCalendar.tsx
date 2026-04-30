import { useState } from "react";
import { DayPicker } from "react-day-picker";
import { format, startOfToday, isBefore } from "date-fns";
import { ChevronLeft, ChevronRight, Clock, User, PhoneCall, CreditCard, CheckCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const TIME_SLOTS = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM",
  "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
  "3:00 PM", "3:30 PM", "4:00 PM",
];

const TIMEZONES = [
  "Mountain Time (MT)",
  "Pacific Time (PT)",
  "Central Time (CT)",
  "Eastern Time (ET)",
];

type Step = "calendar" | "details" | "confirmed";

const BookingCalendar = () => {
  const [step, setStep]               = useState<Step>("calendar");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [timezone, setTimezone]         = useState("");

  const [firstName,   setFirstName]   = useState("");
  const [lastName,    setLastName]    = useState("");
  const [email,       setEmail]       = useState("");
  const [phone,       setPhone]       = useState("");
  const [description, setDescription] = useState("");

  const today = startOfToday();
  const isDisabled = (date: Date) =>
    isBefore(date, today) || date.getDay() === 0 || date.getDay() === 6;

  const meetingInfo = (
    <div className="bg-secondary border-b lg:border-b-0 lg:border-r border-border p-8 lg:p-10">
      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-5">
        Millar Legal
      </p>
      <h3 className="font-heading text-xl font-semibold text-foreground mb-2 leading-snug">
        60 min General PHONE Strategy Session
      </h3>
      <p className="text-2xl font-bold text-primary mb-5">$425</p>
      <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
        Please pick a date and time for a 60-minute strategy session (phone call).
      </p>
      <div className="space-y-5">
        {[
          { Icon: Clock,      label: "Duration", value: "60 minutes"   },
          { Icon: User,       label: "Host",     value: "Aaron Millar" },
          { Icon: PhoneCall,  label: "Location", value: "I'll call you" },
          { Icon: CreditCard, label: "Payment",  value: "$425"          },
        ].map(({ Icon, label, value }) => (
          <div key={label} className="flex items-start gap-3">
            <Icon className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">{label}</p>
              <p className="text-sm text-foreground mt-0.5">{value}</p>
            </div>
          </div>
        ))}

        {selectedDate && selectedTime && (
          <div className="pt-4 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">Selected</p>
            <p className="text-sm text-foreground font-medium">
              {format(selectedDate, "EEEE, MMM d")} at {selectedTime}
            </p>
            {timezone && <p className="text-xs text-muted-foreground mt-0.5">{timezone}</p>}
          </div>
        )}
      </div>
    </div>
  );

  /* ── Step: Confirmed ── */
  if (step === "confirmed" && selectedDate && selectedTime) {
    return (
      <div className="flex flex-col items-center justify-center py-20 px-8 text-center min-h-[400px]">
        <div className="w-16 h-16 bg-primary flex items-center justify-center mb-6">
          <CheckCircle className="w-8 h-8 text-primary-foreground" />
        </div>
        <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">
          Appointment Requested
        </h3>
        <p className="text-muted-foreground font-medium">
          {format(selectedDate, "EEEE, MMMM d, yyyy")} at {selectedTime}
        </p>
        <p className="text-muted-foreground text-sm">{timezone || "Mountain Time (MT)"}</p>
        <p className="text-foreground text-sm font-medium mt-4">{firstName} {lastName}</p>
        <p className="text-muted-foreground text-sm">{email}</p>
        <p className="text-muted-foreground text-sm mt-5 max-w-sm leading-relaxed">
          Aaron's team will confirm your appointment via email. Please ensure you have completed
          the intake form (Step 1) before your session.
        </p>
      </div>
    );
  }

  /* ── Step: Details form ── */
  if (step === "details" && selectedDate && selectedTime) {
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setStep("confirmed");
    };

    return (
      <div className="grid lg:grid-cols-[300px_1fr]">
        {meetingInfo}
        <div className="p-8 lg:p-10">
          <button
            onClick={() => setStep("calendar")}
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
          <h4 className="font-heading text-lg font-semibold text-foreground mb-1">
            Enter Your Details
          </h4>
          <p className="text-sm text-muted-foreground mb-6">
            {format(selectedDate, "EEEE, MMMM d, yyyy")} at {selectedTime}
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide block mb-1.5">
                  First Name *
                </label>
                <Input
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="John"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide block mb-1.5">
                  Last Name *
                </label>
                <Input
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Smith"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide block mb-1.5">
                Email *
              </label>
              <Input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide block mb-1.5">
                Phone Number *
              </label>
              <Input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(801) 000-0000"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide block mb-1.5">
                Brief Description of Your Matter *
              </label>
              <Textarea
                required
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Briefly describe your legal situation..."
                className="resize-none"
              />
            </div>

            <Button type="submit" size="lg" className="w-full mt-2">
              Confirm Appointment
            </Button>
          </form>
        </div>
      </div>
    );
  }

  /* ── Step: Calendar ── */
  return (
    <div className="grid lg:grid-cols-[300px_1fr]">
      {meetingInfo}
      <div className="p-8 lg:p-10">
        <h4 className="font-heading text-lg font-semibold text-foreground mb-6">
          Select a date &amp; time
        </h4>

        <DayPicker
          mode="single"
          selected={selectedDate}
          onSelect={(date) => { setSelectedDate(date); setSelectedTime(null); }}
          disabled={isDisabled}
          components={{
            IconLeft:  () => <ChevronLeft  className="w-4 h-4" />,
            IconRight: () => <ChevronRight className="w-4 h-4" />,
          }}
          classNames={{
            months:              "flex flex-col",
            month:               "space-y-3",
            caption:             "flex justify-between items-center mb-2",
            caption_label:       "font-heading text-base font-semibold text-primary",
            nav:                 "flex items-center gap-1",
            nav_button:          "w-8 h-8 flex items-center justify-center border border-border hover:bg-muted transition-colors",
            nav_button_previous: "",
            nav_button_next:     "",
            table:               "w-full border-collapse",
            head_row:            "flex mb-1",
            head_cell:           "text-muted-foreground font-medium text-xs w-10 text-center",
            row:                 "flex w-full",
            cell:                "w-10 h-10 text-center text-sm p-0",
            day:                 "w-10 h-10 flex items-center justify-center text-sm hover:bg-secondary transition-colors cursor-pointer",
            day_selected:        "bg-primary text-primary-foreground hover:bg-primary font-semibold",
            day_today:           "border border-primary text-primary font-semibold",
            day_disabled:        "text-muted-foreground/30 cursor-not-allowed hover:bg-transparent",
            day_outside:         "text-muted-foreground/20",
          }}
        />

        <div className="mt-5 mb-6 max-w-xs">
          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide block mb-2">
            Timezone
          </label>
          <select
            value={timezone}
            onChange={(e) => setTimezone(e.target.value)}
            className="w-full border border-border bg-background text-foreground text-sm px-3 py-2.5 focus:outline-none focus:border-primary"
          >
            <option value="">Select...</option>
            {TIMEZONES.map((tz) => (
              <option key={tz} value={tz}>{tz}</option>
            ))}
          </select>
        </div>

        {selectedDate && (
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
              Available Times — {format(selectedDate, "EEEE, MMMM d")}
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 max-w-sm">
              {TIME_SLOTS.map((slot) => (
                <button
                  key={slot}
                  onClick={() => setSelectedTime(slot)}
                  className={`py-2 px-2 text-sm border transition-colors ${
                    selectedTime === slot
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border hover:border-primary text-foreground"
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>

            {selectedTime && (
              <Button
                className="mt-6"
                size="lg"
                onClick={() => setStep("details")}
              >
                Confirm — {format(selectedDate, "MMM d")} at {selectedTime}
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingCalendar;
