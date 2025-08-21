import React, { useMemo } from 'react';
import { Calendar, FileText, User, CreditCard, MapPin } from 'lucide-react';

const ImportantDates = () => {
  const dates = useMemo(() => [
    {
      date: "7th to 8th November 2025",
      title: "Conference Date",
      description: "Two days of presentations, discussions, and networking.",
      icon: <Calendar className="h-6 w-6" />
    },
    {
      date: "15th October 2025",
      title: "Last Date of Registration",
      description: "Final date for conference registration. No extensions will be granted.",
      icon: <CreditCard className="h-6 w-6" />
    },
    {
      date: "10th October 2025",
      title: "Deadline for Abstract Submission",
      description: "Final date for abstract submissions. No extensions will be granted.",
      icon: <FileText className="h-6 w-6" />
    },
    {
      date: "18th October 2025",
      title: "Abstract Acceptance Notification",
      description: "Authors will be notified of their abstract acceptance status.",
      icon: <User className="h-6 w-6" />
    }
  ], []);

  return (
    <section id="dates" className="pt-24 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Important Dates</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mark your calendars for these important dates and deadlines for FIHTNFPS - 2025.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {dates.map((item, index) => (
            <div 
              key={`${item.date}-${item.title}`} 
              className="bg-gradient-to-br from-indigo-50 to-white rounded-xl shadow-lg p-6 border border-indigo-100 hover:shadow-xl hover:scale-105 hover:border-indigo-300 transition-all duration-300 cursor-pointer group"
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

        <div className="mt-20 bg-indigo-50 rounded-2xl p-8 sm:p-10">
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