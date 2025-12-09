import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Globe, Briefcase, TrendingUp, Users, GraduationCap, Heart, Zap, Trophy, Music, Target, Sparkles, Calendar, Wallet, Rocket, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Students Hub | KCIC - Your Global Future Starts Here',
  description: 'Study international curriculum, transfer abroad, and build a high-paying global career with work visa & PR pathways.',
};

export default function StudentsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1762580645069_66e00b30.webp" alt="Students" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1B3A]/85 via-[#0B1B3A]/70 to-[#0B1B3A]/55" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Your Global Future Starts Here</h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">Study international curriculum from Day 1. Transfer abroad. Build a high-paying global career.</p>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {[{icon: Globe, text: 'Study Abroad'}, {icon: Briefcase, text: 'Work While You Study'}, {icon: TrendingUp, text: 'High-Paying Careers'}, {icon: Users, text: 'Small Batches'}, {icon: GraduationCap, text: 'PR Pathways'}].map((item, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/15 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/20">
                  <item.icon className="w-5 h-5 text-[#B99750]" />
                  <span className="text-sm font-semibold text-white">{item.text}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/apply"><Button size="lg" className="bg-gradient-to-r from-[#B99750] to-[#a88645] text-white px-8 py-6 text-lg font-semibold">Apply Now</Button></Link>
              <Link href="/contact"><Button size="lg" variant="outline" className="border-2 border-white bg-white/10 text-white hover:bg-white hover:text-[#0B1B3A] px-8 py-6 text-lg">Book Campus Visit</Button></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Small Batches */}
      <section className="py-20 bg-gradient-to-br from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0B1B3A] mb-4">Get Personal Attention You Deserve</h2>
            <p className="text-xl text-gray-600">Small classes mean your teachers actually know your name and your goals</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[{icon: Users, title: '1 Teacher for 12 Students', desc: 'Get help when you need it'}, {icon: Target, title: 'Max 30 Per Course', desc: 'Quality education, not factory-style'}, {icon: Sparkles, title: 'International Quality', desc: 'Same standards as top schools worldwide'}].map((item, i) => (
              <div key={i} className="p-6 bg-gradient-to-br from-[#0B1B3A] to-[#1a2942] rounded-xl shadow-lg">
                <item.icon className="w-10 h-10 text-[#B99750] mb-3" />
                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Integrated */}
      <section className="py-20 bg-gradient-to-br from-[#0B1B3A] to-[#1a2942]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Study AND Earn Money</h2>
            <p className="text-xl text-gray-300">From your second semester, work 2.5 days while studying 2.5 days</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[{icon: Calendar, title: '2.5 Days Classes', desc: 'Learn from experts'}, {icon: Wallet, title: '2.5 Days Paid Work', desc: 'Real internships, real money'}, {icon: Rocket, title: 'Graduate Job-Ready', desc: 'Real experience when others are still looking'}].map((item, i) => (
              <div key={i} className="p-6 bg-white/10 backdrop-blur-md rounded-xl border border-[#B99750]/30">
                <item.icon className="w-10 h-10 text-[#B99750] mb-3" />
                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#0B1B3A] to-red-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Global Journey?</h2>
          <p className="text-xl mb-10 text-blue-100">Join KCIC and transform your future.</p>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <Link href="/apply"><Button size="lg" className="bg-[#b99750] hover:bg-[#a08640] text-white"><ArrowRight className="w-5 h-5 mr-2" />Apply Now</Button></Link>
            <Link href="/contact"><Button size="lg" variant="outline" className="bg-white/10 border-white text-white"><Calendar className="w-5 h-5 mr-2" />Book Campus Visit</Button></Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div><div className="text-4xl font-bold text-[#b99750] mb-2">₹15-17L</div><div className="text-blue-100">Average Savings</div></div>
            <div><div className="text-4xl font-bold text-[#b99750] mb-2">100%</div><div className="text-blue-100">Transfer Success</div></div>
            <div><div className="text-4xl font-bold text-[#b99750] mb-2">2-4 Yrs</div><div className="text-blue-100">Work Visa Post-Study</div></div>
          </div>
        </div>
      </section>
    </div>
  );
}
