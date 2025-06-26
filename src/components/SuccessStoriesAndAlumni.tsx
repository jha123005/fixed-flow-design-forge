
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";

const SuccessStoriesAndAlumni = () => {
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

  return (
    <>
      {/* Success Stories Section */}
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

      {/* Alumni Companies Section */}
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
    </>
  );
};

export default SuccessStoriesAndAlumni;
