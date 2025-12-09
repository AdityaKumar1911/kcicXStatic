import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Database, Shield, Wrench, Building, Heart, Plane, TrendingUp } from 'lucide-react';

export default function ShortageSkillsSection() {
  const programs = [
    { icon: Database, title: 'Data & AI', color: 'bg-blue-500' },
    { icon: Shield, title: 'Cybersecurity', color: 'bg-red-500' },
    { icon: Wrench, title: 'Mechanical/Automotive', color: 'bg-orange-500' },
    { icon: Building, title: 'Civil/Construction', color: 'bg-yellow-600' },
    { icon: Heart, title: 'Nursing/Health Pathways', color: 'bg-pink-500' },
    { icon: Plane, title: 'Hospitality & Tourism', color: 'bg-green-500' },
    { icon: TrendingUp, title: 'Business Analytics', color: 'bg-red-500' }

  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#0B1B3A] mb-6 text-center">Programs that Lead to Shortage-Skills</h2>

          <p className="text-lg text-gray-700 mb-10 text-center max-w-3xl mx-auto">
            Only at KCIC, students choose programs aligned to <strong>current immigration critical-shortage occupations</strong>, 
            improving job demand, pay, PSW length and PR chances.
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
            {programs.map((program, idx) => (
              <Card key={idx} className="bg-gradient-to-br from-[#0B1B3A] to-[#1a2942] border-none hover:shadow-2xl transition-all cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-[#B99750] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <program.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-white">{program.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          
          <div className="text-center">
            <Button className="bg-[#b99750] hover:bg-[#a88645] text-white px-8 py-6 text-lg">
              See Shortage-Skills Programs →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
