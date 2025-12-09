import Layout from '@/components/Layout';
import { CheckCircle2 } from 'lucide-react';

export default function MotorsportRequirementsSection() {
  return (
    <section className="py-16 sm:py-20 bg-[#FAF3E0]">
      <Layout>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1B3A] mb-6">Entry Requirements</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#B99750] flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-base leading-relaxed">12th Grade with 60% in Physics, Chemistry & Mathematics</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#B99750] flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-base leading-relaxed">IELTS 6.0 overall (5.5 in each component) or equivalent</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#B99750] flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-base leading-relaxed">Strong interest in automotive and motorsport engineering</p>
              </div>
            </div>

          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1B3A] mb-6">Course Structure (2+2)</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl border-2 border-[#B99750]/30">
                <h3 className="text-xl font-bold text-[#0B1B3A] mb-2">Years 1-2: KCIC India</h3>
                <p className="text-gray-600 text-base">Build strong foundations in engineering principles and motorsport fundamentals</p>
              </div>
              <div className="bg-white p-6 rounded-xl border-2 border-[#B99750]/30">
                <h3 className="text-xl font-bold text-[#0B1B3A] mb-2">Years 3-4: UK University</h3>
                <p className="text-gray-600 text-base">Complete your degree at a top UK university with industry placements</p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </section>
  );
}
