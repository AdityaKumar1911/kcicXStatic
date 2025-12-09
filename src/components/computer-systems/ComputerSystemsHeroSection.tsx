import { Button } from '@/components/ui/button';
import { Calendar, Clock } from 'lucide-react';

export default function ComputerSystemsHeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1763089906701_4c1ba944.webp" 
          alt="Computer Systems Engineering" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1B3A]/95 via-[#0B1B3A]/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12">
        <div className="max-w-3xl">
          <div className="inline-block bg-[#B99750] text-white px-4 py-2 rounded-full text-sm font-bold mb-6">
            High Demand Program
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            BEng (Hons) Computer Systems Engineering
          </h1>
          
          <p className="text-xl sm:text-2xl text-[#FAF3E0] mb-8">
            Bridge hardware and software to build intelligent computing systems and IoT solutions
          </p>

          <div className="flex flex-wrap gap-4 mb-8 text-white">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <Clock className="w-5 h-5 text-[#B99750]" />
              <span className="font-semibold">3 years | 1 year in India & 2 years in the UK</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <Calendar className="w-5 h-5 text-[#B99750]" />
              <span className="font-semibold">September 2025</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://admissions.cornerstone.edu.in/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full sm:w-auto bg-[#B99750] hover:bg-[#a88645] text-white text-base sm:text-lg font-semibold px-8 py-6 shadow-xl">
                Apply Now
              </Button>
            </a>

            <a href="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-white bg-white text-[#0B1B3A] hover:bg-white/90 text-base sm:text-lg font-semibold px-8 py-6 shadow-xl">
                Enquire Now
              </Button>
            </a>
          </div>


        </div>
      </div>
    </section>
  );
}
