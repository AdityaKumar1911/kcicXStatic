import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MobileParallaxSection from '@/components/MobileParallaxSection';
import StudentHeroSection from '@/components/students/StudentHeroSection';
import StudentLifeSection from '@/components/students/StudentLifeSection';
import CareerOutcomesSection from '@/components/students/CareerOutcomesSection';
import StudentFAQSection from '@/components/students/StudentFAQSection';
import StudentCTASection from '@/components/students/StudentCTASection';
import AdditionalReasonsSection from '@/components/students/AdditionalReasonsSection';
import SmallBatchesStudentSection from '@/components/students/SmallBatchesStudentSection';
import WorkIntegratedStudentSection from '@/components/students/WorkIntegratedStudentSection';

export default function Students() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <MobileParallaxSection speed={0.3}><StudentHeroSection /></MobileParallaxSection>
      <MobileParallaxSection speed={0.5}><SmallBatchesStudentSection /></MobileParallaxSection>
      <MobileParallaxSection speed={0.4}><WorkIntegratedStudentSection /></MobileParallaxSection>
      <MobileParallaxSection speed={0.6}><StudentLifeSection /></MobileParallaxSection>
      <MobileParallaxSection speed={0.45}><CareerOutcomesSection /></MobileParallaxSection>
      <MobileParallaxSection speed={0.5}><AdditionalReasonsSection /></MobileParallaxSection>
      <MobileParallaxSection speed={0.35}><StudentFAQSection /></MobileParallaxSection>
      <MobileParallaxSection speed={0.4}><StudentCTASection /></MobileParallaxSection>
      <Footer />
    </div>
  );
}

