"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Save, Loader2 } from "lucide-react";
import Link from "next/link";

export default function NewUniversityPage() {
  const router = useRouter();
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState<{type: 'success' | 'error', text: string} | null>(null);
  const [form, setForm] = useState({
    name: '', slug: '', country: '', city: '', description: '', logo_url: '',
    banner_image: '', qs_rank: '', fees_per_year: '', programs_offered: '',
    highlights: '', virtual_tour_url: '', display_order: '0'
  });
  const supabase = createClient();

  const handleChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
    if (field === 'name' && !form.slug) {
      setForm(f => ({ ...f, [field]: value, slug: value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '') }));
    }
  };

  const handleSave = async () => {
    if (!form.name || !form.slug) { setMessage({ type: 'error', text: 'Name and slug are required' }); return; }
    setIsSaving(true);
    setMessage(null);
    const { error } = await supabase.from("partner_universities").insert({
      name: form.name, slug: form.slug, country: form.country, city: form.city,
      description: form.description, logo_url: form.logo_url, banner_image: form.banner_image,
      qs_rank: form.qs_rank ? parseInt(form.qs_rank) : null, fees_per_year: form.fees_per_year,
      programs_offered: form.programs_offered.split(',').map(s => s.trim()).filter(Boolean),
      highlights: form.highlights.split(',').map(s => s.trim()).filter(Boolean),
      virtual_tour_url: form.virtual_tour_url || null, display_order: parseInt(form.display_order) || 0
    });
    setIsSaving(false);
    if (error) { setMessage({ type: 'error', text: 'Failed: ' + error.message }); }
    else { setMessage({ type: 'success', text: 'Created!' }); setTimeout(() => router.push('/admin/universities'), 1000); }
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex items-center gap-4">
        <Link href="/admin/universities"><Button variant="outline" size="sm"><ArrowLeft className="h-4 w-4 mr-2" />Back</Button></Link>
        <h1 className="text-2xl font-bold">Add New University</h1>
      </div>
      {message && <div className={`p-4 rounded-lg ${message.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>{message.text}</div>}
      <Card>
        <CardHeader><CardTitle>University Details</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div><Label>Name *</Label><Input value={form.name} onChange={(e) => handleChange('name', e.target.value)} placeholder="University Name" /></div>
            <div><Label>Slug *</Label><Input value={form.slug} onChange={(e) => handleChange('slug', e.target.value)} placeholder="university-name" /></div>
            <div><Label>Country</Label><Input value={form.country} onChange={(e) => handleChange('country', e.target.value)} placeholder="Australia" /></div>
            <div><Label>City</Label><Input value={form.city} onChange={(e) => handleChange('city', e.target.value)} placeholder="Melbourne" /></div>
            <div><Label>QS Rank</Label><Input type="number" value={form.qs_rank} onChange={(e) => handleChange('qs_rank', e.target.value)} /></div>
            <div><Label>Fees Per Year</Label><Input value={form.fees_per_year} onChange={(e) => handleChange('fees_per_year', e.target.value)} placeholder="$25,000 - $35,000" /></div>
            <div><Label>Display Order</Label><Input type="number" value={form.display_order} onChange={(e) => handleChange('display_order', e.target.value)} /></div>
          </div>
          <div><Label>Description</Label><Textarea rows={3} value={form.description} onChange={(e) => handleChange('description', e.target.value)} placeholder="University description..." /></div>
          <div><Label>Logo URL</Label><Input value={form.logo_url} onChange={(e) => handleChange('logo_url', e.target.value)} placeholder="https://..." /></div>
          <div><Label>Banner Image URL</Label><Input value={form.banner_image} onChange={(e) => handleChange('banner_image', e.target.value)} placeholder="https://..." /></div>
          <div><Label>Virtual Tour URL</Label><Input value={form.virtual_tour_url} onChange={(e) => handleChange('virtual_tour_url', e.target.value)} placeholder="https://youtube.com/..." /></div>
          <div><Label>Programs Offered (comma-separated)</Label><Textarea value={form.programs_offered} onChange={(e) => handleChange('programs_offered', e.target.value)} placeholder="Engineering, Business, IT" /></div>
          <div><Label>Highlights (comma-separated)</Label><Textarea value={form.highlights} onChange={(e) => handleChange('highlights', e.target.value)} placeholder="Top ranked, Industry partnerships" /></div>
          <Button onClick={handleSave} disabled={isSaving} className="w-full">{isSaving ? <><Loader2 className="h-4 w-4 mr-2 animate-spin" />Creating...</> : <><Save className="h-4 w-4 mr-2" />Create University</>}</Button>
        </CardContent>
      </Card>
    </div>
  );
}
