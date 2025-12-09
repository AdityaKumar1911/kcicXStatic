"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search, Video, Save, Plus, Trash2, CheckCircle, Edit, X, Loader2, Film } from "lucide-react";

interface VideoItem { url: string; title: string; }
interface University {
  id: string; name: string; slug: string; country: string; city: string;
  logo_url: string; virtual_tour_url: string | null;
}

function parseVideos(url: string | null): VideoItem[] {
  if (!url) return [];
  try { if (url.startsWith('[')) return JSON.parse(url); } catch {}
  return url.split(/[,\n]/).filter(Boolean).map((u, i) => ({ url: u.trim(), title: `Part ${i + 1}` }));
}

function serializeVideos(videos: VideoItem[]): string {
  if (videos.length === 0) return '';
  if (videos.length === 1 && videos[0].title.startsWith('Part ')) return videos[0].url;
  return JSON.stringify(videos);
}

export default function AdminVirtualToursPage() {
  const [universities, setUniversities] = useState<University[]>([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [saving, setSaving] = useState<string | null>(null);
  const [saved, setSaved] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editVideos, setEditVideos] = useState<VideoItem[]>([]);
  const supabase = createClient();

  useEffect(() => { fetchUniversities(); }, []);

  const fetchUniversities = async () => {
    const { data } = await supabase.from("partner_universities").select("id, name, slug, country, city, logo_url, virtual_tour_url").order("display_order");
    if (data) setUniversities(data);
    setIsLoading(false);
  };

  const startEdit = (uni: University) => {
    setEditingId(uni.id);
    setEditVideos(parseVideos(uni.virtual_tour_url) || [{ url: '', title: 'Campus Overview' }]);
  };

  const addVideo = () => setEditVideos([...editVideos, { url: '', title: `Part ${editVideos.length + 1}` }]);
  const removeVideo = (i: number) => setEditVideos(editVideos.filter((_, idx) => idx !== i));
  const updateVideo = (i: number, field: keyof VideoItem, value: string) => {
    const updated = [...editVideos];
    updated[i] = { ...updated[i], [field]: value };
    setEditVideos(updated);
  };

  const handleSave = async (id: string) => {
    setSaving(id);
    const validVideos = editVideos.filter(v => v.url.trim());
    const serialized = serializeVideos(validVideos);
    const { error } = await supabase.from("partner_universities").update({ virtual_tour_url: serialized || null }).eq("id", id);
    setSaving(null);
    if (!error) {
      setUniversities(universities.map(u => u.id === id ? { ...u, virtual_tour_url: serialized } : u));
      setSaved(id); setTimeout(() => { setSaved(null); setEditingId(null); }, 1500);
    }
  };

  const filtered = universities.filter(u => u.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold flex items-center gap-2"><Film className="h-8 w-8" />Virtual Tour Playlists</h1>
        <p className="text-gray-500 mt-1">Add multiple videos to create a movie-like virtual tour experience</p>
      </div>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input placeholder="Search universities..." value={search} onChange={e => setSearch(e.target.value)} className="pl-10" />
      </div>

      {isLoading ? <div className="text-center py-12">Loading...</div> : (
        <div className="grid gap-4">
          {filtered.map(uni => {
            const videos = parseVideos(uni.virtual_tour_url);
            const isEditing = editingId === uni.id;
            return (
              <Card key={uni.id}>
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <img src={uni.logo_url} alt={uni.name} className="w-16 h-16 object-contain bg-gray-50 rounded-lg p-2" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <div><h3 className="font-semibold text-lg">{uni.name}</h3><p className="text-sm text-gray-500">{uni.city}, {uni.country}</p></div>
                        {!isEditing && <Button variant="outline" size="sm" onClick={() => startEdit(uni)}><Edit className="h-4 w-4 mr-1" />Edit Playlist</Button>}
                      </div>

                      {isEditing ? (
                        <div className="space-y-3 bg-gray-50 p-4 rounded-lg">
                          <div className="flex items-center justify-between">
                            <Label className="text-sm font-medium">Video Playlist ({editVideos.length} videos)</Label>
                            <Button size="sm" variant="outline" onClick={addVideo}><Plus className="h-4 w-4 mr-1" />Add Video</Button>
                          </div>
                          {editVideos.map((v, i) => (
                            <div key={i} className="flex gap-2 items-start bg-white p-3 rounded-lg border">
                              <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded mt-1">{i + 1}</span>
                              <div className="flex-1 space-y-2">
                                <Input placeholder="Video title (e.g., Campus Overview)" value={v.title} onChange={e => updateVideo(i, 'title', e.target.value)} className="text-sm" />
                                <Input placeholder="YouTube URL" value={v.url} onChange={e => updateVideo(i, 'url', e.target.value)} className="text-sm" />
                              </div>
                              {editVideos.length > 1 && <Button size="sm" variant="ghost" onClick={() => removeVideo(i)} className="text-red-500 hover:text-red-700"><Trash2 className="h-4 w-4" /></Button>}
                            </div>
                          ))}
                          <div className="flex gap-2 pt-2">
                            <Button onClick={() => handleSave(uni.id)} disabled={saving === uni.id}>
                              {saving === uni.id ? <Loader2 className="h-4 w-4 animate-spin mr-1" /> : <Save className="h-4 w-4 mr-1" />}
                              {saved === uni.id ? 'Saved!' : 'Save Playlist'}
                            </Button>
                            <Button variant="outline" onClick={() => setEditingId(null)}><X className="h-4 w-4 mr-1" />Cancel</Button>
                          </div>
                        </div>
                      ) : (
                        <div className="flex flex-wrap gap-2">
                          {videos.length === 0 ? <span className="text-gray-400 text-sm">No videos added</span> : videos.map((v, i) => (
                            <span key={i} className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded flex items-center gap-1">
                              <Video className="h-3 w-3" />{v.title}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
