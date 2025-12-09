import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, GraduationCap, Heart, Shield, TrendingUp, Globe, BookOpen, Award } from 'lucide-react';
import { useHapticFeedback } from '@/hooks/useHapticFeedback';
import { Link } from 'react-router-dom';

export default function ParentsStudentsSection() {
  const haptic = useHapticFeedback();

  const parentFeatures = [
    { icon: Shield, title: 'Peace of Mind', desc: 'Your child stays close during initial years while adapting to international curriculum', color: '#B99750' },
    { icon: TrendingUp, title: 'Cost Savings', desc: 'Save ₹50+ lakhs compared to direct study abroad while getting the same degree', color: '#0B1B3A' },
    { icon: Heart, title: 'Family Support', desc: 'Regular updates and transparent communication throughout the journey', color: '#B99750' },
    { icon: Award, title: 'Quality Assurance', desc: 'Partnerships with accredited universities ensuring world-class education', color: '#0B1B3A' }
  ];

  const studentFeatures = [
    { icon: Globe, title: 'Global Degree', desc: 'Earn internationally recognized degrees from top USA, UK, and Canadian universities', color: '#0B1B3A' },
    { icon: BookOpen, title: 'Smooth Transition', desc: 'Start in India, build confidence, then seamlessly transfer abroad', color: '#B99750' },
    { icon: Users, title: 'Personalized Support', desc: 'Dedicated mentors guide you through academics, visa, and cultural adaptation', color: '#0B1B3A' },
    { icon: TrendingUp, title: 'Career Opportunities', desc: 'Access to global job markets and international career prospects', color: '#B99750' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1B3A] mb-4">For Parents & Students</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Discover how KCIC benefits both parents and students</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[#0B1B3A] flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#0B1B3A]">For Parents</h3>
            </div>
            <div className="grid gap-4">
              {parentFeatures.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <Card key={idx} className="border-2 border-[#B99750]/20 hover:border-[#B99750] transition-all duration-300" onClick={() => haptic.light()}>
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: feature.color }}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-base mb-1 text-[#0B1B3A]">{feature.title}</h4>
                          <p className="text-gray-600 text-sm">{feature.desc}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            <Link to="/parents-student-hub">
              <Button className="w-full mt-6 bg-[#0B1B3A] hover:bg-[#1a2f5a] text-white font-semibold py-6">Learn More for Parents</Button>
            </Link>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[#B99750] flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#0B1B3A]">For Students</h3>
            </div>
            <div className="grid gap-4">
              {studentFeatures.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <Card key={idx} className="border-2 border-[#B99750]/20 hover:border-[#B99750] transition-all duration-300" onClick={() => haptic.light()}>
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: feature.color }}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-base mb-1 text-[#0B1B3A]">{feature.title}</h4>
                          <p className="text-gray-600 text-sm">{feature.desc}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            <Link to="/programs">
              <Button className="w-full mt-6 bg-[#B99750] hover:bg-[#a88645] text-white font-semibold py-6">Explore Programs</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
