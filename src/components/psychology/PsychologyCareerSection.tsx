import Layout from '@/components/Layout';
import { Briefcase, Building2, GraduationCap, Users } from 'lucide-react';

const careers = [
  { icon: Briefcase, title: 'Clinical Psychologist', salary: '£35,000 - £85,000', desc: 'Assess and treat mental health conditions in clinical settings' },
  { icon: Building2, title: 'Organizational Psychologist', salary: '£30,000 - £70,000', desc: 'Improve workplace productivity and employee wellbeing' },
  { icon: GraduationCap, title: 'Educational Psychologist', salary: '£37,000 - £65,000', desc: 'Support learning and development in educational institutions' },
  { icon: Users, title: 'Counseling Psychologist', salary: '£28,000 - £60,000', desc: 'Provide therapeutic support for personal and emotional issues' },
];

export default function PsychologyCareerSection() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-[#0B1B3A] to-[#0B1B3A]/95">
      <Layout>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Career Pathways</h2>
          <p className="text-lg text-[#FAF3E0] max-w-3xl mx-auto">
            Graduate with the skills to excel in diverse psychology careers
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {careers.map((career, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-sm border-2 border-[#B99750] p-6 rounded-xl hover:bg-white/15 transition-all duration-300">
              <career.icon className="w-12 h-12 text-[#B99750] mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">{career.title}</h3>
              <p className="text-[#B99750] font-semibold text-lg mb-3">{career.salary}</p>
              <p className="text-gray-200">{career.desc}</p>
            </div>
          ))}
        </div>
      </Layout>
    </section>
  );
}
