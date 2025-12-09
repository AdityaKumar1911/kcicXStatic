import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PageBreadcrumb from '@/components/PageBreadcrumb';
import { tutors } from '@/data/tutors';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search } from 'lucide-react';

export default function Tutors() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTutors = tutors.filter(tutor =>
    tutor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tutor.expertise.some(exp => exp.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-red-50 to-blue-50">
      <Navigation />
      
      <PageBreadcrumb items={[{ label: 'Tutors' }]} />
      
      <div className="pt-8 pb-12 sm:pb-16 lg:pb-20">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">


          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-[#0B1B3A] via-[#B99750] to-[#0B1B3A] bg-clip-text text-transparent">

              Meet Our Tutors
            </h1>
            <p className="text-xl text-gray-600">Expert faculty guiding your international education journey</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutors.map(tutor => (
              <Link key={tutor.id} to={`/tutors/${tutor.slug}`}>
                <Card className="hover:shadow-2xl transition-all h-full">
                  <CardContent className="pt-6 text-center">
                    <img 
                      src={tutor.photoUrl} 
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
                    {tutor.acceptingMentees && (
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
