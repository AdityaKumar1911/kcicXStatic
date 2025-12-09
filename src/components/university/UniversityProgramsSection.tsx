import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Program {
  id: string;
  title: string;
  slug: string;
  pathwayModel: string;
  duration: string;
}

interface UniversityProgramsSectionProps {
  programs: Program[];
  universityName: string;
}

export default function UniversityProgramsSection({ programs, universityName }: UniversityProgramsSectionProps) {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#0B1B3A]/5 via-white to-[#B99750]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-[#0B1B3A] to-[#B99750] bg-clip-text text-transparent">
          Programs Available at {universityName}
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Explore our comprehensive range of programs designed to prepare you for a successful career
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program) => (
            <Card key={program.id} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0B1B3A] to-[#B99750] rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#0B1B3A] mb-2">{program.title}</h3>
                <p className="text-sm text-gray-600 mb-1">{program.pathwayModel} Pathway</p>
                <p className="text-sm text-gray-500 mb-4">Duration: {program.duration}</p>
                <Link to={`/programs/${program.slug}`}>
                  <Button variant="outline" className="w-full group border-[#0B1B3A]/20 hover:border-[#B99750] hover:bg-[#B99750]/5">
                    View Program <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
