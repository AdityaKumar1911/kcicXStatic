import { Quote } from 'lucide-react';

export default function AISuccessStorySection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#0B1B3A] to-[#1a2947]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Student Success Story
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
            Real achievements from our Artificial Intelligence graduates
          </p>
        </div>

        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image Section */}
            <div className="relative h-64 md:h-auto">
              <img
                src="https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1763048164379_8d5c8887.webp"
                alt="Rahul Sharma - AI Graduate"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-xl md:text-2xl font-bold text-white">Rahul Sharma</h3>
                <p className="text-[#B99750] font-semibold">BEng (Hons) AI with Placement, 2023</p>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 md:p-10">
              <Quote className="w-10 h-10 text-[#B99750] mb-4" />
              
              <blockquote className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed italic">
                "The AI program at KCIC gave me hands-on experience with cutting-edge technologies. The industry placement was invaluable in securing my dream role at a leading tech company."
              </blockquote>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#B99750] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm md:text-base text-gray-600">
                    <strong className="text-[#0B1B3A]">Current Role:</strong> Machine Learning Engineer at IBM UK
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#B99750] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm md:text-base text-gray-600">
                    <strong className="text-[#0B1B3A]">Achievement:</strong> Promoted to Senior ML Engineer within 18 months
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#B99750] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm md:text-base text-gray-600">
                    <strong className="text-[#0B1B3A]">Starting Salary:</strong> £37,000 with annual bonuses
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500 leading-relaxed">
                  Rahul completed his foundation year at KCIC before progressing to Coventry University. His final year project on NLP solutions caught the attention of multiple tech giants.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
