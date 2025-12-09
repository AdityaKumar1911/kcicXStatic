import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Video } from 'lucide-react';
import ActivityCard from '@/components/ActivityCard';
import PhotoGalleryModal from '@/components/PhotoGalleryModal';
import { exploreECR, type Activity } from '@/pages/CampusesData';

export default function ExploreECRSection() {
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleActivityClick = (activity: Activity) => {
    if (activity.gallery && activity.gallery.length > 0) {
      setSelectedActivity(activity);
      setIsModalOpen(true);
    }
  };

  const handleCTA = () => {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-rose-50 to-orange-50">
      <PhotoGalleryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} images={selectedActivity?.gallery || []} title={selectedActivity?.title || ''} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-100 rounded-full text-rose-700 text-sm font-medium mb-4">
            <MapPin className="w-4 h-4" />
            Location Benefits
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1B3A] mb-4">Explore ECR</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The East Coast Road offers endless adventures just minutes from campus.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {exploreECR.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} onClick={() => handleActivityClick(activity)} colorScheme="red" />
          ))}
        </div>

        <div className="text-center">
          <Button onClick={handleCTA} className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-6 text-lg rounded-full group">
            <Video className="mr-2 h-5 w-5" />
            Take a Virtual Campus Tour
          </Button>
        </div>
      </div>
    </section>
  );
}