import { Card, CardContent } from '@/components/ui/card';
import { DollarSign, CheckCircle, Award } from 'lucide-react';

export default function WhyKCICWorksSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-[#0B1B3A] mb-6 text-center">Why KCIC Works</h2>

          <p className="text-lg text-gray-700 mb-10 text-center max-w-3xl mx-auto">
            KCIC teaches the <strong>same international curriculum and assessment style</strong> used abroad, so students adapt early. 
            They save big in Years 1–2, then <strong>transfer abroad</strong> prepared for Western learning, work part-time, and step into 
            <strong> 2–4 year post-study work visas</strong> and <strong>PR-aligned careers</strong>.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-[#0B1B3A] to-[#1a2942] border-none hover:shadow-2xl transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-[#B99750] rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Savings</h3>
                <p className="text-gray-300">Save up to 80% in Years 1-2 compared to studying abroad from Day 1</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#0B1B3A] to-[#1a2942] border-none hover:shadow-2xl transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-[#B99750] rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Guaranteed Transfer</h3>
                <p className="text-gray-300">Seamless transition to partner universities with credit transfer</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#0B1B3A] to-[#1a2942] border-none hover:shadow-2xl transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-[#B99750] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Same Degree & PSW Visa</h3>
                <p className="text-gray-300">Identical degree as full-time students abroad with work visa eligibility</p>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
}
