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

export default function NewProgramPage() {
  const router = useRouter();
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState<{type: 'success' | 'error', text: string} | null>(null);
  const [form, setForm] = useState({
    name: '', slug: '', course_tag: '', designed_by: '', study_in_india: '',
    study_abroad: '', acceptance: '', banner_image: '', overlay_text: '',
    tagline: '', partner_universities: '', potential_recruiters: '',
    average_salary: '', display_order: '0'
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
    const { error } = await supabase.from("signature_programs").insert({
      name: form.name, slug: form.slug, course_tag: form.course_tag, designed_by: form.designed_by,
      study_in_india: form.study_in_india, study_abroad: form.study_abroad, acceptance: form.acceptance,
      banner_image: form.banner_image, overlay_text: form.overlay_text, tagline: form.tagline,
      partner_universities: form.partner_universities.split(',').map(s => s.trim()).filter(Boolean),
      potential_recruiters: form.potential_recruiters.split(',').map(s => s.trim()).filter(Boolean),
      average_salary: form.average_salary, display_order: parseInt(form.display_order) || 0
    });
    setIsSaving(false);
    if (error) { setMessage({ type: 'error', text: 'Failed: ' + error.message }); }
    else { setMessage({ type: 'success', text: 'Program created!' }); setTimeout(() => router.push('/admin/programs'), 1000); }
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex items-center gap-4">
        <Link href="/admin/programs"><Button variant="outline" size="sm"><ArrowLeft className="h-4 w-4 mr-2" />Back</Button></Link>
        <h1 className="text-2xl font-bold">Add New Program</h1>
      </div>
      {message && <div className={`p-4 rounded-lg ${message.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>{message.text}</div>}
      <Card>
        <CardHeader><CardTitle>Program Details</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div><Label>Name *</Label><Input value={form.name} onChange={(e) => handleChange('name', e.target.value)} placeholder="Program Name" /></div>
            <div><Label>Slug *</Label><Input value={form.slug} onChange={(e) => handleChange('slug', e.target.value)} placeholder="program-name" /></div>
            <div><Label>Course Tag</Label><Input value={form.course_tag} onChange={(e) => handleChange('course_tag', e.target.value)} placeholder="B.Tech" /></div>
            <div><Label>Designed By</Label><Input value={form.designed_by} onChange={(e) => handleChange('designed_by', e.target.value)} placeholder="KCIC + Partner" /></div>
            <div><Label>Study in India</Label><Input value={form.study_in_india} onChange={(e) => handleChange('study_in_india', e.target.value)} placeholder="2 Years" /></div>
            <div><Label>Study Abroad</Label><Input value={form.study_abroad} onChange={(e) => handleChange('study_abroad', e.target.value)} placeholder="2 Years" /></div>
            <div><Label>Acceptance</Label><Input value={form.acceptance} onChange={(e) => handleChange('acceptance', e.target.value)} placeholder="Limited Seats" /></div>
            <div><Label>Average Salary</Label><Input value={form.average_salary} onChange={(e) => handleChange('average_salary', e.target.value)} placeholder="$80,000" /></div>
            <div><Label>Display Order</Label><Input type="number" value={form.display_order} onChange={(e) => handleChange('display_order', e.target.value)} /></div>
          </div>
          <div><Label>Banner Image URL</Label><Input value={form.banner_image} onChange={(e) => handleChange('banner_image', e.target.value)} placeholder="https://..." /></div>
          <div><Label>Overlay Text</Label><Textarea value={form.overlay_text} onChange={(e) => handleChange('overlay_text', e.target.value)} placeholder="Program description..." /></div>
          <div><Label>Tagline</Label><Textarea value={form.tagline} onChange={(e) => handleChange('tagline', e.target.value)} placeholder="Short tagline..." /></div>
          <div><Label>Partner Universities (comma-separated)</Label><Textarea value={form.partner_universities} onChange={(e) => handleChange('partner_universities', e.target.value)} placeholder="University A, University B" /></div>
          <div><Label>Potential Recruiters (comma-separated)</Label><Textarea value={form.potential_recruiters} onChange={(e) => handleChange('potential_recruiters', e.target.value)} placeholder="Company A, Company B" /></div>
          <Button onClick={handleSave} disabled={isSaving} className="w-full">{isSaving ? <><Loader2 className="h-4 w-4 mr-2 animate-spin" />Creating...</> : <><Save className="h-4 w-4 mr-2" />Create Program</>}</Button>
        </CardContent>
      </Card>
    </div>
  );
}
