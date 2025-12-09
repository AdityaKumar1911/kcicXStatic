import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getCampuses } from '@/lib/supabase/server';
import { Button } from '@/components/ui/button';
import { MapPin, Wifi, BookOpen, Coffee, Car, Home, Utensils } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Campus Life | KCIC',
  description: 'Experience world-class education at KCIC campuses with modern facilities.',
};

const facilities = [
  { icon: <Wifi className="w-6 h-6" />, title: 'High-Speed WiFi', desc: 'Campus-wide connectivity' },
  { icon: <BookOpen className="w-6 h-6" />, title: 'Modern Library', desc: '50,000+ resources' },
  { icon: <Coffee className="w-6 h-6" />, title: 'Cafeteria', desc: 'Multi-cuisine dining' },
  { icon: <Car className="w-6 h-6" />, title: 'Parking', desc: 'Secure parking facilities' },
  { icon: <Home className="w-6 h-6" />, title: 'Accommodation', desc: 'On-campus housing' },
  { icon: <Utensils className="w-6 h-6" />, title: 'Food Court', desc: 'Variety of options' },
];

export default async function CampusesPage() {
  const campuses = await getCampuses();
  const heroImage = campuses[0]?.hero_image_url || 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1763095462961_14971d2f.webp';

  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-[60vh] min-h-[500px] bg-gradient-to-br from-[#0B1B3A] to-[#1a2d5a]">
        <Image src={heroImage} alt="KCIC Campus" fill className="object-cover opacity-40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Experience KCIC Life</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              World-class facilities, vibrant community, and endless opportunities
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-[#B99750] hover:bg-[#a88645]">Book Campus Visit</Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#0B1B3A]">Virtual Tour</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 bg-[#0B1B3A]">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[{ value: '50+', label: 'Acres Campus' }, { value: '2000+', label: 'Students' }, { value: '100+', label: 'Faculty' }, { value: '95%', label: 'Placement' }].map((stat, i) => (
            <div key={i}><p className="text-4xl font-bold text-[#B99750]">{stat.value}</p><p className="text-white/80">{stat.label}</p></div>
          ))}
        </div>
      </div>

      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0B1B3A] mb-4">Campus Facilities</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-[#B99750]/10 rounded-xl flex items-center justify-center text-[#B99750] mb-4">{f.icon}</div>
                <h3 className="text-xl font-bold text-[#0B1B3A] mb-2">{f.title}</h3>
                <p className="text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20 bg-gradient-to-r from-[#0B1B3A] to-[#1a2f5a]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Experience <span className="text-[#B99750]">KCIC Life?</span></h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/apply"><Button size="lg" className="bg-[#B99750] hover:bg-[#a88645]">Apply Now</Button></Link>
            <Link href="/contact"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#0B1B3A]">Contact Us</Button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
