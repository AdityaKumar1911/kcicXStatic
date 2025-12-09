import { Users, Target, Sparkles } from 'lucide-react';

export default function SmallBatchesStudentSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1B3A] mb-4">
              Get Personal Attention You Deserve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Small classes mean your teachers actually know your name and your goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1762882426049_5d685c0a.webp" 
                alt="One-on-one tutoring" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-br from-[#0B1B3A] to-[#1a2942] rounded-xl shadow-lg">
                <Users className="w-10 h-10 text-[#B99750] mb-3" />
                <h3 className="text-2xl font-bold text-white mb-2">1 Teacher for 12 Students</h3>
                <p className="text-gray-300">Get help when you need it. No more getting lost in huge lecture halls</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-[#0B1B3A] to-[#1a2942] rounded-xl shadow-lg">
                <Target className="w-10 h-10 text-[#B99750] mb-3" />
                <h3 className="text-2xl font-bold text-white mb-2">Max 30 Per Course</h3>
                <p className="text-gray-300">We keep it exclusive so you get quality education, not factory-style learning</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-[#0B1B3A] to-[#1a2942] rounded-xl shadow-lg">
                <Sparkles className="w-10 h-10 text-[#B99750] mb-3" />
                <h3 className="text-2xl font-bold text-white mb-2">International Quality</h3>
                <p className="text-gray-300">Same standards as top schools worldwide, right here in Chennai</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
