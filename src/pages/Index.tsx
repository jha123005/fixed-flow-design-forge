
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowDown } from "lucide-react";

import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import LearnersSidebar from '@/components/LearnersSidebar';
import FeaturesGrid from '@/components/FeaturesGrid';
import KeyOutcomesAndModules from '@/components/KeyOutcomesAndModules';
import SuccessStoriesAndAlumni from '@/components/SuccessStoriesAndAlumni';
import TestimonialsSection from '@/components/TestimonialsSection';
import UpskillAndBrands from '@/components/UpskillAndBrands';
import NewsletterAndFooter from '@/components/NewsletterAndFooter';

const Index = () => {
  const learners = [
    { name: "Flipkart", logo: "https://upload.wikimedia.org/wikipedia/en/7/7a/Flipkart_logo.png" },
    { name: "Walmart", logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg" },
    { name: "PhonePe", logo: "https://upload.wikimedia.org/wikipedia/commons/0/09/PhonePe_Logo.png" },
    { name: "Vivo", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Vivo_logo_2019.svg" },
    { name: "ShareChat", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/ShareChat_logo.png" },
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" }
  ];

  const benefits = [
    "Stay ahead in your field by mastering industry relevant skills through our online sessions",
    "Dive into real challenges from today's businesses, gaining hands-on experience",
    "Tap into a wealth of career opportunities through our established network"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <LearnersSidebar />
      <FeaturesGrid />

      {/* Two Column Layout Container */}
      <div className="flex max-w-7xl mx-auto">
        {/* Left Side - Main Content (Half Width) */}
        <KeyOutcomesAndModules />

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

      <SuccessStoriesAndAlumni />
      <TestimonialsSection />
      <UpskillAndBrands />
      <NewsletterAndFooter />

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
