import { Card, CardContent } from '@/components/ui/card';
import { Users, Globe, Award, FileCheck } from 'lucide-react';

const reasons = [
  {
    icon: Users,
    title: "Only 30 Students per Course",
    description: "KCIC does not mass-produce graduates. We accept only 30 students in each course, ensuring personalised attention, academic success, and guaranteed access to limited final-year seats abroad. Every student receives the mentoring required to succeed in a global career.",
  },
  {
    icon: Globe,
    title: "Compulsory Final Year Abroad",
    description: "Unlike other colleges that send only a few students overseas, KCIC follows a compulsory final-year abroad model. Every student studies an international curriculum from Day One and is prepared to transfer overseas as a guaranteed part of the pathway.",
  },
  {
    icon: Award,
    title: "The Only Smart Alternative to Studying Abroad",
    description: "At 17, your child doesn't need to travel 10,000 miles without understanding the international system. KCIC offers the only global alternative in this region, delivering an international curriculum aligned with the NHEQF (Indian government credit framework). Your child begins their global journey locally — with confidence and preparation.",
  },
  {
    icon: FileCheck,
    title: "Same Degree. Same Visa.",
    description: "KCIC students earn the exact same degree as students who study all three or four years abroad. There is no difference in degree type, recognition, or visa outcomes. Graduates receive the same post-study work rights and opportunities in their destination country.",
  }
];

export default function WhyParentsChooseKCICSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-[#FAF3E0] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1B3A] mb-4">
            Why Parents Choose KCIC
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Four compelling reasons why discerning parents trust KCIC with their children&apos;s future
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-2 border-[#B99750]/20 hover:border-[#B99750] bg-gradient-to-br from-[#0B1B3A] to-[#1a2942] overflow-hidden"
              >
                <div className="h-3 bg-gradient-to-r from-[#B99750] via-[#d4af37] to-[#B99750]" />
                <CardContent className="p-6">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-[#B99750] to-[#d4af37] mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
