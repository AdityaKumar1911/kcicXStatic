import { Card, CardContent } from '@/components/ui/card';
import { DollarSign } from 'lucide-react';

export default function CostSavingsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-[#0B1B3A] mb-8 text-center">Cost & Savings Snapshot</h2>
          
          <Card className="border-2 border-[#B99750] bg-gradient-to-br from-[#0B1B3A] to-[#1a2942] text-white">

            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-4 mb-6">
                <DollarSign className="w-12 h-12 text-[#b99750]" />
                <h3 className="text-3xl font-bold">Save up to ₹15.35–₹17.35 Lakhs</h3>
              </div>
              <p className="text-xl text-center mb-8 text-gray-200">
                in the foundation phase vs going abroad immediately
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h4 className="text-2xl font-bold text-[#b99750] mb-2">KCIC Years 1-2</h4>
                  <p className="text-4xl font-bold mb-2">₹2.65–₹3.83L</p>
                  <p className="text-gray-300">Complete foundation in Chennai with international curriculum</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h4 className="text-2xl font-bold text-red-400 mb-2">Abroad Years 1-2</h4>
                  <p className="text-4xl font-bold mb-2">₹18–₹20L</p>
                  <p className="text-gray-300">Full cost of studying foundation years abroad</p>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-lg text-gray-200">
                  <strong>Same degree. Same opportunities. Massive savings.</strong>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
