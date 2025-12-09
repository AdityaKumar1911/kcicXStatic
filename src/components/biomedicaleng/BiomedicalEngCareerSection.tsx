import Layout from '@/components/Layout';
import { Briefcase } from 'lucide-react';

const careers = [
  { title: 'Medical Device Engineer', salary: '£35,000 - £55,000', companies: 'Medtronic, Johnson & Johnson, Philips' },
  { title: 'Clinical Engineer', salary: '£32,000 - £50,000', companies: 'NHS, Siemens Healthineers, GE Healthcare' },
  { title: 'Regulatory Affairs Specialist', salary: '£30,000 - £48,000', companies: 'BSI, TÜV, Notified Bodies' },
  { title: 'Biomedical Researcher', salary: '£28,000 - £45,000', companies: 'Universities, Research Institutes, Pharma' },
];

export default function BiomedicalEngCareerSection() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-[#0B1B3A] to-[#1a2942]">
      <Layout>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Career Pathways</h2>
          <p className="text-lg text-[#FAF3E0]/80 max-w-3xl mx-auto">
            Launch your career in the rapidly growing medical technology sector
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
