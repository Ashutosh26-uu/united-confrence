import React, { useState, useEffect, useRef, useCallback } from 'react';
import './Home.css';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const slideInterval = useRef();
  const touchThreshold = 50;

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

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  }, [slides.length]);

  const stopSlideShow = useCallback(() => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  }, []);

  const startSlideShow = useCallback(() => {
    stopSlideShow();
    slideInterval.current = setInterval(() => {
      nextSlide();
    }, 3000);
  }, [nextSlide, stopSlideShow, slides.length]);

  // Touch event handlers
  const handleTouchStart = useCallback((e) => {
    setTouchStart(e.targetTouches[0].clientX);
  }, []);

  const handleTouchMove = useCallback((e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (touchStart - touchEnd > touchThreshold) {
      nextSlide();
    } else if (touchEnd - touchStart > touchThreshold) {
      setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
    }
  }, [nextSlide, touchEnd, touchStart]);

  // Set up and clean up interval
  useEffect(() => {
    startSlideShow();
    return () => stopSlideShow();
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
                  color: slide.textColor || '#000',
                }}
              >
                <div className="slide-overlay"></div>
                <div className="slide-content">
                  <h1 className="slide-title">{slide.title}</h1>
                  <h2 className="slide-subtitle">{slide.subtitle}</h2>
                  <p className="slide-description">{slide.description}</p>
                  <p className="slide-theme">{slide.theme}</p>
                  <p className="slide-organizer">{slide.organizer}</p>
                  {slide.hotels && (
                    <div className="slide-hotels">
                      <h3>Recommended Hotels:</h3>
                      <ul>
                        {slide.hotels.map((hotel, index) => (
                          <li key={index}>{hotel}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Slide Indicators */}
          <div className="slide-indicators">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* University Section */}
      <section className="university-section">
        <div className="content-container">
          <h2 className="section-title">Welcome to United University</h2>
          <div className="content-text">
            <p>United University is a dynamic and emerging multidisciplinary institution, established under the Private University Act and duly approved by the State Government.</p>
            <p>The university has been founded with a vision to promote excellence in education, research, and training across a wide range of academic disciplines including Arts, Sciences, Commerce,<b> Engineering</b>, Management, <b>Agriculture</b>,<b>MEDICAL SCIENCE</b>, and Mass Communication.</p>
            <p>Committed to academic innovation and holistic development, United University strives to be at the forefront of learning, teaching, and research.</p>
            <p>With a strong emphasis on quality education and industry relevance, the university aims to nurture skilled professionals who will contribute meaningfully to national growth and global progress.</p>
          </div>
        </div>
      </section>

      {/* About the Conference Section */}
      <section className="conference-section">
        <div className="content-container">
          <h2 className="section-title">About the Conference</h2>
          <div className="content-text">
            <p>We are delighted to extend a warm welcome to all participants of the "National Conference on Fostering Innovation for a Healthier Tomorrow: Navigating the Future of Pharmaceutical Sciences (FIHTNFPS-2025)" organized by the Faculty of Pharmacy, United University, Prayagraj. This prestigious event is scheduled for <strong>December 20-21, 2025</strong>, and will be held at the university campus.</p>

            <p>This conference serves as a dynamic platform for academicians, researchers, scientists, industry professionals, and students to converge, exchange knowledge, and explore the latest advancements in pharmaceutical sciences. The event will feature a series of engaging sessions, including keynote addresses, plenary lectures, oral and poster presentations, and interactive panel discussions.</p>

            <div className="conference-highlights">
              <h3>Conference Highlights:</h3>
              <ul>
                <li>Keynote addresses by eminent personalities from academia and industry</li>
                <li>Technical sessions on cutting-edge research in pharmaceutical sciences</li>
                <li>Poster presentations showcasing innovative research work</li>
                <li>Panel discussions on emerging trends and challenges in the pharmaceutical sector</li>
                <li>Networking opportunities with peers and experts in the field</li>
              </ul>
            </div>

            <div className="important-dates">
              <h3>Important Dates:</h3>
              <ul>
                <li><strong>Abstract Submission Deadline:</strong> November 30, 2025</li>
                <li><strong>Notification of Acceptance:</strong> December 5, 2025</li>
                <li><strong>Early Bird Registration:</strong> December 10, 2025</li>
                <li><strong>Conference Dates:</strong> December 20-21, 2025</li>
              </ul>
            </div>

            <p>We look forward to your active participation in making FIHTNFPS-2025 a grand success. Join us in Prayagraj for an enriching academic experience and an opportunity to contribute to the advancement of pharmaceutical sciences.</p>
          </div>
        </div>
      </section>

      {/* Department of Pharmacy Section */}
      <section className="department-section">
        <div className="content-container">
          <h2 className="section-title">Department of Pharmacy</h2>
          <div className="content-text">
            <p>Established in <strong>2023</strong>, the <strong>Faculty of Pharmacy at United University</strong> proudly offers <strong>Bachelor of Pharmacy (B.Pharm)</strong> and <strong>Diploma in Pharmacy (D.Pharm)</strong> programs with annual intakes of <strong>100</strong> and <strong>60</strong> students, respectively.</p>

            <p>These programs are meticulously designed to foster academic excellence, practical proficiency, and industry readiness.</p>

            <p>Our graduates are well-prepared for dynamic career paths across <strong>pharmaceutical manufacturing, quality assurance, marketing, regulatory affairs, research and development, healthcare institutions</strong>, and prestigious government sectors such as the <strong>Food and Drug Administration</strong>.</p>

            <p>With the growing demand for skilled pharmacy professionals, our mission is to bridge the gap between industry and academia through cutting-edge education and hands-on training.</p>

            <p>The Faculty is equipped with <strong>state-of-the-art laboratories, in the well Pharmacy building of United University (PCL) guidelines, featuring modern instrumentation, advanced simulation software, and digital learning tools</strong>.</p>

            <p>This infrastructure ensures our students gain real-time industry exposure within an academic setting.</p>

            <p>Our biggest strength lies in our highly qualified, dedicated faculty and staff, who are passionate about mentoring students and nurturing the next generation of pharmacy professionals.</p>

            <p>Recognized for our academic integrity and industry connections, we are dedicated to developing <strong>competent, ethical, and innovative leaders</strong> in the field of pharmaceutical sciences.</p>
          </div>
        </div>
      </section>

      {/* About Prayagraj Section */}
      <section className="about-prayagraj">
        <div className="content-container">
          <h2 className="section-title">About Prayagraj</h2>
          <div className="content-text">
            <p>Prayagraj, the city of confluence, is a major pilgrimage center and hosts the Kumbh Mela, the world's largest religious gathering.</p>

            <p>One of India's most ancient and sacred cities, Prayagraj is known as Sangam City, famous for its rich heritage, magnificent architecture, and spiritual atmosphere.</p>

            <p>The city is situated at the confluence of the Ganga, Yamuna, and Saraswati rivers, making it a unique and sacred destination for millions of devotees and tourists alike.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;