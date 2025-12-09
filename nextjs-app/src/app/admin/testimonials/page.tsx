"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Search, Check, X, MessageSquare, Edit, Save, Loader2 } from "lucide-react";

interface Testimonial {
  id: string; name: string; program: string; transferred_to: string;
  country: string; quote: string; status: string; year: string;
}

export default function AdminTestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<string>("all");
  const [isLoading, setIsLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<Testimonial | null>(null);
  const [saving, setSaving] = useState(false);
  const supabase = createClient();

  useEffect(() => { fetchTestimonials(); }, []);

  const fetchTestimonials = async () => {
    const { data, error } = await supabase.from("testimonials").select("*").order("created_at", { ascending: false });
    if (!error && data) setTestimonials(data);
    setIsLoading(false);
  };

  const updateStatus = async (id: string, status: string) => {
    const { error } = await supabase.from("testimonials").update({ status }).eq("id", id);
    if (!error) setTestimonials(testimonials.map((t) => (t.id === id ? { ...t, status } : t)));
  };

  const startEdit = (t: Testimonial) => { setEditingId(t.id); setEditForm({ ...t }); };
  const cancelEdit = () => { setEditingId(null); setEditForm(null); };

  const saveEdit = async () => {
    if (!editForm) return;
    setSaving(true);
    const { error } = await supabase.from("testimonials").update({
      name: editForm.name, program: editForm.program, transferred_to: editForm.transferred_to,
      country: editForm.country, quote: editForm.quote, year: editForm.year
    }).eq("id", editForm.id);
    setSaving(false);
    if (!error) { setTestimonials(testimonials.map((t) => (t.id === editForm.id ? editForm : t))); cancelEdit(); }
  };

  const filtered = testimonials.filter((t) => {
    const matchesSearch = t.name.toLowerCase().includes(search.toLowerCase()) || t.program.toLowerCase().includes(search.toLowerCase());
    return (filter === "all" || t.status === filter) && matchesSearch;
  });

  const statusColors: Record<string, string> = { pending: "bg-yellow-100 text-yellow-800", approved: "bg-green-100 text-green-800", rejected: "bg-red-100 text-red-800" };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Testimonials</h1>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-10" />
        </div>
        <div className="flex gap-2">
          {["all", "pending", "approved", "rejected"].map((s) => (
            <Button key={s} variant={filter === s ? "default" : "outline"} size="sm" onClick={() => setFilter(s)}>{s.charAt(0).toUpperCase() + s.slice(1)}</Button>
          ))}
        </div>
      </div>

      {isLoading ? <div className="text-center py-12">Loading...</div> : filtered.length === 0 ? (
        <Card><CardContent className="py-12 text-center"><MessageSquare className="h-12 w-12 mx-auto text-gray-400 mb-4" /><p className="text-gray-500">No testimonials found</p></CardContent></Card>
      ) : (
        <div className="grid gap-4">
          {filtered.map((t) => (
            <Card key={t.id}>
              <CardContent className="p-4">
                {editingId === t.id && editForm ? (
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <Input placeholder="Name" value={editForm.name} onChange={(e) => setEditForm({ ...editForm, name: e.target.value })} />
                      <Input placeholder="Program" value={editForm.program} onChange={(e) => setEditForm({ ...editForm, program: e.target.value })} />
                      <Input placeholder="University" value={editForm.transferred_to} onChange={(e) => setEditForm({ ...editForm, transferred_to: e.target.value })} />
                      <Input placeholder="Country" value={editForm.country} onChange={(e) => setEditForm({ ...editForm, country: e.target.value })} />
                      <Input placeholder="Year" value={editForm.year} onChange={(e) => setEditForm({ ...editForm, year: e.target.value })} />
                    </div>
                    <Textarea placeholder="Quote" value={editForm.quote} onChange={(e) => setEditForm({ ...editForm, quote: e.target.value })} rows={3} />
                    <div className="flex gap-2">
                      <Button onClick={saveEdit} disabled={saving} size="sm">{saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <><Save className="h-4 w-4 mr-1" />Save</>}</Button>
                      <Button variant="outline" size="sm" onClick={cancelEdit}>Cancel</Button>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold">{t.name}</h3>
                        <Badge className={statusColors[t.status]}>{t.status}</Badge>
                      </div>
                      <p className="text-sm text-gray-500 mb-2">{t.program} • {t.transferred_to}, {t.country} • {t.year}</p>
                      <p className="text-gray-700 italic">"{t.quote}"</p>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <Button size="sm" variant="outline" onClick={() => startEdit(t)}><Edit className="h-4 w-4" /></Button>
                      {t.status === "pending" && (
                        <>
                          <Button size="sm" onClick={() => updateStatus(t.id, "approved")} className="bg-green-600 hover:bg-green-700"><Check className="h-4 w-4" /></Button>
                          <Button size="sm" variant="destructive" onClick={() => updateStatus(t.id, "rejected")}><X className="h-4 w-4" /></Button>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
