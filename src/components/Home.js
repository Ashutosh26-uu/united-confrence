import React, { useState, useEffect, useRef, useCallback } from 'react';
import './Home.css';
import './EnhancedAnimations.css';
import './InteractiveEffects.js';
import CountdownTimer from './CountdownTimer';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [currentHeadline, setCurrentHeadline] = useState(0);
  const slideInterval = useRef();
  const headlineInterval = useRef();
  const touchThreshold = 50;

  const headlines = [
    " CONFERENCE DATE AND VENUE	7th and 8th November at United University, Rawatpur, Prayagraj",
    " CONFERENCE DATE AND VENUE 7th and 8th November at United University, Rawatpur, Prayagraj",
    " CONFERENCE DATE AND VENUE 7th and 8th November at United University, Rawatpur, Prayagraj"
  ];

  const slides = [
    {
      title: "UPHARMORA - 1.0",
      subtitle: "NATIONAL CONFRENCE (FIHTNFPS - 2025) ",
      description: "Fostering Innovation for a Healthier Tomorrow: Navigating the Future of Pharmaceutical Sciences",
      theme: "7-8 November 2025",
      organizer: "FACULTY OF PHARMACY, UNITED UNIVERSITY PRAYAGRAJ",
      backgroundImage: "/images/uu2.png",
      textColor: "#ffffff"
    },
    {
      title: "UPHARMORA - 1.0",
      subtitle: "NATIONAL CONFRENCE (FIHTNFPS - 2025) ",
      description: "Fostering Innovation for a Healthier Tomorrow: Navigating the Future of Pharmaceutical Sciences",
      theme: " 7 - 8 November 2025",
      organizer: "FACULTY OF PHARMACY, UNITED UNIVERSITY PRAYAGRAJ",
      backgroundImage: "/images/uu1.png"
    }
  ];

  // Rotate headlines
  useEffect(() => {
    headlineInterval.current = setInterval(() => {
      setCurrentHeadline(prev => (prev + 1) % headlines.length);
    }, 4000);

    return () => clearInterval(headlineInterval.current);
  }, [headlines.length]);

  const stopSlideShow = useCallback(() => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  }, []);

  const startSlideShow = useCallback(() => {
    stopSlideShow();
    slideInterval.current = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);
  }, [stopSlideShow, slides.length]);

  // Touch event handlers
  const handleTouchStart = useCallback((e) => {
    setTouchStart(e.targetTouches[0].clientX);
  }, []);

  const handleTouchMove = useCallback((e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (touchStart - touchEnd > touchThreshold) {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    } else if (touchEnd - touchStart > touchThreshold) {
      setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
    }
  }, [touchStart, touchEnd, slides.length, touchThreshold]);

  // Set up and clean up interval
  useEffect(() => {
    startSlideShow();
    return () => {
      stopSlideShow();
      if (headlineInterval.current) clearInterval(headlineInterval.current);
    };
  }, [startSlideShow, stopSlideShow]);

  return (
    <div className="home-container">
      {/* Welcome Section with Slideshow */}
      <section className="welcome-section">
        <div className="slideshow-container">
          <div
            className="slideshow"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`slide ${index === currentSlide ? 'active' : ''}`}
                style={{
                  backgroundImage: `url(${slide.backgroundImage})`,
                  color: slide.textColor || '#000'
                }}
              >
                <div className="slide-overlay"></div>
                <div className="slide-content">
                  <h1 className="slide-title">{slide.title}</h1>
                  <h2 className="slide-subtitle">{slide.subtitle}</h2>

                  {/* Headline Rotator */}
                  <div className="headline-rotator">
                    <div className="headline-container">
                      {headlines.map((headline, i) => (
                        <div
                          key={i}
                          className={`headline ${i === currentHeadline ? 'active' : ''}`}
                        >
                          {headline}
                        </div>
                      ))}
                    </div>
                  </div>

                  <p className="slide-description">{slide.description}</p>
                  <p className="slide-theme">{slide.theme}</p>
                  <p className="slide-organizer">{slide.organizer}</p>

                  {/* Countdown Timer */}
                  <CountdownTimer />
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            className="control-btn prev"
            onClick={() => setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length)}
            aria-label="Previous slide"
          >
            &lt;
          </button>
          <button
            className="control-btn next"
            onClick={() => setCurrentSlide(prev => (prev + 1) % slides.length)}
            aria-label="Next slide"
          >
            &gt;
          </button>

          {/* Slide Indicators */}
          <div className="slide-indicators">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-content">
          <h2 className="section-title">About United University</h2>
          <div className="content-text">
            <p>Prayagraj, formerly known as Allahabad, is one of India's most ancient and sacred cities, located in the state of Uttar Pradesh. Known as the "City of Prime Ministers" and "Sangam City," Prayagraj holds immense historical, cultural, and spiritual significance. The city is famous for hosting the world's largest religious gathering, the Kumbh Mela, which attracts millions of pilgrims from around the globe.</p>

            <p>Strategically located at the confluence of three sacred rivers - Ganga, Yamuna, and the mythical Saraswati - Prayagraj has been a center of learning and culture for centuries. The city is home to the prestigious University of Allahabad, one of India's oldest and most renowned educational institutions (Which is also known as "Oxford of East), established in 1887. With its rich heritage, magnificent architecture, and spiritual atmosphere, Prayagraj offers a perfect blend of tradition and modernity.</p>

            <p>The city has produced several notable personalities including three Prime Ministers of India - Jawaharlal Nehru, Indira Gandhi, and Rajiv Gandhi. Today, Prayagraj continues to be an important educational, administrative, and cultural hub, making it an ideal location for academic conferences and scholarly gatherings.</p>
          </div>
        </div>
      </section>

      {/* Faculty of Pharmacy Section */}
      <section className="faculty-pharmacy-section">
        <div className="faculty-content">
          <h2 className="section-title gradient-title">ABOUT FACULTY OF PHARMACY</h2>
          <div className="faculty-info-card">
            <div className="content-text">
              <p>The Faculty of Pharmacy at United University stands as a beacon of excellence in pharmaceutical education and research. Established with a vision to nurture competent pharmacy professionals, the faculty is committed to providing world-class education that bridges the gap between theoretical knowledge and practical application in the pharmaceutical sciences.</p>

              <p>Our comprehensive curriculum encompasses all aspects of pharmaceutical sciences including Pharmaceutics, Pharmaceutical Chemistry, Pharmacology, Pharmacognosy, and Clinical Pharmacy. The faculty offers Bachelor of Pharmacy (B.Pharm) and Diploma in Pharmacy (D.Pharm) programs, designed to meet the evolving needs of the pharmaceutical industry and healthcare sector.</p>

              <p>Equipped with state-of-the-art laboratories, modern instrumentation, and advanced research facilities, the faculty provides students with hands-on experience in drug discovery, formulation development, quality control, and clinical research. Our experienced faculty members, with their diverse expertise and industry connections, ensure that students receive comprehensive training that prepares them for successful careers in pharmaceutical manufacturing, research and development, regulatory affairs, clinical practice, and academia.</p>

              <p>The faculty is dedicated to fostering innovation, research excellence, and ethical practice in pharmaceutical sciences, contributing to the advancement of healthcare and the betterment of society through quality pharmaceutical education and research initiatives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Conference Section */}
      <section className="conference-section">
        <div className="conference-content">
          <h2 className="section-title gradient-title">ABOUT THE CONFERENCE</h2>
          <div className="conference-info-card">
            <div className="conference-header">
              <h3 className="conference-name">FIHTNFPS - 2025</h3>
            </div>
            <div className="content-text">
              <p>The UPHARMORA - 1.0 National Conference 2025 with the theme "Fostering Innovation for a Healthier Tomorrow: Navigating the Future of Pharmaceutical Sciences" represents a landmark initiative by the Faculty of Pharmacy, United University Prayagraj. This pioneering conference aims to create a comprehensive platform for knowledge exchange, research collaboration, and professional networking in the pharmaceutical sciences domain.</p>

              <p>Scheduled for 7th and 8th November 2025, this two-day national conference will bring together distinguished academicians, researchers, industry professionals, healthcare practitioners, and students from across the country. The conference will feature keynote addresses by renowned experts, technical sessions covering cutting-edge research, poster presentations, panel discussions, and interactive workshops designed to explore the latest advancements and future directions in pharmaceutical sciences.</p>

              <p>Key focus areas include drug discovery and development, pharmaceutical technology, clinical pharmacy, regulatory affairs, pharmacovigilance, nanotechnology in drug delivery, artificial intelligence in pharmaceutical research, and sustainable pharmaceutical practices. The conference will also emphasize the role of pharmacy professionals in addressing contemporary healthcare challenges and promoting public health initiatives.</p>

              <p>This inaugural conference serves as a catalyst for fostering innovation, encouraging research collaboration, and building a strong network of pharmaceutical professionals committed to advancing healthcare outcomes and contributing to a healthier tomorrow for society.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;