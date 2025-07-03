
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const CharacterAnalysis = () => {
  const { t } = useLanguage();

  return (
    <div className="font-montserrat">
      {/* Hero Section */}
      <section className="bg-secondary text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/consultation" className="inline-flex items-center text-white hover:text-gray-200 mb-6 sm:mb-8 transition-colors text-sm sm:text-base">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t('char_analysis.back')}
          </Link>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium mb-4 sm:mb-6 animate-fade-in leading-tight">
            {t('char_analysis.title')}
          </h1>
          <div className="flex items-center gap-4 sm:gap-6 text-base sm:text-lg animate-fade-in animation-delay-300">
            <span>{t('char_analysis.session_info')}</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="prose prose-base sm:prose-lg text-neutral-taupe leading-relaxed space-y-4 sm:space-y-6 animate-fade-in">
              <p className="text-lg sm:text-xl font-medium text-secondary leading-relaxed">
                {t('char_analysis.description1')}
              </p>
              
              <p className="text-sm sm:text-base leading-relaxed">
                {t('char_analysis.description2')}
              </p>
            </div>
            <div className="animate-fade-in animation-delay-300">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=500&fit=crop&auto=format&q=75" 
                alt="Abstract image of a circuit board representing character mapping" 
                className="rounded-lg shadow-xl w-full h-auto object-cover aspect-square"
                loading="lazy"
              />
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="mt-12 sm:mt-16 text-center animate-scale-in">
            <Card className="bg-neutral-light border-secondary/20">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-medium text-secondary mb-3 sm:mb-4">{t('char_analysis.cta.title')}</h3>
                <p className="text-neutral-taupe mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                  {t('char_analysis.cta.description')}
                </p>
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white w-full sm:w-auto text-sm sm:text-base py-3 sm:py-4 px-6 sm:px-8">
                  {t('char_analysis.cta.button')}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CharacterAnalysis;
