import { Quote } from 'lucide-react';

export default function CivilSuccessStorySection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0B1B3A] to-[#1a2847] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Student Success Story</h2>
        
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-lg p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <img 
              src="https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1763086728562_573e1d1c.webp"
              alt="Success Story" 
              className="w-48 h-48 rounded-full object-cover border-4 border-[#B99750]"
            />
            
            <div className="flex-1">
              <Quote className="h-12 w-12 text-[#B99750] mb-4" />
              <p className="text-lg md:text-xl mb-6 italic">
                "KCIC's pathway program gave me the perfect foundation. The hands-on approach and industry connections helped me secure a placement at a leading construction firm."
              </p>
              <div>
                <p className="font-bold text-xl">James Mitchell</p>
                <p className="text-[#B99750]">Now at Arup • Civil Engineering Graduate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
