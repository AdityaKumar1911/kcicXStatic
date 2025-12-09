import { Metadata } from 'next';
import Link from 'next/link';
import { getAllSpecialtyPrograms, getFoundationPrograms } from '@/lib/supabase/server';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, GraduationCap, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Programs | KCIC',
  description: 'Explore our comprehensive range of international pathway programs including engineering, science, business, and more.',
};

export default async function ProgramsPage() {
  // Fetch programs from Supabase/static data
  const specialtyPrograms = await getAllSpecialtyPrograms();
  const foundationPrograms = await getFoundationPrograms();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF3E0] to-white">
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 text-[#0B1B3A]">Our Programs</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from {specialtyPrograms.length + foundationPrograms.length}+ internationally recognized pathway programs
            </p>
          </div>

          <h2 className="text-3xl font-bold text-[#0B1B3A] mb-6">Specialty Engineering & Science Programs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {specialtyPrograms.map((program) => (
              <Link key={program.slug} href={`/programs/${program.slug}`}>
                <Card className="h-full hover:shadow-xl transition-all hover:border-[#B99750] group overflow-hidden">
                  <div className="h-40 relative">
                    <img src={program.heroImage} alt={program.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B3A] to-transparent" />
                    <Badge className="absolute top-3 left-3 bg-[#B99750]">{program.tag}</Badge>
                  </div>
                  <CardContent className="pt-4">
                    <h3 className="font-bold text-lg text-[#0B1B3A] mb-2 line-clamp-2">{program.title}</h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{program.subtitle}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <Clock className="w-4 h-4 text-[#B99750]" />
                      <span>{program.duration.split('|')[0]}</span>
                    </div>
                    <Button variant="ghost" className="w-full group-hover:bg-[#B99750] group-hover:text-white">
                      View Details <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-[#0B1B3A] mb-6">Foundation Pathway Programs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {foundationPrograms.map((program) => (
              <Link key={program.id} href={`/programs/${program.slug}`}>
                <Card className="h-full hover:shadow-xl transition-all hover:border-[#B99750] group">
                  <CardHeader className="bg-gradient-to-br from-[#0B1B3A] to-[#1a2d5a] text-white rounded-t-lg py-4">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <GraduationCap className="w-5 h-5 text-[#B99750]" />
                      {program.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{program.overview}</p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {program.majors.slice(0, 2).map((m, i) => (
                        <Badge key={i} variant="outline" className="text-xs">{m}</Badge>
                      ))}
                    </div>
                    <Button variant="ghost" size="sm" className="w-full group-hover:bg-[#B99750] group-hover:text-white">
                      Learn More <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
