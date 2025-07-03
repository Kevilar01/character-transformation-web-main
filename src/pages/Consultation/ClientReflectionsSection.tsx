
import { Quote } from 'lucide-react';

const ClientReflectionsSection = () => {
  const reflections = [
    "For the first time, I felt truly seen—not just my behaviors, but what was underneath.",
    "The mapping session helped me make sense of patterns I've struggled with for years.",
    "This work is profound. It's more than just talking; it's about feeling and understanding on a cellular level.",
    "I've learned to be kinder to myself, and that has changed everything."
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in animation-delay-300">
          <h2 className="text-2xl sm:text-3xl font-medium text-primary mb-8 sm:mb-12">Client Reflections</h2>
          <div className="space-y-8 max-w-2xl mx-auto">
            {reflections.map((reflection, index) => (
              <blockquote key={index} className="relative p-6 bg-neutral-light/50 border-l-4 border-accent rounded-r-lg shadow-sm text-left">
                <Quote className="absolute top-2 left-2 w-8 h-8 text-accent/20 transform -translate-x-4 -translate-y-4" />
                <p className="text-sm sm:text-base text-neutral-taupe italic leading-relaxed z-10 relative">
                  {reflection}
                </p>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientReflectionsSection;
