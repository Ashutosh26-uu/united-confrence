import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, MapPin, Users, FileText, Ticket, Megaphone, Handshake, Phone, Sun, Moon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { id: '/', label: 'Home', icon: Calendar },
  { id: '/abstracts', label: 'Abstracts', icon: FileText },
  { id: '/registration', label: 'Registration', icon: Ticket },
  { id: '/program', label: 'Program', icon: Calendar },
  { id: '/speakers', label: 'Speakers', icon: Users },
  { id: '/venue', label: 'Venue', icon: MapPin },
  { id: '/sponsors', label: 'Sponsors', icon: Handshake },
  { id: '/contact', label: 'Contact', icon: Phone },
];

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const DarkModeToggle = ({ className = "" }) => (
    <button
      onClick={toggleDarkMode}
      className={`p-2 rounded-md text-white hover:text-yellow-400 hover:bg-gray-700 transition-colors duration-200 ${className}`}
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 10);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black shadow-lg py-2' : 'bg-black py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/images/united-university-logo.png" 
                alt="United University" 
                className="h-12 w-20 object-contain mr-3"
                onError={(e) => {
                  e.target.outerHTML = '<div class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-3"><span class="text-white font-bold text-xs">UU</span></div>';
                }}
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.id}
                    to={item.id}
                    className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      location.pathname === item.id
                        ? 'text-yellow-400 bg-gray-700'
                        : 'text-white hover:text-yellow-400 hover:bg-gray-700'
                    }`}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {item.label}
                  </Link>
                );
              })}
              <DarkModeToggle />
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <DarkModeToggle className="mr-2" />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-yellow-400 hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.id}
                  to={item.id}
                  className={`flex items-center px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-200 ${
                    location.pathname === item.id
                      ? 'text-yellow-400 bg-gray-700'
                      : 'text-white hover:text-yellow-400 hover:bg-gray-700'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;