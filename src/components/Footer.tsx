
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Platform",
      links: ["Features", "Solutions", "Integrations", "Enterprise", "Security"]
    },
    {
      title: "Company",
      links: ["About Us", "Customers", "Careers", "Blog", "Partners"]
    },
    {
      title: "Resources",
      links: ["Documentation", "Guides", "API", "Community", "Status"]
    },
    {
      title: "Legal",
      links: ["Privacy", "Terms", "Security", "Cookies"]
    }
  ];

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-8">
          <div className="col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-odigos-blue">Odigos</span>
            </div>
            <p className="text-gray-600 mb-4 max-w-xs">
              Role-based, tool-native, hybrid training platform for enterprise teams.
            </p>
            <div className="flex space-x-4">
              {["Twitter", "LinkedIn", "Facebook", "GitHub"].map((social) => (
                <a key={social} href="#" className="text-gray-400 hover:text-odigos-blue">
                  {social}
                </a>
              ))}
            </div>
          </div>
          
          {footerLinks.map((category) => (
            <div key={category.title}>
              <h3 className="font-semibold text-gray-900 mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-500 hover:text-odigos-blue">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Odigos, Inc. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-odigos-blue text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-odigos-blue text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-odigos-blue text-sm">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
