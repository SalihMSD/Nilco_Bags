
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import CategoryPage from "./pages/CategoryPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/category/:categoryId" element={<CategoryPage />} />
            {/* All product category routes */}
            <Route path="/ladies-purses" element={<CategoryPage />} />
            <Route path="/gents-purses" element={<CategoryPage />} />
            <Route path="/trolley-20" element={<CategoryPage />} />
            <Route path="/trolley-24" element={<CategoryPage />} />
            <Route path="/trolley-28" element={<CategoryPage />} />
            <Route path="/primary-bags" element={<CategoryPage />} />
            <Route path="/kg-bags" element={<CategoryPage />} />
            <Route path="/college-bags" element={<CategoryPage />} />
            <Route path="/school-bags" element={<CategoryPage />} />
            <Route path="/travel-bags" element={<CategoryPage />} />
            <Route path="/trekking-bags" element={<CategoryPage />} />
            <Route path="/laptop-bags" element={<CategoryPage />} />
            <Route path="/duffle-bags" element={<CategoryPage />} />
            <Route path="/lunch-bags" element={<CategoryPage />} />
            <Route path="/backpacks" element={<CategoryPage />} />
            <Route path="/trolleys" element={<CategoryPage />} />
            <Route path="/purses" element={<CategoryPage />} />
            <Route path="/belts" element={<CategoryPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
