
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const PreparationSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-medium text-primary mb-8">
            How to Prepare for Your Character Analysis Session
          </h2>
          <p className="text-lg text-neutral-taupe mb-12">
            ✨ To get the most accurate and transformative insights during your Character Analysis, please follow these simple steps:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Personal Preparation */}
          <Card className="bg-gradient-to-br from-neutral-light/20 to-white border border-gray-100 shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl text-primary flex items-center gap-2">
                🪞 Your Personal Preparation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-neutral-taupe">We will observe 6 areas of your body: head, shoulders, chest, abdomen, pelvis, and legs.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-neutral-taupe">Do not wear makeup on the day of your session.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-neutral-taupe">Choose a calm moment without time pressure so you can feel present and relaxed.</span>
              </div>
            </CardContent>
          </Card>

          {/* What to Wear */}
          <Card className="bg-gradient-to-br from-neutral-light/20 to-white border border-gray-100 shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl text-primary flex items-center gap-2">
                👕 What to Wear
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-neutral-taupe">Wear light-coloured clothes.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-neutral-taupe">Choose tighter-fitting outfits that clearly show your body shape.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-neutral-taupe">Gym wear is perfect — tank top or sports bra, shorts or leggings.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-neutral-taupe">Avoid clothes with prints or stripes, as they can interfere with observing your natural lines.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-neutral-taupe">Bare feet are recommended during the session.</span>
              </div>
            </CardContent>
          </Card>

          {/* Environment Preparation */}
          <Card className="bg-gradient-to-br from-neutral-light/20 to-white border border-gray-100 shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl text-primary flex items-center gap-2">
                🌞 Preparing Your Environment (if online)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-neutral-taupe">If possible, choose a location with <strong>natural lighting</strong>, facing a window to improve visibility.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-neutral-taupe">On rainy or low-light days, ensure you have enough light and <strong>avoid shadows on your body</strong>.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-neutral-taupe">Make sure your camera shows your full body from head to feet when you stand back.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-neutral-taupe">Position your camera at waist-to-chest height for a straight, clear angle.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-neutral-taupe">Test your internet connection beforehand and ensure you'll be in a quiet place without interruptions.</span>
              </div>
            </CardContent>
          </Card>

          {/* Online Session Access */}
          <Card className="bg-gradient-to-br from-neutral-light/20 to-white border border-gray-100 shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl text-primary flex items-center gap-2">
                💻 Accessing Your Online Session
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-neutral-taupe">If your session is on your <strong>computer</strong>, we will use <strong>Zoom</strong>.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-neutral-taupe">If you are on your <strong>phone</strong>, we will connect via the <strong>Google Meet app</strong> — please install it in advance.</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Final Notes */}
        <div className="mt-12 bg-gradient-to-r from-accent/5 to-primary/5 border-l-4 border-accent rounded-r-lg p-6">
          <h3 className="text-lg font-semibold text-primary mb-4">📝 Final Notes</h3>
          <ul className="space-y-2 text-neutral-taupe mb-4">
            <li>• Treat this session as a sacred moment of self-discovery; arrive with an open heart and mind.</li>
            <li>• Keep a notebook nearby if you'd like to write down insights after your session.</li>
          </ul>
          <div className="bg-white/50 rounded-lg p-4 border-l-4 border-primary">
            <p className="text-neutral-taupe italic">
              These preparations ensure a precise, powerful reading of your body's emotional map — giving you the most from your Character Analysis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreparationSection;
