import React from 'react';
import { Handshake, Trophy, Users } from 'lucide-react';

const Sponsors = () => {
  const sponsorLevels = [
    {
      level: "Platinum Sponsors",
      icon: <Trophy className="h-6 w-6 text-gray-400" />,
      sponsors: [
        { name: "PharmaTech Solutions", logo: "https://placehold.co/200x100?text=PharmaTech" },
        { name: "MediCare Industries", logo: "https://placehold.co/200x100?text=MediCare" }
      ]
    },
    {
      level: "Gold Sponsors",
      icon: <Trophy className="h-6 w-6 text-yellow-500" />,
      sponsors: [
        { name: "BioResearch Labs", logo: "https://placehold.co/180x90?text=BioResearch" },
        { name: "Clinical Trials Inc", logo: "https://placehold.co/180x90?text=Clinical+Trials" },
        { name: "DrugDev Corporation", logo: "https://placehold.co/180x90?text=DrugDev" }
      ]
    },
    {
      level: "Silver Sponsors",
      icon: <Trophy className="h-6 w-6 text-gray-300" />,
      sponsors: [
        { name: "Pharmaceutical Journal", logo: "https://placehold.co/150x75?text=Pharm+Journal" },
        { name: "HealthTech Solutions", logo: "https://placehold.co/150x75?text=HealthTech" },
        { name: "University Press", logo: "https://placehold.co/150x75?text=Uni+Press" },
        { name: "LabEquip Suppliers", logo: "https://placehold.co/150x75?text=LabEquip" }
      ]
    },
    {
      level: "Academic Partners",
      icon: <Users className="h-6 w-6 text-indigo-600" />,
      sponsors: [
        { name: "National Pharmacy Institute", logo: "https://placehold.co/150x75?text=Nat+Pharm+Inst" },
        { name: "International Pharma Society", logo: "https://placehold.co/150x75?text=Int+Pharm+Soc" }
      ]
    }
  ];

  const sponsorshipBenefits = [
    "Logo placement on conference website and printed materials",
    "Exhibition booth at the conference venue",
    "Speaking opportunities during sessions",
    "Networking with pharmaceutical professionals",
    "Access to attendee list (post-conference)",
    "Branding on conference badges and signage"
  ];

  return (
    <section id="sponsors" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Sponsors</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We thank our generous sponsors who make this conference possible
          </p>
        </div>

        <div className="space-y-16">
          {sponsorLevels.map((level, levelIndex) => (
            <div key={levelIndex}>
              <div className="flex items-center justify-center mb-8">
                <div className="mr-3">
                  {level.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{level.level}</h3>
              </div>
              <div className={`grid grid-cols-1 ${level.level === 'Platinum Sponsors' ? 'md:grid-cols-2' : level.level === 'Gold Sponsors' ? 'md:grid-cols-3' : 'md:grid-cols-4'} gap-8`}>
                {level.sponsors.map((sponsor, sponsorIndex) => (
                  <div key={sponsorIndex} className="flex flex-col items-center">
                    <div className="bg-gray-100 border-2 border-dashed rounded-xl w-full h-24 flex items-center justify-center text-gray-500 mb-4">
                      {sponsor.logo.includes('placehold') ? (
                        <span className="text-center px-2">{sponsor.name}</span>
                      ) : (
                        <img src={sponsor.logo} alt={sponsor.name} className="max-h-16" />
                      )}
                    </div>
                    <p className="text-gray-700 font-medium">{sponsor.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-indigo-50 rounded-2xl p-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex-1 mb-8 md:mb-0 md:mr-8">
              <div className="flex items-center mb-4">
                <Handshake className="h-8 w-8 text-indigo-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Become a Sponsor</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Join us as a sponsor and connect with pharmaceutical professionals, researchers, 
                and industry leaders. Your support helps advance pharmaceutical education and research.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {sponsorshipBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                    </div>
                    <p className="ml-3 text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 w-full md:w-96">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Sponsorship Packages</h4>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h5 className="font-bold text-gray-900">Platinum</h5>
                  <p className="text-indigo-600 font-bold">₹2,00,000</p>
                  <p className="text-sm text-gray-600 mt-2">Maximum visibility and branding opportunities</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h5 className="font-bold text-gray-900">Gold</h5>
                  <p className="text-indigo-600 font-bold">₹1,00,000</p>
                  <p className="text-sm text-gray-600 mt-2">Prominent placement and exhibition space</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h5 className="font-bold text-gray-900">Silver</h5>
                  <p className="text-indigo-600 font-bold">₹50,000</p>
                  <p className="text-sm text-gray-600 mt-2">Logo placement and conference materials</p>
                </div>
              </div>
              <button className="w-full mt-6 bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-indigo-700 transition-colors">
                Download Sponsorship Brochure
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Media Partners</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {["Pharma Times", "Journal of Pharmacy", "Health News Network", "Science Today"].map((partner, index) => (
              <div key={index} className="bg-gray-100 border-2 border-dashed rounded-xl w-40 h-20 flex items-center justify-center text-gray-500">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;