'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, GraduationCap } from 'lucide-react';
import { programs } from '@/data/programs';

export default function ProgramsSection() {
  const displayPrograms = programs.slice(0, 8);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#FAF3E0] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#0B1B3A]">Popular Qualifications at KCIC</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">Choose from our wide range of globally accredited programs</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {displayPrograms.map(program => (
            <Link key={program.id} href={`/programs/${program.slug}`}>
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-[#B99750]/20 hover:border-[#B99750] overflow-hidden h-full">
                <div className="h-2 bg-gradient-to-r from-[#0B1B3A] via-[#B99750] to-[#0B1B3A]" />
                <div className="p-5">
                  <div className="w-12 h-12 bg-[#0B1B3A] rounded-lg flex items-center justify-center mb-4">
                    <GraduationCap className="w-6 h-6 text-[#B99750]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0B1B3A] mb-2 line-clamp-2">{program.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{program.department}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#B99750] font-semibold">{program.pathwayModel}</span>
                    <ArrowRight className="w-4 h-4 text-[#0B1B3A]" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link href="/programs">
            <Button size="lg" className="bg-[#B99750] hover:bg-[#a88645] text-white">
              View All Programs <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
