
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const Mentoring = () => {
  const { t } = useLanguage();

  const mentoringPackages = [
    {
      id: 'character-analysis',
      title: 'Character Analysis Mapping Session',
      sessions: '1 session',
      description: 'A foundational 1-on-1 session to understand your character structure through BodyMind Integration.',
      price: '$297',
      featured: false
    },
    {
      id: 'vagus-nerve-reset',
      title: 'Vagus Nerve Reset + EFT + Aromatherapy',
      sessions: '',
      description: 'A calming session combining nervous system regulation, tapping therapy, and sensory healing.',
      price: '$347',
      featured: false
    },
    {
      id: 'master-key',
      title: 'Master Key Mentoring Package',
      sessions: '8 sessions',
      description: 'Deep-dive mentorship using the Character Analysis Mapping Method, emotional mastery & life design.',
      price: '$2,497',
      featured: true
    },
    {
      id: 'nutrition-beyond-plate',
      title: 'Nutrition Beyond the Plate',
      sessions: '',
      description: 'Explore emotional eating, survival traits, and the hunger that food can\'t touch.',
      price: '$1,997',
      featured: false
    }
  ];

  return (
    <div className="font-montserrat">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-medium mb-6 animate-fade-in">
            Mentoring Programs
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto animate-fade-in animation-delay-300">
            Transform your life through personalized mentoring programs designed to unlock your true potential.
          </p>
        </div>
      </section>

      {/* Mentoring Packages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mentoringPackages.map((pkg, index) => (
              <Card 
                key={pkg.id} 
                className={`relative transition-all duration-300 hover:shadow-xl hover:scale-105 animate-fade-in ${
                  pkg.featured 
                    ? 'ring-2 ring-accent scale-105 bg-gradient-to-br from-white to-accent/5' 
                    : 'hover:shadow-lg'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {pkg.featured && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-white">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className={`text-lg mb-2 font-medium ${pkg.featured ? 'text-accent' : 'text-primary'}`}>
                    {pkg.title}
                  </CardTitle>
                  <div className="text-2xl font-medium text-secondary mb-2">{pkg.price}</div>
                  {pkg.sessions && <div className="text-sm text-neutral-taupe">{pkg.sessions}</div>}
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-neutral-taupe mb-6 leading-relaxed">
                    {pkg.description}
                  </p>
                  <Link to={`/mentoring/${pkg.id}`}>
                    <Button 
                      className={`w-full transition-all duration-300 ${
                        pkg.featured 
                          ? 'bg-accent hover:bg-accent/90 text-white' 
                          : 'bg-primary hover:bg-primary/90 text-white'
                      }`}
                    >
                      View Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Manifest Section */}
      <section className="py-20 bg-neutral-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h2 className="text-3xl font-medium text-primary mb-12">Manifest</h2>
            <div className="prose prose-lg text-neutral-taupe leading-relaxed space-y-6 max-w-3xl mx-auto">
              <p className="italic text-xl">
                There comes a moment in every journey…<br />
                when performance no longer satisfies.<br />
                When pleasing others becomes too heavy.<br />
                When the stories we tell ourselves no longer make sense.
              </p>
              
              <p className="font-medium">
                That moment is not a crisis.<br />
                It's a calling.
              </p>
              
              <p>
                A calling to strip the armor,<br />
                to pause the noise,<br />
                to finally meet the version of you that's been waiting —<br />
                not to be fixed,<br />
                but to be seen.
              </p>
              
              <p>
                Essence Unveiled is not about perfection, fixing, or becoming someone else.<br />
                It's about remembering the self that was always there — before the fear, before the masks, before the shoulds.
              </p>
              
              <p>
                This is a space for transformation that begins within.<br />
                Through Character Analysis, body intelligence, and emotional integration,<br />
                you are invited to reconnect with the truth beneath the defenses.
              </p>
              
              <p>
                Because your essence is not something you need to build.<br />
                It's something you were born with.
              </p>
              
              <p className="font-medium text-primary">
                Now it's time to live from it.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mentoring;
