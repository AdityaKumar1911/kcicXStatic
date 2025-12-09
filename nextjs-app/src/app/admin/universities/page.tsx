"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Plus, Search, Edit, Trash2, Building2 } from "lucide-react";
import Link from "next/link";

interface University {
  id: string;
  name: string;
  slug: string;
  country: string;
  city: string;
  qs_rank: number | null;
  fees_per_year: string;
}

export default function AdminUniversitiesPage() {
  const [universities, setUniversities] = useState<University[]>([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    fetchUniversities();
  }, []);

  const fetchUniversities = async () => {
    const { data, error } = await supabase
      .from("partner_universities")
      .select("*")
      .order("display_order");
    if (!error && data) setUniversities(data);
    setIsLoading(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this university?")) return;
    const { error } = await supabase.from("partner_universities").delete().eq("id", id);
    if (!error) setUniversities(universities.filter((u) => u.id !== id));
  };

  const filtered = universities.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.country.toLowerCase().includes(search.toLowerCase()) ||
    u.city.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Universities</h1>
        <Link href="/admin/universities/new">
          <Button><Plus className="h-4 w-4 mr-2" />Add University</Button>
        </Link>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          placeholder="Search universities..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10"
        />
      </div>

      {isLoading ? (
        <div className="text-center py-12">Loading...</div>
      ) : filtered.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center">
            <Building2 className="h-12 w-12 mx-auto text-gray-400 mb-4" />
            <p className="text-gray-500">No universities found</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {filtered.map((uni) => (
            <Card key={uni.id}>
              <CardContent className="flex items-center justify-between p-4">
                <div>
                  <h3 className="font-semibold">{uni.name}</h3>
                  <p className="text-sm text-gray-500">
                    {uni.city}, {uni.country} {uni.qs_rank && `• QS Rank: ${uni.qs_rank}`}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Link href={`/admin/universities/${uni.id}`}>
                    <Button variant="outline" size="sm"><Edit className="h-4 w-4" /></Button>
                  </Link>
                  <Button variant="outline" size="sm" onClick={() => handleDelete(uni.id)}>
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
