import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

interface Reason {
  title: string;
  description: string;
}

interface UniversityWhyChooseSectionProps {
  reasons: Reason[];
  image: string;
}

export default function UniversityWhyChooseSection({ reasons, image }: UniversityWhyChooseSectionProps) {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-[#0B1B3A] to-[#B99750] bg-clip-text text-transparent">
          Why Choose This University?
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {reasons.map((reason, index) => (
              <Card key={index} className="border-l-4 border-l-[#B99750] shadow-md hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-[#B99750] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-[#0B1B3A] mb-2">{reason.title}</h3>
                      <p className="text-gray-600">{reason.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="relative">
            <img 
              src={image} 
              alt="University campus"
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
