
import { Quote } from 'lucide-react';

const PathSection = () => {
  return (
    <section className="relative py-20 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-elegante text-primary mb-4">
            Why I Chose This Path
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </div>
        
        {/* Main Content */}
        <div className="animate-fade-in space-y-12" style={{ animationDelay: '0.2s' }}>
          {/* Opening Quote */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
              <Quote className="h-8 w-8 text-accent" />
            </div>
            <p className="text-2xl sm:text-3xl text-accent font-medium italic leading-relaxed">
              "Because clarity didn't come from fixing myself… It came from remembering who I already was."
            </p>
          </div>
          
          {/* Story Content */}
          <div className="space-y-8 text-lg leading-relaxed text-neutral-taupe">
            <p>
              For years, I was searching — not just for tools or answers — but for something that could finally explain <span className="text-accent font-medium">why I felt so disconnected from myself.</span> I looked confident on the outside, but deep down, I felt small. Inferior. Lost. Unworthy. Like I was always one step away from being "good enough"… but never quite there.
            </p>
            
            <p>
              I was capable — but I couldn't see it. I had gifts — but I couldn't access them. Because I didn't yet know how to <span className="text-primary font-medium">accept who I truly was.</span>
            </p>
            
            {/* Transformation Moment */}
            <div className="my-12 py-8 px-8 bg-gradient-to-r from-accent/5 to-primary/5 rounded-lg border-l-4 border-accent">
              <div className="text-center space-y-2">
                <p className="text-2xl font-semibold text-accent">
                  Then Character Analysis found me.
                </p>
                <p className="text-2xl font-semibold text-primary">
                  And everything changed.
                </p>
              </div>
            </div>
            
            <p>
              For the first time, I saw myself with clarity — not as broken, but as someone <span className="text-secondary font-medium">designed a different way</span>, with specific strengths, sensitivities, and emotional intelligence that had been buried under years of comparison, judgment, and self-doubt.
            </p>
            
            <p>
              This tool didn't just describe me. <strong className="text-primary">It revealed me.</strong> And in that moment, something inside shifted — from shame to understanding, from resistance to motivation, from fear to direction.
            </p>
            
            <p>
              Today, what moves me is not performance or perfection — but <span className="font-medium text-accent">connection</span>, <span className="font-medium text-primary">truth</span>, and <span className="font-medium text-secondary">authenticity</span>. These aren't just values. They're how I choose to live. And that's why I chose this path: Because it gave meaning to my pain, and purpose to my journey.
            </p>
          </div>
          
          {/* Closing Statement */}
          <div className="text-center pt-8 border-t border-gray-200">
            <p className="text-xl font-medium text-primary mb-6">
              And now, I share it — so you can see yourself the way I finally saw me.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
              <span className="px-4 py-2 bg-accent/10 text-accent rounded-full border border-accent/20">
                Clear
              </span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full border border-primary/20">
                Whole
              </span>
              <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-full border border-secondary/20">
                Already enough
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PathSection;
