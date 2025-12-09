import { BookOpen, Wrench } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function AdditionalReasonsSection() {
  const reasons = [
    {
      icon: BookOpen,
      title: 'No Memorisation, No Exams',
      description: 'We do not believe in rote learning.',
      details: 'Instead of exams, students complete mini research projects, prototypes, or real-world assignments for every module. This helps them understand, apply, and create — not just repeat.'
    },
    {
      icon: Wrench,
      title: 'Industry Labs & Real Equipment',
      description: 'KCIC does not use outdated traditional labs.',
      details: 'Students learn directly with industry tools, software, and machinery used in the real world. Through our partner universities, students gain access to world-class labs supported by global leaders like ABB, Siemens, Kuka, and many more. This ensures students are industry-ready before they travel abroad.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0B1B3A] mb-4">
            Additional Reasons to Choose KCIC
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <Card key={index} className="border-2 border-[#B99750]/20 hover:border-[#B99750] transition-all duration-300 hover:shadow-xl bg-gradient-to-br from-[#0B1B3A] to-[#1a2942]">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-[#B99750] to-[#d4af37] rounded-lg">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {reason.title}
                      </h3>
                      <p className="text-gray-200 font-semibold mb-3">
                        {reason.description}
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        {reason.details}
                      </p>
                    </div>
                  </div>
                </CardContent>

              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
