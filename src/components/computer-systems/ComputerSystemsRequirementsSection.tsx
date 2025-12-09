import { CheckCircle2 } from "lucide-react";

export default function ComputerSystemsRequirementsSection() {
  const requirements = [
    "A-Levels: BBB including Mathematics or Computer Science",
    "BTEC: DDM in Computing, IT, or Engineering",
    "International Baccalaureate: 30 points including HL Maths",
    "Access to HE Diploma: Pass with 45 credits at Level 3",
    "Strong logical thinking and problem-solving skills",
    "GCSE: Grade C/4 or above in English Language and Mathematics"
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <h2 className="text-4xl font-bold text-center mb-4 text-[#0B1B3A]">Entry Requirements</h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          We welcome applications from students passionate about technology and innovation
        </p>
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <ul className="space-y-4">
            {requirements.map((req, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#B99750] flex-shrink-0 mt-1" />
                <span className="text-lg text-gray-700">{req}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
