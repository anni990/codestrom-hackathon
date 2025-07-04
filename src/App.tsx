import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Timeline from "./pages/Timeline";
import Problems from "./pages/Problems";
import Enrollment from "./pages/Enrollment";
import NotFound from "./pages/NotFound";

declare global {
  interface Window {
    AOS: {
      init: (config: any) => void;
    };
  }
}

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Initialize AOS animations
    if (window.AOS) {
      window.AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/problems" element={<Problems />} />
          <Route path="/enrollment" element={<Enrollment />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
