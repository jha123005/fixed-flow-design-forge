import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronDown, ChevronUp, ArrowDown, ArrowUp } from "lucide-react";

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
