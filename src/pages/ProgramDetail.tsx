import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import TestimonialsSection from '@/components/TestimonialsSection';
import ProgramEmployabilitySection from '@/components/program/ProgramEmployabilitySection';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowRight, Clock, CheckCircle, ArrowLeft, Award, Users, Calendar, MapPin, HelpCircle, ChevronUp, ChevronDown, ChevronRight, Info, Download, Phone, MessageCircle, Mic } from 'lucide-react';


import { programs as mockPrograms } from '@/data/programs';
import { universities } from '@/data/universities';
import { Program } from '@/types';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useToast } from '@/hooks/use-toast';







const HERO_IMAGE = 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1760589915178_4578b58a.webp';
const ACCREDITATION_LOGO = 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1760589915964_c501fc76.webp';
const AI_COUNSELLOR_IMAGE = 'https://d64gsuwffb70l.cloudfront.net/68ee314aa177c7fe5f473f1b_1761210298751_56849471.webp';


export default function ProgramDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [program, setProgram] = useState<Program | null>(null);
  const [loading, setLoading] = useState(true);
  const [isFeesExpanded, setIsFeesExpanded] = useState(false);
  const [isDownloadDialogOpen, setIsDownloadDialogOpen] = useState(false);
  const [isBookCallDialogOpen, setIsBookCallDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: ''
  });
  const [callFormData, setCallFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAiHovered, setIsAiHovered] = useState(false);


  const degreeOptionsRef = useRef<HTMLDivElement>(null);



  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCallInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCallFormData({
      ...callFormData,
      [e.target.name]: e.target.value
    });
  };

  const handleDownloadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Show success message
    toast({
      title: "Success!",
      description: "Your student guide is being downloaded.",
    });

    // Trigger PDF download (placeholder - in production, this would be a real PDF file)
    const link = document.createElement('a');
    link.href = '/placeholder.svg'; // Replace with actual PDF URL
    link.download = `${program?.title}-modules.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Reset form and close dialog
    setFormData({ name: '', email: '', phone: '', city: '' });
    setIsSubmitting(false);
    setIsDownloadDialogOpen(false);
  };

  const handleBookCallSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Show success message
    toast({
      title: "Call Scheduled!",
      description: "We'll contact you at your preferred time.",
    });

    // Reset form and close dialog
    setCallFormData({ name: '', email: '', phone: '', preferredDate: '', preferredTime: '' });
    setIsSubmitting(false);
    setIsBookCallDialogOpen(false);
  };


  const scrollDegreeOptions = (direction: 'up' | 'down') => {
    if (degreeOptionsRef.current) {
      const scrollAmount = 100;
      const currentScroll = degreeOptionsRef.current.scrollTop;
      degreeOptionsRef.current.scrollTo({
        top: direction === 'down' ? currentScroll + scrollAmount : currentScroll - scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    fetchProgram();
  }, [slug]);

  const fetchProgram = async () => {
    setLoading(true);
    const mockProgram = mockPrograms.find(p => p.slug === slug);
    if (mockProgram) {
      setProgram(mockProgram);
    }
    setLoading(false);
  };



  if (loading) {
    return (
      <div className="min-h-screen bg-[#FAF3E0]">
        <Navigation />
        <div className="pt-32 pb-24 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#B99750] mx-auto mb-4"></div>
            <p className="text-[#0B1B3A]">Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!program) {
    return (
      <div className="min-h-screen bg-[#FAF3E0]">
        <Navigation />
        <div className="pt-32 pb-24">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold mb-6 text-[#0B1B3A]">Qualification Not Found</h1>
            <p className="text-gray-600 mb-8">The qualification you're looking for doesn't exist.</p>
            <Link to="/programs">
              <Button className="bg-[#B99750] hover:bg-[#a88645]">Browse All Qualifications</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF3E0]">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative h-[400px] overflow-hidden">
        <img 
          src={HERO_IMAGE} 
          alt={program.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1B3A]/85 to-[#0B1B3A]/70 flex items-center">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              {/* Left Side - Existing Content */}
              <div className="lg:col-span-8">
                <Button 
                  variant="ghost" 
                  onClick={() => navigate(-1)}
                  className="mb-4 text-white hover:bg-white/20"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back
                </Button>
                <Badge className="bg-[#B99750]/20 text-[#B99750] border-[#B99750] mb-4">
                  {program.department}
                </Badge>
                <h1 className="text-5xl font-bold text-white mb-4">{program.title}</h1>
                <a href="/contact">
                  <Button className="bg-[#B99750] hover:bg-[#a88645] text-white">
                    Enquire Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>


              </div>

              {/* Right Side - AI Counsellor Circle (Hidden on mobile/tablet) */}
              <div className="hidden mt-12 lg:flex lg:col-span-4 justify-center items-center">
                <div 
                  className="relative group cursor-pointer"
                  onMouseEnter={() => setIsAiHovered(true)}
                  onMouseLeave={() => setIsAiHovered(false)}
                >
                  {/* Outer Glow Ring */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-[#B99750] to-[#d4af37] opacity-30 blur-xl transition-all duration-500 ${
                    isAiHovered ? 'scale-110 opacity-50' : 'scale-100'
                  }`}></div>
                  
                  {/* Main Circle */}
                  {/* Main Circle - Reduced from w-80 h-80 to w-60 h-60 */}
                  <div className={`relative w-60 h-60 rounded-full overflow-hidden border-4 border-[#B99750] shadow-2xl transition-all duration-500 ${
                    isAiHovered ? 'scale-105 border-[#d4af37]' : 'scale-100'
                  }`}>

                    <img 
                      src={AI_COUNSELLOR_IMAGE} 
                      alt="AI Counsellor"
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B3A]/80 via-transparent to-transparent"></div>
                    
                    {/* Text & Buttons Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                      <h3 className="text-white font-bold text-xl mb-2">AI Counsellor</h3>
                      <p className="text-white/80 text-sm mb-4">Get instant course guidance</p>
                      
                      {/* Interactive Buttons */}
                      <div className="flex gap-3 justify-center">
                        <button
                          onClick={() => toast({
                            title: "Chat Coming Soon!",
                            description: "AI chat counselling will be available soon.",
                          })}
                          className="flex items-center gap-2 px-4 py-2 bg-[#B99750] hover:bg-[#d4af37] text-white rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
                        >
                          <MessageCircle className="h-4 w-4" />
                          <span className="text-sm font-medium">Chat</span>
                        </button>
                        <button
                          onClick={() => toast({
                            title: "Voice Coming Soon!",
                            description: "AI voice counselling will be available soon.",
                          })}
                          className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-full transition-all duration-300 hover:scale-105 shadow-lg backdrop-blur-sm"
                        >
                          <Mic className="h-4 w-4" />
                          <span className="text-sm font-medium">Voice</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Pulse Animation */}
                  <div className={`absolute inset-0 rounded-full border-2 border-[#B99750] transition-all duration-1000 ${
                    isAiHovered ? 'scale-110 opacity-0' : 'scale-100 opacity-100'
                  }`} style={{ animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="py-12 sm:py-16 lg:py-20">


        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8 max-h-[70vh] overflow-y-auto">
              {/* Duration */}
              <Card className="border-[#B99750]/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-[#0B1B3A]">
                    <Clock className="h-5 w-5 text-[#B99750]" />
                    Duration of the Course
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-[#B99750]/10 rounded-lg border border-[#B99750]/30">
                      <p className="text-sm text-gray-600 mb-1">Study in India</p>
                      <p className="text-2xl font-bold text-[#0B1B3A]">{program.pathwayModel?.split('+')[0]} Yr{program.pathwayModel?.split('+')[0] !== '1' ? 's' : ''}</p>
                    </div>
                    <div className="p-4 bg-[#B99750]/10 rounded-lg border border-[#B99750]/30">
                      <p className="text-sm text-gray-600 mb-1">Study Abroad</p>
                      <p className="text-2xl font-bold text-[#0B1B3A]">{program.pathwayModel?.split('+')[1]} Yr{program.pathwayModel?.split('+')[1] !== '1' ? 's' : ''}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Program Overview */}
              {program.overview && (
                <Card className="border-[#B99750]/20">
                  <CardHeader>
                    <CardTitle className="text-[#0B1B3A]">Program Overview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed">{program.overview}</p>
                  </CardContent>
                </Card>
              )}

              {/* Study Journey */}
              {program.studyJourney && (
                <Card className="border-[#B99750]/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-[#0B1B3A]">
                      <MapPin className="h-5 w-5 text-[#B99750]" />
                      Study Journey from KCIC to Study Abroad
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {program.studyJourney.map((journey, index) => (
                        <div key={index} className="relative pl-8 pb-6 border-l-2 border-[#B99750]/30 last:border-l-0 last:pb-0">
                          <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#B99750]"></div>
                          <div className="bg-[#0B1B3A] p-4 rounded-lg border border-[#B99750]/20 min-h-[140px] flex flex-col justify-start">

                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="outline" className="bg-white border-[#B99750]/30">Year {journey.year}</Badge>
                              <span className="text-sm font-semibold text-white">{journey.location}</span>
                            </div>
                            <p className="text-white/90 text-sm">{journey.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}


              {/* Accreditation */}
              {program.accreditation && (
                <Card className="border-[#B99750]/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-[#0B1B3A]">
                      <Award className="h-5 w-5 text-[#B99750]" />
                      Accreditation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4">
                      <img src={ACCREDITATION_LOGO} alt="Accreditation" className="w-20 h-20 object-contain" />
                      <p className="text-gray-700">{program.accreditation}</p>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Exemptions */}
              {program.exemptions && (
                <Card className="border-[#B99750]/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-[#0B1B3A]">
                      <CheckCircle className="h-5 w-5 text-[#B99750]" />
                      Exemptions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed">{program.exemptions}</p>
                  </CardContent>
                </Card>
              )}

              {/* Industry Collaboration */}
              {program.industryCollaboration && (
                <Card className="border-[#B99750]/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-[#0B1B3A]">
                      <Users className="h-5 w-5 text-[#B99750]" />
                      Industry Collaboration
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed">{program.industryCollaboration}</p>
                  </CardContent>
                </Card>
              )}

              {/* Employability & Career Outcomes Section */}
              {program.employabilityData && (
                <ProgramEmployabilitySection 
                  data={program.employabilityData} 
                  programTitle={program.title} 
                />
              )}


              {/* Entry Requirements & Admission Criteria - Stacked Layout */}
              <div className="space-y-6">
                {/* Entry Requirements */}
                <Card className="border-[#B99750]/20">
                  <CardHeader>
                    <CardTitle className="text-[#0B1B3A]">Entry Requirements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="p-4 bg-[#B99750]/10 rounded-lg border border-[#B99750]/30">
                      <p className="text-gray-800">{program.requirements}</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Admission Criteria */}
                <Card className="border-[#B99750]/20">
                  <CardHeader>
                    <CardTitle className="text-[#0B1B3A]">Admission Criteria</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="p-4 bg-[#B99750]/10 rounded-lg border border-[#B99750]/30">
                      <p className="text-gray-800 leading-relaxed">
                        We welcome students who are passionate about learning and ready to begin their global journey. Admission is based on meeting the academic entry requirements and completing a friendly online interview with one of our faculty members. We look for genuine intent to study, a positive attitude toward international education, and a clean visa history. Our goal is to ensure every student is well-prepared for success abroad.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>



              {/* Career Pathways & Employer Connections */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Careers & Global Salaries */}
                <Card className="border-[#B99750]/20">
                  <CardHeader>
                    <CardTitle className="text-[#0B1B3A]">Careers & Global Salaries</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {program.employabilityData?.careerOutcomes?.map((career, index) => (
                        <div key={index}>
                          <p className="text-[#0B1B3A] font-semibold">{career.title}</p>
                          <p className="text-gray-600 text-sm -mt-0.5">{career.salaryRange}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* University x Employer Connections */}
                <Card className="border-[#B99750]/20">
                  <CardHeader>
                    <CardTitle className="text-[#0B1B3A]">University × Employer Connections</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">Our partner universities have strong connections with leading global employers:</p>
                    <div className="space-y-2">
                      {program.employabilityData?.topRecruiters?.map((employer, index) => (
                        <p key={index} className="text-[#0B1B3A] font-semibold">{employer}</p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>




            </div>

            {/* Sidebar */}
            <div>
              <Card className="sticky top-32 border-[#B99750]/20">
                <CardHeader>
                  <CardTitle className="text-[#0B1B3A]">Quick Info</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 max-h-[60vh] overflow-y-auto">
                  {/* Stage 1 Title */}
                  <div className="pb-4 border-b border-[#B99750]/20">
                    <h3 className="text-sm font-bold text-[#0B1B3A]">Stage 1 Study in KCIC</h3>

                  </div>

                  {/* Intake & Application Deadlines */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar className="h-4 w-4 text-[#B99750]" />
                      <p className="font-semibold text-sm text-[#0B1B3A]">Intake & Application Deadlines</p>
                    </div>
                    <div className="space-y-3">
                      {/* July Intake Block */}
                      <div className="p-4 bg-white rounded-lg border border-[#B99750]/30">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-3 py-1 bg-[#B99750]/10 rounded-md border border-[#B99750]/30 text-[#B99750] font-semibold text-sm">July Intake</span>
                        </div>
                        <div className="flex items-start gap-2 mt-2">
                          <Clock className="h-4 w-4 text-[#B99750] mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-gray-700">Priority application closes in <span className="font-semibold text-[#0B1B3A]">February</span></p>

                        </div>
                      </div>

                      {/* January Intake Block */}
                      <div className="p-4 bg-white rounded-lg border border-[#B99750]/30">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-3 py-1 bg-[#B99750]/10 rounded-md border border-[#B99750]/30 text-[#B99750] font-semibold text-sm">January Intake</span>
                        </div>
                        <div className="flex items-start gap-2 mt-2">
                          <Clock className="h-4 w-4 text-[#B99750] mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-gray-700">Priority application closes in <span className="font-semibold text-[#0B1B3A]">November</span></p>

                        </div>
                      </div>
                    </div>
                  </div>





                  {/* Fees with Expandable International Fees */}
                  <TooltipProvider>
                    <div className="space-y-3">
                      {/* Indian Fees Box with inline arrow */}
                      <div 
                        onClick={() => setIsFeesExpanded(!isFeesExpanded)}
                        className={`p-4 bg-[#B99750]/10 rounded-lg border border-[#B99750]/30 cursor-pointer transition-all duration-300 ease-out ${
                          isFeesExpanded ? 'opacity-80 -translate-y-1' : 'hover:bg-[#B99750]/15'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <p className="text-sm text-gray-600 mb-1">KCIC Tuition Fees</p>

                            <p className="text-2xl font-bold text-[#0B1B3A]">₹{program.year1FeesInr.toLocaleString()}/Yr</p>
                            <p className="text-xs text-[#B99750] mt-2 font-medium">💳 Pay in EMI ₹{Math.round((program.year1FeesInr * 1.08) / 9).toLocaleString()} x 9 months</p>


                          </div>
                          <ChevronRight 
                            className={`h-7 w-7 text-[#B99750] font-bold transition-transform duration-300 ${
                              isFeesExpanded ? 'rotate-90' : ''
                            }`}
                          />

                        </div>
                      </div>
                      
                      {/* International Fees Panel - Expandable */}
                      <div 
                        className={`overflow-hidden transition-all duration-300 ease-out ${
                          isFeesExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="p-4 bg-white rounded-lg border border-[#B99750]/30 space-y-3">
                          <div className="flex items-start justify-between">
                            <div>
                              <p className="text-sm text-gray-600 mb-1">Study Abroad Tuition Fee</p>

                              <p className="text-xl font-bold text-[#0B1B3A]">£14,500*</p>
                              <p className="text-xs text-gray-500 mt-1">*Subject to change</p>
                            </div>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <button className="text-[#B99750] hover:text-[#a88645]">
                                  <Info className="h-4 w-4" />
                                </button>
                              </TooltipTrigger>
                              <TooltipContent className="max-w-xs">
                                <p className="text-xs">Eligibility for loans and work opportunities varies by country and visa type. Contact us for specific details.</p>
                              </TooltipContent>
                            </Tooltip>
                          </div>
                          
                          <div className="pt-3 border-t border-gray-200">
                            <p className="text-xs text-gray-700 leading-relaxed space-y-1">
                              <span className="flex items-start gap-2">
                                <CheckCircle className="h-3 w-3 text-green-600 mt-0.5 flex-shrink-0" />
                                <span>Collateral-free loans available</span>
                              </span>
                              <span className="flex items-start gap-2">
                                <CheckCircle className="h-3 w-3 text-green-600 mt-0.5 flex-shrink-0" />
                                <span>Flexible payment options</span>
                              </span>
                              <span className="flex items-start gap-2">
                                <CheckCircle className="h-3 w-3 text-green-600 mt-0.5 flex-shrink-0" />
                                <span>Potential part-time earning upto 12 Lacs while studying abroad</span>
                              </span>
                              <span className="flex items-start gap-2">
                                <CheckCircle className="h-3 w-3 text-green-600 mt-0.5 flex-shrink-0" />
                                <span>Option to include paid placement year, earn upto 19 lacs between the academic years abroad</span>
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TooltipProvider>






                  {/* Stage 2 Transfer Options */}
                  {program.majors && program.majors.length > 0 && (
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <p className="font-semibold text-sm text-[#0B1B3A]">Stage 2 Transfer Options</p>

                        <div className="flex gap-1">
                          <button
                            onClick={() => scrollDegreeOptions('up')}
                            className="p-1 rounded hover:bg-[#B99750]/20 text-[#B99750] transition-colors"
                            aria-label="Scroll up"
                          >
                            <ChevronUp className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => scrollDegreeOptions('down')}
                            className="p-1 rounded hover:bg-[#B99750]/20 text-[#B99750] transition-colors"
                            aria-label="Scroll down"
                          >
                            <ChevronDown className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                      <div 
                        ref={degreeOptionsRef}
                        className="space-y-3 max-h-[240px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[#B99750]/30 scrollbar-track-transparent"
                      >
                        {program.partnerUniversities.map((uniId) => {
                          const university = universities.find(u => u.id === uniId);
                          const universityPrograms = program.universityPrograms?.[uniId] || [];
                          
                          return university ? (
                            <div key={uniId} className="p-3 bg-white rounded-lg border border-[#B99750]/20">
                              <p className="text-xs font-semibold text-[#B99750] mb-2">{university.name}</p>
                              <div className="space-y-1">
                                {universityPrograms.length > 0 ? (
                                  universityPrograms.map((programName, idx) => (
                                    <p key={idx} className="text-xs text-gray-600 pl-2 border-l-2 border-[#B99750]/20">
                                      {programName}
                                    </p>
                                  ))
                                ) : (
                                  <p className="text-xs text-gray-600">BA (Hons) {program.title}</p>
                                )}
                              </div>
                            </div>
                          ) : null;
                        })}
                      </div>
                    </div>
                  )}





                  {/* Action Buttons */}
                  <div className="space-y-3">
                    {/* Apply Now and Book a Call - Side by Side */}
                    <div className="grid grid-cols-2 gap-3">
                      <a href="https://admissions.cornerstone.edu.in/" target="_blank" rel="noopener noreferrer" className="w-full">
                        <Button className="w-full bg-gradient-to-r from-[#B99750] to-[#a88645] hover:from-[#a88645] hover:to-[#967a3d] text-white">
                          Apply Now
                        </Button>
                      </a>
                      <Button 
                        variant="outline" 
                        className="w-full border-[#B99750] text-[#B99750] hover:bg-[#B99750] hover:text-white transition-colors"
                        onClick={() => setIsBookCallDialogOpen(true)}
                      >
                        <Phone className="mr-2 h-4 w-4" />
                        Book a Call
                      </Button>
                    </div>
                    
                    {/* Download Modules - Full Width */}
                    <Button 
                      variant="outline" 
                      className="w-full border-[#B99750]/30 text-[#0B1B3A] hover:bg-[#B99750]/10"
                      onClick={() => setIsDownloadDialogOpen(true)}
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download Course Details
                    </Button>
                  </div>

                </CardContent>
              </Card>
            </div>
          </div>


          {/* Student Testimonials Section */}
          <div className="mt-16 -mx-6">
            <TestimonialsSection />
          </div>

          {/* FAQs Section */}

          {program.faqs && program.faqs.length > 0 && (
            <div className="mt-16">
              <div className="text-center mb-8 md:mb-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-[#0B1B3A]">
                  Frequently Asked <span className="text-[#B99750]">Questions</span>
                </h2>
                <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                  Find answers to common questions about this qualification
                </p>
              </div>

              <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="w-full">
                  {program.faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                      <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-[#0B1B3A] hover:text-[#B99750]">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm md:text-base text-gray-600 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Download Modules Dialog */}
      <Dialog open={isDownloadDialogOpen} onOpenChange={setIsDownloadDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-[#0B1B3A]">Download Program Modules</DialogTitle>
            <DialogDescription>
              Please fill in your details to receive the student guide PDF for {program.title}.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleDownloadSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                required
                className="border-[#B99750]/30 focus:border-[#B99750]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your.email@example.com"
                required
                className="border-[#B99750]/30 focus:border-[#B99750]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+91 1234567890"
                required
                className="border-[#B99750]/30 focus:border-[#B99750]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="city">City *</Label>
              <Input
                id="city"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                placeholder="Enter your city"
                required
                className="border-[#B99750]/30 focus:border-[#B99750]"
              />
            </div>
            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsDownloadDialogOpen(false)}
                className="flex-1 border-[#B99750]/30"
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-[#B99750] hover:bg-[#a88645]"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Downloading...
                  </>
                ) : (
                  <>
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </>
                )}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Book a Call Dialog */}
      <Dialog open={isBookCallDialogOpen} onOpenChange={setIsBookCallDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-[#0B1B3A]">Schedule a Call</DialogTitle>
            <DialogDescription>
              Book a consultation call with our admissions team to discuss {program.title}.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleBookCallSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="call-name">Full Name *</Label>
              <Input
                id="call-name"
                name="name"
                value={callFormData.name}
                onChange={handleCallInputChange}
                placeholder="Enter your full name"
                required
                className="border-[#B99750]/30 focus:border-[#B99750]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="call-email">Email Address *</Label>
              <Input
                id="call-email"
                name="email"
                type="email"
                value={callFormData.email}
                onChange={handleCallInputChange}
                placeholder="your.email@example.com"
                required
                className="border-[#B99750]/30 focus:border-[#B99750]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="call-phone">Phone Number *</Label>
              <Input
                id="call-phone"
                name="phone"
                type="tel"
                value={callFormData.phone}
                onChange={handleCallInputChange}
                placeholder="+91 1234567890"
                required
                className="border-[#B99750]/30 focus:border-[#B99750]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="preferredDate">Preferred Date *</Label>
              <Input
                id="preferredDate"
                name="preferredDate"
                type="date"
                value={callFormData.preferredDate}
                onChange={handleCallInputChange}
                required
                className="border-[#B99750]/30 focus:border-[#B99750]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="preferredTime">Preferred Time *</Label>
              <Input
                id="preferredTime"
                name="preferredTime"
                type="time"
                value={callFormData.preferredTime}
                onChange={handleCallInputChange}
                required
                className="border-[#B99750]/30 focus:border-[#B99750]"
              />
            </div>
            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsBookCallDialogOpen(false)}
                className="flex-1 border-[#B99750]/30"
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-[#B99750] hover:bg-[#a88645]"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Scheduling...
                  </>
                ) : (
                  <>
                    <Phone className="mr-2 h-4 w-4" />
                    Schedule Call
                  </>
                )}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>


      <Footer />
    </div>
  );
}
