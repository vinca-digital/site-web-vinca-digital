import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from "./pages/Services";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "next-themes";
import ChatBot from './components/ChatBot';
import Portfolio from './pages/portfolio';
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Forfaits from "./pages/Forfaits";


const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/forfaits" element={<Forfaits />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
        <ChatBot />
    </TooltipProvider>
  </QueryClientProvider>
  </ThemeProvider>
);

export default App;
