import React from 'react';
import { FileText, Download, AlertCircle, CheckCircle, BookOpen } from 'lucide-react';

const Abstracts = () => {
  const guidelines = [
    "Abstracts should be between 1000 - 2000 words in length",
    "Structured abstracts with sections: Background, Objective, Methodology, Results, and Conclusion",
    "Use clear, concise language and avoid jargon",
    "Include 3-5 keywords below the abstract",
    "Do not include references in the abstract",
    "Submitted abstracts must be original and not published elsewhere",
    "All authors must be listed with their affiliations",
    "Presenting author must be clearly indicated"
  ];

  const submissionSteps = [
    {
      step: "1",
      title: "Prepare Abstract",
      description: "Follow the guidelines and format your abstract properly"
    },
    {
      step: "2",
      title: "Complete Online Form",
      description: "Fill out the abstract submission form with all required details"
    },
    {
      step: "3",
      title: "Upload Document",
      description: "Submit your abstract in MS Word or PDF format"
    },
    {
      step: "4",
      title: "Confirmation",
      description: "Receive confirmation email with submission details"
    },
    {
      step: "5",
      title: "Review Process",
      description: "Abstracts will be reviewed by the scientific committee"
    },
    {
      step: "6",
      title: "Notification",
      description: "Authors will be notified of acceptance status"
    }
  ];

  return (
    <section id="abstracts" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Call for Abstracts</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Submit your research abstracts for presentation at the United university Conference 2025
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Submission Guidelines</h3>
              <div className="space-y-4">
                {guidelines.map((guideline, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <p className="text-gray-700">{guideline}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Submission Process</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {submissionSteps.map((step, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-indigo-300 transition-colors">
                    <div className="flex items-center mb-4">
                      <div className="bg-indigo-100 text-indigo-800 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">
                        {step.step}
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900">{step.title}</h4>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-24">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Abstract Resources</h3>
              
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Download Templates</h4>
                <div className="space-y-4">
                  <a 
                    href="#" 
                    className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-indigo-300 hover:bg-indigo-50 transition-colors"
                  >
                    <FileText className="h-8 w-8 text-indigo-600 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">Abstract Template (Word)</p>
                      <p className="text-sm text-gray-500">.docx format</p>
                    </div>
                    <Download className="h-5 w-5 text-gray-400 ml-auto" />
                  </a>
                  <a 
                    href="#" 
                    className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-indigo-300 hover:bg-indigo-50 transition-colors"
                  >
                    <FileText className="h-8 w-8 text-indigo-600 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">Abstract Template (PDF)</p>
                      <p className="text-sm text-gray-500">.pdf format</p>
                    </div>
                    <Download className="h-5 w-5 text-gray-400 ml-auto" />
                  </a>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Important Information</h4>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-yellow-500 mt-0.5 mr-2 flex-shrink-0" />
                    <p className="text-gray-700 text-sm">
                      <span className="font-semibold">Deadline:</span> January 15, 2025
                    </p>
                  </div>
                  <div className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-yellow-500 mt-0.5 mr-2 flex-shrink-0" />
                    <p className="text-gray-700 text-sm">
                      <span className="font-semibold">Notification:</span> January 30, 2025
                    </p>
                  </div>
                  <div className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-yellow-500 mt-0.5 mr-2 flex-shrink-0" />
                    <p className="text-gray-700 text-sm">
                      <span className="font-semibold">Presentation:</span> March 15-17, 2025
                    </p>
                  </div>
                </div>
              </div>

              <button className="w-full bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors">
                Submit Abstract
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-indigo-600 text-white rounded-2xl p-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex-1 mb-6 md:mb-0 md:mr-6">
              <h3 className="text-2xl font-bold mb-2">Need Help?</h3>
              <p className="text-indigo-100">
                If you have any questions about abstract submission, please contact our abstract support team.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href=" united university pharmacy department .in " 
                className="bg-white text-indigo-600 font-bold py-3 px-6 rounded-lg hover:bg-indigo-50 transition-colors text-center"
              >
                Email Support
              </a>
              <a 
                href="tel:+911234567890" 
                className="bg-transparent border-2 border-white text-white font-bold py-3 px-6 rounded-lg hover:bg-white hover:text-indigo-600 transition-colors text-center"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Abstracts;