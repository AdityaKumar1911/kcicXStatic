"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Save, Loader2 } from "lucide-react";
import Link from "next/link";

interface University {
  id: string; name: string; slug: string; country: string; city: string;
  description: string; logo_url: string; banner_image: string; qs_rank: number | null;
  fees_per_year: string; programs_offered: string[]; highlights: string[];
  virtual_tour_url: string | null; display_order: number;
}

export default function EditUniversityPage() {
  const params = useParams();
  const router = useRouter();
  const [uni, setUni] = useState<University | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState<{type: 'success' | 'error', text: string} | null>(null);
  const supabase = createClient();

  useEffect(() => { fetchUniversity(); }, [params.id]);

  const fetchUniversity = async () => {
    const { data, error } = await supabase.from("partner_universities").select("*").eq("id", params.id).single();
    if (!error && data) setUni(data);
    setIsLoading(false);
  };

  const handleChange = (field: keyof University, value: any) => {
    if (uni) setUni({ ...uni, [field]: value });
  };

  const handleSave = async () => {
    if (!uni) return;
    setIsSaving(true);
    setMessage(null);
    const { error } = await supabase.from("partner_universities").update({
      name: uni.name, slug: uni.slug, country: uni.country, city: uni.city,
      description: uni.description, logo_url: uni.logo_url, banner_image: uni.banner_image,
      qs_rank: uni.qs_rank, fees_per_year: uni.fees_per_year, programs_offered: uni.programs_offered,
      highlights: uni.highlights, virtual_tour_url: uni.virtual_tour_url, display_order: uni.display_order
    }).eq("id", uni.id);
    setIsSaving(false);
    setMessage(error ? { type: 'error', text: 'Failed: ' + error.message } : { type: 'success', text: 'Saved successfully!' });
  };

  if (isLoading) return <div className="text-center py-12">Loading...</div>;
  if (!uni) return <div className="text-center py-12">University not found</div>;

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex items-center gap-4">
        <Link href="/admin/universities"><Button variant="outline" size="sm"><ArrowLeft className="h-4 w-4 mr-2" />Back</Button></Link>
        <h1 className="text-2xl font-bold">Edit: {uni.name}</h1>
      </div>
      {message && <div className={`p-4 rounded-lg ${message.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>{message.text}</div>}
      <Card>
        <CardHeader><CardTitle>University Details</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div><Label>Name</Label><Input value={uni.name} onChange={(e) => handleChange('name', e.target.value)} /></div>
            <div><Label>Slug</Label><Input value={uni.slug} onChange={(e) => handleChange('slug', e.target.value)} /></div>
            <div><Label>Country</Label><Input value={uni.country} onChange={(e) => handleChange('country', e.target.value)} /></div>
            <div><Label>City</Label><Input value={uni.city} onChange={(e) => handleChange('city', e.target.value)} /></div>
            <div><Label>QS Rank</Label><Input type="number" value={uni.qs_rank || ''} onChange={(e) => handleChange('qs_rank', e.target.value ? parseInt(e.target.value) : null)} /></div>
            <div><Label>Fees Per Year</Label><Input value={uni.fees_per_year} onChange={(e) => handleChange('fees_per_year', e.target.value)} /></div>
            <div><Label>Display Order</Label><Input type="number" value={uni.display_order} onChange={(e) => handleChange('display_order', parseInt(e.target.value) || 0)} /></div>
          </div>
          <div><Label>Description</Label><Textarea rows={3} value={uni.description || ''} onChange={(e) => handleChange('description', e.target.value)} /></div>
          <div><Label>Logo URL</Label><Input value={uni.logo_url} onChange={(e) => handleChange('logo_url', e.target.value)} /></div>
          <div><Label>Banner Image URL</Label><Input value={uni.banner_image || ''} onChange={(e) => handleChange('banner_image', e.target.value)} /></div>
          <div><Label>Virtual Tour URL</Label><Input value={uni.virtual_tour_url || ''} onChange={(e) => handleChange('virtual_tour_url', e.target.value)} /></div>
          <div><Label>Programs Offered (comma-separated)</Label><Textarea value={uni.programs_offered?.join(', ') || ''} onChange={(e) => handleChange('programs_offered', e.target.value.split(',').map(s => s.trim()).filter(Boolean))} /></div>
          <div><Label>Highlights (comma-separated)</Label><Textarea value={uni.highlights?.join(', ') || ''} onChange={(e) => handleChange('highlights', e.target.value.split(',').map(s => s.trim()).filter(Boolean))} /></div>
          <Button onClick={handleSave} disabled={isSaving} className="w-full">{isSaving ? <><Loader2 className="h-4 w-4 mr-2 animate-spin" />Saving...</> : <><Save className="h-4 w-4 mr-2" />Save All Changes</>}</Button>
        </CardContent>
      </Card>
    </div>
  );
}
