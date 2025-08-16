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
      details: "Nearest airport is Indira Gandhi International Airport (DEL), 300 km away. Airport transfers available."
    },
    {
      mode: "By Train",
      details: "Nearest railway station is Uttar Pradesh Junction, 15 km from venue. Taxi service available."
    },
    {
      mode: "By Road",
      details: "Well-connected by national highways. Regular bus service from major cities."
    }
  ];

  return (
    <section id="venue" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Venue & Accommodation</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us at United University for an unforgettable conference experience
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="flex items-center mb-6">
              <MapPin className="h-6 w-6 text-indigo-600 mr-2" />
              <h3 className="text-2xl font-bold text-gray-900">Conference Venue</h3>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-96 bg-gray-200 border-2 border-dashed rounded-t-2xl flex items-center justify-center text-gray-500">
                Google Maps Embed Placeholder
                <br />
                (Actual implementation would include Google Maps embed code)
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">United University Conference Center</h4>
                <p className="text-gray-700 mb-4">
                  Department of Pharmacy<br />
                  United University<br />
                  Uttar Pradesh, India 201301
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
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded">
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
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-lg font-bold text-gray-900">{option.name}</h4>
                    <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {option.distance}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4">{option.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {option.amenities.map((amenity, amenityIndex) => (
                      <span key={amenityIndex} className="flex items-center bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        <Wifi className="h-3 w-3 mr-1" />
                        {amenity}
                      </span>
                    ))}
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
                  <div key={index} className="flex">
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
                    Medical Emergency: +91 9876543210<br />
                    Conference Helpdesk: +91 1122334455
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-indigo-600 text-white rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Need Assistance with Travel or Accommodation?</h3>
          <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
            Our hospitality team is here to help you with travel arrangements, hotel bookings, 
            and any other assistance you may need for a comfortable stay.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="mailto:accommodation@npc2025.edu" 
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