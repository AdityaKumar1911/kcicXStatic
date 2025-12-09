import { Card } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

export default function RailwayRequirementsSection() {
  const requirements = [
    'A-Levels: BBB including Mathematics and Physics',
    'BTEC: DDM in Engineering or related subject',
    'International Baccalaureate: 30 points',
    'Foundation Year available for alternative qualifications'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Entry Requirements</h2>
        <Card className="max-w-3xl mx-auto p-8">
          <ul className="space-y-4">
            {requirements.map((req, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-lg text-gray-700">{req}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
}
