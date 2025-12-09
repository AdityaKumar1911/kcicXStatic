import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PageBreadcrumb from '@/components/PageBreadcrumb';
import BiomedicalHeroSection from '@/components/biomedical/BiomedicalHeroSection';
import BiomedicalModulesSection from '@/components/biomedical/BiomedicalModulesSection';
import BiomedicalCareerSection from '@/components/biomedical/BiomedicalCareerSection';
import BiomedicalSuccessStorySection from '@/components/biomedical/BiomedicalSuccessStorySection';
import BiomedicalRequirementsSection from '@/components/biomedical/BiomedicalRequirementsSection';
import BiomedicalWhyKCICSection from '@/components/biomedical/BiomedicalWhyKCICSection';
import BiomedicalFAQSection from '@/components/biomedical/BiomedicalFAQSection';
import RelatedProgramsSection from '@/components/RelatedProgramsSection';

export default function BiomedicalScience() {
  useEffect(() => {
    document.title = 'BSc (Hons) Biomedical Science with Placement | KCIC Pathway';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navigation />
      <main className="pt-16 md:pt-20">
        <PageBreadcrumb 
          items={[
            { label: 'Programs', href: '/programs' },
            { label: 'Biomedical Science' }
          ]} 
        />
        <BiomedicalHeroSection />
        <BiomedicalModulesSection />
        <BiomedicalCareerSection />
        <BiomedicalSuccessStorySection />
        <BiomedicalRequirementsSection />
        <BiomedicalWhyKCICSection />
        <BiomedicalFAQSection />
        <RelatedProgramsSection 
          category="science" 
          currentSlug="bsc-hons-biomedical-science"
          title="Other Science & Health Programs"
        />
      </main>
      <Footer />
    </>
  );
}
