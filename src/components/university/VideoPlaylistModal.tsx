import { X, ChevronLeft, ChevronRight, Play, Pause, SkipForward, SkipBack, List } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

interface VideoItem {
  url: string;
  title: string;
}

interface VideoPlaylistModalProps {
  isOpen: boolean;
  onClose: () => void;
  videos: VideoItem[];
  universityName: string;
}

function getYouTubeEmbedUrl(url: string, autoplay = true): string {
  if (!url) return '';
  let videoId = '';
  const watchMatch = url.match(/[?&]v=([^&]+)/);
  if (watchMatch) videoId = watchMatch[1];
  const shortMatch = url.match(/youtu\.be\/([^?&]+)/);
  if (shortMatch) videoId = shortMatch[1];
  const embedMatch = url.match(/youtube\.com\/embed\/([^?&]+)/);
  if (embedMatch) videoId = embedMatch[1];
  if (videoId) return `https://www.youtube.com/embed/${videoId}?autoplay=${autoplay ? 1 : 0}&rel=0&enablejsapi=1`;
  return url;
}

export default function VideoPlaylistModal({ isOpen, onClose, videos, universityName }: VideoPlaylistModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPlaylist, setShowPlaylist] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      setCurrentIndex(0);
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const goNext = () => setCurrentIndex(i => Math.min(i + 1, videos.length - 1));
  const goPrev = () => setCurrentIndex(i => Math.max(i - 1, 0));

  if (!isOpen || videos.length === 0) return null;

  const currentVideo = videos[currentIndex];
  const embedUrl = getYouTubeEmbedUrl(currentVideo.url);
  const progress = ((currentIndex + 1) / videos.length) * 100;

  return (
    <div className="fixed inset-0 z-50 flex bg-black/95 backdrop-blur-sm" onClick={onClose}>
      <div className="flex flex-1 flex-col lg:flex-row" onClick={e => e.stopPropagation()}>
        {/* Main Video Area */}
        <div className="flex-1 flex flex-col">
          {/* Top Bar */}
          <div className="flex items-center justify-between p-4 bg-gradient-to-b from-black/80 to-transparent">
            <div className="flex items-center gap-4">
              <span className="text-white/60 text-sm">Chapter {currentIndex + 1} of {videos.length}</span>
              <h2 className="text-white font-semibold">{currentVideo.title}</h2>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => setShowPlaylist(!showPlaylist)} className="text-white/80 hover:text-white p-2 rounded-lg hover:bg-white/10 lg:hidden">
                <List className="w-5 h-5" />
              </button>
              <button onClick={onClose} className="text-white/80 hover:text-white p-2 rounded-lg hover:bg-white/10 flex items-center gap-1">
                <span className="text-sm hidden sm:inline">Close</span>
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="h-1 bg-white/20 mx-4">
            <div className="h-full bg-red-500 transition-all duration-300" style={{ width: `${progress}%` }} />
          </div>

          {/* Video Player */}
          <div className="flex-1 flex items-center justify-center p-4">
            <div className="w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
              <iframe ref={iframeRef} src={embedUrl} title={currentVideo.title} className="w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
          </div>

          {/* Bottom Controls */}
          <div className="flex items-center justify-center gap-4 p-4 bg-gradient-to-t from-black/80 to-transparent">
            <button onClick={goPrev} disabled={currentIndex === 0} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all">
              <SkipBack className="w-5 h-5" /><span className="hidden sm:inline">Previous</span>
            </button>
            <div className="flex items-center gap-1">
              {videos.map((_, i) => (
                <button key={i} onClick={() => setCurrentIndex(i)} className={`w-2 h-2 rounded-full transition-all ${i === currentIndex ? 'bg-red-500 w-6' : 'bg-white/40 hover:bg-white/60'}`} />
              ))}
            </div>
            <button onClick={goNext} disabled={currentIndex === videos.length - 1} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all">
              <span className="hidden sm:inline">Next</span><SkipForward className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Playlist Sidebar */}
        <div className={`${showPlaylist ? 'block' : 'hidden'} lg:block w-full lg:w-80 bg-gray-900/95 border-l border-white/10 overflow-y-auto`}>
          <div className="p-4 border-b border-white/10">
            <h3 className="text-white font-semibold">{universityName}</h3>
            <p className="text-white/60 text-sm">Virtual Tour Playlist</p>
          </div>
          <div className="p-2">
            {videos.map((video, i) => (
              <button key={i} onClick={() => setCurrentIndex(i)} className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-all ${i === currentIndex ? 'bg-red-500/20 border border-red-500/50' : 'hover:bg-white/10'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${i === currentIndex ? 'bg-red-500 text-white' : 'bg-white/20 text-white/60'}`}>
                  {i === currentIndex ? <Play className="w-4 h-4" /> : <span className="text-sm">{i + 1}</span>}
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`truncate ${i === currentIndex ? 'text-white font-medium' : 'text-white/80'}`}>{video.title}</p>
                  <p className="text-white/40 text-xs">{i < currentIndex ? 'Watched' : i === currentIndex ? 'Now Playing' : 'Up Next'}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
