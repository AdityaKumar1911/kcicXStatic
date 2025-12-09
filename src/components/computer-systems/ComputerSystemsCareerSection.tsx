import { Briefcase } from "lucide-react";

export default function ComputerSystemsCareerSection() {
  const careers = [
    { title: "Systems Engineer", salary: "£38K - £60K", description: "Design and optimize computer systems and infrastructure" },
    { title: "Embedded Software Engineer", salary: "£40K - £65K", description: "Develop firmware for IoT devices and embedded systems" },
    { title: "DevOps Engineer", salary: "£42K - £70K", description: "Automate deployment and manage cloud infrastructure" },
    { title: "Network Architect", salary: "£45K - £75K", description: "Design enterprise network solutions and protocols" },
    { title: "Security Engineer", salary: "£43K - £72K", description: "Protect systems from cyber threats and vulnerabilities" },
    { title: "Cloud Solutions Architect", salary: "£50K - £85K", description: "Design scalable cloud-based computing solutions" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <h2 className="text-4xl font-bold text-center mb-4 text-[#0B1B3A]">Career Pathways</h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Join leading tech companies like Amazon, Microsoft, Google, and innovative startups
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
