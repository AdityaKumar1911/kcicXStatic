'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { campuses } from '@/data/campuses';
import { tutors } from '@/data/tutors';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Mail, Check, Users, Building2, ArrowRight } from 'lucide-react';

export default function CampusDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const campus = campuses.find(c => c.slug === slug);

  if (!campus) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#0B1B3A] mb-4">Campus Not Found</h1>
          <Link href="/campuses"><Button>Back to Campuses</Button></Link>
        </div>
      </div>
    );
  }

  const campusTutors = tutors.filter(t => t.campusId === campus.id);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="relative h-[50vh] sm:h-[60vh] mt-20">
        <img src={campus.heroImageUrl} alt={campus.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B3A] via-[#0B1B3A]/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-12">
          <div className="max-w-7xl mx-auto">
            <Badge className="bg-[#B99750] text-white mb-4">{campus.type.toUpperCase()}</Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">{campus.name}</h1>
            <div className="flex flex-wrap gap-4 text-white/90">
              <span className="flex items-center gap-2"><MapPin className="h-5 w-5" />{campus.city}, {campus.state}</span>
              <span className="flex items-center gap-2"><Phone className="h-5 w-5" />{campus.contactPhone}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card className="border-0 shadow-xl">
              <CardHeader><CardTitle className="flex items-center gap-2"><Building2 className="text-[#B99750]" />Campus Highlights</CardTitle></CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4">
                  {campus.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{h}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl">
              <CardHeader><CardTitle>Facilities</CardTitle></CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {campus.facilities.map((f, i) => (
                    <Badge key={i} variant="outline" className="text-base py-2 px-4 bg-[#FAF3E0] border-[#B99750]/30">{f}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {campusTutors.length > 0 && (
              <Card className="border-0 shadow-xl">
                <CardHeader><CardTitle className="flex items-center gap-2"><Users className="text-[#B99750]" />Our Faculty</CardTitle></CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {campusTutors.map(t => (
                      <Link key={t.id} href={`/tutors/${t.slug}`} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:shadow-lg transition-all group">
                        <img src={t.photoUrl} alt={t.name} className="w-16 h-16 rounded-full object-cover" />
                        <div>
                          <h3 className="font-semibold group-hover:text-[#B99750] transition-colors">{t.name}</h3>
                          <p className="text-sm text-gray-600">{t.title}</p>
                        </div>
                        <ArrowRight className="ml-auto w-5 h-5 text-gray-400 group-hover:text-[#B99750] transition-colors" />
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          <div className="space-y-6">
            <Card className="sticky top-24 border-0 shadow-xl bg-gradient-to-br from-[#0B1B3A] to-[#1a2f5a] text-white">
              <CardHeader><CardTitle className="text-white">Get Started</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <a href="https://admissions.cornerstone.edu.in/" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-[#B99750] hover:bg-[#a88645]">Apply Now</Button>
                </a>
                <div className="pt-4 border-t border-white/20 space-y-3">
                  <p className="flex items-center gap-2 text-sm"><Mail className="w-4 h-4" />{campus.contactEmail}</p>
                  <p className="flex items-center gap-2 text-sm"><Phone className="w-4 h-4" />{campus.contactPhone}</p>
                  <p className="flex items-center gap-2 text-sm"><MapPin className="w-4 h-4" />{campus.address}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
