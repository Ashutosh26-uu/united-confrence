import React from 'react';
import { Users, BookOpen, Target, Award } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Speakers",
      description: "Learn from leading pharmaceutical researchers and industry professionals from around the world."
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Cutting-edge Research",
      description: "Discover the latest advancements in pharmaceutical sciences and healthcare innovations."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Networking Opportunities",
      description: "Connect with peers, researchers, and industry leaders to build valuable professional relationships."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Professional Development",
      description: "Enhance your skills and knowledge through workshops, presentations, and interactive sessions."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About the Conference</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4"> United university Pharmacy Conference 2025</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              The United university Pharmacy Conference 2025 is a premier event that brings together pharmaceutical professionals,
              researchers, educators, and students to share knowledge, innovations, and best practices in the field of pharmacy.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              This three-day conference will feature keynote presentations, research paper presentations, poster sessions,
              workshops, and panel discussions covering various aspects of pharmaceutical sciences, clinical pharmacy,
              pharmacology, pharmaceutics, and pharmaceutical technology.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Join us to explore emerging trends, discuss challenges, and discover solutions that are shaping the future
              of pharmacy practice and pharmaceutical research in India and beyond.
            </p>
          </div>
          <div className="bg-indigo-600 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Conference Theme</h3>
            <p className="text-xl mb-6">
              "Innovative Approaches in Pharmaceutical Research and Patient Care: Bridging Science and Practice"
            </p>
            <p className="text-indigo-100">
              Our theme emphasizes the importance of translating scientific discoveries into practical applications 
              that improve patient outcomes and advance healthcare delivery.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group">
              <div className="text-indigo-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-white dark:bg-gray-700 rounded-2xl shadow-lg p-8 sm:p-10 lg:p-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">About United University</h3>
          
          {/* University Campus Image */}
          <div className="mb-8 bg-gray-200 rounded-xl overflow-hidden shadow-lg">
            <img 
              src="/images/image1.jpg" 
              alt="United University Campus" 
              className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover"
              onError={(e) => {
                e.target.src = '/images/image2.jpg';
              }}
            />
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              United University, located in Uttar Pradesh, India, is a premier institution dedicated to excellence in
              education and research. The Department of Pharmacy at United University is committed to advancing
              pharmaceutical education and research to meet the evolving needs of the healthcare industry.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              With state-of-the-art facilities, experienced faculty, and a strong focus on innovation, the Department
              of Pharmacy provides students with a comprehensive education that prepares them for successful careers
              in various sectors of the pharmaceutical industry.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              The department regularly hosts conferences, seminars, and workshops to foster academic exchange and
              collaboration among professionals in the field of pharmacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;