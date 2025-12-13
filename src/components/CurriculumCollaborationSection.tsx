import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useHapticFeedback } from '@/hooks/useHapticFeedback';
import Layout from './Layout';

const collaborators = [
  { name: 'Siemens', logo: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1760595838559_792c45f1.webp' },
  { name: 'BMW', logo: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1760595839252_949083e4.webp' },
  { name: 'Airbus', logo: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1760595839953_5f3fe5d6.webp' },
  { name: 'British Telecom', logo: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1760595840647_0f8950aa.webp' },
];

export default function CurriculumCollaborationSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollAmount = 0;

    const scroll = () => {
      if (!container) return;

      scrollAmount += 1; // scrolling speed

      // seamless infinite loop
      if (scrollAmount >= container.scrollWidth / 2) {
        scrollAmount = 0;
      }

      container.scrollLeft = scrollAmount;
      requestAnimationFrame(scroll);
    };

    requestAnimationFrame(scroll);
  }, []);

  return (
    <section className="py-8 bg-gradient-to-br from-[#FAF3E0] to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1B3A] mb-2">
           Curriculum Designed & Developed in Collaboration
          </h2>

          <p className="text-base text-gray-600 max-w-3xl mx-auto">
           Our programs are developed in partnership with leading global companies to ensure industry-relevant education
          </p>
        </div>

        <div className="relative">
          <div ref={scrollRef} className="overflow-x-hidden scrollbar-hide pb-4">
            <div
              className="flex gap-6 px-4"
              style={{ width: "max-content" }}
            >
              {[...collaborators, ...collaborators].map((collaborator, idx) => (
                <div
                  key={`${collaborator.name}-${idx}`}
                  className="bg-white rounded-lg p-4 shadow-md hover:shadow-xl transition-shadow duration-300 flex items-center justify-center flex-shrink-0"
                  style={{ width: "200px", height: "120px" }}
                >
                  <img
                    src={collaborator.logo}
                    alt={`${collaborator.name} logo`}
                    className="w-full h-20 object-contain grayscale hover:grayscale-0 transition-all duration-300 pointer-events-none"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
