import { Quote } from "lucide-react";

export default function ElectricalSemiconductorSuccessStorySection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0B1B3A] to-[#1a2847] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <h2 className="text-4xl font-bold text-center mb-12">Success Story</h2>
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-lg p-8 md:p-12">
          <Quote className="w-12 h-12 text-[#B99750] mb-6" />
          <p className="text-xl md:text-2xl mb-6 leading-relaxed">
            "The semiconductor specialization at KCIC gave me hands-on experience with industry-standard tools like Cadence and Synopsys. Within 3 months of graduation, I secured a role at ARM designing next-gen mobile processors. The practical projects and industry connections were invaluable."
          </p>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-[#B99750] rounded-full flex items-center justify-center text-2xl font-bold">
              AK
            </div>
            <div>
              <div className="font-bold text-lg">Aisha Khan</div>
              <div className="text-gray-300">IC Design Engineer at ARM</div>
              <div className="text-[#B99750]">Class of 2023</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
