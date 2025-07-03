import { HeroSection, PreparationSection, ConsultationPackages, WhatToExpectSection, ClientReflectionsSection } from './Consultation/index';

const Consultation = () => {
  return (
    <div className="font-montserrat">
      <HeroSection />
      <PreparationSection />
      <ConsultationPackages />
      <WhatToExpectSection />
      <ClientReflectionsSection />
    </div>
  );
};

export default Consultation;
