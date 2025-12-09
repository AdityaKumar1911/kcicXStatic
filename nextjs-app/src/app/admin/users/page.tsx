"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Users, Plus, Shield, Trash2, Edit, Save, Loader2, X } from "lucide-react";

interface AdminUser {
  id: string; user_id: string; email: string; role: string; created_at: string;
}

export default function AdminUsersPage() {
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [newEmail, setNewEmail] = useState("");
  const [newRole, setNewRole] = useState("editor");
  const [newUserId, setNewUserId] = useState("");
  const [saving, setSaving] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editRole, setEditRole] = useState("");
  const [message, setMessage] = useState<{type: 'success' | 'error', text: string} | null>(null);
  const supabase = createClient();

  useEffect(() => { fetchUsers(); }, []);

  const fetchUsers = async () => {
    const { data, error } = await supabase.from("admin_users").select("*").order("created_at", { ascending: false });
    if (!error && data) setUsers(data);
    setIsLoading(false);
  };

  const handleAdd = async () => {
    if (!newEmail || !newUserId) { setMessage({ type: 'error', text: 'Email and User ID required' }); return; }
    setSaving(true);
    const { error } = await supabase.from("admin_users").insert({ email: newEmail, user_id: newUserId, role: newRole });
    setSaving(false);
    if (error) { setMessage({ type: 'error', text: error.message }); }
    else { setMessage({ type: 'success', text: 'User added!' }); setShowForm(false); setNewEmail(''); setNewUserId(''); fetchUsers(); }
  };

  const handleRemove = async (id: string) => {
    if (!confirm("Remove this admin user?")) return;
    const { error } = await supabase.from("admin_users").delete().eq("id", id);
    if (!error) setUsers(users.filter((u) => u.id !== id));
  };

  const startEdit = (user: AdminUser) => { setEditingId(user.id); setEditRole(user.role); };

  const saveRole = async (id: string) => {
    setSaving(true);
    const { error } = await supabase.from("admin_users").update({ role: editRole }).eq("id", id);
    setSaving(false);
    if (!error) { setUsers(users.map(u => u.id === id ? { ...u, role: editRole } : u)); setEditingId(null); }
  };

  const roleColors: Record<string, string> = { super_admin: "bg-purple-100 text-purple-800", admin: "bg-blue-100 text-blue-800", editor: "bg-green-100 text-green-800" };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Admin Users</h1>
        <Button onClick={() => setShowForm(!showForm)}><Plus className="h-4 w-4 mr-2" />{showForm ? "Cancel" : "Add User"}</Button>
      </div>

      {message && <div className={`p-4 rounded-lg ${message.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>{message.text}</div>}

      {showForm && (
        <Card>
          <CardHeader><CardTitle>Add Admin User</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div><Label>Email</Label><Input type="email" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} placeholder="user@example.com" /></div>
            <div><Label>Supabase User ID</Label><Input value={newUserId} onChange={(e) => setNewUserId(e.target.value)} placeholder="UUID from Supabase Auth" /></div>
            <div><Label>Role</Label>
              <select value={newRole} onChange={(e) => setNewRole(e.target.value)} className="w-full p-2 border rounded-md">
                <option value="editor">Editor</option><option value="admin">Admin</option><option value="super_admin">Super Admin</option>
              </select>
            </div>
            <Button onClick={handleAdd} disabled={saving}>{saving ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <Save className="h-4 w-4 mr-2" />}Add User</Button>
          </CardContent>
        </Card>
      )}

      {isLoading ? <div className="text-center py-12">Loading...</div> : users.length === 0 ? (
        <Card><CardContent className="py-12 text-center"><Users className="h-12 w-12 mx-auto text-gray-400 mb-4" /><p className="text-gray-500">No admin users</p></CardContent></Card>
      ) : (
        <div className="grid gap-4">
          {users.map((user) => (
            <Card key={user.id}>
              <CardContent className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <div className="bg-gray-100 p-2 rounded-full"><Shield className="h-5 w-5 text-gray-600" /></div>
                  <div>
                    <h3 className="font-semibold">{user.email}</h3>
                    <p className="text-sm text-gray-500">Added {new Date(user.created_at).toLocaleDateString()}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {editingId === user.id ? (
                    <>
                      <select value={editRole} onChange={(e) => setEditRole(e.target.value)} className="p-1 border rounded text-sm">
                        <option value="editor">Editor</option><option value="admin">Admin</option><option value="super_admin">Super Admin</option>
                      </select>
                      <Button size="sm" onClick={() => saveRole(user.id)}><Save className="h-4 w-4" /></Button>
                      <Button size="sm" variant="outline" onClick={() => setEditingId(null)}><X className="h-4 w-4" /></Button>
                    </>
                  ) : (
                    <>
                      <Badge className={roleColors[user.role] || "bg-gray-100"}>{user.role.replace("_", " ")}</Badge>
                      <Button variant="outline" size="sm" onClick={() => startEdit(user)}><Edit className="h-4 w-4" /></Button>
                      {user.role !== "super_admin" && <Button variant="outline" size="sm" onClick={() => handleRemove(user.id)}><Trash2 className="h-4 w-4 text-red-500" /></Button>}
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
