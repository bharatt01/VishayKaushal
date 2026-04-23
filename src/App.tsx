import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Programs from "./pages/Programs";
import Universities from "./pages/Universities";
import PlacementPage from "./pages/Placements";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ProgramPage from "./pages/ProgramPage";
import MargSoftwarePage from "./pages/MargSoftwarePage";

// ✅ IMPORT POPUP
import PopupForm from "./pages/PopupForm";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <BrowserRouter>

        {/* ✅ GLOBAL POPUP (THIS IS THE KEY LINE) */}
        <PopupForm />

        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/marg-software" element={<MargSoftwarePage />} />
            <Route path="/universities" element={<Universities />} />
            <Route path="/placement" element={<PlacementPage />} />
            <Route path="/earn-while-learn" element={<ProgramPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>

      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;