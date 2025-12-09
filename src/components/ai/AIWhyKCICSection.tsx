import Layout from '@/components/Layout';
import { Award, Users, Briefcase, Globe } from 'lucide-react';

const reasons = [
  { icon: Award, title: 'Industry Partnerships', desc: 'Collaborate with leading tech companies like IBM, Google, and Microsoft' },
  { icon: Users, title: 'Expert Faculty', desc: 'Learn from AI researchers and industry professionals' },
  { icon: Briefcase, title: 'Hands-on Projects', desc: 'Build real AI solutions and machine learning models' },
  { icon: Globe, title: 'Global Opportunities', desc: 'Transfer to top UK universities with placement year' },
];

const universities = ['University of Hertfordshire', 'Coventry University', 'De Montfort University'];

export default function AIWhyKCICSection() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <Layout>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1B3A] mb-12 text-center">Why Study AI at KCIC?</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {reasons.map((reason, idx) => (
            <div key={idx} className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#0B1B3A] to-[#B99750] rounded-full mb-4">
                <reason.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#0B1B3A] mb-3">{reason.title}</h3>
              <p className="text-gray-600 text-base leading-relaxed">{reason.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-[#FAF3E0] to-white p-8 rounded-2xl border-2 border-[#B99750]/20">
          <h3 className="text-2xl font-bold text-[#0B1B3A] mb-6 text-center">Transfer University Options</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {universities.map((uni, idx) => (
              <div key={idx} className="bg-white px-6 py-3 rounded-full border-2 border-[#B99750]/30 font-semibold text-[#0B1B3A]">
                {uni}
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </section>
  );
}
