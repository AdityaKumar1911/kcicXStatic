import { useEffect } from 'react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageBreadcrumb from '@/components/PageBreadcrumb';
import ComputerSystemsHeroSection from "@/components/computer-systems/ComputerSystemsHeroSection";
import ComputerSystemsModulesSection from "@/components/computer-systems/ComputerSystemsModulesSection";
import ComputerSystemsCareerSection from "@/components/computer-systems/ComputerSystemsCareerSection";
import ComputerSystemsSuccessStorySection from "@/components/computer-systems/ComputerSystemsSuccessStorySection";
import ComputerSystemsRequirementsSection from "@/components/computer-systems/ComputerSystemsRequirementsSection";
import ComputerSystemsWhyKCICSection from "@/components/computer-systems/ComputerSystemsWhyKCICSection";
import ComputerSystemsFAQSection from "@/components/computer-systems/ComputerSystemsFAQSection";
import RelatedProgramsSection from '@/components/RelatedProgramsSection';

export default function ComputerSystems() {
  useEffect(() => {
    document.title = 'BEng (Hons) Computer Systems Engineering | KCIC Pathway';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navigation />
      <main className="pt-16 md:pt-20">
        <PageBreadcrumb 
          items={[
            { label: 'Programs', href: '/programs' },
            { label: 'Computer Systems Engineering' }
          ]} 
        />
        <ComputerSystemsHeroSection />
        <ComputerSystemsModulesSection />
        <ComputerSystemsCareerSection />
        <ComputerSystemsSuccessStorySection />
        <ComputerSystemsRequirementsSection />
        <ComputerSystemsWhyKCICSection />
        <ComputerSystemsFAQSection />
        <RelatedProgramsSection 
          category="technology" 
          currentSlug="beng-hons-computer-systems-engineering"
          title="Other Technology Programs"
        />
      </main>
      <Footer />
    </>
  );
}
