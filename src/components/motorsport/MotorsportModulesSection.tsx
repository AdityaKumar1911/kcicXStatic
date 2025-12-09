import { Cog, Zap, Wind, Gauge, Wrench, LineChart } from 'lucide-react';
import Layout from '@/components/Layout';

const modules = [
  { icon: Cog, title: 'Vehicle Dynamics', desc: 'Master suspension, steering, and chassis design for optimal performance' },
  { icon: Zap, title: 'Powertrain Engineering', desc: 'Study engine design, hybrid systems, and electric propulsion' },
  { icon: Wind, title: 'Aerodynamics', desc: 'Learn computational fluid dynamics and wind tunnel testing' },
  { icon: Gauge, title: 'Data Analysis', desc: 'Analyze telemetry data and optimize vehicle performance' },
  { icon: Wrench, title: 'Manufacturing', desc: 'Explore advanced materials and production techniques' },
  { icon: LineChart, title: 'Race Strategy', desc: 'Understand race engineering and strategic decision-making' },
];

export default function MotorsportModulesSection() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <Layout>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1B3A] mb-4">Course Modules</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive curriculum designed with industry experts
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, idx) => (
            <div key={idx} className="bg-gradient-to-br from-[#0B1B3A] to-[#0B1B3A]/90 p-6 rounded-xl border-2 border-[#B99750] hover:border-[#B99750] hover:shadow-2xl transition-all duration-300 flex items-start gap-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-3">{module.title}</h3>
                <p className="text-gray-200 text-base leading-relaxed">{module.desc}</p>
              </div>
              <module.icon className="w-10 h-10 text-[#B99750] flex-shrink-0 mt-1" />
            </div>
          ))}
        </div>

      </Layout>
    </section>
  );
}
