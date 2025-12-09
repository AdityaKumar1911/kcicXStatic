import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Users, Heart, AlertCircle, Eye } from 'lucide-react';

export default function SafetyMentoringSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-[#0B1B3A] mb-12 text-center">Safe. Dignified. Closely Mentored.</h2>

          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <img 
                src="https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1762516800959_f5100652.webp" 
                alt="Campus Security" 
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
            </div>
            <div>
              <img 
                src="https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1762516800088_cd136884.webp" 
                alt="Small Batch Mentoring" 
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
            </div>
          </div>

          <Card className="bg-gradient-to-br from-[#0B1B3A] to-[#1a2942] border-2 border-[#B99750]">
            <CardContent className="p-8">
              <div className="space-y-6">
                {[
                  { icon: Eye, text: '24/7 monitored ECR campus with controlled access and security protocols' },
                  { icon: Shield, text: 'Zero tolerance policy: bullying, harassment, abuse, and substance misuse' },
                  { icon: Heart, text: 'Not gender-restrictive; dignity and respectful conduct expected from all' },
                  { icon: Users, text: 'Small batches enable 1:1 academic and emotional mentoring for every student' },
                  { icon: AlertCircle, text: 'Teachers intervene early during personal or academic challenges' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#B99750] rounded-full flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-gray-300 text-lg pt-2">{item.text}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <Button variant="outline" className="border-2 border-[#B99750] text-white hover:bg-[#B99750] hover:text-white">
                  Read Our Campus Care Charter →
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

  );
}
