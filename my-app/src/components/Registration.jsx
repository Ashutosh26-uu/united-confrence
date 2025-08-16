import React from 'react';
import { CreditCard, Users, Briefcase, Calendar, FileText, AlertCircle } from 'lucide-react';

const Registration = () => {
  const registrationFees = [
    {
      category: "Students",
      earlyBird: "₹2,500",
      regular: "₹3,500",
      icon: <Users className="h-6 w-6" />
    },
    {
      category: "Academicians",
      earlyBird: "₹4,500",
      regular: "₹6,000",
      icon: <FileText className="h-6 w-6" />
    },
    {
      category: "Industry Professionals",
      earlyBird: "₹6,000",
      regular: "₹8,000",
      icon: <Briefcase className="h-6 w-6" />
    },
    {
      category: "International Participants",
      earlyBird: "$100",
      regular: "$150",
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
    <section id="registration" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Registration</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Register now for the National Pharmacy Conference 2025 and be part of this exciting event
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Registration Fees</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Category
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Early Bird (Until Feb 15, 2025)
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Regular (After Feb 15, 2025)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {registrationFees.map((fee, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10 text-indigo-600">
                              {fee.icon}
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{fee.category}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900 font-semibold">{fee.earlyBird}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900 font-semibold">{fee.regular}</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
            <div className="bg-indigo-50 rounded-2xl shadow-lg p-8 sticky top-24">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Registration Details</h3>
              
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
                      <span className="font-semibold">Early Bird Deadline:</span> February 15, 2025
                    </p>
                  </div>
                  <div className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-yellow-500 mt-0.5 mr-2 flex-shrink-0" />
                    <p className="text-gray-700 text-sm">
                      <span className="font-semibold">Regular Registration:</span> Until March 10, 2025
                    </p>
                  </div>
                  <div className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-yellow-500 mt-0.5 mr-2 flex-shrink-0" />
                    <p className="text-gray-700 text-sm">
                      <span className="font-semibold">On-site Registration:</span> March 15-17, 2025
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
                    Lunch on all conference days
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                    Certificate of participation
                  </li>
                </ul>
              </div>

              <button className="w-full bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors">
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
              href="mailto:registration@npc2025.edu" 
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