
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronDown } from "lucide-react";

const KeyOutcomesAndModules = () => {
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

  return (
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
  );
};

export default KeyOutcomesAndModules;
