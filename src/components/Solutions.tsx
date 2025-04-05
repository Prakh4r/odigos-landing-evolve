
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Solutions = () => {
  return (
    <section id="solutions" className="section bg-gray-50">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <div className="rounded-xl bg-white p-1 shadow-xl">
            <div className="aspect-video bg-odigos-blue/10 rounded-lg p-4 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="bg-white p-4 rounded shadow-sm">
                  <div className="h-4 w-24 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 w-32 bg-blue-200 rounded"></div>
                </div>
                <div className="bg-white p-4 rounded shadow-sm">
                  <div className="h-4 w-20 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 w-28 bg-green-200 rounded"></div>
                </div>
                <div className="bg-white p-4 rounded shadow-sm">
                  <div className="h-4 w-24 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 w-20 bg-yellow-200 rounded"></div>
                </div>
                <div className="bg-white p-4 rounded shadow-sm">
                  <div className="h-4 w-16 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 w-24 bg-red-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="order-1 md:order-2">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-4">
            For Enterprise Teams
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transform How Your Teams Learn and Grow
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Odigos helps Fortune 500 companies implement effective training strategies that improve tool adoption, increase productivity, and reduce support costs.
          </p>
          
          <div className="space-y-4 mb-8">
            {[
              "Reduce onboarding time by up to 40%",
              "Increase tool adoption rates across departments",
              "Lower support tickets by providing just-in-time learning",
              "Scale training globally with consistent quality"
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 p-1 bg-green-100 rounded-full mr-3">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>
          
          <Button className="bg-odigos-blue hover:bg-blue-600">
            View Enterprise Solutions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
