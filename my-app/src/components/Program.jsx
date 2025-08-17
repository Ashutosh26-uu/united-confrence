import React from 'react';
import { Calendar, Clock, MapPin, Users, BookOpen, Coffee } from 'lucide-react';

const Program = () => {
  const conferenceDays = [
    {
      date: "august 15, 2025",
      day: "Day 1 - Friday",
      events: [
        {
          time: "08:00 - 09:00",
          title: "Registration & Welcome Coffee",
          location: "Main Lobby",
          type: "registration",
          icon: <Coffee className="h-5 w-5" />
        },
        {
          time: "09:00 - 09:30",
          title: "Inaugural Ceremony",
          location: "Main Auditorium",
          type: "ceremony",
          icon: <Calendar className="h-5 w-5" />
        },
        {
          time: "09:30 - 10:30",
          title: "Keynote Address: Future of Pharmaceutical Research",
          speaker: "Dr. Ramesh Sharma",
          location: "Main Auditorium",
          type: "keynote",
          icon: <Users className="h-5 w-5" />
        },
        {
          time: "10:30 - 11:00",
          title: "Tea Break",
          location: "Lobby Area",
          type: "break",
          icon: <Coffee className="h-5 w-5" />
        },
        {
          time: "11:00 - 13:00",
          title: "Session 1: Drug Discovery & Development",
          location: "Main Auditorium",
          type: "session",
          icon: <BookOpen className="h-5 w-5" />
        },
        {
          time: "13:00 - 14:00",
          title: "Lunch Break",
          location: "Dining Hall",
          type: "break",
          icon: <Coffee className="h-5 w-5" />
        },
        {
          time: "14:00 - 16:00",
          title: "Session 2: Clinical Pharmacy & Pharmacotherapy",
          location: "Main Auditorium",
          type: "session",
          icon: <BookOpen className="h-5 w-5" />
        },
        {
          time: "16:00 - 16:30",
          title: "Tea Break",
          location: "Lobby Area",
          type: "break",
          icon: <Coffee className="h-5 w-5" />
        },
        {
          time: "16:30 - 18:00",
          title: "Poster Presentation Session",
          location: "Exhibition Hall",
          type: "poster",
          icon: <BookOpen className="h-5 w-5" />
        }
      ]
    },
    {
      date: "March 16, 2025",
      day: "Day 2 - Saturday",
      events: [
        {
          time: "09:00 - 10:00",
          title: "Keynote Address: Pharmaceutical Technology Innovations",
          speaker: "Dr. Priya Patel",
          location: "Main Auditorium",
          type: "keynote",
          icon: <Users className="h-5 w-5" />
        },
        {
          time: "10:00 - 10:30",
          title: "Tea Break",
          location: "Lobby Area",
          type: "break",
          icon: <Coffee className="h-5 w-5" />
        },
        {
          time: "10:30 - 12:30",
          title: "Session 3: Pharmacology & Toxicology",
          location: "Main Auditorium",
          type: "session",
          icon: <BookOpen className="h-5 w-5" />
        },
        {
          time: "12:30 - 13:30",
          title: "Lunch Break",
          location: "Dining Hall",
          type: "break",
          icon: <Coffee className="h-5 w-5" />
        },
        {
          time: "13:30 - 15:30",
          title: "Session 4: Industrial Pharmacy & Biopharmaceutics",
          location: "Main Auditorium",
          type: "session",
          icon: <BookOpen className="h-5 w-5" />
        },
        {
          time: "15:30 - 16:00",
          title: "Tea Break",
          location: "Lobby Area",
          type: "break",
          icon: <Coffee className="h-5 w-5" />
        },
        {
          time: "16:00 - 18:00",
          title: "Panel Discussion: Career Opportunities in Pharmacy",
          location: "Main Auditorium",
          type: "panel",
          icon: <Users className="h-5 w-5" />
        }
      ]
    },
    {
      date: "March 17, 2025",
      day: "Day 3 - Sunday",
      events: [
        {
          time: "09:00 - 10:00",
          title: "Keynote Address: Regulatory Affairs in Pharmaceuticals",
          speaker: "Dr. Amit Kumar",
          location: "Main Auditorium",
          type: "keynote",
          icon: <Users className="h-5 w-5" />
        },
        {
          time: "10:00 - 10:30",
          title: "Tea Break",
          location: "Lobby Area",
          type: "break",
          icon: <Coffee className="h-5 w-5" />
        },
        {
          time: "10:30 - 12:30",
          title: "Session 5: Hospital Pharmacy & Clinical Research",
          location: "Main Auditorium",
          type: "session",
          icon: <BookOpen className="h-5 w-5" />
        },
        {
          time: "12:30 - 13:30",
          title: "Lunch Break",
          location: "Dining Hall",
          type: "break",
          icon: <Coffee className="h-5 w-5" />
        },
        {
          time: "13:30 - 15:00",
          title: "Session 6: Recent Advances in Pharmaceutical Sciences",
          location: "Main Auditorium",
          type: "session",
          icon: <BookOpen className="h-5 w-5" />
        },
        {
          time: "15:00 - 16:00",
          title: "Closing Ceremony & Award Distribution",
          location: "Main Auditorium",
          type: "ceremony",
          icon: <Calendar className="h-5 w-5" />
        }
      ]
    }
  ];

  const workshops = [
    {
      title: "Workshop on Drug Design & Molecular Modeling",
      date: "March 12, 2025",
      time: "09:00 - 17:00",
      location: "Lab 101",
      description: "Hands-on workshop on computational methods in drug design"
    },
    {
      title: "Pharmaceutical Analysis Techniques",
      date: "March 12, 2025",
      time: "09:00 - 17:00",
      location: "Lab 102",
      description: "Advanced techniques in pharmaceutical analysis and quality control"
    },
    {
      title: "Clinical Research & Good Clinical Practice",
      date: "March 13, 2025",
      time: "09:00 - 17:00",
      location: "Seminar Hall A",
      description: "Understanding clinical research protocols and regulatory compliance"
    }
  ];

  return (
    <section id="program" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Conference Program</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive program featuring keynote speakers, research presentations, and interactive sessions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="border-b border-gray-200">
                <nav className="flex -mb-px">
                  {conferenceDays.map((day, index) => (
                    <button
                      key={index}
                      className={`py-4 px-6 text-center font-medium text-sm border-b-2 ${
                        index === 0
                          ? 'border-indigo-500 text-indigo-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      {day.day}
                      <div className="text-xs mt-1 text-gray-500">{day.date}</div>
                    </button>
                  ))}
                </nav>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">{conferenceDays[0].day} Schedule</h3>
                <div className="space-y-6">
                  {conferenceDays[0].events.map((event, index) => (
                    <div key={index} className="flex">
                      <div className="flex-shrink-0 w-32">
                        <div className="text-sm font-medium text-indigo-600">{event.time}</div>
                      </div>
                      <div className="ml-4 flex-1">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 mt-0.5 text-indigo-600">
                            {event.icon}
                          </div>
                          <div className="ml-3">
                            <h4 className="text-base font-medium text-gray-900">{event.title}</h4>
                            {event.speaker && (
                              <p className="text-sm text-gray-600 mt-1">Speaker: {event.speaker}</p>
                            )}
                            <div className="flex items-center mt-1">
                              <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                              <span className="text-sm text-gray-500">{event.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Pre-Conference Workshops</h3>
              <div className="space-y-6">
                {workshops.map((workshop, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-5 hover:border-indigo-300 transition-colors">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{workshop.title}</h4>
                    <div className="flex items-center text-sm text-gray-600 mb-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{workshop.date}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 mb-1">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{workshop.time}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{workshop.location}</span>
                    </div>
                    <p className="text-sm text-gray-700">{workshop.description}</p>
                  </div>
                ))}
              </div>
              <button className="w-full mt-6 bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors">
                Register for Workshops
              </button>
            </div>

            <div className="bg-indigo-600 text-white rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">Download Program</h3>
              <p className="text-indigo-100 mb-4">
                Get the complete conference program with all sessions and timings.
              </p>
              <button className="w-full bg-white text-indigo-600 font-bold py-2 px-4 rounded-lg hover:bg-indigo-50 transition-colors">
                Download PDF
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Full Conference Schedule</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Day
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Key Events
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {conferenceDays.map((day, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{day.day}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{day.date}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        {day.events.filter(event => event.type === 'keynote' || event.type === 'ceremony').map((event, i) => (
                          <div key={i} className="mb-1">
                            <span className="font-medium">{event.title}</span>
                            {event.speaker && ` - ${event.speaker}`}
                          </div>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Program;