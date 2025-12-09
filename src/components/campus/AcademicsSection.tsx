import { Button } from '@/components/ui/button';
import { BookOpen, Users, Lightbulb, FileCheck, Briefcase, GraduationCap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const academicFeatures = [
  { 
    icon: Users, 
    title: '1:1 Mentoring', 
    description: 'Personal attention with maximum 30 students per class',
    image: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1764504057186_b830f94a.webp'
  },
  { 
    icon: Lightbulb, 
    title: 'Learning by Doing', 
    description: 'Hands-on practical experience in real-world scenarios',
    image: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1764504059149_078c2c9c.webp'
  },
  { 
    icon: FileCheck, 
    title: 'Assignment-Based', 
    description: 'Complete meaningful assignments instead of traditional exams',
    image: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1764504061064_d73d5606.webp'
  },
  { 
    icon: Briefcase, 
    title: 'Work-Integrated', 
    description: '2.5 days of classes with 3 days of work experience per week',
    image: 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1764504063036_367e6d18.webp'
  }
];

export default function AcademicsSection() {
  const navigate = useNavigate();

  return (
    <section className="py-16 sm:py-20 bg-[#0B1B3A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#B99750]/20 rounded-full text-[#B99750] text-sm font-medium mb-4">
            <BookOpen className="w-4 h-4" />
            Academic Excellence
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Academics at KCIC</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Our innovative approach combines personalized mentoring with practical, work-integrated learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {academicFeatures.map((feature, index) => (
            <div key={index} className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/10 transition-all border border-white/10">
              <div className="flex flex-col sm:flex-row">
                <div className="sm:w-2/5 h-48 sm:h-auto">
                  <img src={feature.image} alt={feature.title} className="w-full h-full object-cover" />
                </div>
                <div className="sm:w-3/5 p-6 flex flex-col justify-center">
                  <div className="bg-[#B99750] w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-white/70">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button onClick={() => navigate('/contact')} className="bg-[#B99750] hover:bg-[#a88645] text-white px-8 py-6 text-lg rounded-full group">
            <GraduationCap className="mr-2 h-5 w-5" />
            Speak to Our Counsellor
          </Button>
        </div>
      </div>
    </section>
  );
}
