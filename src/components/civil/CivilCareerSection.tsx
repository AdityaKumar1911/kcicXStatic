import { Briefcase } from 'lucide-react';

const careers = [
  { title: 'Structural Engineer', salary: '£30,000 - £55,000', description: 'Design and analyze structural systems for buildings and infrastructure' },
  { title: 'Site Engineer', salary: '£28,000 - £45,000', description: 'Oversee construction projects and ensure quality standards' },
  { title: 'Transportation Engineer', salary: '£32,000 - £50,000', description: 'Plan and design transportation systems and infrastructure' },
  { title: 'Water Resources Engineer', salary: '£30,000 - £48,000', description: 'Design water supply, drainage, and flood management systems' },
];

export default function CivilCareerSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Career Pathways</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Graduate with skills for high-demand roles in civil engineering
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {careers.map((career, index) => (
            <div key={index} className="border-2 border-gray-200 rounded-lg p-6 hover:border-[#B99750] transition-colors">
              <Briefcase className="h-10 w-10 text-[#B99750] mb-4" />
              <h3 className="text-xl font-bold mb-2">{career.title}</h3>
              <p className="text-[#B99750] font-semibold mb-2">{career.salary}</p>
              <p className="text-gray-600">{career.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
