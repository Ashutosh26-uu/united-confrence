import React, { useState } from 'react';
import { Phone, Mail, MapPin, User, MailIcon, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const coordinators = [
    {
      name: "Dr.Feaculity of pharmacy ",
      role: "Conference Chair",
      email: "Feaculity of pharmacy@university.edu",
      phone: "+91 9876543210",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Dr. Feaculity of pharmacy",
      role: "Program Chair",
      email: "Feaculity of pharmacy@university.edu",
      phone: "+91 8765432109",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Dr. Feaculity of pharmacy",
      role: "Scientific Chair",
      email: "Feaculity of pharmacy@university.edu",
      phone: "+91 7654321098",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Dr . Feaculity of pharmacy",
      role: "Finance Chair",
      email: "Feaculity of pharmacy@university.edu",
      phone: "+91 6543210987",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80"
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with our conference organizing team
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Conference Coordinators</h3>
              <div className="space-y-6">
                {coordinators.map((coordinator, index) => (
                  <div key={index} className="flex items-start border border-gray-200 rounded-lg p-5 hover:border-indigo-300 transition-colors">
                    <img 
                      src={coordinator.image} 
                      alt={coordinator.name} 
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900">{coordinator.name}</h4>
                      <p className="text-indigo-600 font-medium mb-2">{coordinator.role}</p>
                      <div className="space-y-1">
                        <div className="flex items-center">
                          <Mail className="h-4 w-4 text-gray-500 mr-2" />
                          <a href={`mailto:${coordinator.email}`} className="text-gray-700 hover:text-indigo-600">
                            {coordinator.email}
                          </a>
                        </div>
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 text-gray-500 mr-2" />
                          <a href={`tel:${coordinator.phone}`} className="text-gray-700 hover:text-indigo-600">
                            {coordinator.phone}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-indigo-600 text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Conference Secretariat</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-indigo-200 mt-0.5 mr-3" />
                  <p className="text-indigo-100">
                    Department of Pharmacy<br />
                    United University<br />
                    Uttar Pradesh, India 211012
                  </p>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-indigo-200 mr-3" />
                  <p className="text-indigo-100">+91 1234567890</p>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-indigo-200 mr-3" />
                  <p className="text-indigo-100">united university .in</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Your full name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MailIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MessageSquare className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Subject of your message"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3">
                      <MessageSquare className="h-5 w-5 text-gray-400" />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>

            <div className="mt-8 bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="font-bold text-gray-900">How do I register for the conference?</h4>
                  <p className="text-gray-700 mt-1">
                    You can register online through our registration page. Early bird rates are available until February 15, 2025.
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="font-bold text-gray-900">What is the deadline for abstract submission?</h4>
                  <p className="text-gray-700 mt-1">
                    The deadline for abstract submission is January 15, 2025.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Where can I find accommodation near the venue?</h4>
                  <p className="text-gray-700 mt-1">
                    We have partnered with several hotels near the venue. Please check our accommodation page for options.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;