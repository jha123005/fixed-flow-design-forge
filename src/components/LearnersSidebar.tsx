
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const LearnersSidebar = () => {
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
  );
};

export default LearnersSidebar;
