'use client';

// Client Component for Program Detail interactivity
// Handles: dialogs, forms, state management

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, ArrowRight, Download, Phone } from 'lucide-react';

interface ProgramDetailClientProps {
  program: {
    id: string;
    title: string;
    department?: string;
    overview?: string;
    requirements?: string;
    year1FeesInr?: number;
  };
}

export default function ProgramDetailClient({ program }: ProgramDetailClientProps) {
  const router = useRouter();
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 1000));
    toast({ title: 'Success!', description: 'We will contact you soon.' });
    setIsDialogOpen(false);
    setIsSubmitting(false);
  };

  return (
    <>
      {/* Hero */}
      <div className="relative h-[400px] bg-gradient-to-r from-[#0B1B3A] to-[#1a2f5a]">
        <div className="container mx-auto px-6 h-full flex items-center">
          <div>
            <Button variant="ghost" onClick={() => router.back()} className="text-white mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back
            </Button>
            <Badge className="bg-[#B99750]/20 text-[#B99750] mb-4">{program.department}</Badge>
            <h1 className="text-5xl font-bold text-white mb-4">{program.title}</h1>
            <Button className="bg-[#B99750] hover:bg-[#a88645]" onClick={() => setIsDialogOpen(true)}>
              Enquire Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-12">
        <Card>
          <CardHeader><CardTitle>Overview</CardTitle></CardHeader>
          <CardContent><p>{program.overview}</p></CardContent>
        </Card>
      </div>

      {/* Dialog - Radix UI works perfectly */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader><DialogTitle>Enquire About {program.title}</DialogTitle></DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label>Name</Label>
              <Input value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required />
            </div>
            <div>
              <Label>Email</Label>
              <Input type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} required />
            </div>
            <Button type="submit" disabled={isSubmitting} className="w-full bg-[#B99750]">
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
