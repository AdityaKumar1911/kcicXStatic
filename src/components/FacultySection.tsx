import React, { useRef } from 'react';
import { faculty } from '../data/faculty';
import { SwipeIndicator } from './SwipeIndicator';
import { useHapticFeedback } from '@/hooks/useHapticFeedback';

const FacultySection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { triggerHaptic } = useHapticFeedback();

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#FAF3E0] to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1B3A] mb-4">
            Our Faculty
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl">
            Learn from world-class educators with international experience
          </p>
        </div>

        {/* Desktop: Grid Layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {faculty.map(member => (
            <div 
              key={member.id}
              className="text-center group cursor-pointer"
            >
              <div className="mb-6 overflow-hidden rounded-3xl w-56 h-56 mx-auto border-4 border-[#0B1B3A] group-hover:border-[#B99750] transition-all duration-300 shadow-xl group-hover:shadow-2xl group-hover:scale-105">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-bold text-[#0B1B3A] mb-2">{member.name}</h3>
              <p className="text-[#B99750] font-bold mb-3">{member.title}</p>
              <p className="text-gray-600 text-sm mb-2 font-semibold">{member.credentials}</p>
              <p className="text-gray-500 text-sm">{member.specialization}</p>
            </div>
          ))}
        </div>

        {/* Mobile: Swipeable Horizontal Scroll */}
        <div className="md:hidden">
          <div 
            ref={scrollRef}
            className="overflow-x-auto scrollbar-hide -mx-4 px-4 scroll-smooth"
            style={{ 
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch',
              scrollBehavior: 'smooth'
            }}
            onTouchStart={() => triggerHaptic('light')}
          >
            <div className="flex gap-4 pb-4">
              {faculty.map(member => (
                <div 
                  key={member.id}
                  className="flex-shrink-0 w-[85vw] max-w-[340px] text-center"
                  style={{ scrollSnapAlign: 'center' }}
                >
                  <div className="mb-6 overflow-hidden rounded-3xl w-56 h-56 mx-auto border-4 border-[#0B1B3A] shadow-xl">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#0B1B3A] mb-2">{member.name}</h3>
                  <p className="text-[#B99750] font-bold mb-3">{member.title}</p>
                  <p className="text-gray-600 text-sm mb-2 font-semibold">{member.credentials}</p>
                  <p className="text-gray-500 text-sm">{member.specialization}</p>
                </div>
              ))}
            </div>
          </div>
          <SwipeIndicator totalItems={faculty.length} scrollContainerRef={scrollRef} sectionId="faculty-section" />
        </div>
      </div>
    </section>
  );
};

export default FacultySection;
