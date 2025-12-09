import React from 'react';
import { X, MapPin, ArrowRight } from 'lucide-react';
import { Hotspot } from '@/data/virtualTourData';
import { Button } from '@/components/ui/button';

interface TourInfoPopupProps {
  hotspot: Hotspot;
  onClose: () => void;
  onNavigate?: (locationId: string) => void;
}

export const TourInfoPopup: React.FC<TourInfoPopupProps> = ({ hotspot, onClose, onNavigate }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-in zoom-in-95 duration-300">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">{hotspot.title}</h3>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6">
          <p className="text-gray-600 leading-relaxed mb-6">{hotspot.description}</p>
          
          <div className="flex gap-3">
            {hotspot.linkedLocation && onNavigate && (
              <Button
                onClick={() => {
                  onNavigate(hotspot.linkedLocation!);
                  onClose();
                }}
                className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
              >
                Go There <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            )}
            <Button variant="outline" onClick={onClose} className="flex-1">
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
