'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import ProgramHeroSection from './ProgramHeroSection';
import ProgramModulesSection from './ProgramModulesSection';
import ProgramCareersSection from './ProgramCareersSection';
import ProgramRequirementsSection from './ProgramRequirementsSection';
import ProgramFAQSection from './ProgramFAQSection';
import ProgramOverviewSection from './ProgramOverviewSection';
import { SpecialtyProgram } from '@/data/specialtyProgramTypes';

interface Props { program: SpecialtyProgram; }

export default function GenericProgramPage({ program }: Props) {
  return (
    <main>
      <div className="bg-[#0B1B3A] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/programs" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" /><span>Back to Programs</span>
          </Link>
        </div>
      </div>
      <ProgramHeroSection title={program.title} subtitle={program.subtitle} tag={program.tag} duration={program.duration} startDate={program.startDate} heroImage={program.heroImage} />
      <ProgramOverviewSection 
        acceptance={program.acceptance} 
        designedBy={program.designedBy} 
        studyInIndia={program.studyInIndia} 
        studyAbroad={program.studyAbroad} 
        averageSalary={program.averageSalary} 
        potentialRecruiters={program.potentialRecruiters} 
        partnerUniversities={program.partnerUniversities} 
      />
      <ProgramModulesSection modules={program.modules} />
      <ProgramCareersSection careers={program.careers} />
      <ProgramRequirementsSection requirements={program.requirements} whyKCIC={program.whyKCIC} />
      <ProgramFAQSection faqs={program.faqs} />
      <section className="py-16 bg-[#0B1B3A]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-gray-300 mb-8">Take the first step toward your dream career</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://admissions.cornerstone.edu.in/" target="_blank">
              <Button size="lg" className="bg-[#B99750] hover:bg-[#a88645] text-white text-lg font-semibold px-8 py-6">Apply Now</Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#0B1B3A] text-lg font-semibold px-8 py-6">Request Information</Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
