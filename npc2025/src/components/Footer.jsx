import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Conference Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">National Pharmacy Conference 2025</h3>
            <p className="mb-4 text-indigo-200">
              Department of Pharmacy<br />
              United University<br />
              Uttar Pradesh, India
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-indigo-200 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-indigo-200 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-indigo-200 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-indigo-200 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-indigo-200 hover:text-white transition-colors">About</a></li>
              <li><a href="#dates" className="text-indigo-200 hover:text-white transition-colors">Important Dates</a></li>
              <li><a href="#abstracts" className="text-indigo-200 hover:text-white transition-colors">Abstract Submission</a></li>
              <li><a href="#registration" className="text-indigo-200 hover:text-white transition-colors">Registration</a></li>
              <li><a href="#program" className="text-indigo-200 hover:text-white transition-colors">Program</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-indigo-300" />
                <span className="text-indigo-200">United University, Uttar Pradesh</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-indigo-300" />
                <span className="text-indigo-200">+91 1234567890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-indigo-300" />
                <span className="text-indigo-200">npc2025@university.edu</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-indigo-800 mt-8 pt-8 text-center">
          <p className="text-indigo-300">
            &copy; {currentYear} National Pharmacy Conference 2025. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;