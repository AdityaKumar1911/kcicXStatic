import { Award, Users, Building2, Lightbulb } from "lucide-react";

export default function ElectricalSemiconductorWhyKCICSection() {
  const reasons = [
    { icon: Award, title: "Industry Partnerships", description: "Collaborate with Intel, ARM, and leading semiconductor companies" },
    { icon: Users, title: "Expert Faculty", description: "Learn from professors with real-world chip design experience" },
    { icon: Building2, title: "State-of-the-Art Labs", description: "Access cleanroom facilities and advanced testing equipment" },
    { icon: Lightbulb, title: "Innovation Focus", description: "Work on cutting-edge projects in AI chips and quantum computing" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <h2 className="text-4xl font-bold text-center mb-4 text-[#0B1B3A]">Why Choose KCIC?</h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Leading the way in semiconductor education with industry-focused training
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#B99750]/10 rounded-full mb-4">
                <reason.icon className="w-8 h-8 text-[#B99750]" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#0B1B3A]">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
