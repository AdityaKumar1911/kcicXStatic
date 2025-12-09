'use client';

import { Briefcase, PoundSterling, Building2 } from 'lucide-react';

interface CareerPath {
  title: string;
  salary: string;
  companies: string;
}

interface ProgramCareersProps {
  careers: CareerPath[];
}

export default function ProgramCareersSection({ careers }: ProgramCareersProps) {
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1B3A] mb-4">
            Career Opportunities
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Graduate into high-demand roles with competitive salaries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {careers.map((career, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#B99750]/10 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-[#B99750]" />
                </div>
                <h3 className="text-xl font-bold text-[#0B1B3A]">
                  {career.title}
                </h3>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-600">
                  <PoundSterling className="w-5 h-5 text-green-600" />
                  <span className="font-semibold text-green-600">
                    {career.salary}
                  </span>
                </div>
                <div className="flex items-start gap-2 text-gray-600">
                  <Building2 className="w-5 h-5 text-[#B99750] flex-shrink-0 mt-0.5" />
                  <span>{career.companies}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
