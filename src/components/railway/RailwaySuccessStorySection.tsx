import { Card } from '@/components/ui/card';
import { Quote } from 'lucide-react';

export default function RailwaySuccessStorySection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Success Story</h2>
        <Card className="max-w-4xl mx-auto p-8 md:p-12">
          <Quote className="w-12 h-12 text-blue-600 mb-6" />
          <p className="text-xl text-gray-700 mb-6 italic">
            "The railway engineering program at KCIC gave me hands-on experience with signaling systems and traction power. I now work on HS2, one of Europe's largest infrastructure projects."
          </p>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
              MP
            </div>
            <div>
              <p className="font-semibold text-lg">Michael Patel</p>
              <p className="text-gray-600">Signaling Engineer at HS2</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
