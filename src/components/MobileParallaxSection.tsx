import { ReactNode, useRef, useEffect, useState } from 'react';
import { useMobileParallax } from '../hooks/useMobileParallax';

interface MobileParallaxSectionProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export default function MobileParallaxSection({ 
  children, 
  speed = 0.5,
  className = '' 
}: MobileParallaxSectionProps) {
  const { scrollY, isMobile } = useMobileParallax();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offsetTop, setOffsetTop] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (sectionRef.current) {
      setOffsetTop(sectionRef.current.offsetTop);
    }
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const getTransform = () => {
    // Disable parallax - it was hiding text
    return 'none';
  };

  return (
    <div ref={sectionRef} className={className}>
      <div 
        style={{
          transform: getTransform(),
          opacity: 1,
          visibility: 'visible'
        }}
      >
        {children}
      </div>
    </div>
  );
}

