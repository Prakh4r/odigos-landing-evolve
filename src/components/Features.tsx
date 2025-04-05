
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Users, Layout, Briefcase, Database, Globe, Shield } from "lucide-react";

const featureItems = [
  {
    icon: <Users className="h-8 w-8 text-odigos-blue" />,
    title: "Role-Based Learning Paths",
    description: "Customize training experiences based on job roles, responsibilities, and skill levels within your organization."
  },
  {
    icon: <Layout className="h-8 w-8 text-odigos-blue" />,
    title: "Tool-Native Integration",
    description: "Seamlessly embed training within the tools your employees use every day for contextual learning."
  },
  {
    icon: <Briefcase className="h-8 w-8 text-odigos-blue" />,
    title: "Hybrid Delivery Model",
    description: "Combine virtual instruction, self-paced modules, and in-person workshops for comprehensive skill development."
  },
  {
    icon: <Database className="h-8 w-8 text-odigos-blue" />,
    title: "Analytics & Insights",
    description: "Track progress, identify skill gaps, and measure ROI with comprehensive reporting dashboards."
  },
  {
    icon: <Globe className="h-8 w-8 text-odigos-blue" />,
    title: "Global Scalability",
    description: "Support teams across different regions and languages with localized content delivery."
  },
  {
    icon: <Shield className="h-8 w-8 text-odigos-blue" />,
    title: "Enterprise Security",
    description: "Rest easy with SOC 2 compliance, SSO integration, and role-based access controls."
  }
];

const Features = () => {
  return (
    <section id="features" className="section bg-white">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features for Enterprise Training</h2>
        <p className="text-lg text-gray-600">
          Our comprehensive training platform is designed specifically for enterprise organizations looking to upskill their workforce efficiently.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featureItems.map((feature, index) => (
          <Card key={index} className="hover-card border border-gray-100">
            <CardContent className="p-6">
              <div className="mb-4 p-3 bg-blue-50 rounded-lg inline-block">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Features;
