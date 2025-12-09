import { Button } from '@/components/ui/button';
import { Shield, Users, Globe, CheckCircle, Award } from 'lucide-react';

export default function ParentHeroSection() {
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1762587332509_7f1d586b.webp" 
          alt="Parents with student" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1B3A]/90 via-[#0B1B3A]/75 to-[#0B1B3A]/60"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
            Safe campus. Zero tolerance for abuse.
          </h1>
          <p className="text-2xl md:text-3xl text-white/90 mb-12 font-medium">
            Your child's success starts here.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-[#0B1B3A] via-[#1a2942] to-[#B99750] hover:from-[#1a2942] hover:to-[#a88645] text-white px-8 py-6 text-lg font-semibold shadow-xl border border-[#B99750]/30"
            >
              Talk to a Counsellor
            </Button>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-[#B99750] to-[#0B1B3A] hover:from-[#a88645] hover:to-[#1a2942] text-white px-8 py-6 text-lg font-semibold shadow-xl border border-[#B99750]/30"
            >
              Download Parent Guide
            </Button>
          </div>

          {/* Additional CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button 
              size="lg" 
              className="bg-white text-[#0B1B3A] hover:bg-white/90 px-8 py-6 text-lg font-semibold shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Book a Parent Counselling Call
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#0B1B3A] bg-transparent px-8 py-6 text-lg font-semibold shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Attend the Next Parent Webinar
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}


