import { Button } from '@/components/ui/button';
import { Phone, Video } from 'lucide-react';

export default function ParentCTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0B1B3A] via-[#1a2f5a] to-[#0B1B3A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Give Your Child the World—Safely and Smartly?
          </h2>
          <p className="text-xl text-gray-200 mb-10">
            Join hundreds of parents who chose KCIC for a secure, affordable, and globally recognized education pathway.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="bg-[#b99750] hover:bg-[#a88645] text-white px-10 py-7 text-lg flex items-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <Phone className="w-6 h-6" />
              Book a Parent Counselling Call
            </Button>
            <Button variant="outline" className="border-2 border-[#b99750] text-white hover:bg-[#b99750] hover:text-white bg-transparent px-10 py-7 text-lg flex items-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <Video className="w-6 h-6" />
              Attend the Next Parent Webinar
            </Button>

          </div>
          
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <p className="text-4xl font-bold text-[#b99750] mb-2">100%</p>
              <p className="text-sm text-gray-200">Transfer success to one of our partner universities</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <p className="text-4xl font-bold text-[#b99750] mb-2">₹15+ Lacs</p>
              <p className="text-sm text-gray-200">Average savings per year when studying at KCIC</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <p className="text-4xl font-bold text-[#b99750] mb-2">24/7</p>
              <p className="text-sm text-gray-200">Your child is safe inside the campus</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <p className="text-4xl font-bold text-[#b99750] mb-2">100%</p>
              <p className="text-sm text-gray-200">Full Fee Refund</p>
              <p className="text-xs text-gray-300 mt-1">No overseas transfer, full refund guaranteed</p>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}
