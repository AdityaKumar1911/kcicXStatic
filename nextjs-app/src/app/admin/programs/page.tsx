"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Plus, Search, Edit, Trash2, GraduationCap, Eye } from "lucide-react";
import Link from "next/link";

interface Program {
  id: string;
  name: string;
  slug: string;
  course_tag: string;
  study_in_india: string;
  study_abroad: string;
  designed_by: string;
  display_order: number;
  banner_image: string;
}

export default function AdminProgramsPage() {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    fetchPrograms();
  }, []);

  const fetchPrograms = async () => {
    const { data, error } = await supabase
      .from("signature_programs")
      .select("*")
      .order("display_order");
    if (!error && data) setPrograms(data);
    setIsLoading(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this program?")) return;
    const { error } = await supabase.from("signature_programs").delete().eq("id", id);
    if (!error) setPrograms(programs.filter((p) => p.id !== id));
  };

  const filtered = programs.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.course_tag.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-bold">Featured Programs</h1>
          <p className="text-gray-500 mt-1">Manage all featured courses and their content</p>
        </div>
        <Link href="/admin/programs/new">
          <Button><Plus className="h-4 w-4 mr-2" />Add Program</Button>
        </Link>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          placeholder="Search programs by name or tag..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10"
        />
      </div>

      <p className="text-sm text-gray-500">{filtered.length} program{filtered.length !== 1 ? 's' : ''} found</p>

      {isLoading ? (
        <div className="text-center py-12">Loading programs...</div>
      ) : filtered.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center">
            <GraduationCap className="h-12 w-12 mx-auto text-gray-400 mb-4" />
            <p className="text-gray-500">No programs found</p>
            <Link href="/admin/programs/new" className="mt-4 inline-block">
              <Button variant="outline">Create your first program</Button>
            </Link>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {filtered.map((program) => (
            <Card key={program.id} className="hover:shadow-md transition-shadow">
              <CardContent className="flex items-center gap-4 p-4">
                {program.banner_image && (
                  <img src={program.banner_image} alt={program.name} className="w-20 h-14 object-cover rounded" />
                )}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold truncate">{program.name}</h3>
                  <p className="text-sm text-gray-500">
                    <span className="inline-block px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-xs mr-2">{program.course_tag}</span>
                    {program.designed_by}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">{program.study_in_india} + {program.study_abroad}</p>
                </div>
                <div className="flex gap-2 shrink-0">
                  <Link href={`/programs/${program.slug}`} target="_blank">
                    <Button variant="outline" size="sm" title="Preview"><Eye className="h-4 w-4" /></Button>
                  </Link>
                  <Link href={`/admin/programs/${program.id}`}>
                    <Button variant="outline" size="sm" title="Edit"><Edit className="h-4 w-4" /></Button>
                  </Link>
                  <Button variant="outline" size="sm" onClick={() => handleDelete(program.id)} title="Delete">
                    <Trash2 className="h-4 w-4 text-red-500" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

