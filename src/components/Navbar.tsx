
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  return (
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
  );
};

export default Navbar;
