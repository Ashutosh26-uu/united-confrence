import React from 'react';
import { Calendar, FileText, User, CreditCard, MapPin } from 'lucide-react';

const ImportantDates = () => {
  const dates = [
    {
      date: "October 15, 2024",
      title: "Abstract Submission Opens",
      description: "Researchers can begin submitting their abstracts for presentation consideration.",
      icon: <FileText className="h-6 w-6" />
    },
    {
      date: "January 15, 2025",
      title: "Abstract Submission Deadline",
      description: "Final date for abstract submissions. No extensions will be granted.",
      icon: <FileText className="h-6 w-6" />
    },
    {
      date: "January 30, 2025",
      title: "Acceptance Notification",
      description: "Authors will be notified of their abstract acceptance status.",
      icon: <User className="h-6 w-6" />
    },
    {
      date: "February 15, 2025",
      title: "Early Bird Registration",
      description: "Early bird registration rates available for conference attendance.",
      icon: <CreditCard className="h-6 w-6" />
    },
    {
      date: "March 10, 2025",
      title: "Regular Registration Deadline",
      description: "Final date for regular registration rates.",
      icon: <CreditCard className="h-6 w-6" />
    },
    {
      date: "March 12, 2025",
      title: "Pre-conference Workshops",
      description: "Specialized workshops for registered participants.",
      icon: <Calendar className="h-6 w-6" />
    },
    {
      date: "March 15-17, 2025",
      title: "Main Conference",
      description: "Three days of presentations, discussions, and networking.",
      icon: <Calendar className="h-6 w-6" />
    },
    {
      date: "March 15-17, 2025",
      title: "Conference Venue",
      description: "United University Conference Center, Uttar Pradesh",
      icon: <MapPin className="h-6 w-6" />
    }
  ];

  return (
    <section id="dates" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Important Dates</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mark your calendars for these important dates and deadlines for the National Pharmacy Conference 2025.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {dates.map((item, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-indigo-50 to-white rounded-xl shadow-lg p-6 border border-indigo-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="bg-indigo-100 p-2 rounded-lg text-indigo-600 mr-3">
                  {item.icon}
                </div>
                <span className="text-sm font-semibold text-indigo-600 bg-indigo-50 px-2 py-1 rounded">
                  {item.date}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-indigo-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Note</h3>
          <p className="text-gray-700 text-center max-w-3xl mx-auto">
            All deadlines are at 11:59 PM IST unless otherwise specified. 
            Please ensure to meet all deadlines to participate in the conference.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImportantDates;