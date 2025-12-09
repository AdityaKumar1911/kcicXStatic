import { Camera } from 'lucide-react';

interface Activity {
  id: number;
  title: string;
  description: string;
  image: string;
  gallery?: { url: string; caption: string }[];
}

interface ActivityCardProps {
  activity: Activity;
  onClick: () => void;
  colorScheme?: 'blue' | 'red' | 'gold';
}

export default function ActivityCard({ activity, onClick, colorScheme = 'blue' }: ActivityCardProps) {
  const colors = {
    blue: 'from-[#0B1B3A]/80',
    red: 'from-[#DC2626]/80',
    gold: 'from-[#B99750]/80'
  };

  return (
    <div
      onClick={onClick}
      className="group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl active:scale-95 transition-all duration-300 bg-white touch-manipulation"
    >
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <img
          src={activity.image}
          alt={activity.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {activity.gallery && activity.gallery.length > 0 && (
          <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-black/70 text-white px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full flex items-center gap-1 sm:gap-1.5 text-xs sm:text-sm font-medium shadow-lg">
            <Camera className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>{activity.gallery.length}</span>
          </div>
        )}
        <div className={`absolute inset-0 bg-gradient-to-t ${colors[colorScheme]} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center`}>
          {activity.gallery && activity.gallery.length > 0 && (
            <span className="text-white text-xs sm:text-sm font-semibold bg-black/50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
              Tap to View Gallery
            </span>
          )}
        </div>
      </div>
      <div className="p-4 sm:p-5">
        <h3 className="text-base sm:text-lg font-bold text-[#0B1B3A] mb-1.5 sm:mb-2 line-clamp-2">
          {activity.title}
        </h3>
        <p className="text-gray-600 text-xs sm:text-sm line-clamp-2">
          {activity.description}
        </p>
      </div>
    </div>
  );
}

