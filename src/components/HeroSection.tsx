
import React from 'react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
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
    }
  ];

  return (
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
  );
};

export default HeroSection;
