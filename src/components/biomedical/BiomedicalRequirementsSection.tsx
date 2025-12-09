import { CheckCircle2, GraduationCap } from 'lucide-react';

export default function BiomedicalRequirementsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1B3A] mb-4">Entry Requirements</h2>
            <p className="text-lg text-gray-600">Start your biomedical science journey with us</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-[#FAF3E0] p-8 rounded-lg">
              <GraduationCap className="w-12 h-12 text-[#B99750] mb-4" />
              <h3 className="text-2xl font-bold text-[#0B1B3A] mb-4">Academic Requirements</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#B99750] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Class 12 with 60% in Science stream</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#B99750] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Biology and Chemistry required</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#B99750] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">IELTS 6.0 or equivalent</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#0B1B3A] p-8 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-4">1+2 Course Structure</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-[#B99750] font-semibold mb-1">Year 1-2: India (KCIC)</p>
                  <p className="text-[#FAF3E0]">Foundation and Level 4 studies</p>
                </div>
                <div>
                  <p className="text-[#B99750] font-semibold mb-1">Year 3-4: UK University</p>
                  <p className="text-[#FAF3E0]">Complete your degree with placement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
