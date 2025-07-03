
import { Heart } from 'lucide-react';

const StorySection = () => {
  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-br from-white to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image - Left Side with Enhanced Effects */}
          <div className="animate-fade-in order-2 lg:order-1 group">
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-white/20">
                <img
                  src="/lovable-uploads/a09eef40-97a4-4df3-8452-930ef15914ad.png"
                  alt="Professional portrait"
                  className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
          
          {/* Text - Right Side with Modern Typography */}
          <div className="space-y-8 animate-fade-in order-1 lg:order-2" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center justify-center lg:justify-start space-x-4 mb-8">
              <div className="w-8 h-8 bg-gradient-to-r from-secondary to-accent rounded-full flex items-center justify-center">
                <Heart className="h-4 w-4 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-elegante text-primary">My Story</h2>
              <div className="flex-1 h-0.5 bg-gradient-to-r from-primary/30 to-transparent lg:block hidden"></div>
            </div>
            
            <div className="space-y-6 text-base sm:text-lg lg:text-xl text-neutral-taupe text-center lg:text-left">
              <div className="relative p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-white/30 hover:bg-white/70 transition-all duration-300 group">
                <p className="leading-relaxed">
                  I've been developing a character transformation approach grounded in the belief that real, lasting change is possible when people are met with the right tools, insight, and compassionate support.
                </p>
                <div className="absolute inset-0 border border-primary/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="relative p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-white/30 hover:bg-white/70 transition-all duration-300 group">
                <p className="leading-relaxed">
                  What began as a deeply personal mission to support a few individuals has grown into a thoughtful, body-mind-based method that's helped many people better understand themselves and shift long-standing patterns.
                </p>
                <div className="absolute inset-0 border border-secondary/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="relative p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-white/30 hover:bg-white/70 transition-all duration-300 group">
                <p className="leading-relaxed">
                  Today, I continue to refine this approach through ongoing study and practice, always guided by the same core intention: to help people feel more connected, more empowered, and more aligned with who they truly are.
                </p>
                <div className="absolute inset-0 border border-accent/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
