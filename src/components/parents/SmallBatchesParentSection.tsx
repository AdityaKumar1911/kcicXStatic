import { Users, GraduationCap, Award } from 'lucide-react';

export default function SmallBatchesParentSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1B3A] mb-4">
              Small Batches, Big Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Just like international schools, we provide personalized attention with a 1:12 teacher-student ratio
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <img 
                src="https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1762882423947_22228595.webp" 
                alt="Small classroom" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-[#0B1B3A] to-[#1a2942] rounded-xl shadow-lg">
                <Users className="w-12 h-12 text-[#B99750] flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">1:12 Teacher Ratio</h3>
                  <p className="text-gray-300">One dedicated teacher for every 12 students ensures personalized attention and support</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-[#0B1B3A] to-[#1a2942] rounded-xl shadow-lg">
                <GraduationCap className="w-12 h-12 text-[#B99750] flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Maximum 30 Students</h3>
                  <p className="text-gray-300">We limit each qualification to 30 students for quality education</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-[#0B1B3A] to-[#1a2942] rounded-xl shadow-lg">
                <Award className="w-12 h-12 text-[#B99750] flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">International Standard</h3>
                  <p className="text-gray-300">Same quality as top international schools worldwide</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
