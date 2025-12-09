import { Check, X, ArrowRight, DollarSign, Home, GraduationCap, Users, Shield } from 'lucide-react';
import { Button } from './ui/button';
import { SwipeIndicator } from './SwipeIndicator';
import { useRef } from 'react';


const ComparisonSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: DollarSign,
      category: "Cost Savings",
      direct: "Pay full international tuition fees for 3-4 years",
      kcic: "Save up to 80% on international tuition fees per year",
      highlight: "Save $50,000+"
    },
    {
      icon: Home,
      category: "Living Expenses",
      direct: "3-4 years of expensive overseas living costs",
      kcic: "1-2 years local costs, then 2 years abroad",
      highlight: "Affordable Start"
    },
    {
      icon: GraduationCap,
      category: "Learning Transition",
      direct: "Immediate immersion into unfamiliar education system",
      kcic: "Gradual transition with familiar support structure",
      highlight: "Smooth Adaptation"
    },
    {
      icon: Users,
      category: "Cultural Support",
      direct: "Navigate cultural differences independently",
      kcic: "Travel with your class and build lasting friendships",
      highlight: "Peer Network"
    },
    {
      icon: Shield,
      category: "Safety & Security",
      direct: "Handle challenges alone in foreign country",
      kcic: "Safe group transfer with ongoing support",
      highlight: "Peace of Mind"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#0B1B3A]">
            Why Choose <span className="text-[#B99750]">KCIC SAP</span>?
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
            Experience the advantages of a structured pathway to international education
          </p>
        </div>

        {/* Desktop: Vertical Stack | Mobile: Horizontal Swipe */}
        <div className="max-w-6xl mx-auto mb-12">
          {/* Mobile: Swipeable Cards */}
          <div className="md:hidden">
            <div 
              ref={scrollRef} 
              className="overflow-x-auto scrollbar-hide -mx-4 px-4 scroll-smooth"
              style={{ 
                scrollSnapType: 'x mandatory',
                WebkitOverflowScrolling: 'touch',
                scrollBehavior: 'smooth'
              }}
            >
              <div className="flex gap-4 pb-4">

                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={index}
                      className="flex-shrink-0 w-[85vw] max-w-[340px]"
                      style={{ scrollSnapAlign: 'center' }}
                    >
                      <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl border-2 border-gray-200 overflow-hidden h-full shadow-lg">
                        {/* Feature Header */}
                        <div className="bg-[#0B1B3A] p-5 flex items-center gap-3">
                          <div className="bg-[#B99750] p-2.5 rounded-lg flex-shrink-0">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-white leading-tight">{feature.category}</h3>
                            <span className="text-xs text-[#B99750] font-semibold">{feature.highlight}</span>
                          </div>
                        </div>

                        {/* Direct Study Abroad */}
                        <div className="p-5 bg-red-50/40 border-b-2 border-gray-200">
                          <div className="flex items-start gap-3">
                            <div className="bg-red-500 p-1.5 rounded-full flex-shrink-0 mt-0.5">
                              <X className="w-4 h-4 text-white" />
                            </div>
                            <div>
                              <p className="text-xs font-bold text-gray-500 uppercase mb-2 tracking-wide">Direct Study Abroad</p>
                              <p className="text-sm text-gray-800 font-medium leading-snug">{feature.direct}</p>
                            </div>
                          </div>
                        </div>

                        {/* KCIC SAP */}
                        <div className="p-5 bg-gradient-to-br from-green-50/60 to-[#B99750]/10">
                          <div className="flex items-start gap-3">
                            <div className="bg-[#B99750] p-1.5 rounded-full flex-shrink-0 mt-0.5">
                              <Check className="w-4 h-4 text-white" />
                            </div>
                            <div>
                              <p className="text-xs font-bold text-[#B99750] uppercase mb-2 tracking-wide">KCIC SAP Advantage</p>
                              <p className="text-sm text-gray-900 font-semibold leading-snug">{feature.kcic}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <SwipeIndicator 
              totalItems={features.length} 
              scrollContainerRef={scrollRef} 
              sectionId="comparison-section" 
            />
          </div>


          {/* Desktop: Vertical Stack */}
          <div className="hidden md:block space-y-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-r from-gray-50 to-white rounded-xl border-2 border-gray-200 overflow-hidden"
                >
                  <div className="grid md:grid-cols-[280px,1fr,1fr] gap-0">
                    {/* Feature Label */}
                    <div className="bg-[#0B1B3A] p-6 flex items-center gap-4">
                      <div className="bg-[#B99750] p-2.5 rounded-lg flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white leading-tight">{feature.category}</h3>
                        <span className="text-xs text-[#B99750] font-semibold">{feature.highlight}</span>
                      </div>
                    </div>

                    {/* Direct Study Abroad */}
                    <div className="p-6 bg-red-50/40 border-r-2 border-gray-200">
                      <div className="flex items-start gap-3">
                        <div className="bg-red-500 p-1.5 rounded-full flex-shrink-0 mt-0.5">
                          <X className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-gray-500 uppercase mb-2 tracking-wide">Direct Study Abroad</p>
                          <p className="text-base text-gray-800 font-medium leading-snug">{feature.direct}</p>
                        </div>
                      </div>
                    </div>

                    {/* KCIC SAP */}
                    <div className="p-6 bg-gradient-to-br from-green-50/60 to-[#B99750]/10">
                      <div className="flex items-start gap-3">
                        <div className="bg-[#B99750] p-1.5 rounded-full flex-shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-[#B99750] uppercase mb-2 tracking-wide">KCIC SAP Advantage</p>
                          <p className="text-base text-gray-900 font-semibold leading-snug">{feature.kcic}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center px-4">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-[#B99750] to-[#a88645] hover:from-[#a88645] hover:to-[#967a3d] text-white text-base md:text-lg px-6 py-6 md:px-12 md:py-7 rounded-full shadow-xl hover:shadow-2xl transition-all font-semibold w-full max-w-md md:w-auto"
            onClick={() => window.location.href = '/apply'}
          >
            Start Your KCIC Journey Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>

          <p className="text-sm text-gray-600 mt-4 font-medium">Join hundreds of students who made the smart choice</p>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
