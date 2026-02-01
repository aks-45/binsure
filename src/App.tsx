import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import ServicingReports from "./pages/ServicingReports";
import Binsure from "./pages/Binsure";
import Contact from "./pages/Contact";
import Features from "./pages/Features";
import CRM from "./pages/CRM";
import PresentationModule from "./pages/PresentationModule";
import ServicesModule from "./pages/ServicesModule";
import ServicingReportsModule from "./pages/ServicingReportsModule";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Binsure />} />
          <Route path="/services" element={<Services />} />
          <Route path="/features" element={<Features />} />
          <Route path="/crm" element={<CRM />} />
          <Route path="/presentation" element={<PresentationModule />} />
          <Route path="/services-module" element={<ServicesModule />} />
          <Route path="/servicing-reports-module" element={<ServicingReportsModule />} />
          <Route path="/servicing-reports" element={<ServicingReports />} />
          <Route path="/binsure" element={<Binsure />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
