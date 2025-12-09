import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PageBreadcrumb from '@/components/PageBreadcrumb';
import AIHeroSection from '@/components/ai/AIHeroSection';
import AIModulesSection from '@/components/ai/AIModulesSection';
import AICareerSection from '@/components/ai/AICareerSection';
import AISuccessStorySection from '@/components/ai/AISuccessStorySection';
import AIRequirementsSection from '@/components/ai/AIRequirementsSection';
import AIWhyKCICSection from '@/components/ai/AIWhyKCICSection';
import AIFAQSection from '@/components/ai/AIFAQSection';
import RelatedProgramsSection from '@/components/RelatedProgramsSection';

export default function ArtificialIntelligence() {
  useEffect(() => {
    document.title = 'BEng (Hons) Artificial Intelligence with Placement | KCIC Pathway';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navigation />
      <main className="pt-16 md:pt-20">
        <PageBreadcrumb 
          items={[
            { label: 'Programs', href: '/programs' },
            { label: 'Artificial Intelligence' }
          ]} 
        />
        <AIHeroSection />
        <AIModulesSection />
        <AICareerSection />
        <AISuccessStorySection />
        <AIRequirementsSection />
        <AIWhyKCICSection />
        <AIFAQSection />
        <RelatedProgramsSection 
          category="technology" 
          currentSlug="beng-hons-artificial-intelligence-with-placement"
          title="Other Technology Programs"
        />
      </main>
      <Footer />
    </>
  );
}
