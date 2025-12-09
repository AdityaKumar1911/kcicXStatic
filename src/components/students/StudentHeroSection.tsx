import { Button } from '@/components/ui/button';
import { GraduationCap, Globe, Briefcase, TrendingUp, Users } from 'lucide-react';

export default function StudentHeroSection() {
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1762580645069_66e00b30.webp"
          alt="Students celebrating success"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1B3A]/85 via-[#0B1B3A]/70 to-[#0B1B3A]/55"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Your Global Future Starts Here
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Study international curriculum from Day 1. Transfer abroad. Build a high-paying global career with work visa & PR pathways.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <div className="flex items-center gap-2 bg-white/15 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/20">
              <Globe className="w-5 h-5 text-[#B99750]" />
              <span className="text-sm font-semibold text-white">Study Abroad</span>
            </div>
            <div className="flex items-center gap-2 bg-white/15 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/20">
              <Briefcase className="w-5 h-5 text-[#B99750]" />
              <span className="text-sm font-semibold text-white">Work While You Study</span>
            </div>
            <div className="flex items-center gap-2 bg-white/15 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/20">
              <TrendingUp className="w-5 h-5 text-[#B99750]" />
              <span className="text-sm font-semibold text-white">High-Paying Careers</span>
            </div>
            <div className="flex items-center gap-2 bg-white/15 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/20">
              <Users className="w-5 h-5 text-[#B99750]" />
              <span className="text-sm font-semibold text-white">Small Batches</span>
            </div>
            <div className="flex items-center gap-2 bg-white/15 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/20">
              <GraduationCap className="w-5 h-5 text-[#B99750]" />
              <span className="text-sm font-semibold text-white">PR Pathways</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://admissions.cornerstone.edu.in/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-gradient-to-r from-[#B99750] to-[#a88645] hover:from-[#a88645] hover:to-[#967a3d] text-white px-8 py-6 text-lg font-semibold shadow-xl">
                Apply Now →
              </Button>
            </a>

            <Button size="lg" variant="outline" className="border-2 border-white bg-white/10 text-white hover:bg-white hover:text-[#0B1B3A] px-8 py-6 text-lg font-semibold backdrop-blur-md">
              Book Campus Visit →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
