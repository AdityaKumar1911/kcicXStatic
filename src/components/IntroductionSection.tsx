import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Globe, Award, FileCheck } from 'lucide-react';
import { useHapticFeedback } from '@/hooks/useHapticFeedback';
import { SwipeIndicator } from '@/components/SwipeIndicator';
import Layout from './Layout';

export default function IntroductionSection() {
  const haptic = useHapticFeedback();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const reasons = [
    {
      icon: Users,
      title: "Only 30 Students per Course",
      description: "KCIC does not mass-produce graduates. We accept only 30 students in each course, ensuring personalised attention, academic success, and guaranteed access to limited final-year seats abroad.",
    },
    {
      icon: Globe,
      title: "Compulsory Final Year Abroad",
      description: "Unlike other colleges that send only a few students overseas, KCIC follows a compulsory final-year abroad model. Every student studies an international curriculum from Day One.",
    },
    {
      icon: Award,
      title: "The Only Smart Alternative to Studying Abroad",
      description: "At 17, your child doesn't need to travel 10,000 miles without understanding the international system. KCIC offers the only global alternative in this region.",
    },
    {
      icon: FileCheck,
      title: "Same Degree. Same Visa.",
      description: "KCIC students earn the exact same degree as students who study all three or four years abroad. There is no difference in degree type, recognition, or visa outcomes.",
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-[#FAF3E0] via-white to-[#FAF3E0]">
      <Layout>
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#0B1B3A]">
            Why Choose KCIC
          </h2>
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 border-[#B99750]/20 hover:border-[#B99750] bg-white overflow-hidden" onClick={() => haptic.light()}>
                <div className="h-3 bg-gradient-to-r from-[#0B1B3A] via-[#B99750] to-[#0B1B3A]" />
                <CardContent className="p-6">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-[#0B1B3A] to-[#B99750] mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0B1B3A] mb-3">{reason.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Mobile Swipeable Cards */}
        <div className="md:hidden -mx-4 px-4">
          <div ref={scrollContainerRef} className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4" style={{ WebkitOverflowScrolling: 'touch' }}>
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <Card key={index} className="flex-shrink-0 w-[85vw] snap-center border-2 border-[#B99750]/20 bg-white overflow-hidden shadow-lg" onClick={() => haptic.light()}>
                  <div className="h-3 bg-gradient-to-r from-[#0B1B3A] via-[#B99750] to-[#0B1B3A]" />
                  <CardContent className="p-6">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-[#0B1B3A] to-[#B99750] mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-[#0B1B3A] mb-3">{reason.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <SwipeIndicator totalItems={reasons.length} scrollContainerRef={scrollContainerRef} sectionId="why-choose-kcic" />
        </div>
      </Layout>
    </section>
  );
}
