import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { programs } from '@/data/programs';
import { specialtyPrograms } from '@/data/specialtyPrograms';
import GenericProgramPage from '@/components/programs/GenericProgramPage';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, BookOpen, ArrowLeft, MapPin, GraduationCap } from 'lucide-react';

interface Props { params: { slug: string }; }

export async function generateStaticParams() {
  const basicSlugs = programs.map((p) => ({ slug: p.slug }));
  const specialtySlugs = specialtyPrograms.map((p) => ({ slug: p.slug }));
  return [...basicSlugs, ...specialtySlugs];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const specialty = specialtyPrograms.find(p => p.slug === params.slug);
  if (specialty) return { title: `${specialty.title} | KCIC`, description: specialty.subtitle };
  const program = programs.find(p => p.slug === params.slug);
  if (program) return { title: `${program.title} | KCIC`, description: program.overview };
  return { title: 'Program Not Found' };
}

export default function ProgramDetailPage({ params }: Props) {
  const specialty = specialtyPrograms.find(p => p.slug === params.slug);
  if (specialty) return <GenericProgramPage program={specialty} />;

  const program = programs.find(p => p.slug === params.slug);
  if (!program) notFound();

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-[#0B1B3A] to-[#1a2d5a] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/programs" className="inline-flex items-center text-white/80 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back
          </Link>
          <Badge className="bg-[#B99750] mb-4">{program.pathwayModel} Pathway</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{program.title}</h1>
          <p className="text-xl text-white/90 max-w-3xl mb-6">{program.overview}</p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-white/10 px-4 py-2 rounded-lg flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#B99750]" />
              <span className="text-white">{program.durationYears} Years</span>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-6">
          <Card><CardContent className="pt-6">
            <BookOpen className="w-8 h-8 text-[#B99750] mb-3" />
            <h3 className="font-bold text-lg mb-2">Requirements</h3>
            <p className="text-gray-600">{program.requirements}</p>
          </CardContent></Card>
          <Card><CardContent className="pt-6">
            <GraduationCap className="w-8 h-8 text-[#B99750] mb-3" />
            <h3 className="font-bold text-lg mb-2">IELTS</h3>
            <p className="text-gray-600">{program.ieltsRequired ? 'Required' : 'Waiver Available'}</p>
          </CardContent></Card>
          <Card><CardContent className="pt-6">
            <MapPin className="w-8 h-8 text-[#B99750] mb-3" />
            <h3 className="font-bold text-lg mb-2">Year 1 Fees</h3>
            <p className="text-gray-600">₹{program.year1FeesInr.toLocaleString()}</p>
          </CardContent></Card>
        </div>
      </div>
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#0B1B3A] mb-8">Specializations</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {program.majors.map((m, i) => (
              <Badge key={i} className="bg-[#0B1B3A] text-white px-4 py-2">{m}</Badge>
            ))}
          </div>
        </div>
      </div>
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#0B1B3A] mb-6">Ready to Start?</h2>
          <div className="flex gap-4 justify-center">
            <Link href="/apply"><Button size="lg" className="bg-[#B99750]">Apply Now</Button></Link>
            <Link href="/contact"><Button size="lg" variant="outline">Contact Us</Button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
