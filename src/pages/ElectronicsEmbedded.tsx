import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PageBreadcrumb from '@/components/PageBreadcrumb';
import ElectronicsEmbeddedHeroSection from '@/components/electronics-embedded/ElectronicsEmbeddedHeroSection';
import ElectronicsEmbeddedModulesSection from '@/components/electronics-embedded/ElectronicsEmbeddedModulesSection';
import ElectronicsEmbeddedCareerSection from '@/components/electronics-embedded/ElectronicsEmbeddedCareerSection';
import ElectronicsEmbeddedSuccessStorySection from '@/components/electronics-embedded/ElectronicsEmbeddedSuccessStorySection';
import ElectronicsEmbeddedRequirementsSection from '@/components/electronics-embedded/ElectronicsEmbeddedRequirementsSection';
import ElectronicsEmbeddedWhyKCICSection from '@/components/electronics-embedded/ElectronicsEmbeddedWhyKCICSection';
import ElectronicsEmbeddedFAQSection from '@/components/electronics-embedded/ElectronicsEmbeddedFAQSection';
import RelatedProgramsSection from '@/components/RelatedProgramsSection';

export default function ElectronicsEmbedded() {
  useEffect(() => {
    document.title = 'BEng (Hons) Electronics & Embedded Systems | KCIC Pathway';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navigation />
      <main className="pt-16 md:pt-20">
        <PageBreadcrumb 
          items={[
            { label: 'Programs', href: '/programs' },
            { label: 'Electronics & Embedded Systems' }
          ]} 
        />
        <ElectronicsEmbeddedHeroSection />
        <ElectronicsEmbeddedModulesSection />
        <ElectronicsEmbeddedCareerSection />
        <ElectronicsEmbeddedSuccessStorySection />
        <ElectronicsEmbeddedRequirementsSection />
        <ElectronicsEmbeddedWhyKCICSection />
        <ElectronicsEmbeddedFAQSection />
        <RelatedProgramsSection 
          category="engineering" 
          currentSlug="beng-hons-electronics-embedded-systems"
          title="Other Engineering Programs"
        />
      </main>
      <Footer />
    </>
  );
}
