
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "Odigos has revolutionized how we approach employee training. The role-based approach ensures everyone gets exactly what they need, when they need it.",
    name: "Sarah Johnson",
    title: "Chief Learning Officer",
    company: "Global Financial Corp"
  },
  {
    quote: "The analytics capabilities alone have saved us countless hours in tracking training effectiveness. We've seen a 32% improvement in tool adoption since implementing Odigos.",
    name: "Michael Chen",
    title: "VP of Technology",
    company: "NextGen Retail"
  },
  {
    quote: "What sets Odigos apart is how seamlessly it integrates with our existing tools. Employees learn within their workflow, which dramatically improves knowledge retention.",
    name: "Alexandra Rodriguez",
    title: "Director of People Development",
    company: "Innovate Health Systems"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section bg-white">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-4">
          Customer Success Stories
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Industry Leaders</h2>
        <p className="text-lg text-gray-600">
          See how leading enterprises are transforming their training approach with Odigos.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="hover-card border border-gray-100">
            <CardContent className="p-6">
              <div className="mb-6">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.33333 20H4L8 12H5.33333L2.66667 17.3333V12H0V20H4L0 28H2.66667L9.33333 20ZM23.3333 20H18L22 12H19.3333L16.6667 17.3333V12H14V20H18L14 28H16.6667L23.3333 20Z" fill="#0EA5E9"/>
                </svg>
              </div>
              <p className="text-gray-700 mb-6">{testimonial.quote}</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.title}, {testimonial.company}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <a href="#" className="text-odigos-blue font-medium hover:underline">
          View more customer stories →
        </a>
      </div>
    </section>
  );
};

export default Testimonials;
