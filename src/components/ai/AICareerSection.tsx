import Layout from '@/components/Layout';
import { Briefcase } from 'lucide-react';

const careers = [
  { title: 'Machine Learning Engineer', salary: '£34,000 - £60,000', companies: 'Google, IBM, Microsoft' },
  { title: 'AI Research Scientist', salary: '£36,000 - £65,000', companies: 'Apple, Amazon, Meta' },
  { title: 'Data Scientist', salary: '£32,000 - £55,000', companies: 'Concentrix, SAP, Synopsys' },
  { title: 'NLP Engineer', salary: '£35,000 - £62,000', companies: 'Salesforce, Liberty IT, Cisco' },
];

export default function AICareerSection() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-[#0B1B3A] to-[#1a2942]">
      <Layout>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Career Pathways</h2>
          <p className="text-lg text-[#FAF3E0]/80 max-w-3xl mx-auto">
            Graduate into high-demand roles with top tech companies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {careers.map((career, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-sm border border-[#B99750]/30 rounded-xl p-6 hover:bg-white/15 hover:border-[#B99750] transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-[#B99750] p-3 rounded-lg flex-shrink-0">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{career.title}</h3>
                  <p className="text-[#B99750] font-semibold text-base mb-2">{career.salary}</p>
                  <p className="text-[#FAF3E0]/80 text-base leading-relaxed">{career.companies}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Layout>
    </section>
  );
}
