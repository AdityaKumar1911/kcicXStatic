import React, { useState, useRef } from 'react';
import { GraduationCap, BookOpen, Plane, Building2, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Layout from './Layout';

const stages = [
  { number: 1, icon: BookOpen, title: "Complete 120 Bachelor's credits at KCIC", shortTitle: "Year 1", duration: "1 Year", description: "Begin your transformative journey with world-class education", points: ["Complete Year 1 of your degree at KCIC Kenya", "Experience innovative teaching methodologies", "Build strong academic foundations", "Develop global perspectives"] },
  { number: 2, icon: Plane, title: "Study Year 2 in KCIC / Transfer abroad", shortTitle: "Year 2", duration: "Seamless Transition", description: "Continue your studies at KCIC or move to your dream destination with full support", points: ["Option to complete Year 2 at KCIC", "Or transfer to partner university abroad", "Guaranteed credit transfer", "Comprehensive relocation support"] },
  { number: 3, icon: GraduationCap, title: "Graduate with Honors", shortTitle: "Graduate", duration: "3-4 Years Total", description: "Earn your internationally recognized degree", points: ["Obtain degree from prestigious university", "Global recognition and accreditation", "Enhanced career opportunities", "International alumni network"] },
  { number: 4, icon: Building2, title: "Post-Study Work", shortTitle: "Work", duration: "2-3 Years", description: "Launch your international career", points: ["Secure post-study work visa", "Gain valuable international experience", "Build professional network", "Competitive salary opportunities"] },
  { number: 5, icon: MapPin, title: "Permanent Residency", shortTitle: "Residency", duration: "Long-term Goal", description: "Establish your future in your chosen country", points: ["Pathway to permanent residency", "Settle in your destination country", "Long-term career growth", "Global citizenship opportunities"] }
];

const HowItWorksSection: React.FC = () => {
  const [activeStage, setActiveStage] = useState(0);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const handleNext = () => { if (activeStage < stages.length - 1) setActiveStage(prev => prev + 1); };
  const handlePrev = () => { if (activeStage > 0) setActiveStage(prev => prev - 1); };

  const handleTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchMove = (e: React.TouchEvent) => { touchEndX.current = e.touches[0].clientX; };
  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) { diff > 0 ? handleNext() : handlePrev(); }
  };

  const currentStage = stages[activeStage];
  const Icon = currentStage.icon;

  return (
    <section className="py-12 md:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-amber-50 overflow-hidden">
      <Layout>
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-[#0B1B3A]">Your Journey to Global Success</h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">A clear 5-stage pathway from KCIC to a global career success</p>
        </div>

        {/* Mobile Icons Timeline */}
        <div className="md:hidden mb-6 px-2">
          <div className="relative">
            <div className="absolute top-5 left-[10%] right-[10%] h-0.5 bg-gray-200">
              <div className="h-full bg-gradient-to-r from-[#0B1B3A] to-[#B99750] transition-all duration-500" style={{ width: `${(activeStage / (stages.length - 1)) * 100}%` }} />
            </div>
            <div className="relative flex justify-between px-2">
              {stages.map((stage, index) => {
                const StageIcon = stage.icon;
                const isActive = index === activeStage;
                const isPast = index < activeStage;
                return (
                  <button key={index} onClick={() => setActiveStage(index)} className="flex flex-col items-center touch-manipulation" style={{ width: '18%' }}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isActive ? 'bg-gradient-to-br from-[#0B1B3A] to-[#1a2f5a] scale-110 shadow-lg' : isPast ? 'bg-[#B99750]' : 'bg-white border-2 border-gray-300'}`}>
                      <StageIcon className={`w-5 h-5 ${isActive || isPast ? 'text-white' : 'text-gray-400'}`} />
                    </div>
                    <span className={`mt-1.5 text-[10px] font-medium text-center leading-tight ${isActive ? 'text-[#0B1B3A] font-bold' : 'text-gray-500'}`}>{stage.shortTitle}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Desktop Progress Timeline */}
        <div className="hidden md:block mb-12 lg:mb-16">
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute top-7 left-8 right-8 h-1 bg-gray-200">
              <div className="h-full bg-gradient-to-r from-[#0B1B3A] to-[#B99750] transition-all duration-500" style={{ width: `${(activeStage / (stages.length - 1)) * 100}%` }} />
            </div>
            <div className="relative flex justify-between">
              {stages.map((stage, index) => {
                const StageIcon = stage.icon;
                const isActive = index === activeStage;
                const isPast = index < activeStage;
                return (
                  <button key={index} onClick={() => setActiveStage(index)} className="flex flex-col items-center group">
                    <div className={`w-14 h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center transition-all duration-300 ${isActive ? 'bg-gradient-to-br from-[#0B1B3A] to-[#1a2f5a] scale-125 shadow-lg' : isPast ? 'bg-[#B99750]' : 'bg-white border-2 border-gray-300'}`}>
                      <StageIcon className={`w-6 h-6 lg:w-7 lg:h-7 ${isActive || isPast ? 'text-white' : 'text-gray-400'}`} />
                    </div>
                    <span className={`mt-3 text-xs lg:text-sm font-medium text-center transition-colors ${isActive ? 'text-[#0B1B3A] font-bold' : 'text-gray-500'}`}>{stage.shortTitle}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Stage Content Card */}
        <div className="max-w-4xl mx-auto">
          <div onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd} className="bg-white rounded-xl md:rounded-2xl lg:rounded-3xl shadow-lg md:shadow-xl lg:shadow-2xl overflow-hidden">
            <div className="h-1.5 md:h-2 lg:h-3 bg-gradient-to-r from-[#0B1B3A] via-[#B99750] to-[#0B1B3A]"></div>
            <div className="bg-gradient-to-r from-[#0B1B3A] to-[#1a2f5a] p-5 sm:p-6 md:p-8 text-white">
              <div className="flex items-start justify-between mb-3 md:mb-4 gap-3">
                <div className="flex items-start gap-3 md:gap-4 flex-1 min-w-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex-shrink-0 rounded-xl md:rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs sm:text-sm text-[#B99750] font-semibold mb-1">Stage {currentStage.number} of 5</div>
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-tight">{currentStage.title}</h3>
                  </div>
                </div>
                <div className="px-3 py-1.5 md:px-4 md:py-2 bg-white/20 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap flex-shrink-0">{currentStage.duration}</div>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-blue-100 leading-relaxed">{currentStage.description}</p>
            </div>
            <div className="p-5 sm:p-6 md:p-8">
              <div className="grid gap-3 md:gap-4 mb-6 md:mb-8">
                {currentStage.points.map((point, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 sm:p-4 bg-gradient-to-br from-blue-50 to-amber-50 rounded-lg md:rounded-xl hover:shadow-md transition-all">
                    <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-[#0B1B3A] to-[#B99750] flex items-center justify-center text-white text-xs sm:text-sm font-bold">{i + 1}</div>
                    <span className="text-sm sm:text-base text-gray-700 leading-relaxed pt-0.5">{point}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between pt-4 md:pt-6 border-t gap-3">
                <Button onClick={handlePrev} variant="outline" size="sm" className="gap-1 md:gap-2 text-xs sm:text-sm h-11 md:h-10 px-4 touch-manipulation min-w-[80px] sm:min-w-[100px]" disabled={activeStage === 0}><ChevronLeft className="w-4 h-4" /><span>Previous</span></Button>
                <div className="text-xs sm:text-sm text-gray-500 font-medium">{activeStage + 1} / {stages.length}</div>
                <Button onClick={handleNext} size="sm" className="gap-1 md:gap-2 text-xs sm:text-sm h-11 md:h-10 px-4 bg-gradient-to-r from-[#0B1B3A] to-[#1a2f5a] touch-manipulation min-w-[80px] sm:min-w-[100px]" disabled={activeStage === stages.length - 1}><span>Next</span><ChevronRight className="w-4 h-4" /></Button>
              </div>
            </div>
          </div>
          <p className="text-center text-xs text-gray-500 mt-4 md:hidden">Swipe left or right to navigate</p>
        </div>

        <div className="mt-8 md:mt-12 lg:mt-16 text-center">
          <Button size="lg" className="bg-[#B99750] hover:bg-[#a08640] text-white px-6 sm:px-8 py-6 text-base sm:text-lg w-full sm:w-auto touch-manipulation min-h-[48px]">Start Your Journey Today</Button>
        </div>
      </Layout>
    </section>
  );
};

export default HowItWorksSection;
