import Navigation from './Navigation';
import HeroSection from './HeroSection';
import PartnersScrollSection from './PartnersScrollSection';
import IntroductionSection from './IntroductionSection';
import HowItWorksSection from './HowItWorksSection';
import ManifestoSection from './ManifestoSection';
import CEOSection from './CEOSection';
import ProgramsSection from './ProgramsSection';
import SignatureProgramsSection from './SignatureProgramsSection';
import PartnerUniversities from './PartnerUniversities';
import { CurriculumCollaborationSection } from './CurriculumCollaborationSection';
import TestimonialsSection from './TestimonialsSection';
import FAQSection from './FAQSection';
import Footer from './Footer';
import WhoShouldStudySection from './WhoShouldStudySection';
import MobileParallaxSection from './MobileParallaxSection';



export default function AppLayout() {
  return (
    <div className="min-h-screen">
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>
      
      <Navigation />
      
      <main id="main-content">
        <MobileParallaxSection speed={0.3}>
          <HeroSection />
        </MobileParallaxSection>
        
        <MobileParallaxSection speed={0.5}>
          <PartnersScrollSection />
        </MobileParallaxSection>
        
        <MobileParallaxSection speed={0.4}>
          <IntroductionSection />
        </MobileParallaxSection>
        
        <MobileParallaxSection speed={0.6}>
          <WhoShouldStudySection />
        </MobileParallaxSection>
        
        <MobileParallaxSection speed={0.35}>
          <ProgramsSection />
        </MobileParallaxSection>

        <MobileParallaxSection speed={0.55}>
          <SignatureProgramsSection />
        </MobileParallaxSection>
        
        <MobileParallaxSection speed={0.45}>
          <HowItWorksSection />
        </MobileParallaxSection>
        
        <MobileParallaxSection speed={0.5}>
          <ManifestoSection />
        </MobileParallaxSection>

        <MobileParallaxSection speed={0.4}>
          <CEOSection />
        </MobileParallaxSection>
        
        <MobileParallaxSection speed={0.6}>
          <PartnerUniversities />
        </MobileParallaxSection>
        
        <MobileParallaxSection speed={0.35}>
          <CurriculumCollaborationSection />
        </MobileParallaxSection>
        
        <MobileParallaxSection speed={0.5}>
          <TestimonialsSection />
        </MobileParallaxSection>
        
        <MobileParallaxSection speed={0.45}>
          <FAQSection />
        </MobileParallaxSection>
      </main>

      <Footer />
    </div>
  );
}

