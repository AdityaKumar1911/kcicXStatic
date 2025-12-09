import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useHapticFeedback } from '@/hooks/useHapticFeedback';

interface SwipeIndicatorProps {
  totalItems: number;
  scrollContainerRef: React.RefObject<HTMLDivElement>;
  sectionId: string;
}

export const SwipeIndicator = ({ totalItems, scrollContainerRef, sectionId }: SwipeIndicatorProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showHint, setShowHint] = useState(true);
  const { triggerHaptic } = useHapticFeedback();
  const hasInteractedKey = `swipe-hint-${sectionId}`;

  useEffect(() => {
    const hasInteracted = localStorage.getItem(hasInteractedKey);
    if (hasInteracted) {
      setShowHint(false);
    }
  }, [hasInteractedKey]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let lastIndex = activeIndex;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const itemWidth = container.scrollWidth / totalItems;
      const index = Math.round(scrollLeft / itemWidth);
      
      if (index !== lastIndex) {
        triggerHaptic('light');
        lastIndex = index;
      }
      
      setActiveIndex(index);

      if (showHint) {
        setShowHint(false);
        localStorage.setItem(hasInteractedKey, 'true');
      }
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [scrollContainerRef, totalItems, showHint, hasInteractedKey, triggerHaptic, activeIndex]);

  if (totalItems <= 1) return null;

  return (
    <div className="md:hidden mt-6 mb-2">
      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mb-3">
        {Array.from({ length: totalItems }).map((_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === activeIndex 
                ? 'w-8 bg-[#B99750] shadow-md' 
                : 'w-2 bg-gray-300'
            }`}
          />
        ))}
      </div>
      
      {/* Arrow Hints - Positioned BELOW dots */}
      {showHint && (
        <div className="flex items-center justify-center gap-3 py-2">
          <div className="bg-[#B99750] text-white rounded-full p-1.5 shadow-lg animate-bounce">
            <ChevronLeft className="w-4 h-4" />
          </div>
          <p className="text-xs text-gray-600 font-medium">Swipe</p>
          <div className="bg-[#B99750] text-white rounded-full p-1.5 shadow-lg animate-bounce">
            <ChevronRight className="w-4 h-4" />
          </div>
        </div>
      )}
    </div>
  );
};
