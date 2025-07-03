
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Target, Users, Star } from 'lucide-react';

const ValuesSection = () => {
  const values = [
    {
      title: 'Authenticity',
      description: 'We believe in being genuine and true to ourselves and others in all interactions.',
      icon: Heart
    },
    {
      title: 'Growth Mindset',
      description: 'Every challenge is an opportunity to learn, grow, and become a better version of ourselves.',
      icon: Target
    },
    {
      title: 'Compassion',
      description: 'We approach every person with empathy, understanding, and unconditional positive regard.',
      icon: Users
    },
    {
      title: 'Excellence',
      description: 'We strive for the highest standards in everything we do, from coaching to customer service.',
      icon: Star
    }
  ];

  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-br from-background-cream to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-4 mb-8">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-primary"></div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-elegante text-primary">
              Our Core Values
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <Card key={index} className="relative text-center bg-white/80 backdrop-blur-sm border-2 border-white/50 transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:bg-white/95 group h-full overflow-hidden">
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardContent className="relative p-6 sm:p-8 flex flex-col h-full">
                <div className="relative mb-6">
                  {/* Icon container with enhanced effects */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl mx-auto mb-6 flex items-center justify-center transition-all duration-500 group-hover:from-secondary group-hover:to-accent group-hover:scale-110 group-hover:rotate-6 shadow-xl">
                    <value.icon className="h-8 w-8 sm:h-10 sm:w-10 text-white transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  
                  {/* Floating particles effect */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                  </div>
                  <div className="absolute top-2 right-1/4 opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ animationDelay: '0.2s' }}>
                    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                  </div>
                  <div className="absolute top-2 left-1/4 opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ animationDelay: '0.4s' }}>
                    <div className="w-1 h-1 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
                  </div>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-elegante text-primary mb-4 group-hover:text-secondary transition-colors duration-500">{value.title}</h3>
                <p className="text-neutral-taupe text-sm sm:text-base leading-relaxed flex-grow group-hover:text-neutral-taupe/90 transition-colors duration-300">{value.description}</p>
                
                {/* Bottom accent line */}
                <div className="mt-6 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent group-hover:via-secondary/50 transition-all duration-500"></div>
              </CardContent>
              
              {/* Hover border effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-secondary/20 rounded-lg transition-colors duration-500"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
