import { Cpu, CircuitBoard, Zap, Microchip, Radio, Cog } from "lucide-react";

export default function ElectricalSemiconductorModulesSection() {
  const modules = [
    { icon: Cpu, title: "Semiconductor Physics", description: "Quantum mechanics, band theory, and device physics" },
    { icon: CircuitBoard, title: "VLSI Design", description: "Very Large Scale Integration and chip architecture" },
    { icon: Zap, title: "Power Electronics", description: "Energy conversion and power management systems" },
    { icon: Microchip, title: "Analog & Digital Circuits", description: "Circuit design and signal processing" },
    { icon: Radio, title: "RF & Microwave Engineering", description: "High-frequency electronics and communications" },
    { icon: Cog, title: "Fabrication Technology", description: "Cleanroom processes and manufacturing techniques" }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <h2 className="text-4xl font-bold text-center mb-4 text-[#0B1B3A]">Course Modules</h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Industry-aligned curriculum covering semiconductor design, fabrication, and advanced electronics
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
