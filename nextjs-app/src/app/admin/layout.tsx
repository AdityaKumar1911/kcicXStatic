"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { LayoutDashboard, GraduationCap, Building2, MessageSquare, Users, LogOut, Menu, X, Video } from "lucide-react";


export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push("/admin/login");
        setIsLoading(false);
        return;
      }
      
      // Verify user is in admin_users table
      const { data: adminUser, error } = await supabase
        .from("admin_users")
        .select("*")
        .eq("email", session.user.email)
        .eq("is_active", true)
        .single();
      
      if (error || !adminUser) {
        await supabase.auth.signOut();
        router.push("/admin/login");
        setIsLoading(false);
        return;
      }
      
      setIsAuthenticated(true);
      setIsLoading(false);
    };
    checkAuth();
  }, [router, supabase]);


  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/admin/login");
  };

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center"><div className="animate-spin h-8 w-8 border-4 border-blue-600 border-t-transparent rounded-full"></div></div>;
  }

  if (!isAuthenticated) return null;

  const navItems = [
    { href: "/admin", icon: LayoutDashboard, label: "Dashboard" },
    { href: "/admin/programs", icon: GraduationCap, label: "Programs" },
    { href: "/admin/universities", icon: Building2, label: "Universities" },
    { href: "/admin/virtual-tours", icon: Video, label: "Virtual Tours" },
    { href: "/admin/testimonials", icon: MessageSquare, label: "Testimonials" },
    { href: "/admin/users", icon: Users, label: "Users" },
  ];


  return (
    <div className="min-h-screen bg-gray-100">
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 transition-transform`}>
        <div className="p-6"><h1 className="text-xl font-bold text-white">KCIC Admin</h1></div>
        <nav className="mt-6">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-800 hover:text-white" onClick={() => setSidebarOpen(false)}>
              <item.icon className="h-5 w-5 mr-3" />{item.label}
            </Link>
          ))}
          <button onClick={handleLogout} className="flex items-center w-full px-6 py-3 text-gray-300 hover:bg-gray-800 hover:text-white mt-8">
            <LogOut className="h-5 w-5 mr-3" />Logout
          </button>
        </nav>
      </aside>
      <div className="lg:pl-64">
        <header className="bg-white shadow-sm lg:hidden">
          <div className="flex items-center justify-between p-4">
            <button onClick={() => setSidebarOpen(!sidebarOpen)}>{sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}</button>
            <span className="font-semibold">KCIC Admin</span>
          </div>
        </header>
        <main className="p-6">{children}</main>
      </div>
      {sidebarOpen && <div className="fixed inset-0 bg-black/50 lg:hidden z-40" onClick={() => setSidebarOpen(false)} />}
    </div>
  );
}
