import React, { useState, useEffect, useRef } from 'react';
import { Zap, Users, BookOpen, Award, TrendingUp, Globe } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const sectionRef = useRef(null);
  
  const features = [
    { icon: <TrendingUp className="h-8 w-8" />, title: 'Innovation', desc: 'Cutting-edge research', color: 'from-blue-500 to-cyan-500' },
    { icon: <Globe className="h-8 w-8" />, title: 'Global Impact', desc: 'Worldwide collaboration', color: 'from-green-500 to-emerald-500' },
    { icon: <Award className="h-8 w-8" />, title: 'Future Vision', desc: 'Tomorrow\'s solutions', color: 'from-purple-500 to-pink-500' }
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);


  return (
    <section ref={sectionRef} id="about" className="pt-24 pb-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-indigo-900 relative overflow-hidden">
      {/* Professional Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)',
          backgroundSize: '200px 200px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className={`text-center mb-16 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">About the Conference</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto"></div>
        </div>

        {/* Interactive Feature Cards */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`relative bg-gradient-to-br ${feature.color} p-6 rounded-2xl text-white cursor-pointer transform transition-all duration-500 hover:scale-105 hover:rotate-2 animate-card-float group`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-white/90">{feature.desc}</p>
              </div>
              <div className={`absolute inset-0 bg-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-morphing`}></div>
            </div>
          ))}
        </div>
        
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold mb-6 transition-colors duration-300">
              <span className="text-red-500 animate-text-shimmer">U</span><span className="text-blue-600 animate-text-shimmer">PHARMORA - 1.0</span> National Conference 2025
            </h3>
            
            <div className="space-y-4">
              <div className="relative group">
                <div className="glass-effect rounded-xl p-6 hover-lift transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur"></div>
                  <p className="relative text-gray-700 dark:text-gray-300 leading-relaxed">
                    <strong>UPHARMORA - 1.0</strong> aims to bring together leading academicians, researchers, healthcare professionals and 
                    industry experts to explore transformative ideas and technological advancements shaping 
                    the future of pharmaceutical sciences. In an era marked by rapid scientific progress and 
                    global health challenges, the pharmaceutical sector stands at a crucial intersection of 
                    innovation and responsibility.
                  </p>
                </div>
              </div>
              
              <div className="relative group">
                <div className="glass-effect rounded-xl p-6 hover-lift transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur"></div>
                  <p className="relative text-gray-700 dark:text-gray-300 leading-relaxed">
                    This conference provides a <em className="text-indigo-600 font-semibold">dynamic platform</em> to share 
                    cutting-edge research, foster interdisciplinary collaborations, and promote sustainable 
                    solutions that enhance healthcare delivery and drug development. Through keynote addresses, 
                    plenary sessions, panel discussions, poster presentations, and networking forums, participants 
                    will gain valuable insights into emerging trends and technologies.
                  </p>
                </div>
              </div>
              
              <div className="relative group">
                <div className="glass-effect rounded-xl p-6 hover-lift transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur"></div>
                  <p className="relative text-gray-700 dark:text-gray-300 leading-relaxed">
                    <strong className="text-purple-600">Join us</strong> in this collaborative journey as we navigate the future of pharmaceutical 
                    sciences — one innovation at a time — to build a healthier, more resilient tomorrow. 
                    Together, we will revolutionize the pharmaceutical landscape through innovation and collaboration.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <h3 className="relative text-3xl font-bold mb-6 flex items-center">
                <Award className="h-8 w-8 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                Conference Theme
              </h3>
              <p className="relative text-2xl mb-4 font-semibold group-hover:text-yellow-100 transition-colors duration-300">
                "Fostering Innovation for a Healthier Tomorrow: Navigating the Future of Pharmaceutical Sciences"
              </p>
              <p className="relative text-xl mb-6 font-bold text-yellow-300 animate-pulse">
                FIHTNFPS - 2025
              </p>

            </div>
          </div>
        </div>

        <div className={`mt-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass-effect rounded-3xl shadow-2xl p-8 sm:p-10 lg:p-12 hover:shadow-3xl transition-all duration-500">
            <h3 className="text-3xl font-bold gradient-text mb-8 text-center flex items-center justify-center">
              <Users className="h-8 w-8 mr-3" />
              About United University
              <Users className="h-8 w-8 ml-3" />
            </h3>
            
            {/* University Campus Image with Enhanced Presentation */}
            <div className="mb-8 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl group relative">
                <img 
                  src="/images/united-university-campus.jpg" 
                  alt="United University Campus - Modern Academic Building" 
                  className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.target.src = '/images/image1.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass-effect rounded-2xl p-4">
                    <h4 className="text-white font-bold text-xl mb-2">United University Campus</h4>
                    <p className="text-white/90 text-sm">State-of-the-art facilities for pharmaceutical education and research</p>
                  </div>
                </div>
              </div>
              

            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div 
                className="glass-effect rounded-2xl p-6 hover-lift cursor-pointer"
                onMouseEnter={() => setActiveCard(0)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className={`transition-all duration-300 ${activeCard === 0 ? 'scale-105' : ''}`}>
                  <BookOpen className="h-8 w-8 text-indigo-600 mb-4" />
                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                    United University is a dynamic and emerging multidisciplinary institution, established under the <em className="text-indigo-600 font-semibold">Private University Act</em> and duly approved by the State Government. The university has been founded with a vision to promote excellence in education, research, and training across a wide range of academic disciplines including Arts, Sciences, Commerce, Engineering, Management, Agriculture, and Mass Communication.
                  </p>
                </div>
              </div>
              
              <div 
                className="glass-effect rounded-2xl p-6 hover-lift cursor-pointer"
                onMouseEnter={() => setActiveCard(1)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className={`transition-all duration-300 ${activeCard === 1 ? 'scale-105' : ''}`}>
                  <Award className="h-8 w-8 text-purple-600 mb-4" />
                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                    Committed to academic innovation and holistic development, United University strives to be at the forefront of learning, teaching, and research. With a strong emphasis on quality education and industry relevance, the university aims to nurture skilled professionals who will contribute meaningfully to national growth and global progress.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Faculty of Pharmacy Section */}
            <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-800 dark:via-indigo-900 dark:to-purple-900 rounded-3xl p-8 shadow-2xl">
              <div className="text-center mb-8">
                <h4 className="text-3xl font-bold gradient-text mb-4 flex items-center justify-center">
                  <Zap className="h-8 w-8 mr-3 text-indigo-600" />
                  Faculty of Pharmacy
                  <Zap className="h-8 w-8 ml-3 text-indigo-600" />
                </h4>
                <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto"></div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                {/* Programs Offered */}
                <div 
                  className="glass-effect rounded-2xl p-6 hover-lift cursor-pointer group"
                  onMouseEnter={() => setActiveCard(2)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  <div className={`transition-all duration-300 ${activeCard === 2 ? 'scale-105' : ''}`}>
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <BookOpen className="h-6 w-6 text-white" />
                    </div>
                    <h5 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Programs Offered</h5>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between bg-white dark:bg-gray-700 rounded-lg p-3 shadow-sm">
                        <span className="font-semibold text-indigo-600">B.Pharm</span>
                        <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-sm font-medium">100 seats</span>
                      </div>
                      <div className="flex items-center justify-between bg-white dark:bg-gray-700 rounded-lg p-3 shadow-sm">
                        <span className="font-semibold text-purple-600">D.Pharm</span>
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-sm font-medium">60 seats</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-3">
                      <strong className="text-indigo-600">Established 2023</strong> - Programs designed for academic excellence and industry readiness
                    </p>
                  </div>
                </div>
                
                {/* Career Opportunities */}
                <div 
                  className="glass-effect rounded-2xl p-6 hover-lift cursor-pointer group"
                  onMouseEnter={() => setActiveCard(3)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  <div className={`transition-all duration-300 ${activeCard === 3 ? 'scale-105' : ''}`}>
                    <div className="bg-gradient-to-r from-green-500 to-teal-500 w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <TrendingUp className="h-6 w-6 text-white" />
                    </div>
                    <h5 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Career Paths</h5>
                    <div className="space-y-2 text-sm">
                      {[
                        'Pharmaceutical Manufacturing',
                        'Quality Assurance',
                        'Marketing & Sales',
                        'Regulatory Affairs',
                        'R&D and Healthcare',
                        'Government Sectors (FDA)'
                      ].map((career, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700 dark:text-gray-300">{career}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Infrastructure */}
                <div 
                  className="glass-effect rounded-2xl p-6 hover-lift cursor-pointer group"
                  onMouseEnter={() => setActiveCard(4)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  <div className={`transition-all duration-300 ${activeCard === 4 ? 'scale-105' : ''}`}>
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <h5 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Infrastructure</h5>
                    <div className="space-y-2 text-sm">
                      {[
                        'State-of-the-art Laboratories',
                        'PCI Guidelines Compliant',
                        'Modern Instrumentation',
                        'Advanced Simulation Software',
                        'Digital Learning Tools',
                        'Real-time Industry Exposure'
                      ].map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Mission Statement */}
              <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-2xl p-8 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <div className="relative z-10">
                  <h5 className="text-2xl font-bold mb-4 flex items-center justify-center">
                    <Globe className="h-6 w-6 mr-3" />
                    Our Mission & Strength
                    <Globe className="h-6 w-6 ml-3" />
                  </h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h6 className="text-lg font-semibold mb-2 text-yellow-300">Mission</h6>
                      <p className="text-white/90 leading-relaxed">
                        Bridge the gap between industry and academia through cutting-edge education and hands-on training, 
                        preparing graduates for the growing demand of skilled pharmacy professionals.
                      </p>
                    </div>
                    <div>
                      <h6 className="text-lg font-semibold mb-2 text-yellow-300">Our Strength</h6>
                      <p className="text-white/90 leading-relaxed">
                        Highly qualified, dedicated faculty and staff passionate about mentoring students and nurturing 
                        the next generation of competent, ethical, and innovative leaders in pharmaceutical sciences.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;