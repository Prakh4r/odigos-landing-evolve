
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-24 hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-4">
                Introducing Odigos Training Platform
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Elevate Your <span className="gradient-text">Workforce Skills</span> With Precision
              </h1>
            </div>
            <p className="text-lg text-gray-600 max-w-lg">
              Role-based, tool-native, hybrid training built specifically for enterprise teams. Boost adoption, increase productivity, and lower support costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-odigos-blue hover:bg-blue-600">
                Request Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-odigos-blue text-odigos-blue hover:bg-blue-50">
                Watch Overview
              </Button>
            </div>
            <div className="pt-8">
              <p className="text-sm text-gray-500 font-medium mb-3">Trusted by leading enterprises</p>
              <div className="flex flex-wrap gap-8 items-center">
                <div className="h-8 w-24 bg-gray-200 rounded opacity-70"></div>
                <div className="h-8 w-32 bg-gray-200 rounded opacity-70"></div>
                <div className="h-8 w-28 bg-gray-200 rounded opacity-70"></div>
                <div className="h-8 w-24 bg-gray-200 rounded opacity-70"></div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10 bg-white rounded-lg shadow-xl p-2 animate-float">
              <div className="aspect-[4/3] bg-odigos-blue/10 rounded overflow-hidden">
                <div className="p-6 text-center flex items-center justify-center h-full">
                  <span className="text-xl font-medium text-odigos-blue">Interactive Dashboard Preview</span>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-64 h-64 bg-blue-100 rounded-full opacity-30 blur-3xl -z-10"></div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-blue-200 rounded-full opacity-30 blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
