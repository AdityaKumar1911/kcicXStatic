import { FileText } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function FloatingRequestButton() {
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleScroll = () => {
      if (!isMobile) return;

      setIsScrolling(true);

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, [isMobile]);

  // 🔥 OPEN NoPaperForms POPUP
  const handleClick = () => {
    const npfBtn = document.querySelector<HTMLButtonElement>(
      '.npfWidget-5cd7c310499045622b34d8ab404bd5be'
    );

    if (npfBtn) {
      npfBtn.click(); // Trigger popup
    } else {
      console.error('NPF widget button not found in DOM');
    }
  };

  const visibilityClass =
    isMobile && isScrolling
      ? 'opacity-0 pointer-events-none translate-x-full'
      : 'opacity-100 translate-x-0';

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`fixed right-0 top-1/2 -translate-y-1/2 z-50 bg-gradient-to-b from-[#003049] to-[#00507a] text-white py-4 px-2 rounded-l-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:px-3 group cursor-pointer ${visibilityClass}`}
      style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
      aria-label="Request Details"
    >
      <span className="flex items-center gap-2 text-sm font-semibold tracking-wider">
        <FileText className="w-4 h-4 rotate-90" />
        Request Details
      </span>
    </button>
  );
}
