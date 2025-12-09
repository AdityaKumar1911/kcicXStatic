import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import ScrollToTop from "@/components/ScrollToTop";
import FloatingRequestButton from "@/components/FloatingRequestButton";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";



import Index from "./pages/Index";

import NotFound from "./pages/NotFound";
import Pathways from "./pages/Pathways";
import Programs from "./pages/Programs";
import ProgramDetail from "./pages/ProgramDetail";
import Universities from "./pages/Universities";
import UniversityDetail from "./pages/UniversityDetail";
import Campuses from "./pages/Campuses";
import CampusDetail from "./pages/CampusDetail";
import Tutors from "./pages/Tutors";
import TutorDetail from "./pages/TutorDetail";
import Manifesto from "./pages/Manifesto";
import Contact from "./pages/Contact";
import Apply from "./pages/Apply";
import ParentsStudentHub from "./pages/ParentsStudentHub";
import Students from "./pages/Students";
import MotorsportEngineering from "./pages/MotorsportEngineering";
import ArtificialIntelligence from "./pages/ArtificialIntelligence";
import Psychology from "./pages/Psychology";
import Aerospace from "./pages/Aerospace";
import BiomedicalScience from "./pages/BiomedicalScience";
import BiomedicalEngineering from "./pages/BiomedicalEngineering";
import CivilEngineering from "./pages/CivilEngineering";
import Accounting from "./pages/Accounting";
import ElectricalSemiconductor from "./pages/ElectricalSemiconductor";
import ComputerSystems from "./pages/ComputerSystems";
import ElectronicsEmbedded from "./pages/ElectronicsEmbedded";
import RailwayEngineering from "./pages/RailwayEngineering";
import VirtualTour from "./pages/VirtualTour";









const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider defaultTheme="light">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {/* Google Analytics - only loads when VITE_GA_MEASUREMENT_ID is set */}
        <GoogleAnalytics measurementId={import.meta.env.VITE_GA_MEASUREMENT_ID || ''} />
        <BrowserRouter>
          <ScrollToTop />
          <FloatingRequestButton />
          <FloatingWhatsAppButton />

          <Routes>
            <Route path="/" element={<Index />} />

            <Route path="/pathways" element={<Pathways />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/programs/:slug" element={<ProgramDetail />} />
            <Route path="/universities" element={<Universities />} />
            <Route path="/universities/:slug" element={<UniversityDetail />} />
            <Route path="/campuses" element={<Campuses />} />
            <Route path="/campuses/:slug" element={<CampusDetail />} />
            <Route path="/tutors" element={<Tutors />} />
            <Route path="/tutors/:slug" element={<TutorDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/programs/beng-hons-motorsport-engineering" element={<MotorsportEngineering />} />
            <Route path="/programs/beng-hons-artificial-intelligence-with-placement" element={<ArtificialIntelligence />} />
            <Route path="/programs/bsc-hons-psychology" element={<Psychology />} />
            <Route path="/programs/beng-hons-aerospace-engineering" element={<Aerospace />} />
            <Route path="/programs/bsc-hons-biomedical-science" element={<BiomedicalScience />} />
            <Route path="/programs/beng-hons-biomedical-engineering" element={<BiomedicalEngineering />} />
            <Route path="/programs/beng-hons-civil-engineering" element={<CivilEngineering />} />
            <Route path="/programs/bsc-hons-accounting-finance-acca" element={<Accounting />} />
            <Route path="/programs/beng-hons-electrical-electronics-semiconductor" element={<ElectricalSemiconductor />} />
            <Route path="/programs/beng-hons-computer-systems-engineering" element={<ComputerSystems />} />
            <Route path="/programs/beng-hons-electronics-embedded-systems" element={<ElectronicsEmbedded />} />
            <Route path="/programs/beng-hons-electrical-railway-engineering" element={<RailwayEngineering />} />
            <Route path="/students" element={<Students />} />
            <Route path="/parents-student-hub" element={<ParentsStudentHub />} />

            <Route path="/manifesto" element={<Manifesto />} />
            <Route path="/virtual-tour" element={<VirtualTour />} />

            
            {/* Redirect old dashboard and admin routes to home */}
            <Route path="/dashboard/*" element={<Navigate to="/" replace />} />
            <Route path="/admin/*" element={<Navigate to="/" replace />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>

      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
