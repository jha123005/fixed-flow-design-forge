
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronDown, ChevronUp, ArrowDown, ArrowUp, ChevronLeft, ChevronRight, Play, Linkedin, Facebook, Twitter } from "lucide-react";

const Index = () => {
  const [expandedModule, setExpandedModule] = useState<string | null>(null);

  const mentors = [
    {
      name: "Varun Khullar",
      role: "Director of Business Development, LinkedIn",
      avatar: "/lovable-uploads/c592103f-149b-4fdd-acbc-467509f71590.png"
    },
    {
      name: "Prashanth Balasubramanian",
      role: "Head of Strategy, Meta",
      avatar: "/lovable-uploads/c592103f-149b-4fdd-acbc-467509f71590.png"
    },
    {
      name: "Megha Bansal",
      role: "Head of Business- SecureNow, Ex-McKinsey & Co., Ex-Aon",
      avatar: "/lovable-uploads/c592103f-149b-4fdd-acbc-467509f71590.png"
    },
    {
      name: "Rushika HandaSood",
      role: "Ex- Consultant, BCG",
      avatar: "/lovable-uploads/c592103f-149b-4fdd-acbc-467509f71590.png"
    }
  ];

  const companies = [
    "Swiggy", "Zoho", "Walmart", "Ola", "Uber", "Philips"
  ];

  const learners = [
    { name: "Flipkart", logo: "https://upload.wikimedia.org/wikipedia/en/7/7a/Flipkart_logo.png" },
    { name: "Walmart", logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg" },
    { name: "PhonePe", logo: "https://upload.wikimedia.org/wikipedia/commons/0/09/PhonePe_Logo.png" },
    { name: "Vivo", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Vivo_logo_2019.svg" },
    { name: "ShareChat", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/ShareChat_logo.png" },
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" }
  ];

  const modules = [
    {
      id: "module1",
      title: "MODULE 1",
      subtitle: "Introduction to Consulting",
      description: "Gain insight into consulting careers, key skills, firm operations, industry trends, and pathways. Explore entry strategies, prominent firms, practice types, and a real-life case study."
    },
    {
      id: "module2", 
      title: "MODULE 2",
      subtitle: "Business and Data 101",
      description: "Master fundamental business concepts and data analysis techniques essential for consulting work."
    },
    {
      id: "module3",
      title: "MODULE 3", 
      subtitle: "Key Consulting Concepts - Part 1",
      description: "Deep dive into core consulting methodologies and frameworks used by top firms."
    },
    {
      id: "module4",
      title: "MODULE 4",
      subtitle: "Key Consulting Concepts - Part 2", 
      description: "Advanced consulting concepts and practical application in real-world scenarios."
    }
  ];

  const targetAudience = [
    "Aspiring Strategy Consultants",
    "Early-tenure Management Consultants", 
    "Job Seekers",
    "Marketers & Growth Managers",
    "Business Students",
    "Anyone curious about what consultants & consulting firms truly do"
  ];

  const benefits = [
    "Stay ahead in your field by mastering industry relevant skills through our online sessions",
    "Dive into real challenges from today's businesses, gaining hands-on experience",
    "Tap into a wealth of career opportunities through our established network"
  ];

  const successStories = [
    {
      name: "Abhiram",
      currentRole: "Senior Social Media Manager",
      currentCompany: "Ogilvy",
      previousRole: "Senior Social Media Manager",
      previousCompany: "Infinity Learn",
      avatar: "/lovable-uploads/c592103f-149b-4fdd-acbc-467509f71590.png"
    },
    {
      name: "Teja Vanama",
      currentRole: "Deputy Manager (Geology)",
      currentCompany: "NMDC Limited",
      previousRole: "Assistant Manager",
      previousCompany: "NMDC Limited",
      avatar: "/lovable-uploads/c592103f-149b-4fdd-acbc-467509f71590.png"
    },
    {
      name: "Sujay Putta",
      currentRole: "Chief Executive Officer",
      currentCompany: "The Kaliq",
      previousRole: "Chief Brand Designer & Founder",
      previousCompany: "SCGB Solutions",
      avatar: "/lovable-uploads/c592103f-149b-4fdd-acbc-467509f71590.png"
    },
    {
      name: "Ravi Shankar",
      currentRole: "VP - Products & Marketing",
      currentCompany: "STL - Sterlite Technologies Limited",
      previousRole: "Vice President - Products & Marketing",
      previousCompany: "Skyvera",
      avatar: "/lovable-uploads/c592103f-149b-4fdd-acbc-467509f71590.png"
    },
    {
      name: "Aditya Suri",
      currentRole: "Senior Associate",
      currentCompany: "alliantgroup",
      previousRole: "Associate Manager",
      previousCompany: "Google Operations Center",
      avatar: "/lovable-uploads/c592103f-149b-4fdd-acbc-467509f71590.png"
    }
  ];

  const alumniCompanies = [
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "Swiggy", logo: "https://upload.wikimedia.org/wikipedia/commons/1/12/Swiggy_logo.svg" },
    { name: "Zoho", logo: "https://upload.wikimedia.org/wikipedia/commons/3/37/Zoho_logo.svg" },
    { name: "Philips", logo: "https://upload.wikimedia.org/wikipedia/commons/5/52/Philips_logo_new.svg" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
    { name: "Zomato", logo: "https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png" },
    { name: "Paytm", logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Paytm_Logo_%28standalone%29.svg" },
    { name: "Disney+ Hotstar", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Disney%2B_Hotstar_logo.svg" },
    { name: "Snapdeal", logo: "https://upload.wikimedia.org/wikipedia/commons/8/80/Snapdeal_logo.svg" },
    { name: "APNA", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Apna_logo.svg" },
    { name: "Walmart", logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg" },
    { name: "Uber", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" },
    { name: "Philips", logo: "https://upload.wikimedia.org/wikipedia/commons/5/52/Philips_logo_new.svg" },
    { name: "Adobe", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.svg" }
  ];

  const testimonials = [
    {
      text: "Excited to announce my graduation from the UX Career Acceleration Program by GrowthSchool under the mentorship of Anuradeep. It's been an enriching journey exploring UX concepts, design tools, and the realm of product design.",
      author: "Abhishika K.N",
      role: "Engineer - 2 - Version",
      avatar: "/lovable-uploads/c592103f-149b-4fdd-acbc-467509f71590.png",
      hasVideo: false
    },
    {
      text: "Just completed Vaibhav Sisinty's LinkedIn workshop at GrowthSchool - mind officially blown! Ready to share the top three secrets that turned my LinkedIn game around.",
      author: "Rahul Phathani",
      role: "Social Media Strategist, LinkedIn",
      avatar: "/lovable-uploads/c592103f-149b-4fdd-acbc-467509f71590.png",
      hasVideo: false
    },
    {
      text: "I landed my first international client with Growth School's LinkedIn Workshop. Here are the things I discovered over the last 30 days using Growth School LinkedIn Workshop:",
      author: "Akash Pandey",
      role: "Instagram Growth Coach, Instagram",
      avatar: "/lovable-uploads/c592103f-149b-4fdd-acbc-467509f71590.png",
      hasVideo: false
    },
    {
      text: "Hey Folks Excited to start this new year with a bang with the Digital Marketing Program with GrowthSchool. All set to begin the journey with the Learners on 7th Jan!",
      author: "sumit varma",
      role: "Media Account Specialist Head, Google",
      avatar: "/lovable-uploads/c592103f-149b-4fdd-acbc-467509f71590.png",
      hasVideo: false
    },
    {
      text: "I am thrilled to share that I have developed a dynamic and insightful dashboard on Power BI, providing real-time predictions and analysis of the USD-INR exchange rates.",
      author: "Nidhi worah",
      role: "Computer Vision Engineer, Ignitus",
      avatar: "/lovable-uploads/c592103f-149b-4fdd-acbc-467509f71590.png",
      hasVideo: true
    },
    {
      text: "Hey Folks! HNY 2024! Excited to start this new year with a bang with the Digital Marketing Program with GrowthSchool. All set to begin the journey with the Learners on 7th Jan!",
      author: "Tushar Baweja",
      role: "Investigation Specialist 1, Amazon",
      avatar: "/lovable-uploads/c592103f-149b-4fdd-acbc-467509f71590.png",
      hasVideo: true
    },
    {
      text: "Hey Folks! HNY 2024! Excited to start this new year with a bang with the Digital Marketing Program with GrowthSchool.",
      author: "Kaushik Sen",
      role: "Digital Marketing Strategist, Google",
      avatar: "/lovable-uploads/c592103f-149b-4fdd-acbc-467509f71590.png",
      hasVideo: false
    }
  ];

  const upskillFeatures = [
    {
      icon: "📹",
      title: "Self-paced video content",
      description: "Master new skills on your schedule with our flexible, self-paced video content."
    },
    {
      icon: "🎯",
      title: "Office hours with Mentors for clearing blockers",
      description: "Overcome challenges fast with dedicated mentor office hours."
    },
    {
      icon: "💼",
      title: "Project driven approach to achieve outcomes",
      description: "Gain practical skills through our project-driven approach for real results."
    },
    {
      icon: "👥",
      title: "Access to network of 1000+ learners",
      description: "Tap into our vibrant network of learners, enhancing your learning experience."
    }
  ];

  const brandLogos = [
    { name: "Google", color: "bg-blue-50" },
    { name: "Shiprocket", color: "bg-green-50" },
    { name: "Domino's", color: "bg-red-50" },
    { name: "Aditya Birla", color: "bg-orange-50" },
    { name: "Dr.Reddy's", color: "bg-purple-50" },
    { name: "Uber", color: "bg-gray-50" },
    { name: "Shell", color: "bg-yellow-50" },
    { name: "Razorpay", color: "bg-blue-50" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">G</span>
            </div>
            <span className="font-semibold text-lg">Growth School</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900">
                <span>Learn</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            <a href="#" className="text-gray-700 hover:text-gray-900">Upskill your Team</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">About</a>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="outline">Login</Button>
            <Button className="bg-gray-900 hover:bg-gray-800 text-white">Apply as Mentor</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-900 via-slate-800 to-blue-900 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Management Consulting</h1>
                <p className="text-xl text-gray-200 mb-6">
                  A 15-week AI-powered mentorship program designed by consultants from McKinsey, Bain & more to help you understand, practice, and implement the principles of management consulting.
                </p>
                <div className="space-y-4">
                  <div>
                    <span className="text-gray-300">Cohort start date</span>
                    <p className="text-xl font-semibold">Coming Soon</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 text-lg">
                  Apply Now
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg">
                  <ArrowDown className="w-5 h-5 mr-2" />
                  Brochure
                </Button>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Mentors</h3>
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-3">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src="/lovable-uploads/c592103f-149b-4fdd-acbc-467509f71590.png" />
                      <AvatarFallback>VK</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">Varun Khullar</p>
                      <p className="text-sm text-gray-300">Director of Business Development, LinkedIn</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src="/lovable-uploads/c592103f-149b-4fdd-acbc-467509f71590.png" />
                      <AvatarFallback>PB</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">Prashanth Bal...</p>
                      <p className="text-sm text-gray-300">Head of Strategy, Meta</p>
                    </div>
                  </div>
                  <div className="bg-gray-700 rounded-full px-3 py-1">
                    <span className="text-sm">+ 2 more</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://d3kl8zsmmx4oop.cloudfront.net/MCP_39e7df7c6c_d9c653a440.webp"
                alt="Consulting Team"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6.5M+ Learners Section - Now after hero */}
      <section className="py-8 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-end">
            <Card className="w-80 border border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">6.5M+ Learners</h3>
                <p className="text-gray-600 mb-6">have reaped benefits from our programs</p>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {learners.map((learner, index) => (
                    <div key={index} className="text-center">
                      <Avatar className="w-12 h-12 mx-auto mb-2">
                        <AvatarImage src={learner.logo} />
                        <AvatarFallback>{learner.name[0]}</AvatarFallback>
                      </Avatar>
                      <p className="text-xs text-gray-600">{learner.name}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center mt-0.5">
                        <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                      </div>
                      <p className="text-sm text-gray-700">{benefit}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xs">G</span>
                    </div>
                    <span className="text-sm font-medium">Growth School</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-blue-600">LinkedIn</span>
                    <span className="text-xs text-gray-500">Top Startup India 2023</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-50 border-gray-200">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">₹</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">₹ 10,00,000+</h3>
                  <p className="text-gray-600">AVERAGE ANNUAL CTC</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200">
              <CardContent className="p-8">
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-4">Top companies hiring in this industry</h3>
                  <p className="text-gray-600 mb-6">GET HIRED TO WORK FOR THESE GLOBAL GIANTS</p>
                  <div className="grid grid-cols-3 gap-4">
                    {companies.map((company, index) => (
                      <div key={index} className="text-center">
                        <div className="w-12 h-12 bg-gray-100 rounded mx-auto mb-2 flex items-center justify-center">
                          <span className="text-xs font-medium">{company}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-50 border-gray-200">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📊</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Multiple projects</h3>
                  <p className="text-gray-600">LEARN BY DOING</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-50 border-gray-200">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔍</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Secret insights</h3>
                  <p className="text-gray-600">FROM REAL CASE-STUDIES</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-50 border-gray-200">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💬</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Live QnA sessions</h3>
                  <p className="text-gray-600">TALK WITH INDUSTRY MENTORS</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Two Column Layout Container */}
      <div className="flex max-w-7xl mx-auto">
        {/* Left Side - Main Content (Half Width) */}
        <div className="w-1/2 pr-8">
          {/* Key Outcomes */}
          <section className="py-16 px-6">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold mb-8">Key Outcomes</h2>
              <p className="text-lg text-gray-700 mb-8">
                Gain a thorough understanding of the consulting industry, its diverse career trajectories, 
                necessary skills, and the inner workings of consulting firms. This knowledge will empower you to 
                make well-informed decisions about your potential engagement in this field.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">Understand the role, functions, and daily activities of consultants</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">Explore diverse career paths and strategies to overcome entry barriers</p>
                </div>
              </div>

              <button className="text-blue-600 hover:text-blue-800 flex items-center space-x-2">
                <span>Read More</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </section>

          {/* What will you learn */}
          <section className="py-16 px-6 bg-gray-50">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold mb-12">What will you learn?</h2>
              
              <div className="space-y-4">
                {modules.map((module) => (
                  <Card key={module.id} className="border border-gray-200">
                    <CardContent className="p-0">
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value={module.id} className="border-none">
                          <AccordionTrigger className="px-6 py-4 hover:no-underline">
                            <div className="flex items-center justify-between w-full">
                              <div className="text-left">
                                <p className="text-sm text-gray-500 font-medium">{module.title}</p>
                                <h3 className="text-lg font-semibold">{module.subtitle}</h3>
                              </div>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-6 pb-4">
                            <p className="text-gray-700">{module.description}</p>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Target Audience */}
          <section className="py-16 px-6">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold mb-8">Still wondering If Management Consulting Mentorship Program is for you?</h2>
              <p className="text-lg text-gray-700 mb-12">
                Gain a thorough understanding of the consulting industry, its diverse career trajectories, 
                necessary skills, and the inner workings of consulting firms. This knowledge will empower you to 
                make well-informed decisions about your potential engagement in this field.
              </p>

              <div className="grid md:grid-cols-1 gap-8">
                {targetAudience.map((audience, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mt-1">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                    </div>
                    <p className="text-lg font-medium text-gray-800">{audience}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Meet Your Mentors */}
          <section className="py-16 px-6 bg-gray-50">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold mb-12">Meet Your Mentors</h2>
              
              <div className="grid md:grid-cols-1 gap-8">
                {mentors.map((mentor, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src={mentor.avatar} />
                      <AvatarFallback>{mentor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-lg font-semibold">{mentor.name}</h3>
                      <p className="text-gray-600">{mentor.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Certification */}
          <section className="py-16 px-6">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold mb-8">Before you ask!</h2>
              <p className="text-lg text-gray-700 mb-12">Yes! You will be certified for this program.</p>
              
              <Card className="bg-gradient-to-r from-emerald-50 to-blue-50 border-2 border-emerald-200 p-8">
                <CardContent className="p-0">
                  <div className="flex items-center justify-center">
                    <img 
                      src="https://d3kl8zsmmx4oop.cloudfront.net/GS_certificate_b91252c431_b546f36e85.png"
                      alt="Certificate"
                      className="max-w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* NSDC Certification */}
          <section className="py-16 px-6 bg-gray-50">
            <div className="max-w-3xl">
              <Badge className="mb-6 bg-blue-100 text-blue-800">GOVERNMENT CERTIFIED</Badge>
              <h2 className="text-3xl font-bold mb-8">Earn NSDC Certification</h2>
              
              <p className="text-lg text-gray-700 mb-8">
                The National Skill Development Corporation (NSDC), under the Government of India, promotes 
                skill development. Your course is a part of NSDC programme and you'll receive a certificate upon 
                completion*
              </p>

              <div className="space-y-4 mb-8">
                <p className="text-gray-700"><strong>Benefits of NSDC Certification:</strong></p>
                <div className="space-y-3">
                  <p className="text-gray-700">1. Boost your career prospects with a certification acknowledged across India.</p>
                  <p className="text-gray-700">2. Improves chances of employment and career advancement.</p>
                  <p className="text-gray-700">3. Ensures top-quality education and training.</p>
                </div>
              </div>

              <p className="text-gray-700 mb-8">
                Register for NSDC certification today and advance your career with industry-recognized credentials.
              </p>

              <p className="text-sm text-gray-500 italic">* Subject to evaluation and attendance</p>

              <div className="mt-8 flex justify-center">
                <img 
                  src="https://d31bwppm8yl9g2.cloudfront.net/learner/website/nsdc.webp"
                  alt="NSDC Certificate"
                  className="max-w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </section>

          {/* Exclusive Bonus */}
          <section className="py-16 px-6">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold mb-8">Exclusive bonus waiting for you!</h2>
              <p className="text-lg text-gray-700 mb-12">
                Exclusive bonus available to the first 50 enrollees only. Secure your spot now!
              </p>

              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 mb-12">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-emerald-800 mb-2">Bonus 1</h3>
                    <p className="text-emerald-700">Early Bird Access : Consulting Case Interview Preparation - Self Paced Course</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-16 px-6 bg-gray-50">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold mb-12">Frequently Asked Questions</h2>
              
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="faq1" className="bg-white border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="py-4 hover:no-underline">
                    <span className="text-left font-medium">What is this program about?</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <p className="text-gray-700">
                      This is a comprehensive 15-week AI-powered mentorship program designed by consultants from 
                      top firms like McKinsey and Bain to help you understand, practice, and implement the 
                      principles of management consulting.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq2" className="bg-white border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="py-4 hover:no-underline">
                    <span className="text-left font-medium">Is this a completely live program?</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <p className="text-gray-700">
                      The program combines live sessions with self-paced learning materials. You'll have 
                      live mentorship sessions, Q&A sessions, and interactive workshops along with 
                      recorded content you can access anytime.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </section>
        </div>

        {/* Right Side - Fixed 6.5M+ Learners Section */}
        <div className="w-1/2 pl-8">
          <div className="sticky top-8">
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">6.5M+ Learners</h3>
                <p className="text-gray-600 mb-6">have reaped benefits from our programs</p>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {learners.map((learner, index) => (
                    <div key={index} className="text-center">
                      <Avatar className="w-12 h-12 mx-auto mb-2">
                        <AvatarImage src={learner.logo} />
                        <AvatarFallback>{learner.name[0]}</AvatarFallback>
                      </Avatar>
                      <p className="text-xs text-gray-600">{learner.name}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center mt-0.5">
                        <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                      </div>
                      <p className="text-sm text-gray-700">{benefit}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xs">G</span>
                    </div>
                    <span className="text-sm font-medium">Growth School</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-blue-600">LinkedIn</span>
                    <span className="text-xs text-gray-500">Top Startup India 2023</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Success Stories Section - Full Width */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <p className="text-sm text-gray-600 font-medium mb-2">SUCCESS STORIES</p>
              <h2 className="text-3xl font-bold">Our Learners at Leading Companies</h2>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" className="rounded-full">
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" className="rounded-full">
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {successStories.map((story, index) => (
              <Card key={index} className="bg-white border border-gray-200 p-6">
                <CardContent className="p-0">
                  <div className="flex items-center space-x-3 mb-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={story.avatar} />
                      <AvatarFallback>{story.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-sm">{story.name}</h3>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{story.currentRole}</p>
                      <p className="text-sm text-gray-600">{story.currentCompany}</p>
                    </div>
                    
                    <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center">
                      <ChevronDown className="w-4 h-4 text-white" />
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium text-gray-900">{story.previousRole}</p>
                      <p className="text-sm text-gray-600">{story.previousCompany}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Companies Section - Full Width */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Our alumni work at top brands like</h2>
          
          <div className="grid grid-cols-7 gap-8 items-center mb-8">
            {alumniCompanies.slice(0, 7).map((company, index) => (
              <div key={index} className="flex items-center justify-center h-16">
                <span className="text-lg font-semibold text-gray-700">{company.name}</span>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-7 gap-8 items-center">
            {alumniCompanies.slice(7, 14).map((company, index) => (
              <div key={index} className="flex items-center justify-center h-16">
                <span className="text-lg font-semibold text-gray-700">{company.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Full Width */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-sm text-gray-600 font-medium mb-2">HEAR IT FROM THEM</p>
            <h2 className="text-3xl font-bold mb-2">Ambitious People ❤️ GrowthSchool</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {testimonials.slice(0, 4).map((testimonial, index) => (
              <Card key={index} className="bg-white border border-gray-200 p-6">
                <CardContent className="p-0">
                  <div className="flex items-center justify-between mb-4">
                    <Linkedin className="w-6 h-6 text-blue-600" />
                  </div>
                  
                  <p className="text-sm text-gray-700 mb-4 line-clamp-4">{testimonial.text}</p>
                  
                  <div className="flex items-center space-x-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={testimonial.avatar} />
                      <AvatarFallback>{testimonial.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-sm">{testimonial.author}</h4>
                      <p className="text-xs text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {testimonials.slice(4, 7).map((testimonial, index) => (
              <div key={index} className="relative">
                {testimonial.hasVideo && (
                  <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center mb-4 relative">
                    <Play className="w-12 h-12 text-white bg-black bg-opacity-50 rounded-full p-3" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                )}
                
                <Card className="bg-white border border-gray-200 p-6">
                  <CardContent className="p-0">
                    <div className="flex items-center justify-between mb-4">
                      <Linkedin className="w-6 h-6 text-blue-600" />
                    </div>
                    
                    <p className="text-sm text-gray-700 mb-4">{testimonial.text}</p>
                    
                    <div className="flex items-center space-x-3">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={testimonial.avatar} />
                        <AvatarFallback>{testimonial.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold text-sm">{testimonial.author}</h4>
                        <p className="text-xs text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" className="px-8 py-3">
              See Our Wall of Love
            </Button>
          </div>
        </div>
      </section>

      {/* Team Upskilling Section - Full Width */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div className="max-w-3xl">
              <p className="text-sm text-gray-600 font-medium mb-2">SKILL UP, SCALE UP</p>
              <h2 className="text-4xl font-bold mb-4">Upskill your Team; Upscale your Business</h2>
              <p className="text-lg text-gray-600 mb-8">
                Elevate your team's skills to fuel efficiency and ongoing innovation for sustained business growth.
              </p>
              
              <h3 className="text-xl font-semibold mb-8">Why learn with GrowthSchool?</h3>
            </div>
            <div className="flex-shrink-0">
              <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3">
                Upskill Your Team
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {upskillFeatures.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Collaboration Section - Full Width */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-12">Brands in Collaboration</h2>
          
          <div className="grid grid-cols-8 gap-6">
            {brandLogos.map((brand, index) => (
              <div key={index} className={`${brand.color} rounded-lg p-6 flex items-center justify-center h-20`}>
                <span className="font-semibold text-gray-700">{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section - Full Width */}
      <section className="py-16 px-6 bg-teal-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <span className="text-teal-900 font-bold text-lg">G</span>
                </div>
                <span className="font-semibold text-2xl">Growth School</span>
              </div>
              
              <div className="flex items-center space-x-6">
                <Facebook className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer" />
                <Twitter className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer" />
                <Linkedin className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer" />
              </div>
            </div>

            <div className="max-w-md">
              <h3 className="text-xl font-semibold mb-2">Best Kept Secrets ✨</h3>
              <p className="text-gray-200 mb-4 text-sm">
                Be the first to find out about the newest programs, workshops, and community activities - plus industry news, articles, and special reports.
              </p>
              
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg text-gray-900 placeholder-gray-500"
                />
                <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">G</span>
                </div>
                <span className="font-semibold text-lg">Growth School</span>
              </div>
              <p className="text-gray-400">Empowering careers through expert-led programs</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Programs</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Management Consulting</a></li>
                <li><a href="#" className="hover:text-white">Digital Marketing</a></li>
                <li><a href="#" className="hover:text-white">Product Management</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Growth School. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Sticky Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-slate-800 text-white border-t border-slate-700 p-4 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-lg">Management Consulting - Elite</h3>
            <a href="#" className="text-blue-400 hover:text-blue-300 underline text-sm">Looking for your team?</a>
          </div>
          <div className="flex items-center space-x-4">
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">
              Apply Now
            </Button>
            <Button variant="outline" className="border-gray-400 text-white hover:bg-white hover:text-gray-900">
              <ArrowDown className="w-4 h-4 mr-2" />
              Brochure
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom spacing to account for sticky CTA */}
      <div className="h-20"></div>
    </div>
  );
};

export default Index;
