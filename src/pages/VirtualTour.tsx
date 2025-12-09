import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Play, Calendar, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { tourLocations } from '@/data/virtualTourData';
import { TourViewer } from '@/components/virtual-tour/TourViewer';
import { GuidedTourControls } from '@/components/virtual-tour/GuidedTourControls';
import { ScheduleVisitModal } from '@/components/virtual-tour/ScheduleVisitModal';

const VirtualTour: React.FC = () => {
  const [currentLocationIndex, setCurrentLocationIndex] = useState(0);
  const [isGuidedMode, setIsGuidedMode] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showScheduleModal, setShowScheduleModal] = useState(false);

  const currentLocation = tourLocations[currentLocationIndex];

  const navigateToLocation = useCallback((locationId: string) => {
    const index = tourLocations.findIndex(loc => loc.id === locationId);
    if (index !== -1) setCurrentLocationIndex(index);
  }, []);

  const goNext = useCallback(() => {
    if (currentLocationIndex < tourLocations.length - 1) {
      setCurrentLocationIndex(prev => prev + 1);
    }
  }, [currentLocationIndex]);

  const goPrevious = useCallback(() => {
    if (currentLocationIndex > 0) {
      setCurrentLocationIndex(prev => prev - 1);
    }
  }, [currentLocationIndex]);

  useEffect(() => {
    if (isGuidedMode && isPlaying) {
      const timer = setTimeout(() => {
        if (currentLocationIndex < tourLocations.length - 1) {
          goNext();
        } else {
          setIsPlaying(false);
        }
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [isGuidedMode, isPlaying, currentLocationIndex, goNext]);

  const startGuidedTour = () => {
    setCurrentLocationIndex(0);
    setIsGuidedMode(true);
    setIsPlaying(true);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-b from-black/80 to-transparent">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-white hover:text-blue-300 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="hidden sm:inline">Back to Home</span>
          </Link>
          
          <h1 className="text-white font-bold text-lg sm:text-xl flex items-center gap-2">
            <MapPin className="w-5 h-5 text-blue-400" />
            Virtual Campus Tour
          </h1>
          
          <div className="flex gap-2">
            {!isGuidedMode && (
              <Button onClick={startGuidedTour} size="sm" className="bg-gradient-to-r from-blue-500 to-indigo-600 text-xs sm:text-sm">
                <Play className="w-4 h-4 mr-1" /> Guided Tour
              </Button>
            )}
            <Button onClick={() => setShowScheduleModal(true)} size="sm" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-xs sm:text-sm">
              <Calendar className="w-4 h-4 mr-1" /> <span className="hidden sm:inline">Schedule</span> Visit
            </Button>
          </div>
        </div>
      </header>

      {/* Main Tour Area */}
      <main className="pt-16 h-screen flex flex-col">
        {/* Location Info Bar */}
        <div className="bg-gray-800 px-4 py-3 flex items-center justify-between">
          <div>
            <h2 className="text-white font-semibold text-lg">{currentLocation.name}</h2>
            <p className="text-gray-400 text-sm hidden sm:block">{currentLocation.description}</p>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={goPrevious} disabled={currentLocationIndex === 0} className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 text-white">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-white text-sm">{currentLocationIndex + 1} / {tourLocations.length}</span>
            <button onClick={goNext} disabled={currentLocationIndex === tourLocations.length - 1} className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 text-white">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tour Viewer */}
        <div className="flex-1 relative">
          <TourViewer location={currentLocation} onNavigate={navigateToLocation} />
          
          {isGuidedMode && (
            <GuidedTourControls
              isPlaying={isPlaying}
              isMuted={isMuted}
              currentIndex={currentLocationIndex}
              totalLocations={tourLocations.length}
              currentLocation={currentLocation}
              onPlayPause={() => setIsPlaying(!isPlaying)}
              onMuteToggle={() => setIsMuted(!isMuted)}
              onPrevious={goPrevious}
              onNext={goNext}
              onExit={() => { setIsGuidedMode(false); setIsPlaying(false); }}
            />
          )}
        </div>

        {/* Location Thumbnails */}
        {!isGuidedMode && (
          <div className="bg-gray-800 p-3 overflow-x-auto">
            <div className="flex gap-3 min-w-max">
              {tourLocations.map((loc, idx) => (
                <button key={loc.id} onClick={() => setCurrentLocationIndex(idx)} className={`relative flex-shrink-0 w-24 sm:w-32 h-16 sm:h-20 rounded-lg overflow-hidden transition-all ${idx === currentLocationIndex ? 'ring-2 ring-blue-500 scale-105' : 'opacity-70 hover:opacity-100'}`}>
                  <img src={loc.image} alt={loc.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <span className="absolute bottom-1 left-2 right-2 text-white text-xs font-medium truncate">{loc.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </main>

      {showScheduleModal && <ScheduleVisitModal onClose={() => setShowScheduleModal(false)} />}
    </div>
  );
};

export default VirtualTour;
