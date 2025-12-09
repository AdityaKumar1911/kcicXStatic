import ParentHeroSection from '@/components/parents/ParentHeroSection';
import WhyParentsChooseKCICSection from '@/components/parents/WhyParentsChooseKCICSection';
import SmallBatchesParentSection from '@/components/parents/SmallBatchesParentSection';
import WorkIntegratedParentSection from '@/components/parents/WorkIntegratedParentSection';
import SafetyCampusSection from '@/components/parents/SafetyCampusSection';
import SafeTransitionSection from '@/components/parents/SafeTransitionSection';
import CareerPathwaysSection from '@/components/parents/CareerPathwaysSection';
import LifestyleUpgradeSection from '@/components/parents/LifestyleUpgradeSection';
import ParentFAQSection from '@/components/parents/ParentFAQSection';
import ParentCTASection from '@/components/parents/ParentCTASection';

export const metadata = {
  title: 'Parents Hub | KCIC - Safe Campus & Global Education',
  description: 'Learn why parents choose KCIC for their children. Safe campus, small batches, guaranteed transfer abroad, and career-focused education.',
};

export default function ParentsPage() {
  return (
    <div className="min-h-screen bg-white">
      <ParentHeroSection />
      <WhyParentsChooseKCICSection />
      <SmallBatchesParentSection />
      <WorkIntegratedParentSection />
      <SafetyCampusSection />
      <SafeTransitionSection />
      <CareerPathwaysSection />
      <LifestyleUpgradeSection />
      <ParentFAQSection />
      <ParentCTASection />
    </div>
  );
}

