
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';

const ConsultationPackages = () => {
  const consultationPackages = [
    {
      id: 'character-analysis',
      title: 'Character Analysis Mapping Session',
      sessions: '1 session',
      description: 'A foundational 1-on-1 session to understand your character structure through BodyMind Integration.',
      featured: false
    },
    {
      id: 'vagus-nerve-reset',
      title: 'Vagus Nerve Reset + EFT + Aromatherapy',
      sessions: '3 sessions',
      description: 'A calming session combining nervous system regulation, tapping therapy, and sensory healing.',
      featured: false
    },
    {
      id: 'master-key',
      title: 'Character Analysis Mapping Method master key package',
      sessions: '8 sessions',
      description: 'Deep-dive mentorship using the Character Analysis Mapping Method, emotional mastery & life design.',
      featured: true
    },
    {
      id: 'nutrition-beyond-plate',
      title: 'Nutrition Beyond the Plate',
      sessions: '8 sessions',
      description: 'Explore emotional eating, survival traits, and the hunger that food can\'t touch.',
      featured: false
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-neutral-light/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-medium text-primary">
            Consultation Packages
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {consultationPackages.map((pkg, index) => (
            <Card 
              key={pkg.id} 
              className={`group relative transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-fade-in h-full flex flex-col ${
                pkg.featured 
                  ? 'bg-gradient-to-br from-white via-accent/5 to-accent/10 border-2 border-accent/30 xl:scale-105 shadow-xl' 
                  : 'bg-white border border-gray-200 hover:border-primary/30'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Background decoration */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                pkg.featured 
                  ? 'bg-gradient-to-r from-accent/5 to-transparent' 
                  : 'bg-gradient-to-r from-primary/5 to-transparent'
              }`} />
              
              {/* Featured badge */}
              {pkg.featured && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <Badge className="bg-accent text-white shadow-lg px-4 py-1 text-sm font-medium border-0">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="relative z-10 text-center pb-4 pt-6">
                <CardTitle className={`text-lg lg:text-xl mb-3 font-semibold leading-tight transition-colors duration-300 ${
                  pkg.featured ? 'text-accent group-hover:text-accent/80' : 'text-primary group-hover:text-secondary'
                }`}>
                  {pkg.title}
                </CardTitle>
                {pkg.sessions && (
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                    pkg.featured 
                      ? 'bg-accent/10 text-accent border border-accent/20' 
                      : 'bg-primary/10 text-primary border border-primary/20'
                  }`}>
                    {pkg.sessions}
                  </div>
                )}
              </CardHeader>

              <CardContent className="relative z-10 text-center flex flex-col flex-grow px-6 pb-6">
                <p className="text-neutral-taupe mb-6 leading-relaxed text-sm lg:text-base flex-grow">
                  {pkg.description}
                </p>
                
                <Link to={`/consultation/${pkg.id}`} className="mt-auto">
                  <Button 
                    className={`w-full group/btn transition-all duration-300 text-sm lg:text-base py-3 px-6 font-medium ${
                      pkg.featured 
                        ? 'bg-accent hover:bg-accent/90 text-white shadow-lg hover:shadow-xl' 
                        : 'bg-primary hover:bg-secondary text-white hover:shadow-lg'
                    }`}
                  >
                    <span className="flex items-center justify-center gap-2">
                      View Details
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </span>
                  </Button>
                </Link>
              </CardContent>

              {/* Decorative corner element */}
              <div className={`absolute top-0 right-0 w-20 h-20 opacity-10 ${
                pkg.featured ? 'text-accent' : 'text-primary'
              }`}>
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path d="M100,0 L100,50 Q100,100 50,100 L0,100 L0,0 Z" fill="currentColor" />
                </svg>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConsultationPackages;
