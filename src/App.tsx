import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import LeakFinder from "./pages/LeakFinder";
import BookCall from "./pages/BookCall";
import GetResults from "./pages/GetResults";
import FixKit from "./pages/FixKit";
import SystemDemo from "./pages/SystemDemo";
import PipelineDiagnostic from "./pages/PipelineDiagnostic";
import ClientLogin from "./pages/ClientLogin";
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
          <Route path="/leak-finder" element={<LeakFinder />} />
          <Route path="/get-results" element={<GetResults />} />
          <Route path="/book-call" element={<BookCall />} />
          <Route path="/fix-kit" element={<FixKit />} />
          <Route path="/system-demo" element={<SystemDemo />} />
          <Route path="/pipeline-diagnostic" element={<PipelineDiagnostic />} />
          <Route path="/client-login" element={<ClientLogin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
