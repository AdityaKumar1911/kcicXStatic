import { Quote, Award, Briefcase, GraduationCap } from 'lucide-react';

export default function BiomedicalEngSuccessStorySection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1B3A] mb-4">Success Story</h2>
          <p className="text-xl text-gray-600">Meet our graduate making a difference in healthcare</p>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-[400px] md:h-auto">
              <img
                src="https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1763086187945_201a7902.webp"
                alt="Priya Sharma"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-8 md:p-12 flex flex-col justify-center">
              <Quote className="w-12 h-12 text-[#B99750] mb-6" />
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                "The KCIC pathway gave me the foundation to excel at a top UK university. Now I'm developing prosthetic devices that change lives."
              </p>

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-[#0B1B3A]">Priya Sharma</h3>
                <p className="text-[#B99750] font-semibold">Medical Device Engineer at Medtronic</p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <GraduationCap className="w-8 h-8 text-[#B99750] mx-auto mb-2" />
                  <p className="text-sm text-gray-600">First Class Honours</p>
                </div>
                <div className="text-center">
                  <Award className="w-8 h-8 text-[#B99750] mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Innovation Award</p>
                </div>
                <div className="text-center">
                  <Briefcase className="w-8 h-8 text-[#B99750] mx-auto mb-2" />
                  <p className="text-sm text-gray-600">£42k Starting</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
