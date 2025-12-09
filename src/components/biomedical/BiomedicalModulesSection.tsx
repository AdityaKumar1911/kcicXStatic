import { Microscope, FlaskConical, Dna, Stethoscope, Brain, Pill } from 'lucide-react';

export default function BiomedicalModulesSection() {
  const modules = [
    { icon: Microscope, title: 'Human Anatomy & Physiology', description: 'Study the structure and function of the human body systems' },
    { icon: FlaskConical, title: 'Clinical Biochemistry', description: 'Analyze biochemical processes in health and disease' },
    { icon: Dna, title: 'Molecular Biology & Genetics', description: 'Explore DNA, RNA, and genetic mechanisms' },
    { icon: Stethoscope, title: 'Medical Microbiology', description: 'Investigate pathogens and infectious diseases' },
    { icon: Brain, title: 'Immunology & Pathology', description: 'Understand immune responses and disease processes' },
    { icon: Pill, title: 'Pharmacology & Toxicology', description: 'Study drug mechanisms and toxic substances' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1B3A] mb-4">Course Modules</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive curriculum covering essential biomedical science disciplines
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => {
            const Icon = module.icon;
            return (
              <div key={index} className="bg-[#FAF3E0] p-6 rounded-lg hover:shadow-lg transition-shadow">
                <Icon className="w-12 h-12 text-[#B99750] mb-4" />
                <h3 className="text-xl font-bold text-[#0B1B3A] mb-2">{module.title}</h3>
                <p className="text-gray-700">{module.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
