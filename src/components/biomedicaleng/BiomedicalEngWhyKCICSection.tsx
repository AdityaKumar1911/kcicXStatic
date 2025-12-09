import { Award, Users, Building, Globe } from 'lucide-react';

const reasons = [
  { icon: Award, title: 'Accredited Programs', description: 'Study programs recognized by professional engineering bodies' },
  { icon: Users, title: 'Industry Experts', description: 'Learn from faculty with real-world medical device experience' },
  { icon: Building, title: 'Lab Facilities', description: 'Access state-of-the-art biomedical engineering laboratories' },
  { icon: Globe, title: 'Global Opportunities', description: 'Progress to top UK universities and international careers' },
];

const universities = ['University of Sheffield', 'University of Birmingham', 'University of Leeds', 'Queen Mary University'];

export default function BiomedicalEngWhyKCICSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1B3A] mb-4">Why Study at KCIC?</h2>
          <p className="text-xl text-gray-600">Your pathway to a successful biomedical engineering career</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-xl transition-all border border-gray-200">
              <reason.icon className="w-12 h-12 text-[#B99750] mx-auto mb-4" />
              <h3 className="text-lg font-bold text-[#0B1B3A] mb-2">{reason.title}</h3>
              <p className="text-gray-600 text-sm">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl p-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-[#0B1B3A] mb-6 text-center">Partner Universities</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {universities.map((uni, i) => (
              <div key={i} className="text-center p-4 bg-gray-50 rounded-lg">
                <p className="text-sm font-semibold text-gray-700">{uni}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
