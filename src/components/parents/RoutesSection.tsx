import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, GraduationCap, Briefcase, Globe } from 'lucide-react';

export default function RoutesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-[#0B1B3A] mb-12 text-center">The Two Routes</h2>

          
          <Tabs defaultValue="route1" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="route1" className="text-lg">9 Months at KCIC</TabsTrigger>
              <TabsTrigger value="route2" className="text-lg">18 Months at KCIC</TabsTrigger>
            </TabsList>
            
            <TabsContent value="route1">
              <Card className="bg-gradient-to-br from-[#0B1B3A] to-[#1a2942] border-2 border-[#B99750]">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#B99750] rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">Stage 1: 120 Credits (Global Foundation)</h3>
                        <p className="text-gray-300">Complete foundation year at KCIC Chennai with international curriculum</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#B99750] rounded-full flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">Stage 2: Study Abroad (2-3 Years)</h3>
                        <p className="text-gray-300">BSc/BA/BBA: 2 years | BEng/BTech: 3 years. Work part-time during term, full-time during breaks</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#B99750] rounded-full flex items-center justify-center flex-shrink-0">
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">Optional Paid Placement: Up to 1 Year</h3>
                        <p className="text-gray-300">Helps fund final year and boosts employability significantly</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#B99750] rounded-full flex items-center justify-center flex-shrink-0">
                        <Globe className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">Post-Study Work Visa: 2-4 Years</h3>
                        <p className="text-gray-300">Program and skill dependent. Many programs map to critical skill shortage lists for PR pathways</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            

            <TabsContent value="route2">
              <Card className="bg-gradient-to-br from-[#0B1B3A] to-[#1a2942] border-2 border-[#B99750]">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#B99750] rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">Stage 1: 240 Credits (Foundation + Specialisation)</h3>
                        <p className="text-gray-300">Complete foundation and specialization at KCIC Chennai</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#B99750] rounded-full flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">Stage 2: Study Abroad (1-2 Years)</h3>
                        <p className="text-gray-300">BSc/BA/BBA: 1 year | BEng/BTech: 2 years. Work part-time during term, full-time during breaks</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#B99750] rounded-full flex items-center justify-center flex-shrink-0">
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">Optional Paid Placement</h3>
                        <p className="text-gray-300">Industry placement opportunities to enhance career prospects</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#B99750] rounded-full flex items-center justify-center flex-shrink-0">
                        <Globe className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">Post-Study Work Visa: 2-4 Years + PR Pathways</h3>
                        <p className="text-gray-300">Same benefits as Route 1 with shorter time abroad</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

        </div>
      </div>
    </section>
  );
}
