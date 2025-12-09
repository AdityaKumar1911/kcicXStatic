import { CheckCircle2 } from 'lucide-react';

export default function CivilRequirementsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Entry Requirements</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-[#0B1B3A]">Academic Requirements</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#B99750] flex-shrink-0 mt-1" />
                  <span>A-Levels: BBB including Mathematics and a Science subject</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#B99750] flex-shrink-0 mt-1" />
                  <span>BTEC: DDM in Engineering or related field</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#B99750] flex-shrink-0 mt-1" />
                  <span>International Baccalaureate: 30 points with HL Maths</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-[#0B1B3A] text-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6">1+2 Pathway Structure</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#B99750] flex-shrink-0 mt-1" />
                  <span><strong>Year 1:</strong> Foundation at KCIC London</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#B99750] flex-shrink-0 mt-1" />
                  <span><strong>Years 2-3:</strong> Complete degree at partner university</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
