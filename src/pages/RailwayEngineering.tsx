import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PageBreadcrumb from '@/components/PageBreadcrumb';
import RailwayHeroSection from '@/components/railway/RailwayHeroSection';
import RailwayModulesSection from '@/components/railway/RailwayModulesSection';
import RailwayCareerSection from '@/components/railway/RailwayCareerSection';
import RailwaySuccessStorySection from '@/components/railway/RailwaySuccessStorySection';
import RailwayRequirementsSection from '@/components/railway/RailwayRequirementsSection';
import RailwayWhyKCICSection from '@/components/railway/RailwayWhyKCICSection';
import RailwayFAQSection from '@/components/railway/RailwayFAQSection';
import RelatedProgramsSection from '@/components/RelatedProgramsSection';

export default function RailwayEngineering() {
  useEffect(() => {
    document.title = 'BEng (Hons) Electrical Engineering with Railway Engineering | KCIC Pathway';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navigation />
      <main className="pt-16 md:pt-20">
        <PageBreadcrumb 
          items={[
            { label: 'Programs', href: '/programs' },
            { label: 'Railway Engineering' }
          ]} 
        />
        <RailwayHeroSection />
        <RailwayModulesSection />
        <RailwayCareerSection />
        <RailwaySuccessStorySection />
        <RailwayRequirementsSection />
        <RailwayWhyKCICSection />
        <RailwayFAQSection />
        <RelatedProgramsSection 
          category="engineering" 
          currentSlug="beng-hons-electrical-railway-engineering"
          title="Other Engineering Programs"
        />
      </main>
      <Footer />
    </>
  );
}
