import { Briefcase } from 'lucide-react';

export default function BiomedicalCareerSection() {
  const careers = [
    { title: 'Clinical Scientist', salary: '£35,000 - £65,000', description: 'Work in hospital laboratories analyzing patient samples' },
    { title: 'Research Scientist', salary: '£30,000 - £55,000', description: 'Conduct medical research in pharmaceutical or academic settings' },
    { title: 'Medical Laboratory Technician', salary: '£28,000 - £45,000', description: 'Perform diagnostic tests and laboratory procedures' },
    { title: 'Pharmaceutical Scientist', salary: '£32,000 - £60,000', description: 'Develop and test new medications and treatments' }
  ];

  return (
    <section className="py-16 bg-[#0B1B3A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Career Pathways</h2>
          <p className="text-lg text-[#FAF3E0] max-w-3xl mx-auto">
            Launch your career in healthcare, research, and medical sciences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {careers.map((career, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-[#B99750]/30 hover:border-[#B99750] transition-colors">
              <Briefcase className="w-10 h-10 text-[#B99750] mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">{career.title}</h3>
              <p className="text-[#B99750] font-semibold text-lg mb-3">{career.salary}</p>
              <p className="text-[#FAF3E0]">{career.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
