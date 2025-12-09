import React from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TourLocation } from '@/data/virtualTourData';

interface GuidedTourControlsProps {
  isPlaying: boolean;
  isMuted: boolean;
  currentIndex: number;
  totalLocations: number;
  currentLocation: TourLocation;
  onPlayPause: () => void;
  onMuteToggle: () => void;
  onPrevious: () => void;
  onNext: () => void;
  onExit: () => void;
}

export const GuidedTourControls: React.FC<GuidedTourControlsProps> = ({
  isPlaying,
  isMuted,
  currentIndex,
  totalLocations,
  currentLocation,
  onPlayPause,
  onMuteToggle,
  onPrevious,
  onNext,
  onExit,
}) => {
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-4 sm:p-6">
      {/* Narration text */}
      <div className="max-w-2xl mx-auto mb-4">
        <p className="text-white text-center text-sm sm:text-base md:text-lg font-medium leading-relaxed">
          "{currentLocation.narration}"
        </p>
      </div>
      
      {/* Progress bar */}
      <div className="max-w-md mx-auto mb-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-white/70 text-xs">{currentIndex + 1}</span>
          <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-500"
              style={{ width: `${((currentIndex + 1) / totalLocations) * 100}%` }}
            />
          </div>
          <span className="text-white/70 text-xs">{totalLocations}</span>
        </div>
      </div>
      
      {/* Controls */}
      <div className="flex items-center justify-center gap-2 sm:gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={onMuteToggle}
          className="text-white hover:bg-white/20 w-10 h-10"
        >
          {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </Button>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={onPrevious}
          disabled={currentIndex === 0}
          className="text-white hover:bg-white/20 disabled:opacity-30 w-10 h-10"
        >
          <SkipBack className="w-5 h-5" />
        </Button>
        
        <Button
          onClick={onPlayPause}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
        >
          {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-0.5" />}
        </Button>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={onNext}
          disabled={currentIndex === totalLocations - 1}
          className="text-white hover:bg-white/20 disabled:opacity-30 w-10 h-10"
        >
          <SkipForward className="w-5 h-5" />
        </Button>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={onExit}
          className="text-white hover:bg-white/20 w-10 h-10"
        >
          <X className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};
