import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Layout from '@/components/Layout';
import PageBreadcrumb from '@/components/PageBreadcrumb';
import { universities, otherUniversities } from '@/data/universities';
import { Input } from '@/components/ui/input';
import { Search, MapPin, GraduationCap, BadgeDollarSign, Award } from 'lucide-react';

const countries = ['All', 'United Kingdom', 'United States', 'Canada', 'Australia', 'Malaysia', 'United Arab Emirates', 'New Zealand', 'Europe'];

export default function Universities() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('All');

  const filteredUniversities = universities.filter(uni => {
    const matchesSearch = uni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      uni.city.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCountry = selectedCountry === 'All' || uni.country === selectedCountry;
    return matchesSearch && matchesCountry;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF3E0] to-white">
      <Navigation />
      
      <PageBreadcrumb items={[{ label: 'Universities' }]} />
      
      <div className="pt-8 pb-12 sm:pb-16 lg:pb-20">

        <Layout>
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 text-[#0B1B3A]">Partner Universities</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              More than 400+ Universities are accepting BTEC Qualifications - Taught at KCIC.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg mb-8 max-w-4xl mx-auto">
            <div className="relative mb-6">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input placeholder="Search universities..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10" />
            </div>
            <div className="flex flex-wrap gap-2">
              {countries.map(country => (
                <button key={country} onClick={() => setSelectedCountry(country)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCountry === country ? 'bg-gradient-to-r from-[#0B1B3A] to-[#1a2d5a] text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                  {country === 'United Kingdom' ? 'UK' : country === 'United States' ? 'USA' : country === 'United Arab Emirates' ? 'UAE' : country}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredUniversities.map(uni => (
              <Link key={uni.id} to={`/universities/${uni.slug}`}>
                <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#B99750] hover:shadow-2xl transition-all duration-300 cursor-pointer h-full group">
                  <div className="h-48 overflow-hidden bg-gradient-to-br from-[#0B1B3A] via-[#1a2d5a] to-[#B99750] relative">
                    <img src={uni.logoUrl} alt={uni.name} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                    {uni.qsRank && (
                      <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                        <Award className="h-4 w-4 text-[#B99750]" />
                        <span className="text-sm font-semibold text-[#0B1B3A]">QS {uni.qsRank}</span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-3 text-[#0B1B3A] line-clamp-2 min-h-[3.5rem]">{uni.name}</h3>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="w-4 h-4 text-[#B99750] flex-shrink-0" />
                        <span className="font-medium">{uni.city}, {uni.country}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <BadgeDollarSign className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span className="font-semibold text-gray-800">{uni.feesPerYear}/year</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <GraduationCap className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        <span className="text-gray-700">Scholarship: <span className="font-semibold text-blue-600">{uni.scholarshipRange}</span></span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-2">{uni.summary}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Other Universities Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-[#0B1B3A]">Other Universities That Have Accepted Our Students</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {otherUniversities.map(uni => (
                <div key={uni.id} className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-[#B99750] hover:shadow-xl transition-all duration-300 h-full group">
                  <div className="h-40 overflow-hidden bg-gradient-to-br from-[#0B1B3A] via-[#1a2d5a] to-[#B99750] relative">
                    <img src={uni.logoUrl} alt={uni.name} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-lg mb-2 text-[#0B1B3A] line-clamp-2 min-h-[3rem]">{uni.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                      <MapPin className="w-4 h-4 text-[#B99750] flex-shrink-0" />
                      <span className="font-medium">{uni.city}, {uni.country}</span>
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-3">{uni.summary}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Layout>
      </div>
      <Footer />
    </div>
  );
}
