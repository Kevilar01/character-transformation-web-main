
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Users, Target, Heart, ArrowRight } from "lucide-react";

const CharacterAnalysisSection = () => {
  return (
    <section className="py-16 sm:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main Introduction */}
        <div className="text-center mb-16">
          <h2 className="font-elegante text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Character Analysis Mapping Method
          </h2>
          <p className="font-elegante text-xl sm:text-2xl text-accent mb-4">
            Brief Introduction
          </p>
          <div className="max-w-4xl mx-auto">
            <p className="font-montserrat text-sm sm:text-base lg:text-lg leading-relaxed text-neutral-taupe">
              The Character Analysis Mapping Method is a visual or structured approach to understanding a character's traits, motivations, relationships, and development within a story. It helps readers, writers, and analysts break down complex characters by organizing key details into categories.
            </p>
          </div>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <Card className="card-hover bg-white/80 backdrop-blur-sm border-accent/10">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-accent mr-3" />
                <h3 className="font-montserrat font-semibold text-primary">Physical Traits</h3>
              </div>
              <p className="font-montserrat text-sm text-neutral-taupe">
                Appearance, age, gender and physical characteristics
              </p>
            </CardContent>
          </Card>

          <Card className="card-hover bg-white/80 backdrop-blur-sm border-accent/10">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Brain className="w-6 h-6 text-accent mr-3" />
                <h3 className="font-montserrat font-semibold text-primary">Personality</h3>
              </div>
              <p className="font-montserrat text-sm text-neutral-taupe">
                Strengths, flaws, habits and behavioral patterns
              </p>
            </CardContent>
          </Card>

          <Card className="card-hover bg-white/80 backdrop-blur-sm border-accent/10">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Target className="w-6 h-6 text-accent mr-3" />
                <h3 className="font-montserrat font-semibold text-primary">Motivations & Goals</h3>
              </div>
              <p className="font-montserrat text-sm text-neutral-taupe">
                What drives them and their core objectives
              </p>
            </CardContent>
          </Card>

          <Card className="card-hover bg-white/80 backdrop-blur-sm border-accent/10">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Heart className="w-6 h-6 text-accent mr-3" />
                <h3 className="font-montserrat font-semibold text-primary">Relationships</h3>
              </div>
              <p className="font-montserrat text-sm text-neutral-taupe">
                Connections with other characters and social dynamics
              </p>
            </CardContent>
          </Card>

          <Card className="card-hover bg-white/80 backdrop-blur-sm border-accent/10 md:col-span-2 lg:col-span-1">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <ArrowRight className="w-6 h-6 text-accent mr-3" />
                <h3 className="font-montserrat font-semibold text-primary">Character Arc</h3>
              </div>
              <p className="font-montserrat text-sm text-neutral-taupe">
                How they change and evolve over time
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Usage Description */}
        <div className="text-center mb-16">
          <p className="font-montserrat text-sm sm:text-base lg:text-lg leading-relaxed text-neutral-taupe max-w-4xl mx-auto">
            This method is useful for literary analysis, scriptwriting, or even role-playing games (RPGs), as it provides a clear framework for deeper character exploration.
          </p>
        </div>

        {/* Transformation Method Section */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-8 sm:p-12 border border-accent/10">
          <div className="text-center mb-8">
            <h3 className="font-elegante text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-4">
              Character Transformation Method
            </h3>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="font-montserrat text-sm sm:text-base lg:text-lg leading-relaxed text-neutral-taupe">
              I have developed a character transformation method based on the idea that lasting change happens when people have the right tools, insights, and compassionate support. What started as a personal mission to help a few individuals has evolved into a mind-body approach that enables deep self-understanding and breaks long-term patterns.
            </p>
            
            <p className="font-montserrat text-sm sm:text-base lg:text-lg leading-relaxed text-neutral-taupe">
              Today, you keep refining this method through continuous learning and practice, staying true to your core goal: helping people feel more connected, empowered, and aligned with their true selves.
            </p>
          </div>

          <div className="text-center mt-10">
            <button className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-montserrat font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              Learn More About Our Method
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharacterAnalysisSection;
