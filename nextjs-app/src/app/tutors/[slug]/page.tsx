'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { tutors } from '@/data/tutors';
import { campuses } from '@/data/campuses';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Mail } from 'lucide-react';

export default function TutorDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const tutor = tutors.find(t => t.slug === slug);

  if (!tutor) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#0B1B3A] mb-4">Tutor Not Found</h1>
          <Link href="/tutors"><Button>Back to Tutors</Button></Link>
        </div>
      </div>
    );
  }

  const tutorCampus = campuses.find(c => c.id === tutor.campusId);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-red-50 to-blue-50">
      <Navigation />
      
      <div className="pt-32 pb-12 sm:pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <img src={tutor.photoUrl} alt={tutor.name} className="w-48 h-48 rounded-full object-cover border-4 border-[#B99750] mx-auto md:mx-0" />
                    <div className="flex-1">
                      <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-[#0B1B3A] via-[#B99750] to-red-600 bg-clip-text text-transparent">{tutor.name}</h1>
                      <p className="text-xl text-gray-600 mb-4">{tutor.title}</p>
                      {tutor.acceptingMentees && <Badge className="bg-gradient-to-r from-green-600 to-teal-600 mb-4">Accepting Mentees</Badge>}
                      {tutorCampus && (
                        <div className="flex items-center gap-2 text-gray-600">
                          <MapPin className="h-4 w-4" />
                          <Link href={`/campuses/${tutorCampus.slug}`} className="hover:text-[#B99750]">{tutorCampus.name}</Link>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader><CardTitle>Biography</CardTitle></CardHeader>
                <CardContent><p className="text-gray-700 leading-relaxed">{tutor.bio}</p></CardContent>
              </Card>

              <Card>
                <CardHeader><CardTitle>Areas of Expertise</CardTitle></CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {tutor.expertise.map((exp, idx) => (
                      <Badge key={idx} variant="outline" className="text-base py-2 px-4">{exp}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="sticky top-24">
                <CardHeader><CardTitle>Get in Touch</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  {tutor.acceptingMentees && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                      <p className="text-sm text-green-800">This tutor is currently accepting mentees.</p>
                    </div>
                  )}
                  <Link href="/contact">
                    <Button className="w-full bg-gradient-to-r from-[#0B1B3A] to-red-600 hover:from-red-600 hover:to-[#0B1B3A]">
                      <Mail className="mr-2 h-4 w-4" />Contact Tutor
                    </Button>
                  </Link>
                  <Link href="/apply"><Button variant="outline" className="w-full">Apply to KCIC</Button></Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
