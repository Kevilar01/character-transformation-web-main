
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      className="min-h-screen bg-background-cream flex items-center justify-center px-4 pt-16 relative"
      style={{
        backgroundImage: `url('/lovable-uploads/30ade0d7-f407-4a8b-8e8e-0154be2e2923.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-background-cream/80"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 
          className={`font-elegante text-4xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ animationDelay: '300ms' }}
        >
          Character Analysis
        </h1>
        <h2 
          className={`font-elegante text-3xl md:text-5xl lg:text-6xl font-bold text-accent mt-2 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ animationDelay: '600ms' }}
        >
          Mapping Method
        </h2>
        <p 
          className={`font-montserrat text-lg md:text-xl text-neutral-taupe mt-8 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ animationDelay: '900ms' }}
        >
          Discover your true potential through our revolutionary character analysis methodology, 
          designed to unlock personal transformation and authentic growth.
        </p>
        <div 
          className={`mt-12 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ animationDelay: '1200ms' }}
        >
          <Link to="/consultation">
            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-montserrat font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              Begin Your Journey
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
