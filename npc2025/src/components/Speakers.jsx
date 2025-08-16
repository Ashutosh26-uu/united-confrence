import React from 'react';
import { Users, User, BookOpen, Award } from 'lucide-react';

const Speakers = () => {
  const keynoteSpeakers = [
    {
      name: "Dr. Chetan vays",
      title: "Dean of palaning and development department ",
      institution: "UNITED UNIVERSITY ",
      bio: "Dr. Sharma is a renowned expert in drug discovery with over 20 years of research experience.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Dr. Priya Patel",
      title: "Director of Pharmaceutical Technology",
      institution: "Indian Institute of Technology",
      bio: "Dr. Patel specializes in novel drug delivery systems and has published over 100 research papers.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Dr. Amit Kumar",
      title: "Chief Regulatory Officer",
      institution: "PharmaTech Solutions Ltd.",
      bio: "Dr. Kumar has extensive experience in regulatory affairs and has led approvals for multiple pharmaceutical products.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80"
    }
  ];

  const organizingCommittee = [
    {
      name: "Dr. Sunita Verma",
      role: "Conference Chair",
      institution: "United University"
    },
    {
      name: "Dr. Rajesh Gupta",
      role: "Program Chair",
      institution: "United University"
    },
    {
      name: "Dr. Nalini Rao",
      role: "Scientific Chair",
      institution: "United University"
    },
    {
      name: "Dr. Anil Kumar",
      role: "Finance Chair",
      institution: "United University"
    },
    {
      name: "Dr. Meera Patel",
      role: "Publication Chair",
      institution: "United University"
    },
    {
      name: "Dr. Vikram Singh",
      role: "Registration Chair",
      institution: "United University"
    }
  ];

  const advisoryCommittee = [
    "Dr. Ramesh Sharma - National Institute of Pharmaceutical Education and Research",
    "Dr. Priya Patel - Indian Institute of Technology",
    "Dr. Amit Kumar - PharmaTech Solutions Ltd.",
    "Dr. Sunita Verma - United University",
    "Dr. Rajesh Gupta - United University"
  ];

  return (
    <section id="speakers" className="py-16 bg-white">
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
              <div key={index} className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={speaker.image} 
                      alt={speaker.name} 
                      className="w-16 h-16 rounded-full object-cover mr-4"
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
        <div className="mt-16 bg-indigo-600 text-white rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Want to Join Our Team?</h3>
            <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
              We're always looking for enthusiastic volunteers to help make our conference a success. 
              Join our organizing team and gain valuable experience in academic event management.
            </p>
            <button className="bg-white text-indigo-600 font-bold py-3 px-6 rounded-lg hover:bg-indigo-50 transition-colors">
              Volunteer for NPC 2025
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speakers;