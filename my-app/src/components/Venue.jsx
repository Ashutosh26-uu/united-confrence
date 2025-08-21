import React from 'react';
import { MapPin, Hotel, Car, Plane, Utensils, Wifi } from 'lucide-react';

const Venue = () => {
  const accommodationOptions = [
    {
      name: "Conference Hotel",
      distance: "On Campus",
      description: "Located within the university campus for maximum convenience",
      amenities: ["Free WiFi", "Complimentary Breakfast", "Conference Rate: ₹4,500/night"]
    },
    {
      name: "City Center Hotel",
      distance: "2 km from venue",
      description: "Modern hotel in the heart of the city with excellent amenities",
      amenities: ["Free WiFi", "Restaurant", "Conference Rate: ₹3,500/night"]
    },
    {
      name: "Budget Hotel",
      distance: "5 km from venue",
      description: "Affordable accommodation option with basic amenities",
      amenities: ["WiFi Available", "Conference Rate: ₹2,000/night"]
    }
  ];

  const travelInfo = [
    {
      mode: "By Air",
      details: "Bamroli Airport, 3 km away. Airport transfers available."
    },
    {
      mode: "By Train",
      details: "Nearest railway station is Prayagraj(North - Central) Junction, 11 km from venue. Taxi service available."
    },
    {
      mode: "By Road",
      details: "Well-connected by national highways. Regular bus service from major cities."
    }
  ];

  return (
    <section id="venue" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Venue & Accommodation</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join us at United University for an unforgettable conference experience
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="flex items-center mb-6">
              <MapPin className="h-6 w-6 text-indigo-600 mr-2" />
              <h3 className="text-2xl font-bold text-gray-900">Conference Venue</h3>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?q=United+University+Rawaatpur+Jhwala+Prayagraj+Uttar+Pradesh&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="384"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="United University Location"
              ></iframe>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">United University Conference Center</h4>
                <p className="text-gray-700 mb-4">
                  Faculty of Pharmacy<br />
                  United University Prayagraj<br />
                  Rawaatpur Jhwala, Near IIIT Allahabad<br />
                  Prayagraj, Uttar Pradesh, India
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Main Auditorium
                  </span>
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Exhibition Hall
                  </span>
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Seminar Rooms
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center mb-6">
              <Hotel className="h-6 w-6 text-indigo-600 mr-2" />
              <h3 className="text-2xl font-bold text-gray-900">Accommodation Options</h3>
            </div>
            <div className="space-y-6">
              {accommodationOptions.map((option, index) => (
                <div key={option.name} className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300 animate-float cursor-pointer">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-lg font-bold text-gray-900">{option.name}</h4>
                    <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {option.distance}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4">{option.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {option.amenities.map((amenity, amenityIndex) => {
                      const getAmenityIcon = () => {
                        if (amenity.toLowerCase().includes('wifi')) return <Wifi className="h-3 w-3 mr-1" />;
                        if (amenity.toLowerCase().includes('breakfast')) return <Utensils className="h-3 w-3 mr-1" />;
                        if (amenity.toLowerCase().includes('restaurant')) return <Utensils className="h-3 w-3 mr-1" />;
                        return <Hotel className="h-3 w-3 mr-1" />;
                      };
                      return (
                        <span key={amenityIndex} className="flex items-center bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          {getAmenityIcon()}
                          {amenity}
                        </span>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center mb-6">
              <Car className="h-6 w-6 text-indigo-600 mr-2" />
              <h3 className="text-2xl font-bold text-gray-900">Travel Information</h3>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="space-y-6">
                {travelInfo.map((info, index) => (
                  <div key={info.mode} className="flex">
                    <div className="flex-shrink-0">
                      {info.mode === "By Air" && <Plane className="h-6 w-6 text-indigo-600" />}
                      {info.mode === "By Train" && <Car className="h-6 w-6 text-indigo-600" />}
                      {info.mode === "By Road" && <Car className="h-6 w-6 text-indigo-600" />}
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-900">{info.mode}</h4>
                      <p className="text-gray-700">{info.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center mb-6">
              <Utensils className="h-6 w-6 text-indigo-600 mr-2" />
              <h3 className="text-2xl font-bold text-gray-900">Local Information</h3>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Dining Options</h4>
                  <p className="text-gray-700">
                    The university campus offers multiple dining options including vegetarian and non-vegetarian choices. 
                    Special dietary requirements can be accommodated with advance notice.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Local Attractions</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Historic temples and cultural sites</li>
                    <li>Local markets and shopping areas</li>
                    <li>Parks and recreational areas</li>
                    <li>Museums and art galleries</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Emergency Contacts</h4>
                  <p className="text-gray-700">
                    Security: +91 1234567890<br />
                    Medical Emergency(United Medicity): +91 9876543210<br />
                    Conference Helpdesk: +91 1122334455
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 bg-indigo-600 text-white rounded-2xl p-8 sm:p-10 text-center">
          <h3 className="text-2xl font-bold mb-4">Need Assistance with Travel or Accommodation?</h3>
          <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
            Our hospitality team is here to help you with travel arrangements, hotel bookings, 
            and any other assistance you may need for a comfortable stay.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="mailto:confpharm@uniteduniversity.edu.in" 
              className="bg-white text-indigo-600 font-bold py-3 px-6 rounded-lg hover:bg-indigo-50 transition-colors"
            >
              Email Accommodation Team
            </a>
            <a 
              href="tel:+911234567890" 
              className="bg-transparent border-2 border-white text-white font-bold py-3 px-6 rounded-lg hover:bg-white hover:text-indigo-600 transition-colors"
            >
              Call Hospitality Desk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Venue;