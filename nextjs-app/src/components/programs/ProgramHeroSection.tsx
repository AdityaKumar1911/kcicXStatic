'use client';

import { Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface ProgramHeroProps {
  title: string;
  subtitle: string;
  tag: string;
  duration: string;
  startDate: string;
  heroImage: string;
}

export default function ProgramHeroSection({
  title,
  subtitle,
  tag,
  duration,
  startDate,
  heroImage,
}: ProgramHeroProps) {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1B3A]/95 via-[#0B1B3A]/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12">
        <div className="max-w-3xl">
          <div className="inline-block bg-[#B99750] text-white px-4 py-2 rounded-full text-sm font-bold mb-6">
            {tag}
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {title}
          </h1>

          <p className="text-xl sm:text-2xl text-[#FAF3E0] mb-8">{subtitle}</p>

          <div className="flex flex-wrap gap-4 mb-8 text-white">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <Clock className="w-5 h-5 text-[#B99750]" />
              <span className="font-semibold">{duration}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <Calendar className="w-5 h-5 text-[#B99750]" />
              <span className="font-semibold">{startDate}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="https://admissions.cornerstone.edu.in/" target="_blank">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-[#B99750] hover:bg-[#a88645] text-white text-lg font-semibold px-8 py-6"
              >
                Apply Now
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 border-white bg-white text-[#0B1B3A] hover:bg-white/90 text-lg font-semibold px-8 py-6"
              >
                Enquire Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
