import { Building2, Ruler, Waves, Hammer, Shield, Zap } from 'lucide-react';

const modules = [
  { icon: Building2, title: 'Structural Engineering', description: 'Design and analysis of buildings, bridges, and infrastructure' },
  { icon: Ruler, title: 'Surveying & Geomatics', description: 'Land surveying, mapping, and spatial data analysis' },
  { icon: Waves, title: 'Hydraulics & Hydrology', description: 'Water resource management and fluid mechanics' },
  { icon: Hammer, title: 'Construction Management', description: 'Project planning, cost estimation, and site management' },
  { icon: Shield, title: 'Geotechnical Engineering', description: 'Soil mechanics, foundation design, and ground investigation' },
  { icon: Zap, title: 'Sustainable Infrastructure', description: 'Green building, renewable materials, and environmental impact' },
];

export default function CivilModulesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">What You'll Study</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Master the fundamentals of civil engineering with industry-relevant modules
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <module.icon className="h-12 w-12 text-[#B99750] mb-4" />
              <h3 className="text-xl font-bold mb-2">{module.title}</h3>
              <p className="text-gray-600">{module.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
