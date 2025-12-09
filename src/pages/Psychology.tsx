import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PageBreadcrumb from '@/components/PageBreadcrumb';
import PsychologyHeroSection from '@/components/psychology/PsychologyHeroSection';
import PsychologyModulesSection from '@/components/psychology/PsychologyModulesSection';
import PsychologyCareerSection from '@/components/psychology/PsychologyCareerSection';
import PsychologySuccessStorySection from '@/components/psychology/PsychologySuccessStorySection';
import PsychologyRequirementsSection from '@/components/psychology/PsychologyRequirementsSection';
import PsychologyWhyKCICSection from '@/components/psychology/PsychologyWhyKCICSection';
import PsychologyFAQSection from '@/components/psychology/PsychologyFAQSection';
import RelatedProgramsSection from '@/components/RelatedProgramsSection';

export default function Psychology() {
  useEffect(() => {
    document.title = 'BSc (Hons) Psychology with Placement | KCIC Pathway';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navigation />
      <main className="pt-16 md:pt-20">
        <PageBreadcrumb 
          items={[
            { label: 'Programs', href: '/programs' },
            { label: 'Psychology' }
          ]} 
        />
        <PsychologyHeroSection />
        <PsychologyModulesSection />
        <PsychologyCareerSection />
        <PsychologySuccessStorySection />
        <PsychologyRequirementsSection />
        <PsychologyWhyKCICSection />
        <PsychologyFAQSection />
        <RelatedProgramsSection 
          category="science" 
          currentSlug="bsc-hons-psychology"
          title="Other Science & Health Programs"
        />
      </main>
      <Footer />
    </>
  );
}
