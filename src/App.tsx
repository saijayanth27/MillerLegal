import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ScheduleConsultation from "./pages/ScheduleConsultation";
import BookConsultation from "./pages/BookConsultation";
import IntakeForm from "./pages/IntakeForm";
import PromptPostupIntakeForm from "./pages/PromptPostupIntakeForm";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/schedule-a-consultation" element={<ScheduleConsultation />} />
          <Route path="/book-consultation" element={<BookConsultation />} />
          <Route path="/intake-form" element={<IntakeForm />} />
          <Route path="/postup-intake-form" element={<PromptPostupIntakeForm />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
