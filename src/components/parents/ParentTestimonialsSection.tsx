import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

export default function ParentTestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-[#0B1B3A] mb-12 text-center">What Parents & Students Say</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-[#B99750] hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <Quote className="w-12 h-12 text-[#B99750] mb-4" />
                <p className="text-gray-700 text-lg mb-6 italic">
                  "KCIC gave us peace of mind. Our daughter stayed close during her foundation year, adapted to the international 
                  curriculum, and then transferred abroad fully prepared. The small batches and mentoring made all the difference."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#0B1B3A] rounded-full flex items-center justify-center text-white font-bold">
                    RS
                  </div>
                  <div>
                    <p className="font-bold text-[#0B1B3A]">Mrs. Rajeshwari Sundar</p>
                    <p className="text-sm text-gray-600">Parent, Chennai</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#B99750] hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <Quote className="w-12 h-12 text-[#B99750] mb-4" />
                <p className="text-gray-700 text-lg mb-6 italic">
                  "I started at KCIC Chennai, transferred to UK after 9 months, and now I'm working as a Data Analyst in London 
                  on a 2-year post-study work visa. The pathway was smooth, and I saved my parents lakhs in fees."
                </p>
                <div className="flex items-center gap-4">
                  <img 
                    src="https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1762516801856_919f5b72.webp" 
                    alt="Student" 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-[#0B1B3A]">Arjun Krishnan</p>
                    <p className="text-sm text-gray-600">Chennai → London | Data Analyst</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
