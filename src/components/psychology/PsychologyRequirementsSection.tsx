import Layout from '@/components/Layout';
import { CheckCircle2, GraduationCap, Globe } from 'lucide-react';

export default function PsychologyRequirementsSection() {
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <Layout>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1B3A] mb-4">Entry Requirements</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Start your psychology journey with us
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-[#B99750]">
            <GraduationCap className="w-12 h-12 text-[#B99750] mb-4" />
            <h3 className="text-2xl font-bold text-[#0B1B3A] mb-4">Academic Requirements</h3>
            <ul className="space-y-3">
              {['12th Standard (60% or above)', 'English proficiency (IELTS 6.0 or equivalent)', 'Interest in human behavior and mental processes', 'Strong analytical and communication skills'].map((req, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#B99750] flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{req}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-[#0B1B3A] to-[#0B1B3A]/90 p-8 rounded-xl shadow-lg border-2 border-[#B99750]">
            <Globe className="w-12 h-12 text-[#B99750] mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">1+2 Course Structure</h3>
            <div className="space-y-4 text-white">
              <div className="bg-white/10 p-4 rounded-lg">
                <h4 className="font-bold text-[#B99750] mb-2">Year 1: India (KCIC)</h4>
                <p className="text-sm">Foundation psychology modules and research methods</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <h4 className="font-bold text-[#B99750] mb-2">Years 2-3: UK University</h4>
                <p className="text-sm">Advanced psychology, placement year, and specialization</p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </section>
  );
}
