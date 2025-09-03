import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false); // Close mobile menu after click
  };

  // Track scroll position and active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      // Determine active section - updated sequence
      const sections = ['home', 'key-areas', 'important-dates', 'papers', 'registration', 'venue', 'speakers', 'organizing-committee', 'contact'];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.nav-container')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo" onClick={() => scrollToSection('home')}>
          <img src="/images/uulogo1.png" alt="United university confrence Logo" className="logo-image" />
          <h2 style={{ whiteSpace: 'nowrap' }}>UPHARMORA 1.0</h2>
        </div>
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <div className="nav-left">
            <a
              href="#home"
              className={activeSection === 'home' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
            >
              Home
            </a>
            <a
              href="#key-areas"
              className={activeSection === 'key-areas' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('key-areas'); }}
            >
              Key Areas
            </a>
            <a
              href="#important-dates"
              className={activeSection === 'important-dates' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('important-dates'); }}
            >
              Dates
            </a>
          </div>
          <div className="nav-center">
            <a
              href="#papers"
              className={activeSection === 'papers' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('papers'); }}
            >
              Papers
            </a>
            <a
              href="#registration"
              className={activeSection === 'registration' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('registration'); }}
            >
              Registration
            </a>
            <a
              href="#venue"
              className={activeSection === 'venue' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('venue'); }}
            >
              Venue
            </a>
          </div>
          <div className="nav-right">
            <a
              href="#speakers"
              className={activeSection === 'speakers' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('speakers'); }}
            >
              Speakers
            </a>
            <a
              href="#organizing-committee"
              className={activeSection === 'organizing-committee' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('organizing-committee'); }}
            >
              Committee
            </a>
            <a
              href="#contact"
              className={activeSection === 'contact' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
            >
              Contact
            </a>
          </div>
        </nav>
        <div
          className={`menu-toggle ${isMenuOpen ? 'menu-open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;