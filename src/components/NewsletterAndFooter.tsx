
import React from 'react';
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Linkedin } from "lucide-react";

const NewsletterAndFooter = () => {
  return (
    <>
      {/* Newsletter Section */}
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
    </>
  );
};

export default NewsletterAndFooter;
