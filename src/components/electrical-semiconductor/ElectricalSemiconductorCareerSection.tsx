import { Briefcase } from "lucide-react";

export default function ElectricalSemiconductorCareerSection() {
  const careers = [
    { title: "Semiconductor Design Engineer", salary: "£40K - £65K", description: "Design and optimize integrated circuits and chip architectures" },
    { title: "Process Engineer", salary: "£38K - £60K", description: "Develop and improve semiconductor fabrication processes" },
    { title: "Test & Validation Engineer", salary: "£35K - £55K", description: "Ensure chip quality and performance standards" },
    { title: "RF Engineer", salary: "£42K - £70K", description: "Design wireless communication and high-frequency systems" },
    { title: "Power Electronics Engineer", salary: "£40K - £65K", description: "Develop energy-efficient power management solutions" },
    { title: "Research & Development Engineer", salary: "£45K - £75K", description: "Innovate next-generation semiconductor technologies" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <h2 className="text-4xl font-bold text-center mb-4 text-[#0B1B3A]">Career Pathways</h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Join the booming semiconductor industry with roles at Intel, ARM, TSMC, Samsung, and more
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {careers.map((career, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-[#B99750] transition-colors">
              <Briefcase className="w-10 h-10 text-[#B99750] mb-4" />
              <h3 className="text-xl font-bold mb-2 text-[#0B1B3A]">{career.title}</h3>
              <p className="text-[#B99750] font-semibold mb-2">{career.salary}</p>
              <p className="text-gray-600">{career.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
