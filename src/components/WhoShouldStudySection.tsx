import { Card, CardContent } from '@/components/ui/card';
import { Users, Globe, TrendingUp } from 'lucide-react';
import Layout from './Layout';
import { useHapticFeedback } from '@/hooks/useHapticFeedback';
import { SwipeIndicator } from './SwipeIndicator';
import { useRef } from 'react';

export default function WhoShouldStudySection() {
  const { triggerHaptic } = useHapticFeedback();
  const scrollRef = useRef<HTMLDivElement>(null);

  const profiles = [
    {
      icon: Users,
      title: '1:1 Mentoring',
      description: 'Studying abroad means new way of learning, not just the traditional memorising and writing exams. Its about independent research based assignments and course work. At KCIC we only take 30 students in a class to provide individual support to learners to succeed.',
      iconBg: 'bg-[#B99750]'
    },
    {
      icon: Globe,
      title: 'Study Abroad',
      description: 'For families who want their child to study overseas, but in a smarter and more affordable way. Students begin their first years at KCIC and then transfer abroad to complete the final stage of the degree — saving up to 60% while earning the same international qualification as students who study all three or four years abroad.',
      iconBg: 'bg-[#0B1B3A]'
    },
    {
      icon: TrendingUp,
      title: 'High Paying Career',
      description: 'Parents who wants to give an global exposure to the child with high paying careers that is listed on the critical shortage skills. KCIC is all about developing skills in critical shortage occupations.',
      iconBg: 'bg-[#B99750]'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-[#FAF3E0] to-white">
      <Layout>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#0B1B3A]">
            Who Should Study at KCIC?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover if KCIC is the right choice for your educational journey
          </p>
        </div>

        {/* Mobile: Swipeable Horizontal Scroll */}
        <div className="md:hidden -mx-4 px-4">
          <div 
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 scroll-smooth"
            style={{
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {profiles.map((profile, index) => {
              const Icon = profile.icon;
              return (
                <div
                  key={index}
                  className="flex-shrink-0 w-[85vw] snap-center"
                  onTouchStart={() => triggerHaptic('light')}
                >
                  <Card className="h-full group hover:shadow-xl transition-all duration-300 border-2 border-[#B99750]/20 hover:border-[#B99750] bg-white overflow-hidden">
                    <div className="h-3 bg-gradient-to-r from-[#0B1B3A] via-[#B99750] to-[#0B1B3A]" />
                    <CardContent className="p-6">
                      <div className={`inline-flex p-4 rounded-xl ${profile.iconBg} mb-4`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-[#0B1B3A] mb-3">
                        {profile.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {profile.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
          <SwipeIndicator 
            totalItems={profiles.length} 
            scrollContainerRef={scrollRef} 
            sectionId="who-should-study" 
          />
        </div>

        {/* Desktop: Grid Layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {profiles.map((profile, index) => {
            const Icon = profile.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-2 border-[#B99750]/20 hover:border-[#B99750] bg-white overflow-hidden"
              >
                <div className="h-3 bg-gradient-to-r from-[#0B1B3A] via-[#B99750] to-[#0B1B3A]" />
                <CardContent className="p-8">
                  <div className={`inline-flex p-4 rounded-xl ${profile.iconBg} mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0B1B3A] mb-4">
                    {profile.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {profile.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Layout>
    </section>
  );
}
