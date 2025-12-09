import Layout from '@/components/Layout';
import { Award, Users, Briefcase, TrendingUp } from 'lucide-react';

const reasons = [
  { icon: Award, title: 'BPS Accredited', desc: 'Graduate Basis for Chartered Membership (GBC) with the British Psychological Society' },
  { icon: Users, title: 'Small Batch Learning', desc: 'Personalized attention with expert faculty and interactive sessions' },
  { icon: Briefcase, title: 'Industry Placement', desc: 'Gain real-world experience in clinical, organizational, or research settings' },
  { icon: TrendingUp, title: 'Career Support', desc: 'Dedicated career guidance and connections with leading psychology employers' },
];

export default function PsychologyWhyKCICSection() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <Layout>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1B3A] mb-4">Why Study Psychology at KCIC?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Your pathway to a rewarding psychology career
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {reasons.map((reason, idx) => (
            <div key={idx} className="bg-gradient-to-br from-[#0B1B3A] to-[#0B1B3A]/90 p-6 rounded-xl border-2 border-[#B99750] hover:shadow-2xl transition-all duration-300">
              <reason.icon className="w-12 h-12 text-[#B99750] mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
              <p className="text-gray-200">{reason.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 p-8 rounded-xl border-2 border-[#B99750]">
          <h3 className="text-2xl font-bold text-[#0B1B3A] mb-6 text-center">Partner Universities</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {['University of Derby', 'Coventry University', 'Anglia Ruskin University', 'University of Hertfordshire'].map((uni, idx) => (
              <div key={idx} className="bg-white p-4 rounded-lg shadow">
                <p className="font-semibold text-[#0B1B3A]">{uni}</p>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </section>
  );
}
