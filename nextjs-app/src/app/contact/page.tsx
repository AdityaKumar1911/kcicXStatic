import { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with KCIC. We're here to answer your questions about our programs, admissions, and campus life.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <ContactInfo
                icon={<MapPin className="h-6 w-6" />}
                title="Visit Us"
                content="East Coast Road, Villupuram District, Tamil Nadu, India"
              />
              <ContactInfo
                icon={<Phone className="h-6 w-6" />}
                title="Call Us"
                content="+91 1234 567 890"
              />
              <ContactInfo
                icon={<Mail className="h-6 w-6" />}
                title="Email Us"
                content="admissions@kcic.edu"
              />
              <ContactInfo
                icon={<Clock className="h-6 w-6" />}
                title="Office Hours"
                content="Mon-Fri: 9:00 AM - 6:00 PM IST"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
