"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Save, Loader2 } from "lucide-react";
import Link from "next/link";

interface Program {
  id: string; name: string; slug: string; course_tag: string; study_in_india: string;
  study_abroad: string; acceptance: string; designed_by: string; banner_image: string;
  overlay_text: string; tagline: string; partner_universities: string[]; display_order: number;
  average_salary?: string; potential_recruiters?: string[];
}

export default function EditProgramPage() {
  const params = useParams();
  const [program, setProgram] = useState<Program | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState<{type: 'success' | 'error', text: string} | null>(null);
  const supabase = createClient();

  useEffect(() => { fetchProgram(); }, [params.id]);

  const fetchProgram = async () => {
    const { data, error } = await supabase.from("signature_programs").select("*").eq("id", params.id).single();
    if (!error && data) setProgram(data);
    setIsLoading(false);
  };

  const handleChange = (field: keyof Program, value: string | number | string[]) => {
    if (program) setProgram({ ...program, [field]: value });
  };

  const handleSave = async () => {
    if (!program) return;
    setIsSaving(true);
    setMessage(null);
    const { error } = await supabase.from("signature_programs").update({
      name: program.name, slug: program.slug, course_tag: program.course_tag,
      study_in_india: program.study_in_india, study_abroad: program.study_abroad,
      acceptance: program.acceptance, designed_by: program.designed_by,
      banner_image: program.banner_image, overlay_text: program.overlay_text,
      tagline: program.tagline, partner_universities: program.partner_universities,
      display_order: program.display_order, average_salary: program.average_salary,
      potential_recruiters: program.potential_recruiters, updated_at: new Date().toISOString()
    }).eq("id", program.id);
    setIsSaving(false);
    setMessage(error ? { type: 'error', text: 'Failed: ' + error.message } : { type: 'success', text: 'Saved!' });
  };

  if (isLoading) return <div className="text-center py-12">Loading...</div>;
  if (!program) return <div className="text-center py-12">Program not found</div>;

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex items-center gap-4">
        <Link href="/admin/programs"><Button variant="outline" size="sm"><ArrowLeft className="h-4 w-4 mr-2" />Back</Button></Link>
        <h1 className="text-2xl font-bold">Edit: {program.name}</h1>
      </div>
      {message && <div className={`p-4 rounded-lg ${message.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>{message.text}</div>}
      <Card>
        <CardHeader><CardTitle>All Text Fields (Editable)</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div><Label>Name</Label><Input value={program.name} onChange={(e) => handleChange('name', e.target.value)} /></div>
            <div><Label>Slug</Label><Input value={program.slug} onChange={(e) => handleChange('slug', e.target.value)} /></div>
            <div><Label>Course Tag</Label><Input value={program.course_tag} onChange={(e) => handleChange('course_tag', e.target.value)} /></div>
            <div><Label>Designed By</Label><Input value={program.designed_by} onChange={(e) => handleChange('designed_by', e.target.value)} /></div>
            <div><Label>Study in India</Label><Input value={program.study_in_india} onChange={(e) => handleChange('study_in_india', e.target.value)} /></div>
            <div><Label>Study Abroad</Label><Input value={program.study_abroad} onChange={(e) => handleChange('study_abroad', e.target.value)} /></div>
            <div><Label>Acceptance</Label><Input value={program.acceptance} onChange={(e) => handleChange('acceptance', e.target.value)} /></div>
            <div><Label>Display Order</Label><Input type="number" value={program.display_order} onChange={(e) => handleChange('display_order', parseInt(e.target.value) || 0)} /></div>
            <div><Label>Average Salary</Label><Input value={program.average_salary || ''} onChange={(e) => handleChange('average_salary', e.target.value)} /></div>
          </div>
          <div><Label>Banner Image URL</Label><Input value={program.banner_image} onChange={(e) => handleChange('banner_image', e.target.value)} /></div>
          {program.banner_image && <img src={program.banner_image} alt="Preview" className="h-32 object-cover rounded" />}
          <div><Label>Overlay Text</Label><Textarea value={program.overlay_text} onChange={(e) => handleChange('overlay_text', e.target.value)} /></div>
          <div><Label>Tagline</Label><Textarea value={program.tagline} onChange={(e) => handleChange('tagline', e.target.value)} /></div>
          <div><Label>Partner Universities (comma-separated)</Label><Textarea value={program.partner_universities?.join(', ') || ''} onChange={(e) => handleChange('partner_universities', e.target.value.split(',').map(s => s.trim()).filter(Boolean))} /></div>
          <div><Label>Potential Recruiters (comma-separated)</Label><Textarea value={program.potential_recruiters?.join(', ') || ''} onChange={(e) => handleChange('potential_recruiters', e.target.value.split(',').map(s => s.trim()).filter(Boolean))} /></div>
          <Button onClick={handleSave} disabled={isSaving} className="w-full">{isSaving ? <><Loader2 className="h-4 w-4 mr-2 animate-spin" />Saving...</> : <><Save className="h-4 w-4 mr-2" />Save All Changes</>}</Button>
        </CardContent>
      </Card>
    </div>
  );
}
