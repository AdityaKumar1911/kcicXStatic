import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Home, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ActivityCard from '@/components/ActivityCard';
import PhotoGalleryModal from '@/components/PhotoGalleryModal';
import { accommodationAmenities, type Activity } from '@/pages/CampusesData';

export default function AccommodationSection() {
  const navigate = useNavigate();
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleActivityClick = (activity: Activity) => {
    if (activity.gallery && activity.gallery.length > 0) {
      setSelectedActivity(activity);
      setIsModalOpen(true);
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-amber-50 to-yellow-50">
      <PhotoGalleryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} images={selectedActivity?.gallery || []} title={selectedActivity?.title || ''} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full text-amber-700 text-sm font-medium mb-4">
            <Home className="w-4 h-4" />
            Student Housing
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1B3A] mb-4">Accommodation</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Air-conditioned accommodation with premium amenities for comfortable living.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {accommodationAmenities.map((amenity) => (
            <ActivityCard key={amenity.id} activity={amenity} onClick={() => handleActivityClick(amenity)} colorScheme="gold" />
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-xl border border-amber-200 mb-10">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-[#B99750] mb-2">₹15,000</div>
              <p className="text-gray-600">Monthly rent starting from</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#B99750] mb-2">24/7</div>
              <p className="text-gray-600">Security & support</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#B99750] mb-2">5 min</div>
              <p className="text-gray-600">Walk to campus</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button onClick={() => navigate('/contact')} className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg rounded-full group">
            <Calendar className="mr-2 h-5 w-5" />
            Book Your Room
          </Button>
        </div>
      </div>
    </section>
  );
}
