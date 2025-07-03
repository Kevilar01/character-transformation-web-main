
import { Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-white via-background-cream/30 to-primary/5 overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-primary/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image - Left Side with Modern Frame */}
          <div className="animate-fade-in order-2 lg:order-1 group">
            <div className="relative">
              {/* Glass morphism backdrop */}
              <div className="absolute -inset-4 bg-white/20 backdrop-blur-sm rounded-3xl border border-white/30 shadow-2xl group-hover:shadow-3xl transition-all duration-700 group-hover:scale-[1.02]"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/lovable-uploads/bb576067-f16a-4dda-8749-6b3b6088c4aa.png"
                  alt="Claudia Gimenes Fisher"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover object-center transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                />
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              {/* Floating accent elements */}
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-accent rounded-full animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
          
          {/* Text - Right Side with Enhanced Typography */}
          <div className="space-y-8 animate-fade-in order-1 lg:order-2 text-center lg:text-left" style={{ animationDelay: '0.3s' }}>
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 backdrop-blur-sm">
                <Sparkles className="h-4 w-4 text-primary animate-sparkle" />
                <span className="text-sm font-medium text-primary">Character Analyst</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-elegante text-primary leading-tight group">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent hover:from-accent hover:via-primary hover:to-secondary transition-all duration-1000">
                  Claudia Gimenes Fisher
                </span>
              </h1>
            </div>
            
            <div className="space-y-6">
              <p className="text-xl sm:text-2xl text-accent font-medium italic relative">
                <span className="relative z-10">Character Analyst</span>
                <div className="absolute inset-0 bg-accent/10 blur-xl rounded-full"></div>
              </p>
              
              <div className="relative p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/30 shadow-xl">
                <p className="text-lg lg:text-xl text-neutral-taupe leading-relaxed">
                  Helping you reconnect with the essence beneath your patterns.<br />
                  <span className="text-primary font-medium">Here, your body speaks, your story is heard, and your truth becomes your strength.</span>
                </p>
                {/* Subtle accent line */}
                <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
