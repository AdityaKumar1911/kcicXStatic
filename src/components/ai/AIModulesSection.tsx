import { Brain, Code, Database, Network, Cpu, LineChart } from 'lucide-react';
import Layout from '@/components/Layout';

const modules = [
  { icon: Brain, title: 'Machine Learning', desc: 'Master supervised and unsupervised learning algorithms and neural networks' },
  { icon: Code, title: 'AI Programming', desc: 'Develop proficiency in Python, TensorFlow, PyTorch, and AI frameworks' },
  { icon: Database, title: 'Data Science', desc: 'Learn data preprocessing, feature engineering, and statistical analysis' },
  { icon: Network, title: 'Deep Learning', desc: 'Explore CNNs, RNNs, GANs, and transformer architectures' },
  { icon: Cpu, title: 'Natural Language Processing', desc: 'Build systems that understand and generate human language' },
  { icon: LineChart, title: 'AI Ethics & Deployment', desc: 'Understand responsible AI development and real-world implementation' },
];

export default function AIModulesSection() {
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
