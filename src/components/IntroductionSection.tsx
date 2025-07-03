
import { Link } from "react-router-dom";

const IntroductionSection = () => {
  return (
    <section className="py-16 sm:py-20 px-4 bg-white/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-elegante text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-8">
          Character Transformation Method
        </h2>
        <p className="font-montserrat text-lg sm:text-xl lg:text-2xl leading-relaxed text-neutral-taupe mb-8 max-w-3xl mx-auto">
          I've developed a body-mind-based character transformation method rooted in the belief that lasting change happens with the right tools, insight, and compassionate support.
        </p>
        <p className="font-montserrat text-base sm:text-lg lg:text-xl leading-relaxed text-neutral-taupe mb-10 max-w-3xl mx-auto">
          What began as a personal mission has grown into a method that helps people understand themselves and shift long-standing patterns. Guided by ongoing study and practice, my work continues to center on helping others feel more connected, empowered, and aligned with their true selves.
        </p>
        <Link to="/about">
          <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-montserrat font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
            Learn More About My Journey
          </button>
        </Link>
      </div>
    </section>
  );
};

export default IntroductionSection;
