
import React from 'react';
import { Award, CheckCircle } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "AWS Certified Developer – Associate",
      issuer: "Amazon Web Services",
      date: "June 2024",
      credentialId: "7ad6a8be7c3c4ab5aea5c8673b9185df",
      color: "bg-orange-500"
    },
    {
      title: "Red Hat Certified System Administrator (RHCSA)",
      issuer: "Red Hat",
      date: "2024",
      credentialId: "Linux/Unix Systems Administration",
      color: "bg-red-500"
    },
    {
      title: "Cisco Certified Network Associate (CCNA)",
      issuer: "Cisco",
      date: "2024",
      credentialId: "Networking and Infrastructure",
      color: "bg-blue-500"
    },
    {
      title: "IT Specialist Certifications",
      issuer: "Certiport",
      date: "2023-2024",
      credentialId: "Python, Java, HTML/CSS Programming",
      color: "bg-green-500"
    }
  ];

  const achievements = [
    "AWS Certified Developer with hands-on cloud architecture experience",
    "4-star ratings in Java, Python, and C++ on HackerRank platform",
    "Completed Data Structures & Algorithms certification",
    "Future Proof Skills and In-Demand Skills certifications"
  ];

  return (
    <div id="certifications" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
          Certifications & Achievements
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 flex items-center gap-2">
              <Award className="text-yellow-400" size={28} />
              Professional Certifications
            </h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border dark:border-slate-700">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 ${cert.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <Award className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-gray-900 dark:text-white font-semibold text-lg mb-2">{cert.title}</h4>
                      <p className="text-gray-700 dark:text-slate-300 mb-1">{cert.issuer}</p>
                      <p className="text-gray-600 dark:text-slate-400 text-sm mb-2">{cert.date}</p>
                      <p className="text-gray-600 dark:text-slate-400 text-xs">{cert.credentialId}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 flex items-center gap-2">
              <CheckCircle className="text-green-400" size={28} />
              Technical Achievements
            </h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white dark:bg-slate-800 p-4 rounded-lg flex items-start gap-3 border dark:border-slate-700">
                  <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-700 dark:text-slate-300">{achievement}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
              <h4 className="text-white font-semibold text-lg mb-2">Key Metrics</h4>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-white">99.9%</div>
                  <div className="text-blue-100 text-sm">Uptime Achieved</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">50%</div>
                  <div className="text-blue-100 text-sm">Cost Reduction</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">15+</div>
                  <div className="text-blue-100 text-sm">Cloud Migrations</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">1000+</div>
                  <div className="text-blue-100 text-sm">Users Supported</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
