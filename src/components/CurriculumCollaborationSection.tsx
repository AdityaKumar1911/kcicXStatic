import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useHapticFeedback } from '@/hooks/useHapticFeedback';
import Layout from './Layout';

const collaborators = [
  { name: 'Siemens', logo: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1760595838559_792c45f1.webp' },
  { name: 'BMW', logo: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1760595839252_949083e4.webp' },
  { name: 'Airbus', logo: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1760595839953_5f3fe5d6.webp' },
  { name: 'British Telecom', logo: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1760595840647_0f8950aa.webp' },
];

export const CurriculumCollaborationSection: React.FC = () => {
  const haptic = useHapticFeedback();
  const tripleLogos = [...collaborators, ...collaborators, ...collaborators];

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-[#FAF3E0] to-white overflow-hidden">
      <Layout>
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B1B3A] mb-4">
            Curriculum Designed & Developed in Collaboration
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Our programs are developed in partnership with leading global companies to ensure industry-relevant education
          </p>
        </div>
      </Layout>

      {/* Full-width scrolling section */}
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-4 sm:gap-6 animate-scroll-logos hover:pause-animation" style={{ width: 'fit-content' }}>
          {tripleLogos.map((collaborator, idx) => (
            <div key={`${collaborator.name}-${idx}`} className="flex-shrink-0 w-48 sm:w-56 md:w-64 lg:w-72" onClick={() => haptic.light()}>
              <Card className="border-2 border-[#B99750]/20 hover:border-[#B99750] transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-4 sm:p-6 flex items-center justify-center h-24 sm:h-28 md:h-32">
                  <img src={collaborator.logo} alt={`${collaborator.name} logo`} className="w-full h-16 sm:h-20 md:h-24 object-contain grayscale hover:grayscale-0 transition-all duration-300" loading="lazy" />
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
