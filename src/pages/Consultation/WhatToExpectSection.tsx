
import { CheckCircle } from 'lucide-react';

const WhatToExpectSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-neutral-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in animation-delay-300">
          <h2 className="text-2xl sm:text-3xl font-medium text-primary mb-8 sm:mb-12">What You Can Expect</h2>
          <div className="text-neutral-taupe leading-relaxed max-w-3xl mx-auto text-left sm:text-center">
            <p className="mb-8 text-base sm:text-lg">
              Each consultation is a one-on-one guided experience where we explore your unique psychological and physical patterns through the Character Analysis Mapping Method.
            </p>
            <p className="mb-6 text-lg sm:text-xl font-medium text-primary">You'll gain:</p>
            <ul className="space-y-4 inline-block text-left text-base sm:text-lg">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span>A deeper understanding of your emotional and behavioral patterns</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span>Insight into your body-mind connection</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span>Tools to support personal transformation and self-awareness</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatToExpectSection;
