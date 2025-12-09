'use client';

import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { universities } from '@/data/universities';
import { getUniversityBySlug } from '@/lib/supabase/universities';
import { MapPin, Award, Users, BookOpen, Trophy, Globe, ArrowLeft, Play, Film } from 'lucide-react';
import { Button } from '@/components/ui/button';
import VideoPlaylistModal from '@/components/VideoPlaylistModal';

interface VideoItem { url: string; title: string; }

function parseVideos(url: string | null, name: string): VideoItem[] {
  if (!url) return [];
  try { if (url.startsWith('[')) return JSON.parse(url); } catch {}
  return url.split(/[,\n]/).filter(Boolean).map((u, i) => ({ url: u.trim(), title: `${name} Tour - Part ${i + 1}` }));
}

interface Props { params: { slug: string }; }

export default function UniversityDetailPage({ params }: Props) {
  const staticUni = universities.find(u => u.slug === params.slug);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [virtualTourUrl, setVirtualTourUrl] = useState<string | null>(staticUni?.virtualTourUrl || null);

  useEffect(() => {
    const fetchFromDB = async () => {
      const dbUni = await getUniversityBySlug(params.slug);
      if (dbUni?.virtual_tour_url) setVirtualTourUrl(dbUni.virtual_tour_url);
    };
    fetchFromDB();
  }, [params.slug]);

  if (!staticUni) notFound();

  const videos = parseVideos(virtualTourUrl, staticUni.name);
  const hasVideos = videos.length > 0;

  const highlights = [
    { title: 'Students', value: '20,000+', icon: <Users className="w-8 h-8" /> },
    { title: 'Programs', value: '100+', icon: <BookOpen className="w-8 h-8" /> },
    { title: 'Awards', value: '50+', icon: <Trophy className="w-8 h-8" /> },
    { title: 'Countries', value: '80+', icon: <Globe className="w-8 h-8" /> },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="pt-20">
        <div className="bg-gradient-to-br from-[#0B1B3A] via-[#1a2d5a] to-[#0B1B3A] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/universities" className="inline-flex items-center text-white/80 hover:text-white mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Universities
            </Link>
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="w-32 h-32 bg-white rounded-2xl p-4 shadow-xl">
                <Image src={staticUni.logoUrl} alt={staticUni.name} width={128} height={128} className="w-full h-full object-contain" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  {staticUni.qsRank && (
                    <span className="bg-[#B99750] text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Award className="w-4 h-4" /> QS Rank #{staticUni.qsRank}
                    </span>
                  )}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{staticUni.name}</h1>
                <div className="flex items-center gap-2 text-white/80 mb-4">
                  <MapPin className="w-5 h-5" /><span className="text-lg">{staticUni.city}, {staticUni.country}</span>
                </div>
                <p className="text-xl text-white/90 max-w-2xl">{staticUni.summary}</p>
                <div className="flex gap-4 mt-6 flex-wrap">
                  <div className="bg-white/10 backdrop-blur px-4 py-2 rounded-lg">
                    <span className="text-white/70 text-sm">Fees</span>
                    <p className="text-white font-bold">{staticUni.feesPerYear}/year</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur px-4 py-2 rounded-lg">
                    <span className="text-white/70 text-sm">Scholarship</span>
                    <p className="text-white font-bold">{staticUni.scholarshipRange}</p>
                  </div>
                </div>
                {hasVideos && (
                  <Button onClick={() => setIsModalOpen(true)} className="mt-6 bg-white/10 backdrop-blur border border-white/30 hover:bg-white/20 text-white">
                    <Film className="w-5 h-5 mr-2" /> Virtual Tour {videos.length > 1 && `(${videos.length} videos)`}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {highlights.map((h, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-lg">
                  <div className="text-[#B99750] mb-3 flex justify-center">{h.icon}</div>
                  <p className="text-3xl font-bold text-[#0B1B3A]">{h.value}</p>
                  <p className="text-gray-600">{h.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-[#0B1B3A] mb-6">Ready to Apply?</h2>
            <p className="text-gray-600 mb-8">{staticUni.description}</p>
            <div className="flex gap-4 justify-center">
              <Button className="bg-[#B99750] hover:bg-[#a88645]">Apply Now</Button>
              <Button variant="outline">Contact Admissions</Button>
            </div>
          </div>
        </div>
      </div>

      {hasVideos && <VideoPlaylistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} videos={videos} universityName={staticUni.name} />}
    </div>
  );
}
