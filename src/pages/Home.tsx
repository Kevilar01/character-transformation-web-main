
import HeroSection from "@/components/HeroSection";
import IntroductionSection from "@/components/IntroductionSection";
import CharacterAnalysisSection from "@/components/CharacterAnalysisSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";

const Home = () => {
  return (
    <div className="bg-background-cream min-h-screen">
      <HeroSection />
      <IntroductionSection />
      <CharacterAnalysisSection />
      <TestimonialsSection />
      <FAQSection />
    </div>
  );
};

export default Home;
