import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { programs } from '@/data/programs';
import { validateEmail, validatePhone, validateName, sanitizeInput } from '@/utils/validation';

export default function Apply() {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dob: '',
    program: '',
    previousEducation: '',
    percentage: ''
  });

  const validateStep = (currentStep: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (currentStep === 1) {
      if (!validateName(formData.firstName)) {
        newErrors.firstName = 'First name must be 2-100 characters';
      }
      if (!validateName(formData.lastName)) {
        newErrors.lastName = 'Last name must be 2-100 characters';
      }
      if (!validateEmail(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
      }
      if (!validatePhone(formData.phone)) {
        newErrors.phone = 'Please enter a valid phone number';
      }
      if (!formData.dob) {
        newErrors.dob = 'Date of birth is required';
      }
    } else if (currentStep === 2) {
      if (!formData.program) {
        newErrors.program = 'Please select a program';
      }
    } else if (currentStep === 3) {
      if (!formData.previousEducation.trim()) {
        newErrors.previousEducation = 'Previous education is required';
      }
      if (!formData.percentage.trim()) {
        newErrors.percentage = 'Percentage/Grade is required';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateStep(step)) {
      return;
    }

    if (step < 3) {
      setStep(step + 1);
    } else {
      setIsSubmitting(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Application Submitted Successfully!",
        description: "We'll review your application and contact you within 24-48 hours.",
      });
      
      setIsSubmitting(false);
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        dob: '',
        program: '',
        previousEducation: '',
        percentage: ''
      });
      setStep(1);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData({...formData, [field]: sanitizeInput(value)});
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors({...errors, [field]: ''});
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF3E0] to-white">
      <Navigation />
      
      <section className="pt-32 pb-12 sm:pb-16 lg:pb-20">

        <Layout className="max-w-3xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-[#0B1B3A]">
              Apply to KCIC
            </h1>
            <p className="text-lg sm:text-xl text-gray-600">Start your journey to a global degree</p>
          </div>


          <div className="flex justify-center mb-8" role="progressbar" aria-valuenow={step} aria-valuemin={1} aria-valuemax={3} aria-label="Application progress">
            <div className="flex items-center gap-2 sm:gap-4">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                    step >= s ? 'bg-gradient-primary text-white' : 'bg-gray-200 text-gray-500'
                  }`}>
                    {s}
                  </div>
                  {s < 3 && <div className={`w-12 sm:w-16 h-1 mx-2 transition-all ${step > s ? 'bg-gradient-primary' : 'bg-gray-200'}`} />}
                </div>
              ))}
            </div>
          </div>

          <Card className="p-4 sm:p-6 lg:p-8">
            <CardHeader className="p-0 mb-6">
              <CardTitle>
                {step === 1 && 'Personal Information'}
                {step === 2 && 'Program Selection'}
                {step === 3 && 'Educational Background'}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {step === 1 && (
                  <>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          required
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          aria-invalid={!!errors.firstName}
                          aria-describedby={errors.firstName ? "firstName-error" : undefined}
                        />
                        {errors.firstName && <p id="firstName-error" className="text-sm text-red-600 mt-1">{errors.firstName}</p>}
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          required
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          aria-invalid={!!errors.lastName}
                          aria-describedby={errors.lastName ? "lastName-error" : undefined}
                        />
                        {errors.lastName && <p id="lastName-error" className="text-sm text-red-600 mt-1">{errors.lastName}</p>}
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
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
                      <Label htmlFor="dob">Date of Birth *</Label>
                      <Input
                        id="dob"
                        type="date"
                        required
                        value={formData.dob}
                        onChange={(e) => handleInputChange('dob', e.target.value)}
                        max={new Date().toISOString().split('T')[0]}
                        aria-invalid={!!errors.dob}
                        aria-describedby={errors.dob ? "dob-error" : undefined}
                      />
                      {errors.dob && <p id="dob-error" className="text-sm text-red-600 mt-1">{errors.dob}</p>}
                    </div>
                  </>
                )}

                {step === 2 && (
                  <div>
                    <Label htmlFor="program">Select Program *</Label>
                    <select
                      id="program"
                      required
                      value={formData.program}
                      onChange={(e) => handleInputChange('program', e.target.value)}
                      className="w-full px-4 py-2 border rounded-lg mt-2 min-h-[44px]"
                      aria-invalid={!!errors.program}
                      aria-describedby={errors.program ? "program-error" : undefined}
                    >
                      <option value="">Choose a program...</option>
                      {programs.map(p => (
                        <option key={p.id} value={p.id}>
                          {p.title} ({p.pathwayModel})
                        </option>
                      ))}
                    </select>
                    {errors.program && <p id="program-error" className="text-sm text-red-600 mt-1">{errors.program}</p>}
                  </div>
                )}

                {step === 3 && (
                  <>
                    <div>
                      <Label htmlFor="previousEducation">Previous Education *</Label>
                      <Input
                        id="previousEducation"
                        required
                        value={formData.previousEducation}
                        onChange={(e) => handleInputChange('previousEducation', e.target.value)}
                        placeholder="e.g., 12th Standard, Bachelor's Degree"
                        aria-invalid={!!errors.previousEducation}
                        aria-describedby={errors.previousEducation ? "previousEducation-error" : undefined}
                      />
                      {errors.previousEducation && <p id="previousEducation-error" className="text-sm text-red-600 mt-1">{errors.previousEducation}</p>}
                    </div>
                    <div>
                      <Label htmlFor="percentage">Percentage/Grade *</Label>
                      <Input
                        id="percentage"
                        required
                        value={formData.percentage}
                        onChange={(e) => handleInputChange('percentage', e.target.value)}
                        placeholder="e.g., 85%"
                        aria-invalid={!!errors.percentage}
                        aria-describedby={errors.percentage ? "percentage-error" : undefined}
                      />
                      {errors.percentage && <p id="percentage-error" className="text-sm text-red-600 mt-1">{errors.percentage}</p>}
                    </div>
                  </>
                )}

                <div className="flex gap-4 pt-4">
                  {step > 1 && (
                    <Button type="button" variant="outline" onClick={() => setStep(step - 1)} className="flex-1" disabled={isSubmitting}>
                      Previous
                    </Button>
                  )}
                  <Button 
                    type="submit" 
                    className="flex-1 bg-gradient-primary hover:opacity-90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : (step < 3 ? 'Next' : 'Submit Application')}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </Layout>
      </section>

      <Footer />
    </div>
  );
}
