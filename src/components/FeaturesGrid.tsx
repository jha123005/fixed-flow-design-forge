
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const FeaturesGrid = () => {
  const companies = [
    "Swiggy", "Zoho", "Walmart", "Ola", "Uber", "Philips"
  ];

  return (
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
  );
};

export default FeaturesGrid;
