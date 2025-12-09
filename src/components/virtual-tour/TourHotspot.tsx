import React from 'react';
import { Info, ArrowRight, Video, Camera } from 'lucide-react';
import { Hotspot } from '@/data/virtualTourData';

interface TourHotspotProps {
  hotspot: Hotspot;
  onClick: (hotspot: Hotspot) => void;
  isActive: boolean;
}

const iconMap = {
  info: Info,
  arrow: ArrowRight,
  video: Video,
  photo: Camera,
};

export const TourHotspot: React.FC<TourHotspotProps> = ({ hotspot, onClick, isActive }) => {
  const Icon = iconMap[hotspot.icon];
  
  return (
    <button
      onClick={() => onClick(hotspot)}
      className={`absolute transform -translate-x-1/2 -translate-y-1/2 z-20 group transition-all duration-300 ${
        isActive ? 'scale-125' : 'hover:scale-110'
      }`}
      style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
      aria-label={hotspot.title}
    >
      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-30" />
      
      {/* Main button */}
      <span className={`relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-lg transition-all duration-300 ${
        hotspot.icon === 'arrow' 
          ? 'bg-gradient-to-r from-green-500 to-emerald-600' 
          : 'bg-gradient-to-r from-blue-500 to-indigo-600'
      } ${isActive ? 'ring-4 ring-white' : ''}`}>
        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </span>
      
      {/* Tooltip */}
      <span className="absolute left-1/2 -translate-x-1/2 -top-12 bg-gray-900 text-white text-xs sm:text-sm px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
        {hotspot.title}
        <span className="absolute left-1/2 -translate-x-1/2 top-full border-4 border-transparent border-t-gray-900" />
      </span>
    </button>
  );
};
