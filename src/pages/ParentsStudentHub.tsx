import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ParentHeroSection from '@/components/parents/ParentHeroSection';
import SafetyCampusSection from '@/components/parents/SafetyCampusSection';
import SafeTransitionSection from '@/components/parents/SafeTransitionSection';
import CareerPathwaysSection from '@/components/parents/CareerPathwaysSection';
import LifestyleUpgradeSection from '@/components/parents/LifestyleUpgradeSection';
import WhyParentsChooseKCICSection from '@/components/parents/WhyParentsChooseKCICSection';
import WorkVisaExperienceSection from '@/components/parents/WorkVisaExperienceSection';
import SmallBatchesParentSection from '@/components/parents/SmallBatchesParentSection';
import WorkIntegratedParentSection from '@/components/parents/WorkIntegratedParentSection';
import ParentFAQSection from '@/components/parents/ParentFAQSection';
import ParentTestimonialsSection from '@/components/parents/ParentTestimonialsSection';
import ParentCTASection from '@/components/parents/ParentCTASection';

export default function ParentsStudentHub() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <ParentHeroSection />
      <SmallBatchesParentSection />
      <WorkIntegratedParentSection />
      <SafetyCampusSection />
      <SafeTransitionSection />
      <CareerPathwaysSection />
      <LifestyleUpgradeSection />
      <WorkVisaExperienceSection />
      <ParentTestimonialsSection />
      <WhyParentsChooseKCICSection />
      <ParentFAQSection />
      <ParentCTASection />
      <Footer />
    </div>
  );
}
