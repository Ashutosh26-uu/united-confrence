import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-indigo-900 text-white dark:bg-gray-800 dark:text-gray-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Conference Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-red-400">U</span><span className="text-blue-400">PHARMORA - 1.0</span> National Conference 2025
            </h3>
            <p className="mb-4 text-indigo-200 dark:text-gray-400">
              Faculty of Pharmacy<br />
              United University Prayagraj<br />
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
              <a href="https://www.linkedin.com/company/united-university-allahabad/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-indigo-200 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/#about" className="text-indigo-200 hover:text-white transition-colors dark:text-gray-400 dark:hover:text-white">About</Link></li>
              <li><Link to="/#dates" className="text-indigo-200 hover:text-white transition-colors dark:text-gray-400 dark:hover:text-white">Important Dates</Link></li>
              <li><Link to="/abstracts" className="text-indigo-200 hover:text-white transition-colors dark:text-gray-400 dark:hover:text-white">Abstracts/ Full Length Paper</Link></li>
              <li><Link to="/registration" className="text-indigo-200 hover:text-white transition-colors dark:text-gray-400 dark:hover:text-white">Registration</Link></li>
              <li><Link to="/program" className="text-indigo-200 hover:text-white transition-colors dark:text-gray-400 dark:hover:text-white">Program</Link></li>
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
                <a 
                  href="mailto:confpharm@uniteduniversity.edu.in?subject=UPHARMORA Conference Inquiry" 
                  className="text-indigo-200 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = 'mailto:confpharm@uniteduniversity.edu.in?subject=UPHARMORA Conference Inquiry';
                  }}
                >
                  confpharm@uniteduniversity.edu.in
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-indigo-800 mt-8 pt-8 text-center">
          <p className="text-indigo-300 mb-2">
            &copy; {currentYear} UPHARMORA - 1.0 National Conference 2025. All rights reserved.
          </p>
          <p className="text-indigo-400 text-sm">
            Created by Ashutosh Mishra (B.tech 2nd year)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;