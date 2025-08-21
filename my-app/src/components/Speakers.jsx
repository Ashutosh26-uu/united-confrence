import React, { useState } from 'react';
import { Users, User, BookOpen, Award, X, MapPin } from 'lucide-react';

const DEFAULT_AVATAR = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMzIiIGN5PSIzMiIgcj0iMzIiIGZpbGw9IiM2MzY2RjEiLz4KPHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSIxNiIgeT0iMTYiPgo8cGF0aCBkPSJNMjAgMjFWMTlBNCA0IDAgMCAwIDE2IDE1SDhBNCA0IDAgMCAwIDQgMTlWMjEiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxjaXJjbGUgY3g9IjEyIiBjeT0iNyIgcj0iNCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cjwvc3ZnPgo=';

const Speakers = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (speaker, category) => {
    setSelectedSpeaker({ ...speaker, category });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSpeaker(null);
  };
  const chiefGuest = {
    name: "Dr. R.N. Gupta",
    title: "President",
    institution: "Indian Pharmaceutical Association",
    bio: "Dr. Gupta is a distinguished leader in the pharmaceutical industry with extensive experience in pharmaceutical research and development.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
    phone: "9523193469",
    email: "rnogupta2015@gmail.com"
  };

  const guestOfHonor = {
    name: "Prof. Lalit Krishna Khar",
    title: "Director, B.S. Anangpuria Institute",
    institution: "Pharmacy, Faridabad, Haryana",
    bio: "Prof. Khar is a renowned keynote speaker and expert in pharmaceutical sciences with extensive research contributions.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
    phone: "9810508898",
    email: "roopkhar@hotmail.com"
  };

  const speakers = [
    {
      name: "Prof. S.P. Vyas",
      title: "Ex. Vice Chancellor, Rajasthan (RUHS)",
      institution: "H.S. Gour Central University, Sagar",
      bio: "Prof. Vyas is a distinguished academic leader with extensive experience in pharmaceutical education and research.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
      phone: "9399095497",
      email: "atulpharma@gmail.com"
    },
    {
      name: "Prof. (Dr.) Atul Kumar Nasa",
      title: "Pro Vice-Chancellor",
      institution: "Shree Guru Gobind Singh Tricentenary University (SGGU)",
      bio: "Prof. Nasa brings extensive academic and administrative experience in pharmaceutical education.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Prof. Harvinder Popli",
      title: "Director, Dean (Research Innovation & International Affairs)",
      institution: "Delhi Pharmaceutical Science and Research University (DPSRU)",
      bio: "Prof. Popli is a leading researcher in pharmaceutical sciences with focus on innovation and international collaborations.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
      phone: "9899700749",
      email: "Popli.harvinder@gmail.com"
    },
    {
      name: "Prof. (Dr.) Milind Parle",
      title: "Professor",
      institution: "Pharmaceutical Sciences",
      bio: "Prof. Parle is a distinguished researcher and educator in pharmaceutical sciences with numerous publications.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
      phone: "9811613398",
      email: "mparle2015@gmail.com"
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

        {/* Chief Guest */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <Award className="h-6 w-6 text-indigo-600 mr-2" />
            <h3 className="text-2xl font-bold text-gray-900">Chief Guest</h3>
          </div>
          <div className="flex justify-center">
            <div 
              onClick={() => openModal(chiefGuest, 'Chief Guest')}
              className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group max-w-md transform hover:-translate-y-2"
            >
              <div className="p-8 relative">
                <div className="absolute top-4 right-4">
                  <div className="bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Chief Guest
                  </div>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="relative">
                    <img 
                      className="w-24 h-24 rounded-full object-cover mb-4 group-hover:scale-110 transition-transform duration-300 border-4 border-indigo-200 shadow-lg" 
                      src={chiefGuest.image} 
                      alt={chiefGuest.name} 
                      onError={(e) => {
                        e.target.src = DEFAULT_AVATAR;
                      }}
                    />
                    <div className="absolute -bottom-2 -right-2 bg-indigo-600 rounded-full p-2">
                      <Award className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-indigo-600 transition-colors">{chiefGuest.name}</h4>
                  <p className="text-indigo-600 font-medium mb-2">{chiefGuest.title}</p>
                  <p className="text-sm text-gray-600 mb-3">{chiefGuest.institution}</p>
                  <p className="text-gray-700 text-sm line-clamp-3">{chiefGuest.bio}</p>
                  <div className="mt-4 text-indigo-600 text-sm font-medium group-hover:underline">
                    Click to view details →
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Guest of Honor/Keynote Speaker */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <User className="h-6 w-6 text-indigo-600 mr-2" />
            <h3 className="text-2xl font-bold text-gray-900">Guest of Honor/Keynote Speaker</h3>
          </div>
          <div className="flex justify-center">
            <div 
              onClick={() => openModal(guestOfHonor, 'Guest of Honor')}
              className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group max-w-md transform hover:-translate-y-2"
            >
              <div className="p-8 relative">
                <div className="absolute top-4 right-4">
                  <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Keynote Speaker
                  </div>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="relative">
                    <img 
                      className="w-24 h-24 rounded-full object-cover mb-4 group-hover:scale-110 transition-transform duration-300 border-4 border-purple-200 shadow-lg" 
                      src={guestOfHonor.image} 
                      alt={guestOfHonor.name} 
                      onError={(e) => {
                        e.target.src = DEFAULT_AVATAR;
                      }}
                    />
                    <div className="absolute -bottom-2 -right-2 bg-purple-600 rounded-full p-2">
                      <User className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors">{guestOfHonor.name}</h4>
                  <p className="text-purple-600 font-medium mb-2">{guestOfHonor.title}</p>
                  <p className="text-sm text-gray-600 mb-3">{guestOfHonor.institution}</p>
                  <p className="text-gray-700 text-sm line-clamp-3">{guestOfHonor.bio}</p>
                  <div className="mt-4 text-purple-600 text-sm font-medium group-hover:underline">
                    Click to view details →
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Speakers */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <Users className="h-6 w-6 text-indigo-600 mr-2" />
            <h3 className="text-2xl font-bold text-gray-900">Speakers</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {speakers.map((speaker, index) => (
              <div 
                key={index} 
                onClick={() => openModal(speaker, 'Speaker')}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group border border-gray-100 transform hover:-translate-y-1"
              >
                <div className="p-6 relative">
                  <div className="absolute top-4 right-4">
                    <div className="bg-gray-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Speaker
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    <div className="relative">
                      <img 
                        className="w-16 h-16 rounded-full object-cover mr-4 group-hover:scale-110 transition-transform duration-300 border-2 border-gray-200" 
                        src={speaker.image} 
                        alt={speaker.name} 
                        onError={(e) => {
                          e.target.src = DEFAULT_AVATAR;
                        }}
                      />
                      <div className="absolute -bottom-1 -right-1 bg-indigo-600 rounded-full p-1">
                        <BookOpen className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">{speaker.name}</h4>
                      <p className="text-indigo-600 text-sm font-medium">{speaker.title}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-3 flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {speaker.institution}
                  </p>
                  <p className="text-gray-700 text-sm line-clamp-2 mb-3">{speaker.bio}</p>
                  <div className="text-indigo-600 text-sm font-medium group-hover:underline">
                    Click to view details →
                  </div>
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

        {/* Speaker Modal */}
        {isModalOpen && selectedSpeaker && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center">
                    <div className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm font-semibold">
                      {selectedSpeaker.category}
                    </div>
                  </div>
                  <button 
                    onClick={closeModal}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <img 
                      className="w-32 h-32 rounded-full object-cover border-4 border-indigo-200 shadow-lg" 
                      src={selectedSpeaker.image} 
                      alt={selectedSpeaker.name}
                      onError={(e) => {
                        e.target.src = DEFAULT_AVATAR;
                      }}
                    />
                  </div>
                  
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedSpeaker.name}</h3>
                    <p className="text-indigo-600 font-semibold text-lg mb-2">{selectedSpeaker.title}</p>
                    <p className="text-gray-600 mb-4 flex items-center justify-center md:justify-start">
                      <MapPin className="w-4 h-4 mr-2" />
                      {selectedSpeaker.institution}
                    </p>
                    <p className="text-gray-700 leading-relaxed">{selectedSpeaker.bio}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

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