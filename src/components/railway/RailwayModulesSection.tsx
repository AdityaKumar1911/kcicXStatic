import { Card } from '@/components/ui/card';
import { Train, Zap, Cog, Radio } from 'lucide-react';

export default function RailwayModulesSection() {
  const modules = [
    { icon: Train, title: 'Railway Systems', description: 'Traction systems, signaling, and control' },
    { icon: Zap, title: 'Power Engineering', description: 'Electrical power distribution and substations' },
    { icon: Radio, title: 'Signaling & Control', description: 'ERTMS, ETCS, and communication systems' },
    { icon: Cog, title: 'Rolling Stock', description: 'Train design, maintenance, and operations' }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Program Modules</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((module, idx) => (
            <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
              <module.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{module.title}</h3>
              <p className="text-gray-600">{module.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
