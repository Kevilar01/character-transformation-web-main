
import { Target } from 'lucide-react';

const MissionSection = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-background-cream via-white to-secondary/5">
      <div className="absolute inset-0 opacity-50" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234A6B6B' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          <div className="inline-flex items-center space-x-3 mb-8">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-primary"></div>
            <Target className="h-8 w-8 text-primary animate-pulse" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-elegante text-primary">
              My Mission
            </h1>
            <Target className="h-8 w-8 text-primary animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="relative p-8 lg:p-12 bg-white/70 backdrop-blur-sm rounded-3xl border border-white/50 shadow-2xl hover:shadow-3xl transition-all duration-500 group">
              <p className="text-lg sm:text-xl lg:text-2xl text-neutral-taupe leading-relaxed">
                I am dedicated to empowering individuals to discover their authentic selves and build character that leads to meaningful, fulfilling lives. Through evidence-based coaching methods and compassionate support, I guide people on their journey to personal transformation.
              </p>
              
              {/* Animated border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
