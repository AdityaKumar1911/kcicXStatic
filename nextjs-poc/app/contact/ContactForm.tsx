'use client';

// Contact Form - Client Component
// Demonstrates: form validation, Radix UI, toast notifications

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

// Validation functions (same as original)
const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const validatePhone = (phone: string) => /^[\d\s+()-]{10,}$/.test(phone);
const validateName = (name: string) => name.length >= 2 && name.length <= 100;

export default function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', program: '', message: ''
  });

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!validateName(formData.name)) newErrors.name = 'Name must be 2-100 characters';
    if (!validateEmail(formData.email)) newErrors.email = 'Please enter a valid email';
    if (!validatePhone(formData.phone)) newErrors.phone = 'Please enter a valid phone';
    if (formData.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // In production: call API route or server action
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setIsSubmitting(false);
    setFormData({ name: '', email: '', phone: '', program: '', message: '' });
  };

  const handleChange = (field: string, value: string) => {
    setFormData({...formData, [field]: value});
    if (errors[field]) setErrors({...errors, [field]: ''});
  };

  return (
    <Card>
      <CardHeader><CardTitle>Send us a Message</CardTitle></CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Full Name *</Label>
            <Input id="name" value={formData.name} onChange={e => handleChange('name', e.target.value)} />
            {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name}</p>}
          </div>
          <div>
            <Label htmlFor="email">Email *</Label>
            <Input id="email" type="email" value={formData.email} onChange={e => handleChange('email', e.target.value)} />
            {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
          </div>
          <div>
            <Label htmlFor="phone">Phone *</Label>
            <Input id="phone" value={formData.phone} onChange={e => handleChange('phone', e.target.value)} />
            {errors.phone && <p className="text-sm text-red-600 mt-1">{errors.phone}</p>}
          </div>
          <div>
            <Label htmlFor="message">Message *</Label>
            <Textarea id="message" value={formData.message} onChange={e => handleChange('message', e.target.value)} rows={4} />
            {errors.message && <p className="text-sm text-red-600 mt-1">{errors.message}</p>}
          </div>
          <Button type="submit" className="w-full bg-[#B99750] hover:bg-[#a88645]" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
