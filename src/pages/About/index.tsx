
import HeroSection from './HeroSection';
import MissionSection from './MissionSection';
import StorySection from './StorySection';
import PathSection from './PathSection';
import ValuesSection from './ValuesSection';

const About = () => {
  return (
    <div className="font-montserrat overflow-hidden">
      <HeroSection />
      <MissionSection />
      <StorySection />
      <PathSection />
      <ValuesSection />
    </div>
  );
};

export default About;
