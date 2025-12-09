"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Building2, MessageSquare, Users, TrendingUp, Eye } from "lucide-react";
import Link from "next/link";

interface Stats {
  programs: number;
  universities: number;
  testimonials: number;
  pendingTestimonials: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats>({ programs: 0, universities: 0, testimonials: 0, pendingTestimonials: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [programsRes, universitiesRes, testimonialsRes, pendingRes] = await Promise.all([
          supabase.from("signature_programs").select("id", { count: "exact", head: true }),
          supabase.from("partner_universities").select("id", { count: "exact", head: true }),
          supabase.from("testimonials").select("id", { count: "exact", head: true }).eq("status", "approved"),
          supabase.from("testimonials").select("id", { count: "exact", head: true }).eq("status", "pending"),
        ]);
        setStats({
          programs: programsRes.count || 0,
          universities: universitiesRes.count || 0,
          testimonials: testimonialsRes.count || 0,
          pendingTestimonials: pendingRes.count || 0,
        });
      } catch (error) {
        console.error("Error fetching stats:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchStats();
  }, [supabase]);

  const statCards = [
    { title: "Programs", value: stats.programs, icon: GraduationCap, href: "/admin/programs", color: "bg-blue-500" },
    { title: "Universities", value: stats.universities, icon: Building2, href: "/admin/universities", color: "bg-green-500" },
    { title: "Testimonials", value: stats.testimonials, icon: MessageSquare, href: "/admin/testimonials", color: "bg-purple-500" },
    { title: "Pending Reviews", value: stats.pendingTestimonials, icon: Eye, href: "/admin/testimonials?status=pending", color: "bg-orange-500" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-gray-500">Welcome to KCIC Admin Panel</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((card) => (
          <Link key={card.title} href={card.href}>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">{card.title}</CardTitle>
                <div className={`${card.color} p-2 rounded-lg`}>
                  <card.icon className="h-5 w-5 text-white" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{isLoading ? "..." : card.value}</div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader><CardTitle>Quick Actions</CardTitle></CardHeader>
          <CardContent className="space-y-2">
            <Link href="/admin/programs/new" className="block p-3 bg-blue-50 hover:bg-blue-100 rounded-lg text-blue-700">+ Add New Program</Link>
            <Link href="/admin/universities/new" className="block p-3 bg-green-50 hover:bg-green-100 rounded-lg text-green-700">+ Add New University</Link>
            <Link href="/admin/testimonials?status=pending" className="block p-3 bg-orange-50 hover:bg-orange-100 rounded-lg text-orange-700">Review Pending Testimonials</Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Recent Activity</CardTitle></CardHeader>
          <CardContent>
            <p className="text-gray-500 text-sm">Activity log will appear here once audit logging is enabled.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
