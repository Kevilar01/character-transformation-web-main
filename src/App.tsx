
import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";

const queryClient = new QueryClient();

const Home = lazy(() => import("./pages/Home"));
const Consultation = lazy(() => import("./pages/Consultation"));
const CharacterAnalysis = lazy(() => import("./pages/CharacterAnalysis"));
const VagusNerveReset = lazy(() => import("./pages/VagusNerveReset"));
const MasterKey = lazy(() => import("./pages/MasterKey"));
const NutritionBeyondPlate = lazy(() => import("./pages/NutritionBeyondPlate"));
const Blog = lazy(() => import("./pages/Blog"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const ScientificEvidence = lazy(() => import("./pages/ScientificEvidence"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
              <Suspense fallback={<Loader />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/consultation" element={<Consultation />} />
                  <Route path="/consultation/character-analysis" element={<CharacterAnalysis />} />
                  <Route path="/consultation/vagus-nerve-reset" element={<VagusNerveReset />} />
                  <Route path="/consultation/master-key" element={<MasterKey />} />
                  <Route path="/consultation/nutrition-beyond-plate" element={<NutritionBeyondPlate />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/scientific-evidence" element={<ScientificEvidence />} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
