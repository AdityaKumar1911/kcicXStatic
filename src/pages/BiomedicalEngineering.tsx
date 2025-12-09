import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PageBreadcrumb from '@/components/PageBreadcrumb';
import BiomedicalEngHeroSection from '@/components/biomedicaleng/BiomedicalEngHeroSection';
import BiomedicalEngModulesSection from '@/components/biomedicaleng/BiomedicalEngModulesSection';
import BiomedicalEngCareerSection from '@/components/biomedicaleng/BiomedicalEngCareerSection';
import BiomedicalEngSuccessStorySection from '@/components/biomedicaleng/BiomedicalEngSuccessStorySection';
import BiomedicalEngRequirementsSection from '@/components/biomedicaleng/BiomedicalEngRequirementsSection';
import BiomedicalEngWhyKCICSection from '@/components/biomedicaleng/BiomedicalEngWhyKCICSection';
import BiomedicalEngFAQSection from '@/components/biomedicaleng/BiomedicalEngFAQSection';
import RelatedProgramsSection from '@/components/RelatedProgramsSection';

export default function BiomedicalEngineering() {
  useEffect(() => {
    document.title = 'BEng (Hons) Biomedical Engineering | KCIC Pathway';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navigation />
      <main className="pt-16 md:pt-20">
        <PageBreadcrumb 
          items={[
            { label: 'Programs', href: '/programs' },
            { label: 'Biomedical Engineering' }
          ]} 
        />
        <BiomedicalEngHeroSection />
        <BiomedicalEngModulesSection />
        <BiomedicalEngCareerSection />
        <BiomedicalEngSuccessStorySection />
        <BiomedicalEngRequirementsSection />
        <BiomedicalEngWhyKCICSection />
        <BiomedicalEngFAQSection />
        <RelatedProgramsSection 
          category="engineering" 
          currentSlug="beng-hons-biomedical-engineering"
          title="Other Engineering Programs"
        />
      </main>
      <Footer />
    </>
  );
}
