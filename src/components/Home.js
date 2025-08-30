import React, { useState, useEffect, useRef, useCallback } from 'react';
import './Home.css';
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
    "Fostering Innovation in Pharmaceutical Sciences",
    "Join Leading Experts in Healthcare Research",
    "Shaping the Future of Medicine"
  ];

  const slides = [
    {
      title: "UNITED UNIVERSITY",
      subtitle: "NATIONAL CONFERENCE",
      description: "Fostering Innovation for a Healthier Tomorrow: Navigating the Future of Pharmaceutical Sciences",
      theme: "FIHTNFPS - 2025",
      organizer: "FACULTY OF PHARMACY, UNITED UNIVERSITY PRAYAGRAJ",
      backgroundImage: "/images/uu2.png",
      textColor: "#ffffff"
    },
    {
      title: "UNITED UNIVERSITY",
      subtitle: "EXCELLENCE IN EDUCATION",
      description: "A dynamic and emerging multidisciplinary institution, established under the Private University Act",
      theme: "Promoting Excellence in Education, Research, and Training",
      organizer: "ARTS, SCIENCES, COMMERCE, ENGINEERING, MANAGEMENT, AGRICULTURE MEDICAL SCIENCE AND MASS COMMUNICATION",
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
          <h2 className="section-title">Welcome to United University</h2>
          <div className="content-text">
            <p>United University is a dynamic and emerging multidisciplinary institution, established under the Private University Act and duly approved by the State Government.</p>
            <p>The university has been founded with a vision to promote excellence in education, research, and training across a wide range of academic disciplines including Arts, Sciences, Commerce, Engineering, Management, Agriculture, MEDICAL SCIENCE, and Mass Communication.</p>
            <p>Committed to academic innovation and holistic development, United University strives to be at the forefront of learning, teaching, and research.</p>
            <p>With a strong emphasis on quality education and industry relevance, the university aims to nurture skilled professionals who will contribute meaningfully to national growth and global progress.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;