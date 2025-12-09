import { useState, useRef } from 'react';
import { useHapticFeedback } from '@/hooks/useHapticFeedback';

interface SwipeableCardGridProps {
  children: React.ReactNode[];
  className?: string;
}

export default function SwipeableCardGrid({ children, className = '' }: SwipeableCardGridProps) {
  const [activeCard, setActiveCard] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { triggerHaptic } = useHapticFeedback();

  const minSwipeDistance = 50;

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
    setIsSwiping(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
    setIsSwiping(true);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && activeCard < children.length - 1) {
      triggerHaptic('light');
      setActiveCard(prev => prev + 1);
    }
    if (isRightSwipe && activeCard > 0) {
      triggerHaptic('light');
      setActiveCard(prev => prev - 1);
    }
    
    setIsSwiping(false);
    setTouchEnd(0);
  };

  // Calculate swipe progress
  const swipeDistance = touchStart && touchEnd ? touchStart - touchEnd : 0;
  const swipeProgress = Math.min(Math.abs(swipeDistance) / minSwipeDistance, 1);
  const isSwipingLeft = swipeDistance > 0;
  const canSwipeLeft = activeCard < children.length - 1;
  const canSwipeRight = activeCard > 0;
  
  // Calculate transform for live preview
  const getTransform = () => {
    if (!isSwiping || !touchEnd) {
      return `translateX(-${activeCard * 100}%)`;
    }
    const offset = ((touchEnd - touchStart) / (containerRef.current?.offsetWidth || 1)) * 100;
    return `translateX(calc(-${activeCard * 100}% + ${offset}%))`;
  };

  return (
    <div className={className}>
      {/* Mobile: Swipeable Carousel */}
      <div className="md:hidden">
        <div 
          ref={containerRef}
          className="overflow-hidden relative"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className={`flex ${isSwiping ? '' : 'transition-transform duration-300 ease-out'}`}
            style={{ transform: getTransform() }}
          >
            {children.map((child, index) => (
              <div key={index} className="w-full flex-shrink-0 px-2">
                {child}
              </div>
            ))}
          </div>
          
          {/* Swipe Progress Indicator */}
          {isSwiping && swipeProgress > 0 && (
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200">
              <div 
                className={`h-full transition-all duration-100 ${
                  isSwipingLeft 
                    ? (canSwipeLeft ? 'bg-[#0B1B3A]' : 'bg-red-400')
                    : (canSwipeRight ? 'bg-[#0B1B3A]' : 'bg-red-400')
                }`}
                style={{ width: `${swipeProgress * 100}%` }}
              />
            </div>
          )}
        </div>
        
        {/* Card Navigation Dots */}
        <div className="flex justify-center items-center gap-3 mt-6 mb-2">
          {children.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                triggerHaptic('light');
                setActiveCard(index);
              }}
              className={`rounded-full transition-all duration-300 touch-manipulation ${
                index === activeCard ? 'w-8 h-3 bg-[#0B1B3A]' : 'w-3 h-3 bg-gray-300 active:bg-gray-400'
              }`}
              aria-label={`Go to card ${index + 1}`}
            />
          ))}
        </div>
        <p className="text-center text-xs text-gray-500 mb-4">
          Card {activeCard + 1} of {children.length}
        </p>
      </div>

      {/* Desktop: Grid Layout */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {children}
      </div>
    </div>
  );
}
