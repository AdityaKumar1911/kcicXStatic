import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Users, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ActivityCard from '@/components/ActivityCard';
import PhotoGalleryModal from '@/components/PhotoGalleryModal';
import { campusLifeActivities, type Activity } from '@/pages/CampusesData';

export default function CampusLifeSection() {
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
    <section className="py-16 sm:py-20 bg-gradient-to-br from-[#FAF3E0] to-white">
      <PhotoGalleryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} images={selectedActivity?.gallery || []} title={selectedActivity?.title || ''} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#B99750]/10 rounded-full text-[#B99750] text-sm font-medium mb-4">
            <Users className="w-4 h-4" />
            Student Life
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1B3A] mb-4">Campus Life</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From clubs to sports, discover the vibrant community that makes KCIC special.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {campusLifeActivities.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} onClick={() => handleActivityClick(activity)} colorScheme="gold" />
          ))}
        </div>

        <div className="text-center">
          <Button onClick={() => navigate('/contact')} className="bg-[#B99750] hover:bg-[#a88645] text-white px-8 py-6 text-lg rounded-full group">
            <MessageCircle className="mr-2 h-5 w-5" />
            Speak to Our Student Ambassadors
          </Button>
        </div>
      </div>
    </section>
  );
}
