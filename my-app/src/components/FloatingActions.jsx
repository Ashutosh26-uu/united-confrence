import React, { useState } from 'react';
import { MessageCircle, Phone, Mail, Share2 } from 'lucide-react';

const FloatingActions = () => {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    { icon: MessageCircle, label: 'Chat', color: 'bg-green-500', action: () => console.log('Chat feature coming soon!') },
    { icon: Phone, label: 'Call', color: 'bg-blue-500', action: () => window.open('tel:+911234567890') },
    { icon: Mail, label: 'Email', color: 'bg-red-500', action: () => window.open('mailto:uniteduniversity@edu.in') },
    { icon: Share2, label: 'Share', color: 'bg-purple-500', action: () => navigator.share ? navigator.share({title: 'United University Pharmacy Conference 2025', url: window.location.href}) : navigator.clipboard.writeText(window.location.href) }
  ];

  return (
    <div className="fixed bottom-24 right-8 z-40">
      <div className={`flex flex-col-reverse gap-3 transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
        {actions.map((action, index) => (
          <button
            key={action.label}
            onClick={action.action}
            className={`${action.color} text-white p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300 group relative`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <action.icon className="h-5 w-5" />
            <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              {action.label}
            </span>
          </button>
        ))}
      </div>
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300 ${isOpen ? 'rotate-45' : ''}`}
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    </div>
  );
};

export default FloatingActions;