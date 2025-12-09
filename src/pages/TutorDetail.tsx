import { useParams, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PageBreadcrumb from '@/components/PageBreadcrumb';
import { tutors } from '@/data/tutors';
import { campuses } from '@/data/campuses';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Mail } from 'lucide-react';

export default function TutorDetail() {
  const { slug } = useParams();
  const tutor = tutors.find(t => t.slug === slug);

  if (!tutor) {
    return <div>Tutor not found</div>;
  }

  const tutorCampus = campuses.find(c => c.id === tutor.campusId);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF3E0] to-white">
      <Navigation />
      <PageBreadcrumb items={[{ label: 'Tutors', href: '/tutors' }, { label: tutor.name }]} />
      
      <div className="pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <img src={tutor.photoUrl} alt={tutor.name} className="w-48 h-48 rounded-full object-cover border-4 border-[#B99750] mx-auto md:mx-0" />
                    <div className="flex-1">
                      <h1 className="text-4xl font-bold mb-2 text-[#0B1B3A]">{tutor.name}</h1>
                      <p className="text-xl text-gray-600 mb-4">{tutor.title}</p>
                      {tutor.acceptingMentees && <Badge className="bg-green-600 mb-4">Accepting Mentees</Badge>}
                      {tutorCampus && (
                        <div className="flex items-center gap-2 text-gray-600">
                          <MapPin className="h-4 w-4" />
                          <Link to={`/campuses/${tutorCampus.slug}`} className="hover:text-[#B99750]">{tutorCampus.name}</Link>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle>Biography</CardTitle></CardHeader>
                <CardContent><p className="text-gray-700">{tutor.bio}</p></CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle>Areas of Expertise</CardTitle></CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {tutor.expertise.map((exp, idx) => <Badge key={idx} variant="outline">{exp}</Badge>)}
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card className="sticky top-24">
                <CardHeader><CardTitle>Get in Touch</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <Link to="/contact">
                    <Button className="w-full bg-[#0B1B3A] hover:bg-[#1a2942]"><Mail className="mr-2 h-4 w-4" />Contact Tutor</Button>
                  </Link>
                  <Link to="/apply"><Button variant="outline" className="w-full">Apply to KCIC</Button></Link>
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
