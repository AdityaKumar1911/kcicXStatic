import { Globe, Users, Lightbulb, BookOpen, Target, Heart, Award, Rocket, Building2, Shield, UserCheck, Eye, Flag, GraduationCap } from 'lucide-react';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';


export default function Manifesto() {
  const principles = [
    { icon: Globe, title: "Global Education for All", desc: "Breaking geographical barriers to provide world-class education accessible to every student." },
    { icon: Users, title: "Student-Centric Approach", desc: "Every decision we make prioritizes student success, growth, and well-being." },
    { icon: Lightbulb, title: "Innovation in Learning", desc: "Pioneering new pathways that blend traditional excellence with modern innovation." },
    { icon: BookOpen, title: "Academic Excellence", desc: "Maintaining the highest standards through partnerships with top global universities." },
    { icon: Target, title: "Clear Pathways", desc: "Transparent, structured routes from enrollment to international degree completion." },
    { icon: Heart, title: "Supportive Community", desc: "Building a nurturing environment where students thrive academically and personally." },
    { icon: Award, title: "Quality Assurance", desc: "Rigorous standards ensuring every program meets international benchmarks." },
    { icon: Rocket, title: "Future-Ready Skills", desc: "Equipping students with skills and mindsets for tomorrow's global challenges." }
  ];

  const managementTeam = [
    { name: "Dr. Rajesh Kumar", role: "Chief Executive Officer", bio: "20+ years in international education leadership" },
    { name: "Prof. Sarah Mitchell", role: "Academic Director", bio: "Former Dean at leading UK university" },
    { name: "Mr. Anil Sharma", role: "Chief Operating Officer", bio: "Expert in educational operations and quality" }
  ];

  const advisoryBoard = [
    { name: "Dr. Elizabeth Thompson", role: "International Education Advisor", expertise: "Former Vice-Chancellor, University of Melbourne", specialization: "Global Education Policy" },
    { name: "Prof. Vikram Patel", role: "Academic Excellence Advisor", expertise: "Rhodes Scholar, Oxford University", specialization: "Curriculum Development" },
    { name: "Ms. Jennifer Lee", role: "Student Success Advisor", expertise: "20+ years in Student Affairs, Harvard", specialization: "Student Welfare & Support" },
    { name: "Dr. Amit Desai", role: "Industry Partnership Advisor", expertise: "Former CEO, Tech Education Corp", specialization: "Work-Integrated Learning" }
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF3E0] to-white">
      <Navigation />
      
      <div className="relative h-[60vh] bg-gradient-to-br from-[#0B1B3A] via-[#B99750] to-[#0B1B3A] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 h-full flex items-center justify-center relative z-10 pt-20">
          <div className="text-center max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Manifesto</h1>
            <p className="text-xl md:text-2xl text-[#FAF3E0]">The principles that guide our mission to transform global education</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-20">

        <div className="max-w-3xl mx-auto mb-16 text-center">
          <p className="text-lg text-gray-700 leading-relaxed">At KCIC, we're not just an educational institution—we're a movement dedicated to democratizing world-class education.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {principles.map((principle, idx) => (
            <div 
              key={idx} 
              className="bg-white p-6 rounded-xl border-2 border-[#B99750]/20 hover:border-[#B99750] transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0B1B3A] flex items-center justify-center">
                  <principle.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2 text-[#0B1B3A] text-center">{principle.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed text-center">{principle.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Vision and Mission Section */}
      <div className="bg-gradient-to-br from-[#0B1B3A] to-[#0B1B3A]/90 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Vision */}
              <div className="bg-white/10 backdrop-blur-sm p-10 rounded-xl border-2 border-[#B99750]/30 hover:border-[#B99750] transition-all duration-300">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#B99750] flex items-center justify-center">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-white">Our Vision</h2>
                <p className="text-lg text-[#FAF3E0] leading-relaxed text-center">
                  To be the world's leading bridge between aspiring students and global educational excellence, transforming lives through accessible, high-quality international education pathways that empower every student to achieve their full potential.
                </p>
              </div>

              {/* Mission */}
              <div className="bg-white/10 backdrop-blur-sm p-10 rounded-xl border-2 border-[#B99750]/30 hover:border-[#B99750] transition-all duration-300">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#B99750] flex items-center justify-center">
                    <Flag className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-white">Our Mission</h2>
                <p className="text-lg text-[#FAF3E0] leading-relaxed text-center">
                  To democratize access to world-class education by providing comprehensive support, innovative learning pathways, and strategic partnerships with leading global universities, ensuring every student receives personalized guidance from enrollment to graduation and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* KCIC Story Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">

          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-[#0B1B3A] flex items-center justify-center">
                <Building2 className="w-8 h-8 text-[#B99750]" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-[#0B1B3A]">The KCIC Story</h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">Founded with a vision to bridge the gap between aspiration and achievement, KCIC emerged from a simple yet powerful idea: every student deserves access to world-class education, regardless of their geographical location.</p>
              <p className="text-lg">Our journey began when a group of education pioneers recognized that talented students across India were facing barriers to international education—not due to lack of ability, but due to limited access and guidance. We set out to change that narrative.</p>
              <p className="text-lg">Today, KCIC stands as a testament to what's possible when passion meets purpose. Through strategic partnerships with leading global universities, we've created pathways that allow students to begin their international degree journey right here in India, with full support and guidance every step of the way.</p>
              <p className="text-lg">Our story is still being written—by every student who walks through our doors, every graduate who achieves their dreams, and every family whose lives we touch. We're not just building an institution; we're building a legacy of transformed lives and realized potential.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quality Assurance Section */}
      <div className="bg-gradient-to-br from-[#0B1B3A] via-[#1a2f5a] to-[#0B1B3A] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">

          <div className="max-w-5xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-[#B99750] flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">Our Quality Assurance Standards</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-[#B99750]/30 hover:bg-white/20 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-white">Academic Excellence</h3>
                <ul className="space-y-3 text-[#FAF3E0]">
                  <li className="flex items-start"><span className="text-[#B99750] mr-2">•</span>All programs aligned with international university standards</li>
                  <li className="flex items-start"><span className="text-[#B99750] mr-2">•</span>Regular curriculum reviews and updates</li>
                  <li className="flex items-start"><span className="text-[#B99750] mr-2">•</span>Qualified faculty with international credentials</li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-[#B99750]/30 hover:bg-white/20 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-white">Student Support</h3>
                <ul className="space-y-3 text-[#FAF3E0]">
                  <li className="flex items-start"><span className="text-[#B99750] mr-2">•</span>24/7 academic and personal counseling</li>
                  <li className="flex items-start"><span className="text-[#B99750] mr-2">•</span>Small batch sizes for personalized attention</li>
                  <li className="flex items-start"><span className="text-[#B99750] mr-2">•</span>Comprehensive visa and transition support</li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-[#B99750]/30 hover:bg-white/20 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-white">Infrastructure & Facilities</h3>
                <ul className="space-y-3 text-[#FAF3E0]">
                  <li className="flex items-start"><span className="text-[#B99750] mr-2">•</span>State-of-the-art learning environments</li>
                  <li className="flex items-start"><span className="text-[#B99750] mr-2">•</span>Advanced technology and digital resources</li>
                  <li className="flex items-start"><span className="text-[#B99750] mr-2">•</span>Safe, secure, and comfortable campuses</li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-[#B99750]/30 hover:bg-white/20 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-white">Continuous Improvement</h3>
                <ul className="space-y-3 text-[#FAF3E0]">
                  <li className="flex items-start"><span className="text-[#B99750] mr-2">•</span>Regular student feedback and satisfaction surveys</li>
                  <li className="flex items-start"><span className="text-[#B99750] mr-2">•</span>Annual external quality audits</li>
                  <li className="flex items-start"><span className="text-[#B99750] mr-2">•</span>Transparent reporting and accountability</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Management Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">

          <div className="max-w-5xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-[#0B1B3A] flex items-center justify-center">
                <UserCheck className="w-8 h-8 text-[#B99750]" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#0B1B3A]">Our Management</h2>
            <p className="text-center text-lg text-gray-700 mb-12 max-w-3xl mx-auto">Led by a team of experienced education professionals with a shared vision of making international education accessible to all.</p>
            <div className="grid md:grid-cols-3 gap-8">
              {managementTeam.map((member, idx) => (
                <div key={idx} className="bg-gradient-to-br from-[#FAF3E0] to-white p-8 rounded-xl border-2 border-[#B99750]/20 hover:border-[#B99750] transition-all duration-300 hover:shadow-xl text-center">
                  <div className="w-24 h-24 rounded-full bg-[#0B1B3A] mx-auto mb-4 flex items-center justify-center">
                    <UserCheck className="w-12 h-12 text-[#B99750]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-[#0B1B3A]">{member.name}</h3>
                  <p className="text-[#B99750] font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>




      {/* Advisory Board Section */}
      <div className="bg-gradient-to-br from-[#0B1B3A] via-[#1a2f5a] to-[#0B1B3A] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">

          <div className="max-w-6xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-[#B99750] flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-white">Our Advisory Board</h2>
            <p className="text-center text-lg text-[#FAF3E0] mb-12 max-w-3xl mx-auto">
              Guided by world-renowned experts in international education, academic excellence, and student success who bring decades of experience from leading global institutions.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {advisoryBoard.map((advisor, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border-2 border-[#B99750]/30 hover:border-[#B99750] hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="w-20 h-20 rounded-full bg-[#B99750] flex-shrink-0 flex items-center justify-center">
                      <GraduationCap className="w-10 h-10 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1 text-white">{advisor.name}</h3>
                      <p className="text-[#B99750] font-semibold mb-3">{advisor.role}</p>
                      <p className="text-[#FAF3E0] text-sm mb-2">{advisor.expertise}</p>
                      <p className="text-white/80 text-sm italic">Specialization: {advisor.specialization}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>

  );
}
