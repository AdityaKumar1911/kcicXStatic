import { Card } from '@/components/ui/card';
import { Award, Users, Briefcase, GraduationCap } from 'lucide-react';

export default function RailwayWhyKCICSection() {
  const reasons = [
    { icon: Award, title: 'Industry Partnerships', description: 'Collaborations with Network Rail and major operators' },
    { icon: Users, title: 'Expert Faculty', description: 'Learn from experienced railway engineering professionals' },
    { icon: Briefcase, title: 'Industry Placements', description: 'Work experience with leading rail companies' },
    { icon: GraduationCap, title: 'University Progression', description: 'Direct pathway to top UK universities' }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Study at KCIC?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, idx) => (
            <Card key={idx} className="p-6 text-center hover:shadow-lg transition-shadow">
              <reason.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
