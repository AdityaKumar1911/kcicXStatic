import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar } from 'lucide-react';

export default function StudentCTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0B1B3A] to-[#1a2942] text-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Global Journey?
          </h2>
          <p className="text-xl mb-10 text-blue-100">

            Join KCIC and transform your future. Study international curriculum, transfer abroad, and build a high-paying global career.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://admissions.cornerstone.edu.in/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-[#b99750] hover:bg-[#a08640] text-white">
                <ArrowRight className="w-5 h-5 mr-2" />
                Apply Now
              </Button>
            </a>

            <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20">
              <Calendar className="w-5 h-5 mr-2" />
              Book Campus Visit
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#b99750] mb-2">₹15-17L</div>
              <div className="text-blue-100">Average Savings</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#b99750] mb-2">100%</div>
              <div className="text-blue-100">Transfer Success</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#b99750] mb-2">2-4 Yrs</div>
              <div className="text-blue-100">Work Visa Post-Study</div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
