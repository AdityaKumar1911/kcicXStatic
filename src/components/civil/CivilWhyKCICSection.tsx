import { Award, Users, Building, Globe } from 'lucide-react';

const reasons = [
  { icon: Award, title: 'ICE Accredited', description: 'Programs recognized by Institution of Civil Engineers' },
  { icon: Users, title: 'Industry Experts', description: 'Learn from practicing civil engineers' },
  { icon: Building, title: 'Site Visits', description: 'Regular visits to major construction projects' },
  { icon: Globe, title: 'Global Opportunities', description: 'Progress to top UK universities' },
];

export default function CivilWhyKCICSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Study at KCIC?</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center">
              <div className="bg-[#B99750]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <reason.icon className="h-10 w-10 text-[#B99750]" />
              </div>
              <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6">Partner Universities</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Progress to prestigious institutions including University of Birmingham, University of Leeds, 
            and University of Sheffield for Years 2-3 of your degree.
          </p>
        </div>
      </div>
    </section>
  );
}
