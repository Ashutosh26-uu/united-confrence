import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

const Hero = () => {
  // Conference date (example: March 15-17, 2025)
  const conferenceDate = new Date('2025-03-15T00:00:00');
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = conferenceDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };
    
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <div className="relative bg-gradient-to-r from-indigo-700 to-purple-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              National Pharmacy Conference 2025
            </h1>
            <p className="text-xl md:text-2xl mb-2 text-indigo-100">
              Advancing Pharmaceutical Sciences for Better Healthcare
            </p>
            <p className="text-lg mb-8 text-indigo-200">
              Department of Pharmacy, United University
            </p>
            
            <div className="flex flex-wrap gap-6 mb-10">
              <div className="flex items-center">
                <Calendar className="h-6 w-6 mr-2 text-indigo-200" />
                <span>March 15-17, 2025</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 mr-2 text-indigo-200" />
                <span>United University, Uttar Pradesh</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-indigo-700 hover:bg-indigo-100 font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105">
                Register Now
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-indigo-700 font-bold py-3 px-8 rounded-lg transition duration-300">
                Download Brochure
              </button>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Countdown to Conference</h2>
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-white/20 rounded-lg p-4 text-center">
                <div className="text-3xl md:text-4xl font-bold">{timeLeft.days}</div>
                <div className="text-sm mt-2">Days</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4 text-center">
                <div className="text-3xl md:text-4xl font-bold">{timeLeft.hours}</div>
                <div className="text-sm mt-2">Hours</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4 text-center">
                <div className="text-3xl md:text-4xl font-bold">{timeLeft.minutes}</div>
                <div className="text-sm mt-2">Minutes</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4 text-center">
                <div className="text-3xl md:text-4xl font-bold">{timeLeft.seconds}</div>
                <div className="text-sm mt-2">Seconds</div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Conference Theme</h3>
              <p className="text-indigo-100">
                "Innovative Approaches in Pharmaceutical Research and Patient Care: Bridging Science and Practice"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;