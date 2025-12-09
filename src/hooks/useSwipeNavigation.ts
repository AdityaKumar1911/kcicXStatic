import { useState, useEffect, useRef, TouchEvent } from 'react';
import { useHapticFeedback } from './useHapticFeedback';

export const useSwipeNavigation = (totalSections: number) => {
  const [activeSection, setActiveSection] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { triggerHaptic } = useHapticFeedback();

  const minSwipeDistance = 50;

  const onTouchStart = (e: TouchEvent) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
    setIsSwiping(false);
  };

  const onTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
    setIsSwiping(true);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && activeSection < totalSections - 1) {
      triggerHaptic('medium');
      navigateToSection(activeSection + 1);
    }

    if (isRightSwipe && activeSection > 0) {
      triggerHaptic('medium');
      navigateToSection(activeSection - 1);
    }
    
    setIsSwiping(false);
    setTouchEnd(0);
  };

  const navigateToSection = (index: number) => {
    if (index < 0 || index >= totalSections || isTransitioning) return;
    
    setIsTransitioning(true);
    setActiveSection(index);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
  };

  // Calculate swipe progress
  const swipeDistance = touchStart && touchEnd ? touchStart - touchEnd : 0;
  const swipeProgress = Math.min(Math.abs(swipeDistance) / minSwipeDistance, 1);
  const isSwipingLeft = swipeDistance > 0;

  return {
    activeSection,
    navigateToSection,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    containerRef,
    isTransitioning,
    isSwiping,
    swipeProgress,
    isSwipingLeft
  };
};
