
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, MessageSquare, Code, Users } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const isEmployeeView = location.pathname.includes('employee') || 
    location.pathname.includes('community') || 
    location.pathname.includes('practice');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <span className="text-2xl font-bold text-odigos-blue">Odigos</span>
              </Link>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {isEmployeeView ? (
                <>
                  <Link to="/employee-dashboard" className={`text-gray-600 hover:text-odigos-blue transition-colors ${location.pathname === '/employee-dashboard' ? 'text-odigos-blue font-medium' : ''}`}>Dashboard</Link>
                  <Link to="/community" className={`text-gray-600 hover:text-odigos-blue transition-colors ${location.pathname === '/community' ? 'text-odigos-blue font-medium' : ''}`}>
                    Community
                  </Link>
                  <Link to="/practice" className={`text-gray-600 hover:text-odigos-blue transition-colors ${location.pathname === '/practice' ? 'text-odigos-blue font-medium' : ''}`}>
                    Practice
                  </Link>
                  <Button variant="outline" className="border-odigos-blue text-odigos-blue hover:bg-odigos-blue hover:text-white transition-colors">
                    Profile
                  </Button>
                  <Button className="bg-odigos-blue hover:bg-blue-600 text-white" asChild>
                    <Link to="/">Log out</Link>
                  </Button>
                </>
              ) : (
                <>
                  <a href="#features" className="text-gray-600 hover:text-odigos-blue transition-colors">Features</a>
                  <a href="#solutions" className="text-gray-600 hover:text-odigos-blue transition-colors">Solutions</a>
                  <a href="#testimonials" className="text-gray-600 hover:text-odigos-blue transition-colors">Testimonials</a>
                  <a href="#pricing" className="text-gray-600 hover:text-odigos-blue transition-colors">Pricing</a>
                  <Button variant="outline" className="border-odigos-blue text-odigos-blue hover:bg-odigos-blue hover:text-white transition-colors" asChild>
                    <Link to="/login">Log in</Link>
                  </Button>
                  <Button className="bg-odigos-blue hover:bg-blue-600 text-white">
                    Get Started
                  </Button>
                </>
              )}
            </div>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-odigos-blue hover:bg-gray-100 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {isEmployeeView ? (
              <>
                <Link to="/employee-dashboard" className={`block px-3 py-2 text-base font-medium ${location.pathname === '/employee-dashboard' ? 'text-odigos-blue' : 'text-gray-600'} hover:text-odigos-blue hover:bg-gray-100 rounded-md`}>
                  Dashboard
                </Link>
                <Link to="/community" className={`block px-3 py-2 text-base font-medium ${location.pathname === '/community' ? 'text-odigos-blue' : 'text-gray-600'} hover:text-odigos-blue hover:bg-gray-100 rounded-md`}>
                  <div className="flex items-center">
                    <Users className="mr-2 h-4 w-4" />
                    Community
                  </div>
                </Link>
                <Link to="/practice" className={`block px-3 py-2 text-base font-medium ${location.pathname === '/practice' ? 'text-odigos-blue' : 'text-gray-600'} hover:text-odigos-blue hover:bg-gray-100 rounded-md`}>
                  <div className="flex items-center">
                    <Code className="mr-2 h-4 w-4" />
                    Practice
                  </div>
                </Link>
                <div className="flex flex-col space-y-2 mt-4 px-3 py-2">
                  <Button variant="outline" className="w-full border-odigos-blue text-odigos-blue">
                    Profile
                  </Button>
                  <Button className="w-full bg-odigos-blue hover:bg-blue-600 text-white" asChild>
                    <Link to="/">Log out</Link>
                  </Button>
                </div>
              </>
            ) : (
              <>
                <a href="#features" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-odigos-blue hover:bg-gray-100 rounded-md">
                  Features
                </a>
                <a href="#solutions" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-odigos-blue hover:bg-gray-100 rounded-md">
                  Solutions
                </a>
                <a href="#testimonials" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-odigos-blue hover:bg-gray-100 rounded-md">
                  Testimonials
                </a>
                <a href="#pricing" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-odigos-blue hover:bg-gray-100 rounded-md">
                  Pricing
                </a>
                <div className="flex flex-col space-y-2 mt-4 px-3 py-2">
                  <Button variant="outline" className="w-full border-odigos-blue text-odigos-blue" asChild>
                    <Link to="/login">Log in</Link>
                  </Button>
                  <Button className="w-full bg-odigos-blue hover:bg-blue-600 text-white">
                    Get Started
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
