import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, Zap, Globe, Trophy, Music } from 'lucide-react';

export default function StudentLifeSection() {
  const experiences = [
    { icon: Heart, title: 'Beachfront Campus', desc: 'Study by the sea at our ECR campus' },
    { icon: Users, title: 'Global Community', desc: 'Connect with students from diverse backgrounds' },
    { icon: Zap, title: 'Small Batches', desc: '1:1 mentoring and personalized attention' },
    { icon: Globe, title: 'Rotaract Club', desc: 'Social impact and leadership activities' },
    { icon: Trophy, title: 'Sports & Activities', desc: 'Futsal, go-karting, kayaking, pickleball' },
    { icon: Music, title: 'Events & Parties', desc: 'DJ nights, cultural fests, BBQ gatherings' },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0B1B3A] mb-4">
            Life at KCIC: Where Learning Meets Living
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            More than a college—it's a lifestyle. Build friendships, develop leadership, and create unforgettable memories.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {experiences.map((exp, idx) => (
            <Card key={idx} className="bg-gradient-to-br from-[#0B1B3A] to-[#1a2942] border-none hover:shadow-2xl transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#B99750] rounded-full flex items-center justify-center mb-4">
                  <exp.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{exp.title}</h3>
                <p className="text-gray-300">{exp.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>


        <div className="bg-white rounded-xl p-8 shadow-lg">
          <img 
            src="https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1762517180007_51bbe90e.webp"
            alt="Students studying together"
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          <p className="text-center text-lg text-gray-700">
            At KCIC, your education isn't just about what you learn—it's about who you become.
          </p>
        </div>
      </div>
    </section>
  );
}
