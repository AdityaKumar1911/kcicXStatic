import { CheckCircle, Calendar, BookOpen } from 'lucide-react';

export default function BiomedicalEngRequirementsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1B3A] mb-4">Entry Requirements</h2>
            <p className="text-xl text-gray-600">Start your journey to becoming a biomedical engineer</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-[#0B1B3A] mb-6">Academic Requirements</h3>
              <ul className="space-y-4">
                {['Grade 12 with 60% or equivalent', 'Strong performance in Mathematics', 'Physics or Chemistry recommended', 'English language proficiency'].map((req, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#B99750] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#0B1B3A] rounded-xl p-8 text-white">
              <Calendar className="w-12 h-12 text-[#B99750] mb-4" />
              <h3 className="text-2xl font-bold mb-4">1+2 Course Structure</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-[#B99750] font-semibold">Year 1 - KCIC</p>
                  <p className="text-gray-300">Foundation in biomedical engineering principles</p>
                </div>
                <div>
                  <p className="text-[#B99750] font-semibold">Years 2-3 - UK University</p>
                  <p className="text-gray-300">Complete your BSc (Hons) degree</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
