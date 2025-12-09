'use client';

import { Users, DollarSign, Building2, GraduationCap, MapPin, Globe } from 'lucide-react';

interface Props {
  acceptance: string;
  designedBy: string;
  studyInIndia: string;
  studyAbroad: string;
  averageSalary: string;
  potentialRecruiters: string[];
  partnerUniversities: string[];
}

export default function ProgramOverviewSection({
  acceptance, designedBy, studyInIndia, studyAbroad, averageSalary, potentialRecruiters, partnerUniversities
}: Props) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#0B1B3A] text-center mb-12">Program Overview</h2>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <Users className="w-8 h-8 text-[#B99750] mb-4" />
            <h3 className="font-semibold text-lg text-[#0B1B3A] mb-2">Intake Size</h3>
            <p className="text-gray-600">{acceptance}</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <DollarSign className="w-8 h-8 text-[#B99750] mb-4" />
            <h3 className="font-semibold text-lg text-[#0B1B3A] mb-2">Average Salary</h3>
            <p className="text-gray-600">{averageSalary}</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <GraduationCap className="w-8 h-8 text-[#B99750] mb-4" />
            <h3 className="font-semibold text-lg text-[#0B1B3A] mb-2">Designed By</h3>
            <p className="text-gray-600">{designedBy}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <MapPin className="w-8 h-8 text-[#B99750] mb-4" />
            <h3 className="font-semibold text-lg text-[#0B1B3A] mb-2">Study in India</h3>
            <p className="text-gray-600">{studyInIndia}</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <Globe className="w-8 h-8 text-[#B99750] mb-4" />
            <h3 className="font-semibold text-lg text-[#0B1B3A] mb-2">Study Abroad</h3>
            <p className="text-gray-600">{studyAbroad}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#0B1B3A] rounded-xl p-6">
            <Building2 className="w-8 h-8 text-[#B99750] mb-4" />
            <h3 className="font-semibold text-lg text-white mb-4">Potential Recruiters</h3>
            <div className="flex flex-wrap gap-2">
              {potentialRecruiters.map((r, i) => (
                <span key={i} className="bg-white/10 text-white px-3 py-1 rounded-full text-sm">{r}</span>
              ))}
            </div>
          </div>
          <div className="bg-[#B99750] rounded-xl p-6">
            <GraduationCap className="w-8 h-8 text-white mb-4" />
            <h3 className="font-semibold text-lg text-white mb-4">Partner Universities</h3>
            <div className="flex flex-wrap gap-2">
              {partnerUniversities.map((u, i) => (
                <span key={i} className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">{u}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
