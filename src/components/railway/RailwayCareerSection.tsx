import { Card } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

export default function RailwayCareerSection() {
  const careers = [
    { title: 'Railway Systems Engineer', salary: '£35,000 - £55,000', companies: 'Network Rail, Siemens, Alstom' },
    { title: 'Signaling Engineer', salary: '£38,000 - £60,000', companies: 'Hitachi Rail, Bombardier, Thales' },
    { title: 'Traction & Power Engineer', salary: '£36,000 - £58,000', companies: 'HS2, Crossrail, TfL' },
    { title: 'Rolling Stock Engineer', salary: '£34,000 - £52,000', companies: 'CAF, Stadler, Angel Trains' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Career Opportunities</h2>
          <p className="text-xl text-gray-600">High-demand roles in the growing rail industry</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {careers.map((career, idx) => (
            <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
              <Briefcase className="w-10 h-10 text-blue-600 mb-3" />
              <h3 className="text-xl font-semibold mb-2">{career.title}</h3>
              <p className="text-green-600 font-semibold mb-2">{career.salary}</p>
              <p className="text-gray-600 text-sm">{career.companies}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
