import { Metadata } from 'next';
import Link from 'next/link';
import { getFaculty } from '@/lib/supabase/server';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Meet Our Tutors | KCIC',
  description: 'Expert faculty guiding your international education journey at KCIC.',
};

export default async function TutorsPage() {
  // Fetch faculty from Supabase
  const faculty = await getFaculty();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-red-50 to-blue-50">
      <Navigation />
      
      <div className="pt-32 pb-12 sm:pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-[#0B1B3A] via-[#B99750] to-red-600 bg-clip-text text-transparent">
              Meet Our Tutors
            </h1>
            <p className="text-xl text-gray-600">Expert faculty guiding your international education journey</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {faculty.map(tutor => (
              <Link key={tutor.id} href={`/tutors/${tutor.slug}`}>
                <Card className="hover:shadow-2xl transition-all h-full">
                  <CardContent className="pt-6 text-center">
                    <img 
                      src={tutor.photo_url} 
                      alt={tutor.name}
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-[#B99750]"
                    />
                    <h3 className="text-xl font-bold mb-2">{tutor.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">{tutor.title}</p>
                    <p className="text-sm text-gray-700 mb-4 line-clamp-3">{tutor.bio}</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {tutor.expertise.slice(0, 3).map((exp, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {exp}
                        </Badge>
                      ))}
                    </div>
                    {tutor.accepting_mentees && (
                      <Badge className="mt-4 bg-gradient-to-r from-green-600 to-teal-600">
                        Accepting Mentees
                      </Badge>
                    )}
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
