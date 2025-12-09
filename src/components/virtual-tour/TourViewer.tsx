import React, { useState, useRef, useEffect } from 'react';
import { TourLocation, Hotspot } from '@/data/virtualTourData';
import { TourHotspot } from './TourHotspot';
import { TourInfoPopup } from './TourInfoPopup';
import { ZoomIn, ZoomOut, RotateCcw, Move } from 'lucide-react';

interface TourViewerProps {
  location: TourLocation;
  onNavigate: (locationId: string) => void;
}

export const TourViewer: React.FC<TourViewerProps> = ({ location, onNavigate }) => {
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  }, [location.id]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoom > 1) {
      const maxOffset = (zoom - 1) * 200;
      const newX = Math.max(-maxOffset, Math.min(maxOffset, e.clientX - dragStart.x));
      const newY = Math.max(-maxOffset, Math.min(maxOffset, e.clientY - dragStart.y));
      setPosition({ x: newX, y: newY });
    }
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleZoom = (delta: number) => {
    setZoom(prev => Math.max(1, Math.min(3, prev + delta)));
    if (zoom + delta <= 1) setPosition({ x: 0, y: 0 });
  };

  const resetView = () => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div className="relative w-full h-full overflow-hidden bg-gray-900 rounded-xl" ref={containerRef}>
      {/* 360 Image Container */}
      <div
        className={`relative w-full h-full transition-transform duration-200 ${isDragging ? 'cursor-grabbing' : zoom > 1 ? 'cursor-grab' : 'cursor-default'}`}
        style={{ transform: `scale(${zoom}) translate(${position.x / zoom}px, ${position.y / zoom}px)` }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <img
          src={location.image}
          alt={location.name}
          className="w-full h-full object-cover select-none"
          draggable={false}
        />
        
        {/* Hotspots */}
        {location.hotspots.map((hotspot) => (
          <TourHotspot
            key={hotspot.id}
            hotspot={hotspot}
            onClick={setActiveHotspot}
            isActive={activeHotspot?.id === hotspot.id}
          />
        ))}
      </div>

      {/* Zoom Controls */}
      <div className="absolute top-4 right-4 flex flex-col gap-2 z-30">
        <button onClick={() => handleZoom(0.5)} className="w-10 h-10 bg-white/90 hover:bg-white rounded-lg shadow-lg flex items-center justify-center transition-colors">
          <ZoomIn className="w-5 h-5 text-gray-700" />
        </button>
        <button onClick={() => handleZoom(-0.5)} className="w-10 h-10 bg-white/90 hover:bg-white rounded-lg shadow-lg flex items-center justify-center transition-colors">
          <ZoomOut className="w-5 h-5 text-gray-700" />
        </button>
        <button onClick={resetView} className="w-10 h-10 bg-white/90 hover:bg-white rounded-lg shadow-lg flex items-center justify-center transition-colors">
          <RotateCcw className="w-5 h-5 text-gray-700" />
        </button>
      </div>

      {/* Drag hint */}
      {zoom > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white text-sm px-4 py-2 rounded-full flex items-center gap-2 z-30">
          <Move className="w-4 h-4" /> Drag to pan
        </div>
      )}

      {/* Info Popup */}
      {activeHotspot && (
        <TourInfoPopup
          hotspot={activeHotspot}
          onClose={() => setActiveHotspot(null)}
          onNavigate={onNavigate}
        />
      )}
    </div>
  );
};
