import { Quote, Award, TrendingUp, Users } from 'lucide-react';

export default function BiomedicalSuccessStorySection() {
  return (
    <section className="py-16 bg-[#FAF3E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1B3A] mb-4">Success Story</h2>
          <p className="text-lg text-gray-600">Hear from our accomplished graduates</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="relative">
            <img 
              src="https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1763085184012_c5ce078c.webp" 
              alt="Priya Sharma" 
              className="rounded-lg shadow-2xl w-full"
            />
          </div>

          <div>
            <Quote className="w-12 h-12 text-[#B99750] mb-6" />
            <p className="text-xl text-gray-700 mb-6 italic leading-relaxed">
              "The KCIC pathway gave me hands-on laboratory experience and research opportunities that prepared me for my career as a clinical scientist. The placement year was invaluable."
            </p>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-[#0B1B3A]">Priya Sharma</h3>
              <p className="text-[#B99750] font-semibold">Clinical Scientist at NHS Trust</p>
              <p className="text-gray-600">BSc Biomedical Science Graduate 2023</p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white rounded-lg">
                <Award className="w-8 h-8 text-[#B99750] mx-auto mb-2" />
                <p className="font-bold text-[#0B1B3A]">First Class</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <TrendingUp className="w-8 h-8 text-[#B99750] mx-auto mb-2" />
                <p className="font-bold text-[#0B1B3A]">£42k Salary</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <Users className="w-8 h-8 text-[#B99750] mx-auto mb-2" />
                <p className="font-bold text-[#0B1B3A]">NHS Role</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
