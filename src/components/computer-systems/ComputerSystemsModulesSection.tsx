import { Cpu, Network, Database, Code, Shield, Cloud } from "lucide-react";

export default function ComputerSystemsModulesSection() {
  const modules = [
    { icon: Cpu, title: "Computer Architecture", description: "Processor design, memory systems, and performance optimization" },
    { icon: Network, title: "Embedded Systems", description: "Real-time systems and microcontroller programming" },
    { icon: Database, title: "Operating Systems", description: "Kernel design, process management, and system calls" },
    { icon: Code, title: "Software Engineering", description: "Object-oriented design and software development lifecycle" },
    { icon: Shield, title: "Cybersecurity", description: "System security, cryptography, and threat detection" },
    { icon: Cloud, title: "Cloud Computing", description: "Distributed systems and cloud infrastructure" }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <h2 className="text-4xl font-bold text-center mb-4 text-[#0B1B3A]">Course Modules</h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Comprehensive curriculum combining hardware and software engineering principles
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <module.icon className="w-12 h-12 text-[#B99750] mb-4" />
              <h3 className="text-xl font-bold mb-2 text-[#0B1B3A]">{module.title}</h3>
              <p className="text-gray-600">{module.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
