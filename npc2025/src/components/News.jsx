import React from 'react';
import { Calendar, User, Tag, ArrowRight } from 'lucide-react';

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: "Call for Abstracts Now Open",
      excerpt: "We are now accepting abstract submissions for the National Pharmacy Conference 2025. Submit your research before the January 15 deadline.",
      date: "August 10, 2024",
      author: "Dr. Sunita Verma",
      category: "Announcements",
      image: "https://images.unsplash.com/photo-1588696018024-91d84d12e4e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      title: "Early Bird Registration Rates Available",
      excerpt: "Take advantage of our early bird registration rates until February 15, 2025. Save up to 30% on conference fees.",
      date: "July 25, 2024",
      author: "Dr. Rajesh Gupta",
      category: "Registration",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      title: "Keynote Speakers Announced",
      excerpt: "We're excited to announce our distinguished keynote speakers for NPC 2025, including Dr. Ramesh Sharma and Dr. Priya Patel.",
      date: "July 15, 2024",
      author: "Dr. Nalini Rao",
      category: "Speakers",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 4,
      title: "Workshop Registration Now Open",
      excerpt: "Register now for our pre-conference workshops on March 12-13, 2025. Limited seats available for each workshop.",
      date: "July 5, 2024",
      author: "Dr. Anil Kumar",
      category: "Workshops",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 5,
      title: "Accommodation Partners Announced",
      excerpt: "We've partnered with several hotels near the venue to provide special rates for conference attendees.",
      date: "June 28, 2024",
      author: "Dr. Meera Patel",
      category: "Accommodation",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 6,
      title: "Sponsorship Opportunities Available",
      excerpt: "Join us as a sponsor and connect with pharmaceutical professionals, researchers, and industry leaders.",
      date: "June 15, 2024",
      author: "Dr. Vikram Singh",
      category: "Sponsors",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
    }
  ];

  const categories = [
    "All",
    "Announcements",
    "Registration",
    "Speakers",
    "Workshops",
    "Accommodation",
    "Sponsors"
  ];

  return (
    <section id="news" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">News & Updates</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest news and announcements for the National Pharmacy Conference 2025
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                index === 0
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <div key={item.id} className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {item.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{item.date}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700 mb-4">{item.excerpt}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <User className="h-4 w-4 text-gray-500 mr-1" />
                    <span className="text-gray-600 text-sm">{item.author}</span>
                  </div>
                  <button className="text-indigo-600 font-medium text-sm flex items-center hover:text-indigo-800">
                    Read More
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button className="bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors">
            View All News
          </button>
        </div>

        <div className="mt-16 bg-indigo-50 rounded-2xl p-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex-1 mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Stay Connected</h3>
              <p className="text-gray-700">
                Subscribe to our newsletter to receive the latest updates about the conference, 
                including registration deadlines, speaker announcements, and program changes.
              </p>
            </div>
            <div className="w-full md:w-96">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 rounded-l-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                />
                <button className="bg-indigo-600 text-white font-bold px-6 py-3 rounded-r-lg hover:bg-indigo-700 transition-colors">
                  Subscribe
                </button>
              </div>
              <p className="text-gray-600 text-sm mt-2">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;