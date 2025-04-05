
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

const Pricing = () => {
  const plans = [
    {
      name: "Team",
      price: "$39",
      description: "Perfect for smaller teams and departments",
      features: [
        "Up to 50 active users",
        "Role-based learning paths",
        "Basic analytics and reporting",
        "Email support",
        "Basic SSO integration"
      ],
      isPopular: false,
      ctaText: "Start Free Trial"
    },
    {
      name: "Business",
      price: "$99",
      description: "Ideal for growing organizations",
      features: [
        "Up to 250 active users",
        "Advanced role customization",
        "Custom learning paths",
        "Advanced analytics dashboard",
        "Priority support",
        "Full SSO & SCIM integration"
      ],
      isPopular: true,
      ctaText: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large-scale deployment",
      features: [
        "Unlimited users",
        "Dedicated success manager",
        "Custom integrations",
        "White-labeling options",
        "24/7 premium support",
        "On-premise deployment options"
      ],
      isPopular: false,
      ctaText: "Contact Sales"
    }
  ];

  return (
    <section id="pricing" className="section bg-gray-50">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-4">
          Simple Pricing
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Plans for Every Enterprise</h2>
        <p className="text-lg text-gray-600">
          Choose the plan that works best for your organization's size and needs.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <Card key={index} className={`relative ${plan.isPopular ? 'border-odigos-blue shadow-lg' : 'border-gray-200'}`}>
            {plan.isPopular && (
              <div className="absolute -top-4 inset-x-0 flex justify-center">
                <span className="bg-odigos-blue text-white text-sm font-medium px-3 py-1 rounded-full">
                  Most Popular
                </span>
              </div>
            )}
            <CardHeader className="text-center pt-8">
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-2">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-gray-500 ml-1">/user/month</span>}
              </div>
              <p className="text-gray-600">{plan.description}</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <div className="flex-shrink-0 p-1 bg-green-100 rounded-full mr-3">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                className={`w-full ${plan.isPopular ? 'bg-odigos-blue hover:bg-blue-600' : 'bg-gray-800 hover:bg-gray-700'}`}
              >
                {plan.ctaText}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-gray-600 mb-4">
          All plans include a 14-day free trial. No credit card required.
        </p>
        <a href="#" className="text-odigos-blue font-medium hover:underline">
          View full plan comparison →
        </a>
      </div>
    </section>
  );
};

export default Pricing;
