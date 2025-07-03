
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowLeft, Key } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const MasterKey = () => {
  const sessions = [
    {
      session: 1,
      title: "Character Analysis Mapping",
      description: "We begin with a full Character Analysis Mapping Method session, observing your body and patterns to understand the emotional roots behind your difficulties, challenges, and concerns.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop"
    },
    {
      session: 2,
      title: "Debrief: Part One",
      description: "We review the first part of your Character Analysis in detail, helping you integrate insights and start connecting how your patterns relate to your current struggles.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
    },
    {
      session: 3,
      title: "Debrief: Part Two & Goal Setting",
      description: "We complete your Character Analysis debrief, exploring deeper layers of your patterns. Together, we set meaningful goals and create a clear plan to move forward based on what you've discovered.",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=300&fit=crop"
    },
    {
      session: 4,
      title: "Customized Tapping Techniques (EFT)",
      description: "You'll receive Emotional Freedom Technique (EFT) tapping scripts crafted specifically for your emotional pain points and challenges, to help you release what's holding you back.",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=300&fit=crop"
    },
    {
      session: 5,
      title: "Healthy Eating Habits Foundation",
      description: "We'll address your relationship with food, setting up the basics of healthy eating habits while exploring how your emotions influence your eating patterns.",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop"
    },
    {
      session: 6,
      title: "Tackling Stubborn Issues & Master Key Tool",
      description: "We'll work through issues that feel stuck or resistant, using the Master Key Tool to open new paths for progress. We'll also reevaluate your goals and adjust as needed.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop"
    },
    {
      session: 7,
      title: "EFT & Somatic/Aromatherapy Session",
      description: "You'll experience advanced EFT tapping techniques, somatic exercises, and aromatherapy to support your emotional patterns and help anchor new ways of feeling and being.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop"
    },
    {
      session: 8,
      title: "Final Session & Redefining Your Path",
      description: "We'll review your entire journey, evaluate your progress, redefine your goals, and create an action plan so you can continue confidently on your path of emotional and physical well-being.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="font-montserrat">
      {/* Hero Section */}
      <section className="bg-accent text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/consultation" className="inline-flex items-center text-white hover:text-gray-200 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Consultation
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <Key className="w-12 h-12" />
            <h1 className="text-4xl lg:text-5xl font-bold animate-fade-in">
              The Master Key
            </h1>
          </div>
          <h2 className="text-2xl mb-6 animate-fade-in animation-delay-300">
            Where Emotional Pain Meets Inner Shift
          </h2>
          <div className="flex items-center gap-6 text-lg animate-fade-in animation-delay-500">
            <span>8 Sessions</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-in">
              <div className="prose prose-lg text-neutral-taupe leading-relaxed space-y-6">
                <p className="text-xl font-medium text-accent">
                  The Master Key is a therapeutic application of Character Analysis that works directly with a specific emotional pain — a real-life situation that is affecting your emotional balance.
                </p>
                
                <Card className="bg-primary/10 border-primary/20">
                  <CardContent className="p-6">
                    <p className="font-medium text-primary">
                      It's not about general reflection.<br />
                      It's about what is hurting you right now.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="hidden md:block animate-fade-in animation-delay-300">
                <img 
                  src="https://images.unsplash.com/photo-1500673922987-e212871fec22?w=500&h=500&fit=crop" 
                  alt="Mystical forest lights representing an inner shift and transformation" 
                  className="rounded-lg shadow-xl w-full h-auto object-cover aspect-square"
                />
              </div>
            </div>

            <div className="prose prose-lg text-neutral-taupe leading-relaxed space-y-6 animate-fade-in">
              <h3 className="text-2xl font-medium text-primary">Each session explores:</h3>
              
              <ul className="space-y-3 text-secondary">
                <li>• Which character trait is in pain in the face of this specific event</li>
                <li>• The emotional and physical dynamics activated by the situation</li>
                <li>• The precise care or protection action that this trait needs to step out of suffering and return to its natural resource</li>
              </ul>
              
              <p>
                Not every pain is loud.<br />
                Some show up in silence — as overreactions, repeating patterns, a sense of paralysis, or confusion about why you keep ending up in the same place… even when you "know better."
              </p>
              
              <Card className="bg-accent/10 border-accent/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium text-accent mb-4">Why Is It So Transformative?</h3>
                  <p>
                    Because sometimes, we know what we feel, but we don't know what to do with it.
                  </p>
                  <p className="mt-4">
                    And the more we try to adapt to pain without understanding it, the more exhausted we become.
                  </p>
                </CardContent>
              </Card>
              
              <p className="text-xl font-medium">
                The Master Key gives you exactly what you need:<br />
                🗝 clarity, direction, and a practical strategy to reorganize your inner world — based on who you truly are.
              </p>
            </div>
          </div>

          {/* Session Journey Carousel */}
          <div className="mt-16 animate-fade-in">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-medium text-primary mb-4">Your 8-Session Journey to Character Transformation</h3>
              <p className="text-neutral-taupe max-w-2xl mx-auto">
                Each session builds upon the last, creating a comprehensive transformation that touches every aspect of your life. Our scientifically-backed approach ensures lasting change.
              </p>
            </div>
            
            <div className="relative max-w-3xl mx-auto">
              <Carousel 
                className="w-full" 
                opts={{ align: "start", loop: true }}
                plugins={[
                  Autoplay({
                    delay: 4000,
                    stopOnInteraction: true,
                    stopOnMouseEnter: true,
                  }),
                ]}
              >
                <CarouselContent>
                  {sessions.map((session, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                      <div className="p-2">
                        <Card className="h-full hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50 overflow-hidden group">
                          <div className="relative overflow-hidden">
                            <img 
                              src={session.image} 
                              alt={session.title}
                              className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                              Session {session.session}
                            </div>
                          </div>
                          <CardContent className="p-6">
                            <div className="text-center">
                              <h4 className="text-lg font-medium text-primary mb-3 group-hover:text-accent transition-colors duration-300">{session.title}</h4>
                              <p className="text-sm text-neutral-taupe leading-relaxed">{session.description}</p>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hover:bg-accent hover:text-white transition-colors duration-300" />
                <CarouselNext className="hover:bg-accent hover:text-white transition-colors duration-300" />
              </Carousel>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="mt-16 text-center animate-scale-in">
            <Card className="bg-accent/5 border-accent/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-medium text-accent mb-4">Transform Your Pain Into Power</h3>
                <p className="text-neutral-taupe mb-6">
                  Experience the most comprehensive consultation program designed to create lasting emotional transformation.
                </p>
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                  Begin Your Transformation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MasterKey;
