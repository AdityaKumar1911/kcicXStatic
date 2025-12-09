import { Calendar, Wallet, Rocket } from 'lucide-react';

export default function WorkIntegratedStudentSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0B1B3A] to-[#1a2942]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Study AND Earn Money
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From your second semester, work 2.5 days while studying 2.5 days
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1762882426980_5733124b.webp" 
                alt="Student in internship" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <div className="p-6 bg-white/10 backdrop-blur-md rounded-xl border border-[#B99750]/30">
                <Calendar className="w-10 h-10 text-[#B99750] mb-3" />
                <h3 className="text-2xl font-bold text-white mb-2">2.5 Days Classes</h3>
                <p className="text-gray-300">Learn from experts, get your degree on track</p>
              </div>
              <div className="p-6 bg-white/10 backdrop-blur-md rounded-xl border border-[#B99750]/30">
                <Wallet className="w-10 h-10 text-[#B99750] mb-3" />
                <h3 className="text-2xl font-bold text-white mb-2">2.5 Days Paid Work</h3>
                <p className="text-gray-300">Real internships, real money in your pocket from semester 2</p>
              </div>
              <div className="p-6 bg-white/10 backdrop-blur-md rounded-xl border border-[#B99750]/30">
                <Rocket className="w-10 h-10 text-[#B99750] mb-3" />
                <h3 className="text-2xl font-bold text-white mb-2">Graduate Job-Ready</h3>
                <p className="text-gray-300">You'll have real experience when others are still looking for their first job</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
