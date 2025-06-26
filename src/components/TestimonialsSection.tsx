
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Play, Linkedin } from "lucide-react";

const TestimonialsSection = () => {
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

  return (
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
  );
};

export default TestimonialsSection;
