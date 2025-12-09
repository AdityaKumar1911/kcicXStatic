import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SectionIndicatorProps {
  sections: string[];
  activeSection: number;
  onSectionClick: (index: number) => void;
  showSwipeHint?: boolean;
}

export const SectionIndicator = ({ 
  sections, 
  activeSection, 
  onSectionClick,
  showSwipeHint = false 
}: SectionIndicatorProps) => {
  return (
    <div className="sticky top-16 sm:top-20 z-40 bg-white/95 backdrop-blur-sm shadow-md py-3 sm:py-4 mb-6 sm:mb-8">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">

        <div className="hidden md:flex justify-center gap-2">
          {sections.map((section, index) => (
            <button
              key={index}
              onClick={() => onSectionClick(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                index === activeSection
                  ? 'bg-[#0B1B3A] text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {section}
            </button>
          ))}
        </div>

        {/* Mobile: Current Section Name + Dots */}
        <div className="md:hidden">
          <div className="text-center mb-3">
            <h3 className="text-sm font-semibold text-[#0B1B3A]">
              {sections[activeSection]}
            </h3>
          </div>
          
          <div className="flex justify-center items-center gap-3">
            {sections.map((section, index) => (
              <button
                key={index}
                onClick={() => onSectionClick(index)}
                className={`rounded-full transition-all touch-manipulation ${
                  index === activeSection 
                    ? 'w-8 h-3 bg-[#B99750]' 
                    : 'w-3 h-3 bg-gray-300 active:bg-gray-400'
                }`}
                aria-label={`Go to ${section}`}
              />
            ))}
          </div>
          
          {showSwipeHint && (
            <div className="flex items-center justify-center gap-2 text-xs text-gray-500 mt-2">
              <ChevronLeft className="w-4 h-4 animate-pulse" />
              <span>Tap dots to navigate</span>
              <ChevronRight className="w-4 h-4 animate-pulse" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
