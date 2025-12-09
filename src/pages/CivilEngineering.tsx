import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PageBreadcrumb from '@/components/PageBreadcrumb';
import CivilHeroSection from '@/components/civil/CivilHeroSection';
import CivilModulesSection from '@/components/civil/CivilModulesSection';
import CivilCareerSection from '@/components/civil/CivilCareerSection';
import CivilSuccessStorySection from '@/components/civil/CivilSuccessStorySection';
import CivilRequirementsSection from '@/components/civil/CivilRequirementsSection';
import CivilWhyKCICSection from '@/components/civil/CivilWhyKCICSection';
import CivilFAQSection from '@/components/civil/CivilFAQSection';
import RelatedProgramsSection from '@/components/RelatedProgramsSection';

export default function CivilEngineering() {
  useEffect(() => {
    document.title = 'BEng (Hons) Civil Engineering | KCIC Pathway';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navigation />
      <main className="pt-16 md:pt-20">
        <PageBreadcrumb 
          items={[
            { label: 'Programs', href: '/programs' },
            { label: 'Civil Engineering' }
          ]} 
        />
        <CivilHeroSection />
        <CivilModulesSection />
        <CivilCareerSection />
        <CivilSuccessStorySection />
        <CivilRequirementsSection />
        <CivilWhyKCICSection />
        <CivilFAQSection />
        <RelatedProgramsSection 
          category="engineering" 
          currentSlug="beng-hons-civil-engineering"
          title="Other Engineering Programs"
        />
      </main>
      <Footer />
    </>
  );
}
