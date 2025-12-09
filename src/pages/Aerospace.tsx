import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PageBreadcrumb from '@/components/PageBreadcrumb';
import AerospaceHeroSection from '@/components/aerospace/AerospaceHeroSection';
import AerospaceModulesSection from '@/components/aerospace/AerospaceModulesSection';
import AerospaceCareerSection from '@/components/aerospace/AerospaceCareerSection';
import AerospaceSuccessStorySection from '@/components/aerospace/AerospaceSuccessStorySection';
import AerospaceRequirementsSection from '@/components/aerospace/AerospaceRequirementsSection';
import AerospaceWhyKCICSection from '@/components/aerospace/AerospaceWhyKCICSection';
import AerospaceFAQSection from '@/components/aerospace/AerospaceFAQSection';
import RelatedProgramsSection from '@/components/RelatedProgramsSection';

export default function Aerospace() {
  useEffect(() => {
    document.title = 'BEng (Hons) Aerospace Engineering with Placement | KCIC Pathway';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navigation />
      <main className="pt-16 md:pt-20">
        <PageBreadcrumb 
          items={[
            { label: 'Programs', href: '/programs' },
            { label: 'Aerospace Engineering' }
          ]} 
        />
        <AerospaceHeroSection />
        <AerospaceModulesSection />
        <AerospaceCareerSection />
        <AerospaceSuccessStorySection />
        <AerospaceRequirementsSection />
        <AerospaceWhyKCICSection />
        <AerospaceFAQSection />
        <RelatedProgramsSection 
          category="engineering" 
          currentSlug="beng-hons-aerospace-engineering"
          title="Other Engineering Programs"
        />
      </main>
      <Footer />
    </>
  );
}
