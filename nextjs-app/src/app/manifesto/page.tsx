import { Metadata } from 'next';
import { Globe, Users, Lightbulb, BookOpen, Target, Heart, Award, Rocket, Building2, Shield, UserCheck, Eye, Flag, GraduationCap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Manifesto | KCIC',
  description: 'The principles that guide our mission to transform global education.',
};

const principles = [
  { icon: Globe, title: 'Global Education', desc: 'Breaking barriers to provide world-class education.' },
  { icon: Users, title: 'Student-Centric', desc: 'Every decision prioritizes student success.' },
  { icon: Lightbulb, title: 'Innovation', desc: 'Pioneering new learning pathways.' },
  { icon: BookOpen, title: 'Excellence', desc: 'Highest standards through top partnerships.' },
  { icon: Target, title: 'Clear Pathways', desc: 'Transparent routes to degree completion.' },
  { icon: Heart, title: 'Community', desc: 'Nurturing environment for growth.' },
  { icon: Award, title: 'Quality', desc: 'International benchmark standards.' },
  { icon: Rocket, title: 'Future-Ready', desc: 'Skills for tomorrow\'s challenges.' },
];

const team = [
  { name: 'Dr. Rajesh Kumar', role: 'CEO', bio: '20+ years in international education' },
  { name: 'Prof. Sarah Mitchell', role: 'Academic Director', bio: 'Former Dean at leading UK university' },
  { name: 'Mr. Anil Sharma', role: 'COO', bio: 'Expert in educational operations' },
];

export default function ManifestoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF3E0] to-white">
      {/* Hero */}
      <div className="relative h-[50vh] bg-gradient-to-br from-[#0B1B3A] via-[#B99750] to-[#0B1B3A] flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Manifesto</h1>
          <p className="text-xl md:text-2xl text-[#FAF3E0]">The principles that guide our mission</p>
        </div>
      </div>

      {/* Principles */}
      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
          At KCIC, we're a movement dedicated to democratizing world-class education.
        </p>
        <div className="grid md:grid-cols-4 gap-6">
          {principles.map((p, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border-2 border-[#B99750]/20 hover:border-[#B99750] transition-all hover:shadow-xl text-center">
              <div className="w-12 h-12 rounded-2xl bg-[#0B1B3A] flex items-center justify-center mx-auto mb-4">
                <p.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-[#0B1B3A]">{p.title}</h3>
              <p className="text-sm text-gray-600">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="bg-gradient-to-br from-[#0B1B3A] to-[#0B1B3A]/90 py-20">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div className="bg-white/10 backdrop-blur-sm p-10 rounded-xl border-2 border-[#B99750]/30">
            <div className="w-16 h-16 rounded-2xl bg-[#B99750] flex items-center justify-center mx-auto mb-6">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-center mb-6 text-white">Our Vision</h2>
            <p className="text-lg text-[#FAF3E0] text-center">
              To be the world's leading bridge between aspiring students and global educational excellence.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-10 rounded-xl border-2 border-[#B99750]/30">
            <div className="w-16 h-16 rounded-2xl bg-[#B99750] flex items-center justify-center mx-auto mb-6">
              <Flag className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-center mb-6 text-white">Our Mission</h2>
            <p className="text-lg text-[#FAF3E0] text-center">
              To democratize access to world-class education through comprehensive support and strategic partnerships.
            </p>
          </div>
        </div>
      </div>

      {/* Story */}
      <div className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="w-16 h-16 rounded-2xl bg-[#0B1B3A] flex items-center justify-center mx-auto mb-6">
            <Building2 className="w-8 h-8 text-[#B99750]" />
          </div>
          <h2 className="text-4xl font-bold mb-8 text-[#0B1B3A]">The KCIC Story</h2>
          <p className="text-lg text-gray-700 mb-6">
            Founded with a vision to bridge the gap between aspiration and achievement, KCIC emerged from a simple yet powerful idea: every student deserves access to world-class education.
          </p>
          <p className="text-lg text-gray-700">
            Today, KCIC stands as a testament to what's possible when passion meets purpose, transforming lives through accessible international education pathways.
          </p>
        </div>
      </div>

      {/* Team */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="w-16 h-16 rounded-2xl bg-[#0B1B3A] flex items-center justify-center mx-auto mb-6">
            <UserCheck className="w-8 h-8 text-[#B99750]" />
          </div>
          <h2 className="text-4xl font-bold text-center mb-12 text-[#0B1B3A]">Our Leadership</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((m, i) => (
              <div key={i} className="bg-white p-8 rounded-xl border-2 border-[#B99750]/20 hover:border-[#B99750] transition-all text-center">
                <div className="w-24 h-24 rounded-full bg-[#0B1B3A] mx-auto mb-4 flex items-center justify-center">
                  <UserCheck className="w-12 h-12 text-[#B99750]" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#0B1B3A]">{m.name}</h3>
                <p className="text-[#B99750] font-semibold mb-3">{m.role}</p>
                <p className="text-gray-600 text-sm">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
