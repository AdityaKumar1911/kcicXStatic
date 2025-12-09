import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Layout from '@/components/Layout';
import PageBreadcrumb from '@/components/PageBreadcrumb';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { programs as mockPrograms } from '@/data/programs';
import ProgramCard from '@/components/ProgramCard';
import FeaturedProgramsSection from '@/components/FeaturedProgramsSection';
import { Department } from '@/types';
import { SEO } from '@/components/SEO';

export default function Programs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState<Department | 'All'>('All');
  const location = useLocation();

  const departments: Array<Department | 'All'> = ['All', 'Business', 'Engineering', 'Technology', 'Psychology'];

  // Handle hash navigation for featured section
  useEffect(() => {
    if (location.hash === '#featured') {
      setTimeout(() => {
        const el = document.getElementById('featured');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location]);

  const filteredPrograms = mockPrograms.filter(program => {
    const matchesSearch = program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      program.discipline.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = selectedDept === 'All' || program.department === selectedDept;
    return matchesSearch && matchesDept;
  });

  return (
    <>
      <SEO
        title="Programs - KCIC Pathway College | UK Degree Programs in India"
        description="Explore our range of pathway programs in Engineering, Business, Technology, and Psychology. Study in India, graduate from top UK universities."
        keywords="UK degree programs, engineering programs, business degrees, pathway programs India, KCIC programs"
        url="https://kcic.edu.in/programs"
      />
      <div className="min-h-screen bg-gradient-to-br from-[#FAF3E0] to-white">
        <Navigation />
        <PageBreadcrumb items={[{ label: 'Programs' }]} />
        
        <section className="pt-8 pb-12 sm:pb-16 lg:pb-20">
          <Layout>
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold mb-4 text-[#0B1B3A]">Our Programs</h1>
              <p className="text-xl text-gray-600">Discover your perfect pathway to success</p>
            </div>

            <FeaturedProgramsSection />

            <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
              <div className="max-w-xl mx-auto mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    placeholder="Search programs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-2">
                {departments.map(dept => (
                  <Button
                    key={dept}
                    onClick={() => setSelectedDept(dept)}
                    variant={selectedDept === dept ? 'default' : 'outline'}
                    size="sm"
                    className={selectedDept === dept ? 'bg-[#0B1B3A] text-white' : ''}
                  >
                    {dept}
                  </Button>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPrograms.map(program => (
                <ProgramCard
                  key={program.id}
                  title={program.title}
                  department={program.department}
                  pathwayModel={program.pathwayModel}
                  slug={program.slug}
                  kcicFeesPerYear={program.year1FeesInr}
                  abroadFeesPerYear={program.abroadFeesPerYearInr}
                  majors={program.majors}
                />
              ))}
            </div>

            {filteredPrograms.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No programs found matching your criteria.</p>
                <Button 
                  onClick={() => { setSearchTerm(''); setSelectedDept('All'); }}
                  className="mt-4 bg-[#B99750] hover:bg-[#a88645]"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </Layout>
        </section>

        <Footer />
      </div>
    </>
  );
}
