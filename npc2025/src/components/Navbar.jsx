import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, MapPin, Users, FileText, Ticket, Megaphone, Handshake, Phone, Sun, Moon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: '/', label: 'Home', icon: Calendar },
    { id: '/abstracts', label: 'Abstracts', icon: FileText },
    { id: '/registration', label: 'Registration', icon: Ticket },
    { id: '/program', label: 'Program', icon: Calendar },
    { id: '/speakers', label: 'Speakers', icon: Users },
    { id: '/venue', label: 'Venue', icon: MapPin },
    { id: '/sponsors', label: 'Sponsors', icon: Handshake },
    { id: '/contact', label: 'Contact', icon: Phone },
    { id: '/news', label: 'News', icon: Megaphone },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2 dark:bg-gray-800' : 'bg-white/90 py-4 dark:bg-gray-800/90'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="bg-indigo-600 text-white font-bold text-xl px-3 py-2 rounded">
              NPC 2025
            </div>
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
                        ? 'text-indigo-600 bg-indigo-50 dark:text-indigo-400 dark:bg-gray-700'
                        : 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 dark:text-gray-300 dark:hover:text-indigo-400 dark:hover:bg-gray-700'
                    }`}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {item.label}
                  </Link>
                );
              })}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 transition-colors duration-200 dark:text-gray-300 dark:hover:text-indigo-400 dark:hover:bg-gray-700"
                aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleDarkMode}
              className="p-2 mr-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 transition-colors duration-200 dark:text-gray-300 dark:hover:text-indigo-400 dark:hover:bg-gray-700"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none dark:text-gray-300 dark:hover:text-indigo-400 dark:hover:bg-gray-700"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t dark:bg-gray-800 dark:border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.id}
                  to={item.id}
                  className={`flex items-center px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-200 ${
                    location.pathname === item.id
                      ? 'text-indigo-600 bg-indigo-50 dark:text-indigo-400 dark:bg-gray-700'
                      : 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 dark:text-gray-300 dark:hover:text-indigo-400 dark:hover:bg-gray-700'
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