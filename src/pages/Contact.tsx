import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { validateEmail, validatePhone, validateName, sanitizeInput } from '@/utils/validation';
import { SEO } from '@/components/SEO';

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    message: ''
  });

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!validateName(formData.name)) {
      newErrors.name = 'Name must be 2-100 characters';
    }
    if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setIsSubmitting(false);
    setFormData({ name: '', email: '', phone: '', program: '', message: '' });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData({...formData, [field]: sanitizeInput(value)});
    if (errors[field]) {
      setErrors({...errors, [field]: ''});
    }
  };

  return (
    <>
      <SEO
        title="Contact Us - KCIC Pathway College | Get in Touch"
        description="Contact KCIC admissions team. Get answers about our pathway programs, admissions process, and study abroad opportunities."
        keywords="contact KCIC, admissions enquiry, pathway college contact, study abroad help"
        url="https://kcic.edu.in/contact"
      />
      <div className="min-h-screen bg-gradient-to-br from-[#FAF3E0] to-white">
        <Navigation />

      
      <div className="pt-32 pb-12 sm:pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">

          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-[#0B1B3A]">
              Contact Us
            </h1>
            <p className="text-lg sm:text-xl text-gray-600">Get in touch with our admissions team</p>
          </div>


          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="John Doe"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && <p id="name-error" className="text-sm text-red-600 mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="john@example.com"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && <p id="email-error" className="text-sm text-red-600 mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+91 98765 43210"
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                    />
                    {errors.phone && <p id="phone-error" className="text-sm text-red-600 mt-1">{errors.phone}</p>}
                  </div>
                  <div>
                    <Label htmlFor="program">Interested Program</Label>
                    <Input
                      id="program"
                      value={formData.program}
                      onChange={(e) => handleInputChange('program', e.target.value)}
                      placeholder="e.g., Business Management"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell us about your query..."
                      rows={4}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "message-error" : undefined}
                    />
                    {errors.message && <p id="message-error" className="text-sm text-red-600 mt-1">{errors.message}</p>}
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-[#B99750] to-[#a88645] hover:from-[#a88645] hover:to-[#967a3d] text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>

                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Get in Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="text-[#B99750] mt-1" aria-hidden="true" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <a href="tel:+912212345678" className="text-gray-600 hover:text-[#B99750] transition-colors">+91 22 1234 5678</a><br />
                      <a href="tel:+918098765432" className="text-gray-600 hover:text-[#B99750] transition-colors">+91 80 9876 5432</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="text-[#B99750] mt-1" aria-hidden="true" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a href="mailto:admissions@kcic.edu.in" className="text-gray-600 hover:text-[#B99750] transition-colors">admissions@kcic.edu.in</a><br />
                      <a href="mailto:info@kcic.edu.in" className="text-gray-600 hover:text-[#B99750] transition-colors">info@kcic.edu.in</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="text-[#B99750] mt-1" aria-hidden="true" />
                    <div>
                      <p className="font-semibold">Head Office</p>
                      <p className="text-gray-600">Andheri East, Mumbai<br />Maharashtra 400069, India</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MessageCircle className="text-[#B99750] mt-1" aria-hidden="true" />
                    <div>
                      <p className="font-semibold">WhatsApp</p>
                      <p className="text-gray-600">+91 98765 43210</p>
                      <Button 
                        variant="outline" 
                        className="mt-2 border-[#B99750]/30 text-[#0B1B3A] hover:bg-[#B99750]/10" 
                        onClick={() => window.open('https://wa.me/919876543210', '_blank', 'noopener,noreferrer')}
                        aria-label="Chat with us on WhatsApp"
                      >
                        Chat on WhatsApp
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-[#0B1B3A] to-[#1a2f5a] text-white border-none">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-2">Office Hours</h3>
                  <p className="mb-2">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="mb-2">Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </div>

      <Footer />
      </div>
    </>
  );
}
