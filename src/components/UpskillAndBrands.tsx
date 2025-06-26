
import React from 'react';
import { Button } from "@/components/ui/button";

const UpskillAndBrands = () => {
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
    <>
      {/* Team Upskilling Section */}
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

      {/* Brand Collaboration Section */}
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
    </>
  );
};

export default UpskillAndBrands;
