import { useEffect } from 'react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageBreadcrumb from '@/components/PageBreadcrumb';
import ElectricalSemiconductorHeroSection from "@/components/electrical-semiconductor/ElectricalSemiconductorHeroSection";
import ElectricalSemiconductorModulesSection from "@/components/electrical-semiconductor/ElectricalSemiconductorModulesSection";
import ElectricalSemiconductorCareerSection from "@/components/electrical-semiconductor/ElectricalSemiconductorCareerSection";
import ElectricalSemiconductorSuccessStorySection from "@/components/electrical-semiconductor/ElectricalSemiconductorSuccessStorySection";
import ElectricalSemiconductorRequirementsSection from "@/components/electrical-semiconductor/ElectricalSemiconductorRequirementsSection";
import ElectricalSemiconductorWhyKCICSection from "@/components/electrical-semiconductor/ElectricalSemiconductorWhyKCICSection";
import ElectricalSemiconductorFAQSection from "@/components/electrical-semiconductor/ElectricalSemiconductorFAQSection";
import RelatedProgramsSection from '@/components/RelatedProgramsSection';

export default function ElectricalSemiconductor() {
  useEffect(() => {
    document.title = 'BEng (Hons) Electrical & Electronics + Semiconductor Technology | KCIC Pathway';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navigation />
      <main className="pt-16 md:pt-20">
        <PageBreadcrumb 
          items={[
            { label: 'Programs', href: '/programs' },
            { label: 'Electrical & Semiconductor' }
          ]} 
        />
        <ElectricalSemiconductorHeroSection />
        <ElectricalSemiconductorModulesSection />
        <ElectricalSemiconductorCareerSection />
        <ElectricalSemiconductorSuccessStorySection />
        <ElectricalSemiconductorRequirementsSection />
        <ElectricalSemiconductorWhyKCICSection />
        <ElectricalSemiconductorFAQSection />
        <RelatedProgramsSection 
          category="engineering" 
          currentSlug="beng-hons-electrical-electronics-semiconductor"
          title="Other Engineering Programs"
        />
      </main>
      <Footer />
    </>
  );
}
