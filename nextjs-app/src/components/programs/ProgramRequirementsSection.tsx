'use client';

import { CheckCircle, Star } from 'lucide-react';

interface ProgramRequirementsProps {
  requirements: string[];
  whyKCIC: string[];
}

export default function ProgramRequirementsSection({
  requirements,
  whyKCIC,
}: ProgramRequirementsProps) {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Entry Requirements */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1B3A] mb-6">
              Entry Requirements
            </h2>
            <div className="bg-gray-50 p-6 rounded-xl">
              <ul className="space-y-4">
                {requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-lg">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Why KCIC */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1B3A] mb-6">
              Why Choose KCIC?
            </h2>
            <div className="bg-[#0B1B3A] p-6 rounded-xl">
              <ul className="space-y-4">
                {whyKCIC.map((reason, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Star className="w-6 h-6 text-[#B99750] flex-shrink-0 mt-0.5" />
                    <span className="text-white text-lg">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
