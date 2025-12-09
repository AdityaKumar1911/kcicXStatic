'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, GraduationCap, BookOpen } from 'lucide-react';
import { useState } from 'react';

export default function HeroSection() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1760533594343_ecf8b9ab.webp" 
          alt="Students at KCIC Pathway College" 
          className={`w-full h-full object-cover transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setImageLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/75 to-slate-900/70" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-full border border-white/20 mb-8">
            <GraduationCap className="w-4 h-4 text-[#B99750]" />
            <span className="text-sm font-semibold text-white">Study Smart, Save More</span>
          </div>
          
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
            <span className="text-white">Proudly different,</span>
            <span className="block mt-2 bg-gradient-to-r from-[#B99750] via-[#d4ab5e] to-[#B99750] bg-clip-text text-transparent">Proudly Globally</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl font-medium mb-8">
            Every college gives a degree. KCIC gives you a future — a high-paying career abroad, a respected lifestyle, and the pride of settling successfully overseas.
          </p>
          
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-12">
            <a href="https://admissions.cornerstone.edu.in/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-[#B99750] to-[#a88645] hover:from-[#a88645] hover:to-[#967a3d] text-white shadow-xl h-12 sm:h-14 px-6 sm:px-8 text-base font-semibold rounded-xl">
                Apply Now <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
            <Link href="/programs">
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 sm:h-14 px-6 sm:px-8 text-base font-semibold border-2 border-white bg-white/15 hover:bg-white/25 text-white rounded-xl backdrop-blur-md">
                <BookOpen className="mr-2 w-5 h-5" />
                Explore Programs
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 pt-8 border-t border-white/20">
            <div>
              <div className="text-2xl sm:text-4xl font-bold text-[#B99750]">1M</div>
              <div className="text-sm font-medium text-white/70 mt-1">Connected to a 1M+ strong global student ecosystem</div>
            </div>
            <div>
              <div className="text-2xl sm:text-4xl font-bold text-[#B99750]">Top 100</div>
              <div className="text-sm font-medium text-white/70 mt-1">Your degree from Top 100 universities</div>
            </div>
            <div>
              <div className="text-2xl sm:text-4xl font-bold text-[#B99750]">Top 10</div>
              <div className="text-sm font-medium text-white/70 mt-1">Partnership with Top 10 Global universities</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
