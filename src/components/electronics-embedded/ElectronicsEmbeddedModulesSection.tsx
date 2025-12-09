import { Card } from '@/components/ui/card';
import { Cpu, Code, Wifi, Cog } from 'lucide-react';

export default function ElectronicsEmbeddedModulesSection() {
  const modules = [
    { icon: Cpu, title: 'Microcontroller Systems', description: 'ARM Cortex, AVR, and PIC programming' },
    { icon: Code, title: 'Embedded C/C++', description: 'Real-time operating systems and firmware' },
    { icon: Wifi, title: 'IoT & Connectivity', description: 'Wireless protocols and cloud integration' },
    { icon: Cog, title: 'Hardware Design', description: 'PCB design, circuit analysis, and prototyping' }
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
