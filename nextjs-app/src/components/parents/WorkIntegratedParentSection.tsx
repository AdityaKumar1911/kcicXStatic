import { BookOpen, Briefcase, TrendingUp } from 'lucide-react';

export default function WorkIntegratedParentSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0B1B3A] to-[#1a2942]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Work-Integrated Learning
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              International university model: 2.5 days learning, 2.5 days earning from semester 2
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                <BookOpen className="w-12 h-12 text-[#B99750] flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">2.5 Days Classes</h3>
                  <p className="text-gray-300">Focused academic learning with expert faculty</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                <Briefcase className="w-12 h-12 text-[#B99750] flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">2.5 Days Work</h3>
                  <p className="text-gray-300">Real internships starting from second semester</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                <TrendingUp className="w-12 h-12 text-[#B99750] flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Career Ready</h3>
                  <p className="text-gray-300">Graduate with experience, not just a degree</p>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1762882425225_4058e273.webp" 
                alt="Student working" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
