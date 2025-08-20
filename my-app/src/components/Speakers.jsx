import React from 'react';
import { Users, User, BookOpen, Award } from 'lucide-react';

const DEFAULT_AVATAR = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMzIiIGN5PSIzMiIgcj0iMzIiIGZpbGw9IiM2MzY2RjEiLz4KPHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSIxNiIgeT0iMTYiPgo8cGF0aCBkPSJNMjAgMjFWMTlBNCA0IDAgMCAwIDE2IDE1SDhBNCA0IDAgMCAwIDQgMTlWMjEiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxjaXJjbGUgY3g9IjEyIiBjeT0iNyIgcj0iNCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cjwvc3ZnPgo=';

const Speakers = () => {
  const keynoteSpeakers = [
    {
      name: "Dr. Chetan vays",
      title: "Dean of Planning and Development Department",
      institution: "UNITED UNIVERSITY ",
      bio: "Dr. Vays is a renowned expert in drug discovery with over 20 years of research experience.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Dr. Faculty of Pharmacy",
      title: "HOD of Pharmacy Department",
      institution: "Indian Institute of Technology",
      bio: "Dr. Faculty of Pharmacy specializes in novel drug delivery systems and has published over 100 research papers.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Dr. Faculty of Pharmacy",
      title: "Chief of Pharmacy Department",
      institution: "United University",
      bio: "Dr. Faculty of Pharmacy has extensive experience in regulatory affairs and has led approvals for multiple pharmaceutical products.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80"
    }
  ];

  const organizingCommittee = [
    {
      name: "Dr. Faculty of Pharmacy",
      role: "Conference Chair",
      institution: "United University"
    },
    {
      name: "Dr. Faculty of Pharmacy",
      role: "Program Chair",
      institution: "United University"
    },
    {
      name: "Dr. Faculty of Pharmacy",
      role: "Scientific Chair",
      institution: "United University"
    },
    {
      name: "Dr. Faculty of Pharmacy",
      role: "Finance Chair",
      institution: "United University"
    },
    {
      name: "Dr. Faculty of Pharmacy",
      role: "Publication Chair",
      institution: "United University"
    },
    {
      name: "Dr. Faculty of Pharmacy",
      role: "Registration Chair",
      institution: "United University"
    }
  ];

  const advisoryCommittee = [
    "Dr. Faculty of Pharmacy - National Institute of Pharmaceutical Education and Research",
    "Dr. Faculty of Pharmacy - Indian Institute of Technology",
    "Dr. Faculty of Pharmacy - PharmaTech Solutions Ltd.",
    "Dr. Faculty of Pharmacy - United University",
    "Dr. Faculty of Pharmacy - United University"
  ];

  return (
    <section id="speakers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Speakers & Committees</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our distinguished speakers and organizing committee members
          </p>
        </div>

        {/* Keynote Speakers */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <User className="h-6 w-6 text-indigo-600 mr-2" />
            <h3 className="text-2xl font-bold text-gray-900">Keynote Speakers</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keynoteSpeakers.map((speaker, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      className="w-16 h-16 rounded-full object-cover mr-4 group-hover:scale-110 transition-transform duration-300" 
                      src={speaker.image} 
                      alt={speaker.name} 

                      onError={(e) => {
                        e.target.src = DEFAULT_AVATAR;
                      }}
                    />
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">{speaker.name}</h4>
                      <p className="text-indigo-600 text-sm">{speaker.title}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{speaker.institution}</p>
                  <p className="text-gray-700 text-sm">{speaker.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Organizing Committee */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <Users className="h-6 w-6 text-indigo-600 mr-2" />
            <h3 className="text-2xl font-bold text-gray-900">Organizing Committee</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {organizingCommittee.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h4 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h4>
                <p className="text-indigo-600 font-medium mb-1">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.institution}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Advisory Committee */}
        <div>
          <div className="flex items-center mb-8">
            <Award className="h-6 w-6 text-indigo-600 mr-2" />
            <h3 className="text-2xl font-bold text-gray-900">Advisory Committee</h3>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8">
            <ul className="space-y-3">
              {advisoryCommittee.map((member, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1.5">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  </div>
                  <p className="ml-3 text-gray-700">{member}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Call for Volunteers */}
        <div className="mt-20 bg-indigo-600 text-white rounded-2xl p-8 sm:p-10">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Want to Join Our Team?</h3>
            <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
              We're always looking for enthusiastic volunteers to help make our conference a success. 
              Join our organizing team and gain valuable experience in academic event management.
            </p>
            <button className="bg-white text-indigo-600 font-bold py-3 px-6 rounded-lg hover:bg-indigo-50 transition-colors">
              Volunteer for United university 2025
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speakers;