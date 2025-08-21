import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Sparkles, Calendar, MapPin, Users, Award, Clock } from 'lucide-react';

const CONFERENCE_CONFIG = {
  abstractDeadline: '10th October 2025',
  title: 'UPHARMORA - 1.0',
  subtitle: 'National Conference 2025',
  theme: 'Fostering Innovation for a Healthier Tomorrow: Navigating the Future of Pharmaceutical Sciences',
  acronym: 'FIHTNFPS - 2025',
  dates: '7th to 8th November 2025',
  organizer: 'Faculty of Pharmacy',
  institution: 'United University Prayagraj'
};

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const heroRef = useRef(null);
  
  const conferenceDate = new Date('2025-11-07T09:00:00').getTime();
  
  const stats = [
    { number: '500+', label: 'Participants Expected', icon: <Users className="h-6 w-6" /> },
    { number: '50+', label: 'Research Papers', icon: <Award className="h-6 w-6" /> },
    { number: '2', label: 'Days of Innovation', icon: <Calendar className="h-6 w-6" /> }
  ];
  
  useEffect(() => {
    setIsVisible(true);
    
    const statsInterval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    
    const countdownInterval = setInterval(() => {
      const now = new Date().getTime();
      const distance = conferenceDate - now;
      
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);
    
    return () => {
      clearInterval(statsInterval);
      clearInterval(countdownInterval);
    };
  }, [conferenceDate]);
  
  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 pt-20" onMouseMove={handleMouseMove}>
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 opacity-90 transition-all duration-500"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        ></div>
        <div className="absolute inset-0 bg-[url('/images/university-building-bg.jpg')] bg-cover bg-center opacity-20"></div>
        
        {/* Animated Mesh Gradient */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
        
        {/* Interactive Particles */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-40 animate-float-slow"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 2) * 40}%`,
                animationDelay: `${i * 0.5}s`,
                transform: `translate(${mousePosition.x * (0.01 + i * 0.002)}px, ${mousePosition.y * (0.01 + i * 0.002)}px)`
              }}
            ></div>
          ))}
        </div>
      </div>
      
      {/* Main Content */}
      <div className={`relative z-10 text-center text-white px-6 sm:px-8 lg:px-12 xl:px-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Main Title */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-8xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">UPHARMORA - 1.0</span>
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
            {CONFERENCE_CONFIG.subtitle}
          </h2>
        </div>
        
        {/* Theme */}
        <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-4 animate-fade-in-up">
          {CONFERENCE_CONFIG.theme}
        </h3>
        
        <h4 className="text-lg md:text-xl font-bold text-yellow-300 mb-8">
          {CONFERENCE_CONFIG.acronym}
        </h4>
        
        {/* Countdown Timer */}
        <div className="mb-8">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 max-w-4xl mx-auto border border-white/20 hover:bg-white/15 transition-all duration-500">
            <div className="flex items-center justify-center mb-4">
              <Clock className="h-6 w-6 text-yellow-400 mr-2" />
              <h3 className="text-xl font-bold text-white">Conference Starts In</h3>
            </div>
            <div className="grid grid-cols-4 gap-4 text-center">
              <div className="bg-white/20 rounded-2xl p-4">
                <div className="text-3xl font-bold text-white mb-1">{timeLeft.days}</div>
                <div className="text-blue-200 text-sm font-medium">Days</div>
              </div>
              <div className="bg-white/20 rounded-2xl p-4">
                <div className="text-3xl font-bold text-white mb-1">{timeLeft.hours}</div>
                <div className="text-blue-200 text-sm font-medium">Hours</div>
              </div>
              <div className="bg-white/20 rounded-2xl p-4">
                <div className="text-3xl font-bold text-white mb-1">{timeLeft.minutes}</div>
                <div className="text-blue-200 text-sm font-medium">Minutes</div>
              </div>
              <div className="bg-white/20 rounded-2xl p-4">
                <div className="text-3xl font-bold text-white mb-1">{timeLeft.seconds}</div>
                <div className="text-blue-200 text-sm font-medium">Seconds</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Dynamic Stats Counter */}
        <div className="mb-8">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 max-w-md mx-auto border border-white/20 hover:bg-white/15 transition-all duration-500 group">
            <div className="flex items-center justify-center space-x-4">
              <div className="text-blue-400 group-hover:scale-110 transition-transform duration-300">
                {stats[currentStat].icon}
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1 animate-pulse">
                  {stats[currentStat].number}
                </div>
                <div className="text-blue-200 text-sm font-medium">
                  {stats[currentStat].label}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Interactive Info Cards */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer group border border-white/20">
            <Calendar className="h-6 w-6 text-green-400 mx-auto mb-2 group-hover:rotate-12 transition-transform duration-300" />
            <p className="text-green-400 font-semibold">{CONFERENCE_CONFIG.dates}</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer group border border-white/20">
            <div className="bg-red-900 text-white px-4 py-2 rounded-lg mb-2 group-hover:bg-red-800 transition-colors duration-300">
              <p className="font-bold text-sm">ORGANIZED BY</p>
            </div>
            <MapPin className="h-6 w-6 text-blue-400 mx-auto mb-2 group-hover:rotate-12 transition-transform duration-300" />
            <p className="text-blue-400 font-medium">
              {CONFERENCE_CONFIG.organizer}<br/>
              {CONFERENCE_CONFIG.institution}
            </p>
          </div>
          

        </div>
        
        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="relative bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 group overflow-hidden">
            <span className="relative z-10">Register Now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 translate-x-full group-hover:translate-x-0"></div>
          </button>
          <button className="relative border-2 border-white/70 hover:border-white text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:bg-white/10 backdrop-blur-sm group overflow-hidden">
            <span className="relative z-10">Learn More</span>
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        
        {/* Interactive Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer group" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
          <div className="relative">
            <ChevronDown className="h-8 w-8 text-white/70 group-hover:text-white transition-all duration-300 animate-bounce" />
            <div className="absolute inset-0 rounded-full border-2 border-white/30 group-hover:border-white/60 transition-all duration-300 animate-ping"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

// Add these CSS animations to your global CSS file
// @keyframes float {
//   0%, 100% { transform: translateY(0px); }
//   50% { transform: translateY(-20px); }
// }
// @keyframes bounce-slow {
//   0%, 100% { transform: translateY(0); }
//   50% { transform: translateY(-10px); }
// }
// @keyframes fade-in-up {
//   from { opacity: 0; transform: translateY(30px); }
//   to { opacity: 1; transform: translateY(0); }
// }
// .animate-float { animation: float 6s ease-in-out infinite; }
// .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
// .animate-fade-in-up { animation: fade-in-up 1s ease-out; }
