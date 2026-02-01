import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
// TODO: Uncomment when Dr. Im has guides ready
// import { ResourcesSection } from '@/components/sections/ResourcesSection';
import { EngagementsSection } from '@/components/sections/EngagementsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        {/* TODO: Uncomment when Dr. Im has guides ready
        <ResourcesSection />
        */}
        <EngagementsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
