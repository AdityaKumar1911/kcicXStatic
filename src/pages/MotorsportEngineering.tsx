import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PageBreadcrumb from '@/components/PageBreadcrumb';
import MotorsportHeroSection from '@/components/motorsport/MotorsportHeroSection';
import MotorsportModulesSection from '@/components/motorsport/MotorsportModulesSection';
import MotorsportCareerSection from '@/components/motorsport/MotorsportCareerSection';
import MotorsportSuccessStorySection from '@/components/motorsport/MotorsportSuccessStorySection';
import MotorsportRequirementsSection from '@/components/motorsport/MotorsportRequirementsSection';
import MotorsportWhyKCICSection from '@/components/motorsport/MotorsportWhyKCICSection';
import MotorsportFAQSection from '@/components/motorsport/MotorsportFAQSection';
import RelatedProgramsSection from '@/components/RelatedProgramsSection';

export default function MotorsportEngineering() {
  useEffect(() => {
    document.title = 'BEng (Hons) Motorsport Engineering | KCIC Pathway';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navigation />
      <main className="pt-16 md:pt-20">
        <PageBreadcrumb 
          items={[
            { label: 'Programs', href: '/programs' },
            { label: 'Motorsport Engineering' }
          ]} 
        />
        <MotorsportHeroSection />
        <MotorsportModulesSection />
        <MotorsportCareerSection />
        <MotorsportSuccessStorySection />
        <MotorsportRequirementsSection />
        <MotorsportWhyKCICSection />
        <MotorsportFAQSection />
        <RelatedProgramsSection 
          category="engineering" 
          currentSlug="beng-hons-motorsport-engineering"
          title="Other Engineering Programs"
        />
      </main>
      <Footer />
    </>
  );
}
