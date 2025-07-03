
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, FileText, Sparkles, Compass, Flower2, Moon, Puzzle, Search, Heart } from 'lucide-react';

const ScientificEvidence = () => {
  const { t } = useLanguage();

  const pdfs = [
    {
      id: 1,
      title: 'The Neuroscience of Character Development',
      description: 'A comprehensive study on how character traits can be developed through neuroplasticity.',
      filename: 'neuroscience-character-development.pdf',
      pages: 24
    },
    {
      id: 2,
      title: 'Characterology: Historical Foundations',
      description: 'An overview of characterology from ancient philosophy to modern psychology.',
      filename: 'characterology-historical-foundations.pdf',
      pages: 18
    },
    {
      id: 3,
      title: 'Behavioral Change Through Character Coaching',
      description: 'Evidence-based research on the effectiveness of character coaching methodologies.',
      filename: 'behavioral-change-character-coaching.pdf',
      pages: 32
    },
    {
      id: 4,
      title: 'The Psychology of Virtue Development',
      description: 'Clinical studies on virtue ethics and character strength development.',
      filename: 'psychology-virtue-development.pdf',
      pages: 28
    },
    {
      id: 5,
      title: 'Character Assessment and Measurement',
      description: 'Validated instruments and methodologies for character assessment.',
      filename: 'character-assessment-measurement.pdf',
      pages: 22
    }
  ];

  const sessionSteps = [
    {
      icon: Sparkles,
      title: 'Opening & Initial Alignment',
      description: 'Your session will begin with a moment of connection and presence. I will introduce myself and open a warm space for you to feel seen, heard, and welcomed.',
      details: 'This is a sacred moment of alignment. Together, we\'ll create a space of emotional safety so you can express yourself freely and feel supported. "In this space, you are the most important person. Nothing matters more than your truth. You are safe to be fully yourself."'
    },
    {
      icon: Compass,
      title: 'The Purpose of Character Analysis Mapping Method',
      description: 'This method is not about labeling or fixing you — it\'s about understanding how you adapted to life. Your body tells the story of the emotional strategies you developed.',
      details: 'Through this session, you\'ll discover your core emotional structure, the traits that are most active in your system, your natural strengths and inner resources, and environments that support or challenge your system.'
    },
    {
      icon: FileText,
      title: 'Anamnesis – Pre-Analysis Questionnaire',
      description: 'Before we begin the scoring process, I will guide you through a brief anamnesis — a set of important questions that ensure your body analysis is accurate.',
      details: 'These questions are not about judgment, but about ensuring that any physical changes or interventions do not interfere with the integrity of your structural reading.'
    },
    {
      icon: Moon,
      title: 'Body Observation – The Scoring Process',
      description: 'I will gently guide you through a body-based observation. We\'ll look at six specific areas of your body: Head, Eyes, Mouth, torso, hip, and Legs.',
      details: 'Based on the form and posture of each part, the sensations or tensions you notice, and the visible expression of each area, I will create your Character Structure Chart.'
    },
    {
      icon: Puzzle,
      title: 'First Part of the Debrief – How You Function',
      description: 'Once your map is complete, we move into the first part of your feedback session. This is where I help you understand how your unique system operates.',
      details: 'We\'ll explore your dominant traits and emotional peaks, how your character traits combine and influence each other, and environments that support or challenge your system.'
    },
    {
      icon: Search,
      title: 'Second Part of the Debrief – 3 Life Questions',
      description: 'Now that you understand your structure, we\'ll apply this knowledge directly to your life. You\'ll be invited to share three current issues or emotional blocks.',
      details: 'These can be emotional struggles, relationship conflicts, or inner blocks that stop you from creating or making decisions. Together, we\'ll explore how your character structure influences these patterns.'
    }
  ];

  const handleDownload = (filename: string) => {
    // For demonstration purposes, we'll create a dummy file and trigger a download.
    // In a real application, you would replace this with a link to your actual PDF file.
    const textContent = `This is a placeholder for the document: ${filename}.\nIn a real application, this would be the actual PDF content.`;
    const blob = new Blob([textContent], { type: 'application/pdf' });
    const url = window.URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    
    document.body.appendChild(link);
    link.click();
    
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="font-montserrat animate-fade-in">
      {/* Hero Section */}
      <section className="bg-neutral-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-primary mb-6 animate-fade-in">
            {t('scientific.hero.title')}
          </h1>
          <p className="text-xl text-neutral-taupe max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {t('scientific.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Session Guide Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-6 animate-fade-in">
              A Step-by-Step Guide to Your First Session
            </h2>
            <p className="text-xl text-neutral-taupe max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Emotional Mapping and Body-Based Insight Process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sessionSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <Card 
                  key={index}
                  className="hover:shadow-lg transition-all duration-300 border-2 border-neutral-taupe/20 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-3 bg-secondary/10 rounded-full w-fit">
                      <IconComponent className="h-8 w-8 text-secondary" />
                    </div>
                    <CardTitle className="text-xl text-primary mb-2">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-neutral-taupe font-medium">{step.description}</p>
                    <p className="text-neutral-taupe text-sm leading-relaxed">{step.details}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Card className="bg-secondary/5 border-2 border-secondary/20 max-w-4xl mx-auto">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-4">
                  <Heart className="h-10 w-10 text-secondary mr-3" />
                  <h3 className="text-2xl font-bold text-secondary">Closing Reminder</h3>
                </div>
                <p className="text-lg text-neutral-taupe leading-relaxed mb-4">
                  This session is a mirror — not to judge you, but to reflect your emotional truth with clarity, compassion, and deep respect.
                </p>
                <p className="text-lg text-neutral-taupe leading-relaxed">
                  <strong>You are not broken.</strong> Your structure is not your limit — it is the map to your freedom. 
                  I am here to walk beside you as you remember who you are beneath the roles and protections.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* PDF Downloads Section */}
      <section className="py-16 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-primary mb-12 animate-fade-in">
            {t('scientific.downloads.title')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pdfs.map((pdf, index) => (
              <Card 
                key={pdf.id} 
                className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 border-neutral-taupe/20 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    <FileText className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-primary mb-2">{pdf.title}</CardTitle>
                  <p className="text-sm text-neutral-taupe">{pdf.pages} pages</p>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-taupe mb-6 text-center">{pdf.description}</p>
                  <Button 
                    onClick={() => handleDownload(pdf.filename)}
                    className="w-full bg-secondary hover:bg-secondary/90 text-white flex items-center gap-2"
                  >
                    <Download className="h-4 w-4" />
                    {t('scientific.download')}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Character Analysis Explanation */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <h2 className="text-3xl font-bold text-center text-primary mb-12">
              {t('scientific.analysis.title')}
            </h2>
            
            <div className="prose max-w-none text-neutral-taupe leading-relaxed space-y-6">
              <p className="text-lg">
                {t('scientific.analysis.intro')}
              </p>
              
              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">
                {t('scientific.analysis.history.title')}
              </h3>
              
              <p>
                {t('scientific.analysis.history.content1')}
              </p>
              
              <p>
                {t('scientific.analysis.history.content2')}
              </p>
              
              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">
                {t('scientific.analysis.founders.title')}
              </h3>
              
              <p>
                {t('scientific.analysis.founders.content')}
              </p>
              
              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">
                {t('scientific.analysis.modern.title')}
              </h3>
              
              <p>
                {t('scientific.analysis.modern.content')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScientificEvidence;
