import React, { useState, useEffect } from 'react';
import { CreditCard, Users, Briefcase, Calendar, FileText, AlertCircle, Sparkles, CheckCircle } from 'lucide-react';

const Registration = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredRow, setHoveredRow] = useState(null);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  const registrationFees = [
    {
      category: "Students (UG/Diploma)",
      earlyBird: "800/-",
      regular: "1200/-",
      icon: <Users className="h-6 w-6" />
    },
    {
      category: "Students (PG/PHD/Post Doc.)",
      earlyBird: "1100/-",
      regular: "1500/-",
      icon: <FileText className="h-6 w-6" />
    },
    {
      category: "Faculty",
      earlyBird: "1500/-",
      regular: "2000/-",
      icon: <Briefcase className="h-6 w-6" />
    },
    {
      category: "Industry Delegates",
      earlyBird: "2500/-",
      regular: "3000/-",
      icon: <Calendar className="h-6 w-6" />
    }
  ];

  const paymentMethods = [
    "Online Payment (Credit/Debit Card, Net Banking)",
    "Bank Transfer",
    "Demand Draft"
  ];

  const paymentInstructions = [
    "Register online through our conference portal",
    "Select your category and complete the registration form",
    "Choose your preferred payment method",
    "Make payment as per the selected fee structure",
    "After successful payment, you will receive a confirmation email",
    "Bring your confirmation email and ID proof to the conference"
  ];

  return (
    <section id="registration" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Registration</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Register now for FIHTNFPS - 2025: Fostering Innovation for a Healthier Tomorrow
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {/* Registration Fee Section */}
            <div className={`glass-effect rounded-3xl shadow-2xl p-8 mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-center py-4 px-6 rounded-2xl mb-8 -mx-8 -mt-8">
                <h3 className="text-2xl font-bold uppercase">
                  Registration Fee
                </h3>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300 rounded-2xl overflow-hidden">
                  <thead>
                    <tr className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                      <th className="border border-gray-300 px-6 py-4 text-center font-bold uppercase">
                        Category
                      </th>
                      <th className="border border-gray-300 px-6 py-4 text-center font-bold uppercase">
                        Early Bird<br />Registration Fee<br />(On or Before 15<sup>th</sup><br />October 2025)
                      </th>
                      <th className="border border-gray-300 px-6 py-4 text-center font-bold uppercase">
                        On Spot<br />Registration Fee<br />After 15<sup>th</sup><br />October 2025
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {registrationFees.map((fee, index) => (
                      <tr 
                        key={index} 
                        className={`relative bg-gradient-to-r from-pink-100 to-purple-100 hover:from-pink-200 hover:to-purple-200 transition-all duration-500 cursor-pointer transform overflow-hidden ${
                          hoveredRow === index ? 'scale-105 shadow-2xl -rotate-1' : ''
                        } ${
                          selectedCategory === index ? 'ring-4 ring-indigo-500 bg-gradient-to-r from-indigo-100 to-purple-100 shadow-2xl' : ''
                        }`}
                        onMouseEnter={() => setHoveredRow(index)}
                        onMouseLeave={() => setHoveredRow(null)}
                        onClick={() => setSelectedCategory(selectedCategory === index ? null : index)}
                      >
                        <td className="border border-gray-300 px-6 py-4 text-center relative">
                          {hoveredRow === index && (
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse"></div>
                          )}
                          <div className="relative flex items-center justify-center">
                            <div className={`flex-shrink-0 h-10 w-10 mr-3 transition-all duration-500 ${
                              hoveredRow === index ? 'animate-bounce text-indigo-600 scale-125' : 'text-gray-600'
                            }`}>
                              {fee.icon}
                            </div>
                            <div className={`font-semibold transition-all duration-300 ${
                              hoveredRow === index ? 'text-indigo-900 scale-105' : 'text-gray-900'
                            }`}>{fee.category}</div>
                            {selectedCategory === index && (
                              <CheckCircle className="h-6 w-6 text-green-500 ml-3 animate-spin" />
                            )}
                          </div>
                        </td>
                        <td className="border border-gray-300 px-6 py-4 text-center relative">
                          {hoveredRow === index && (
                            <div className="absolute inset-0 bg-green-500/10 animate-pulse"></div>
                          )}
                          <div className={`relative text-lg font-bold transition-all duration-500 ${
                            hoveredRow === index ? 'text-green-600 scale-125 animate-pulse' : 'text-gray-900'
                          }`}>
                            {fee.earlyBird}
                          </div>
                        </td>
                        <td className="border border-gray-300 px-6 py-4 text-center relative">
                          {hoveredRow === index && (
                            <div className="absolute inset-0 bg-red-500/10 animate-pulse"></div>
                          )}
                          <div className={`relative text-lg font-bold transition-all duration-500 ${
                            hoveredRow === index ? 'text-red-600 scale-125 animate-pulse' : 'text-gray-900'
                          }`}>
                            {fee.regular}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              {selectedCategory !== null && (
                <div className="mt-6 p-4 bg-gradient-to-r from-green-100 to-blue-100 rounded-xl border-2 border-green-300 animate-fade-in-up relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-200/50 to-blue-200/50 animate-pulse"></div>
                  <p className="relative text-center text-green-800 font-semibold flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 mr-2 animate-spin" />
                    You selected: {registrationFees[selectedCategory].category}
                  </p>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-blue-500 animate-pulse"></div>
                </div>
              )}
            </div>

            {/* Mode of Payment Section */}
            <div className={`glass-effect rounded-3xl shadow-2xl p-8 mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-center py-4 px-6 rounded-2xl mb-8 -mx-8 -mt-8">
                <h3 className="text-2xl font-bold uppercase flex items-center justify-center">
                  <CreditCard className="h-6 w-6 mr-3" />
                  Mode of Payment
                  <CreditCard className="h-6 w-6 ml-3" />
                </h3>
              </div>
              
              <div className="text-center">
                <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300">
                  Registration fee can be paid through RTGS/UPI
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Payment Instructions</h3>
              <div className="space-y-4">
                {paymentInstructions.map((instruction, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-indigo-100 text-indigo-800 font-bold rounded-full w-6 h-6 flex items-center justify-center text-xs">
                        {index + 1}
                      </div>
                    </div>
                    <p className="ml-4 text-gray-700">{instruction}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="glass-effect rounded-3xl shadow-2xl p-8 sticky top-24 hover:shadow-3xl transition-all duration-500">
              <h3 className="text-2xl font-bold gradient-text mb-6 text-center">
                Registration Details
              </h3>
              
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Payment Methods</h4>
                <div className="space-y-3">
                  {paymentMethods.map((method, index) => (
                    <div key={index} className="flex items-center">
                      <CreditCard className="h-5 w-5 text-indigo-600 mr-3" />
                      <p className="text-gray-700">{method}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Important Dates</h4>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-yellow-500 mt-0.5 mr-2 flex-shrink-0" />
                    <p className="text-gray-700 text-sm">
                      <span className="font-semibold">Last Date of Registration:</span> 15th October 2025
                    </p>
                  </div>
                  <div className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-yellow-500 mt-0.5 mr-2 flex-shrink-0" />
                    <p className="text-gray-700 text-sm">
                      <span className="font-semibold">Conference Date:</span> 7th to 8th November 2025
                    </p>
                  </div>
                  <div className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-yellow-500 mt-0.5 mr-2 flex-shrink-0" />
                    <p className="text-gray-700 text-sm">
                      <span className="font-semibold">Abstract Submission Deadline:</span> 10th October 2025
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">What's Included</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                    Access to all conference sessions
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                    Conference proceedings
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                    Tea/coffee during breaks
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                    Lunch on both conference days
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                    Certificate of participation
                  </li>
                </ul>
              </div>

              <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
                Register Now
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gray-900 text-white rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Group Registration</h3>
            <p className="text-gray-300 max-w-3xl mx-auto mb-6">
              Special discounts available for groups of 5 or more participants from the same institution.
              Contact our registration team for more information.
            </p>
            <a 
              href="mailto:confpharm@uniteduniversity.edu.in" 
              className="inline-block bg-white text-gray-900 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Contact Registration Team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;