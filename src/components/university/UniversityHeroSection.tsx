import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Award, GraduationCap, ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import VideoPlaylistModal from './VideoPlaylistModal';

interface VideoItem {
  url: string;
  title: string;
}

interface UniversityHeroProps {
  name: string;
  country: string;
  city: string;
  qsRank?: number;
  logoUrl: string;
  summary: string;
  heroImage: string;
  virtualTourUrl?: string;
  virtualTourVideos?: VideoItem[];
}

function parseVideosFromUrl(url: string, universityName: string): VideoItem[] {
  if (!url) return [];
  // Support comma-separated URLs or JSON array
  try {
    if (url.startsWith('[')) {
      return JSON.parse(url);
    }
  } catch {}
  // Split by comma or newline
  const urls = url.split(/[,\n]/).map(u => u.trim()).filter(Boolean);
  return urls.map((u, i) => ({ url: u, title: `${universityName} Tour - Part ${i + 1}` }));
}

export default function UniversityHeroSection({ 
  name, country, city, qsRank, logoUrl, summary, heroImage, virtualTourUrl, virtualTourVideos 
}: UniversityHeroProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const videos = virtualTourVideos || parseVideosFromUrl(virtualTourUrl || '', name);
  const hasVideos = videos.length > 0;

  return (
    <>
      <section className="relative min-h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt={name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1B3A]/95 via-[#0B1B3A]/85 to-[#0B1B3A]/70" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10 py-20">
          <div className="max-w-4xl">
            <img src={logoUrl} alt={name} className="w-24 h-24 sm:w-32 sm:h-32 object-contain mb-6 bg-white p-4 rounded-xl shadow-xl" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">{name}</h1>
            <p className="text-xl sm:text-2xl text-gray-200 mb-8 leading-relaxed">{summary}</p>

            <div className="flex flex-wrap gap-3 mb-8">
              <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 text-base py-2 px-4">
                <MapPin className="mr-2 h-4 w-4" />{city}, {country}
              </Badge>
              {qsRank && (
                <Badge className="bg-[#B99750] text-white text-base py-2 px-4">
                  <Award className="mr-2 h-4 w-4" />QS Rank: {qsRank}
                </Badge>
              )}
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="https://admissions.cornerstone.edu.in/" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-gradient-to-r from-[#0B1B3A] to-[#B99750] hover:from-[#0B1B3A]/90 hover:to-[#B99750]/90">
                  Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>

              {hasVideos && (
                <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20" onClick={() => setIsModalOpen(true)}>
                  <Play className="mr-2 h-5 w-5" />
                  Virtual Tour {videos.length > 1 && `(${videos.length} videos)`}
                </Button>
              )}

              <Link to="/contact">
                <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20">
                  <GraduationCap className="mr-2 h-5 w-5" />Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {hasVideos && (
        <VideoPlaylistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} videos={videos} universityName={name} />
      )}
    </>
  );
}
