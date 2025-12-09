import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, FileText, Users, Calendar, Phone, Mail, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Apply Now | KCIC',
  description: 'Start your international education journey. Apply to KCIC today.',
};

const steps = [
  { icon: <FileText className="w-6 h-6" />, title: 'Submit Application', desc: 'Fill out the online application form' },
  { icon: <Users className="w-6 h-6" />, title: 'Counseling Session', desc: 'Meet with our admissions team' },
  { icon: <CheckCircle className="w-6 h-6" />, title: 'Document Review', desc: 'Submit required documents' },
  { icon: <Calendar className="w-6 h-6" />, title: 'Enrollment', desc: 'Confirm your seat and begin' },
];

const requirements = [
  '12th Standard Mark Sheet',
  '10th Standard Mark Sheet',
  'Passport (if available)',
  'Passport-size Photographs',
  'Aadhar Card Copy',
  'Transfer Certificate',
];

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF3E0] to-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#0B1B3A] via-[#1a2d5a] to-[#0B1B3A] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Apply to KCIC</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Take the first step towards your international education journey
          </p>
          <a href="https://admissions.cornerstone.edu.in/" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-[#B99750] hover:bg-[#a88645] text-lg px-8">
              Start Application
            </Button>
          </a>
        </div>
      </div>

      {/* Application Steps */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0B1B3A] text-center mb-12">Application Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-[#B99750] rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {step.icon}
                </div>
                <div className="text-2xl font-bold text-[#0B1B3A] mb-2">Step {i + 1}</div>
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Requirements & Contact */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-6 h-6 text-[#B99750]" />
                  Required Documents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {requirements.map((req, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="w-6 h-6 text-[#B99750]" />
                  Contact Admissions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#B99750]" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#B99750]" />
                  <span>admissions@kcic.edu.in</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#B99750]" />
                  <span>Mon-Sat: 9AM - 6PM</span>
                </div>
                <Link href="/contact">
                  <Button className="w-full mt-4 bg-[#0B1B3A] hover:bg-[#0B1B3A]/90">
                    Schedule a Call
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 bg-gradient-to-r from-[#B99750] to-[#a88645]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Begin?</h2>
          <p className="text-xl text-white/90 mb-8">Join thousands of students on their path to international success</p>
          <a href="https://admissions.cornerstone.edu.in/" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-[#0B1B3A] hover:bg-[#0B1B3A]/90 text-lg px-8">
              Apply Now
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
