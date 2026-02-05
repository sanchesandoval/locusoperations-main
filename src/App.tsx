import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import BookCall from "./pages/BookCall";
import SystemDemo from "./pages/SystemDemo";
import PipelineDiagnostic from "./pages/PipelineDiagnostic";
// import ClientLogin from "./pages/ClientLogin";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/book-call" element={<BookCall />} />
          <Route path="/system-demo" element={<SystemDemo />} />
          <Route path="/pipeline-diagnostic" element={<PipelineDiagnostic />} />
          {/* <Route path="/client-login" element={<ClientLogin />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
