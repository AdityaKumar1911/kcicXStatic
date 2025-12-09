import Layout from '@/components/Layout';
import { Quote } from 'lucide-react';

export default function PsychologySuccessStorySection() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <Layout>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1B3A] mb-4">Student Success Story</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from our graduates making a difference
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center bg-gradient-to-br from-[#0B1B3A] to-[#0B1B3A]/90 p-8 rounded-2xl border-2 border-[#B99750]">
          <div className="relative">
            <img 
              src="https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1763084584989_cf33c216.webp" 
              alt="Psychology Graduate" 
              className="rounded-xl w-full h-auto shadow-2xl"
            />
          </div>
          
          <div className="text-white">
            <Quote className="w-12 h-12 text-[#B99750] mb-4" />
            <p className="text-xl leading-relaxed mb-6">
              "The KCIC pathway gave me the perfect foundation in psychology. The placement year was transformative - I worked at a leading mental health clinic and secured a graduate role before finishing my degree."
            </p>
            <div className="border-t border-[#B99750] pt-4">
              <h4 className="text-2xl font-bold text-[#B99750]">Priya Sharma</h4>
              <p className="text-[#FAF3E0] mb-4">Clinical Psychologist, NHS Trust</p>
              <div className="space-y-2 text-sm">
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#B99750] rounded-full"></span>
                  First Class Honours Degree
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#B99750] rounded-full"></span>
                  £42,000 starting salary
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </section>
  );
}
