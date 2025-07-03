
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowLeft, Heart, Brain, Leaf, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const VagusNerveReset = () => {
  const { t } = useLanguage();

  return (
    <div className="font-montserrat">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/consultation" className="inline-flex items-center text-white hover:text-gray-200 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t('vagus.back')}
          </Link>
          <h1 className="text-4xl lg:text-5xl font-medium mb-6 animate-fade-in">
            {t('vagus.title')}
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="prose prose-lg text-neutral-taupe leading-relaxed space-y-6 animate-fade-in">
              <p className="text-xl font-medium text-primary">
                {t('vagus.description1')}
              </p>
              
              <p>
                {t('vagus.description2')}
              </p>
            </div>
            <div className="animate-fade-in animation-delay-300">
              <img 
                src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=500&h=500&fit=crop" 
                alt="Calming flowers representing aromatherapy and sensory healing" 
                className="rounded-lg shadow-xl w-full h-auto object-cover aspect-square"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Emotional Reset Protocol Section */}
      <section className="py-20 bg-gradient-to-br from-neutral-light via-white to-neutral-light/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-medium text-primary mb-6">
              The Emotional Reset Protocol
            </h2>
            <p className="text-xl text-neutral-taupe max-w-3xl mx-auto leading-relaxed">
              A somatic and sensory pathway to reconnect with yourself.
            </p>
          </div>

          {/* Description */}
          <div className="mb-16 animate-fade-in animation-delay-300">
            <Card className="bg-white/80 backdrop-blur-sm border-primary/20 shadow-lg">
              <CardContent className="p-8">
                <p className="text-neutral-taupe leading-relaxed mb-6">
                  This unique protocol integrates body-based psychology, vagus nerve activation, essential oils, and EFT tapping to help you process emotional pain, regulate your nervous system, and restore your inner sense of safety.
                </p>
                <p className="text-neutral-taupe leading-relaxed">
                  It is designed around five emotional character structures traits — patterns of behavior, emotion, and body tension shaped by early emotional wounds. Each session guides you through releasing a core wound using breath, movement, aroma, and conscious self-touch.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Why the Method Works */}
          <div className="mb-16 animate-fade-in animation-delay-500">
            <div className="flex items-center gap-3 mb-8">
              <Sparkles className="w-6 h-6 text-accent" />
              <h3 className="text-2xl font-medium text-primary">Why the Method Works</h3>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <p className="text-neutral-taupe leading-relaxed mb-6">
                  Most emotional pain is not just mental — it is embodied. It lives in our nervous system, muscles, breath, and even our posture.
                </p>
                <p className="text-neutral-taupe leading-relaxed mb-6">
                  This protocol uses:
                </p>
              </div>
              
              <div className="grid gap-4">
                <Card className="bg-white border-primary/20 hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Brain className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-primary mb-1">Vagal nerve stimulation</h4>
                        <p className="text-sm text-neutral-taupe">to calm your fight/flight/freeze responses</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-white border-primary/20 hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Leaf className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-primary mb-1">Essential oils</h4>
                        <p className="text-sm text-neutral-taupe">to activate your emotional brain through scent</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-white border-primary/20 hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Heart className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-primary mb-1">EFT (Emotional Freedom Techniques)</h4>
                        <p className="text-sm text-neutral-taupe">to rewire old emotional beliefs</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-white border-primary/20 hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-primary rounded-full mt-1 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-medium text-primary mb-1">Somatic awareness</h4>
                        <p className="text-sm text-neutral-taupe">to reconnect you with your body as a source of healing</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <Card className="bg-accent/5 border-accent/20 mt-8">
              <CardContent className="p-6">
                <p className="text-neutral-taupe leading-relaxed italic text-center">
                  These tools gently invite your nervous system to feel safe again — not through effort, but through embodied permission.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* What to Expect */}
          <div className="mb-16 animate-fade-in animation-delay-700">
            <div className="flex items-center gap-3 mb-8">
              <Leaf className="w-6 h-6 text-secondary" />
              <h3 className="text-2xl font-medium text-primary">What to Expect</h3>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="bg-white border-primary/20">
                <CardContent className="p-8">
                  <p className="text-neutral-taupe leading-relaxed mb-4">
                    This is not a "quick fix" method. It's a guided process that empowers you to self-regulate and reconnect over time.
                  </p>
                  <p className="text-neutral-taupe leading-relaxed mb-4">
                    You won't be "healed" in a single session — and that's okay. Healing isn't linear. It's relational. It's cyclical. It happens through consciousness repetition and intention.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
                <CardContent className="p-8">
                  <p className="text-neutral-taupe leading-relaxed mb-4">
                    Healing happens in layers. This session planted a seed. The more you return to it, the deeper the roots of your safety and self-connection will grow.
                  </p>
                  <p className="text-neutral-taupe leading-relaxed">
                    Each session becomes a sacred pause where you feel, release, and remember who you are — not from the mind, but from the body.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-16 animate-fade-in animation-delay-1000">
            <div className="flex items-center gap-3 mb-8">
              <Heart className="w-6 h-6 text-accent" />
              <h3 className="text-2xl font-medium text-primary">Benefits You May Experience</h3>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "A calmer, more regulated emotional state",
                "Greater body awareness and self-trust",
                "Reduced anxiety, overthinking, or emotional reactivity",
                "A deeper sense of presence and grounding",
                "Relief from emotional patterns tied to your body type or trauma"
              ].map((benefit, index) => (
                <Card key={index} className="bg-white border-primary/20 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-neutral-taupe leading-relaxed">{benefit}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* What's Included */}
          <div className="mb-16 animate-fade-in animation-delay-1200">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-6 h-6 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <span className="text-white text-sm">🎧</span>
              </div>
              <h3 className="text-2xl font-medium text-primary">What's Included in Each Session</h3>
            </div>
            
            <Card className="bg-gradient-to-br from-white to-neutral-light/30 border-primary/20 shadow-lg">
              <CardContent className="p-8">
                <div className="grid gap-6">
                  {[
                    "A focus on one core emotional wound (e.g., abandonment, rejection, shame)",
                    "A guided vagal activation exercise",
                    "A matching essential oil ritual",
                    "An EFT tapping script to release the emotional charge",
                    "A closing integration + home practice to anchor the transformation"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-medium text-sm">{index + 1}</span>
                      </div>
                      <p className="text-neutral-taupe leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Closing Message */}
          <div className="animate-fade-in animation-delay-1500">
            <Card className="bg-gradient-to-br from-accent/5 via-white to-primary/5 border-accent/20 shadow-xl">
              <CardContent className="p-8 text-center">
                <p className="text-lg text-neutral-taupe leading-relaxed mb-6 italic">
                  "This session offers a doorway, not a final destination. It helps your body begin to feel a new possibility — but it's through your daily presence and practice that this becomes embodied truth."
                </p>
                <div className="w-16 h-px bg-accent mx-auto mb-6"></div>
                <p className="text-neutral-taupe leading-relaxed italic">
                  💬 "Each time you repeat the breath, the sound, the tapping — you are training your nervous system to return to safety."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-scale-in">
            <Card className="bg-neutral-light border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-medium text-primary mb-4">{t('vagus.cta.title')}</h3>
                <p className="text-neutral-taupe mb-6">
                  {t('vagus.cta.description')}
                </p>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  {t('vagus.cta.button')}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VagusNerveReset;
