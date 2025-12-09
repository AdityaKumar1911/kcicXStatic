'use client';

import { BookOpen, Cpu, Cog, Lightbulb, Target, Wrench } from 'lucide-react';

interface ProgramModule {
  title: string;
  desc: string;
  icon?: string;
}

interface ProgramModulesProps {
  modules: ProgramModule[];
}

const defaultIcons = [BookOpen, Cpu, Cog, Lightbulb, Target, Wrench];

export default function ProgramModulesSection({ modules }: ProgramModulesProps) {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1B3A] mb-4">
            Course Modules
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive curriculum designed with industry experts
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, idx) => {
            const Icon = defaultIcons[idx % defaultIcons.length];
            return (
              <div
                key={idx}
                className="bg-gradient-to-br from-[#0B1B3A] to-[#0B1B3A]/90 p-6 rounded-xl border-2 border-[#B99750] hover:shadow-2xl transition-all duration-300 flex items-start gap-4"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {module.title}
                  </h3>
                  <p className="text-gray-200 text-base leading-relaxed">
                    {module.desc}
                  </p>
                </div>
                <Icon className="w-10 h-10 text-[#B99750] flex-shrink-0 mt-1" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
