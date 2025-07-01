
import React from 'react';
import { Award, Code, Cloud, Database } from 'lucide-react';

const About = () => {
  return (
    <div id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-700 dark:text-slate-300 text-lg leading-relaxed">
              I'm a passionate Full Stack Developer and AWS Cloud Engineer currently pursuing my 
              B.Tech in Computer Science Engineering. With AWS certification and hands-on experience 
              in cloud architecture, I specialize in building scalable, high-performance applications.
            </p>
            <p className="text-gray-700 dark:text-slate-300 text-lg leading-relaxed">
              My expertise spans from frontend React.js development to backend Spring Boot services, 
              with a strong focus on AWS cloud services, DevOps automation, and Infrastructure as Code. 
              I've successfully architected solutions serving 1,000+ concurrent users with 99.9% uptime.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm">
                AWS Certified Developer
              </span>
              <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm">
                Full Stack Developer
              </span>
              <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm">
                Cloud Architect
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg text-center transform hover:scale-105 transition-transform duration-300 shadow-lg dark:shadow-none border dark:border-slate-700">
              <Cloud className="text-blue-400 mx-auto mb-4" size={48} />
              <h3 className="text-gray-900 dark:text-white font-semibold mb-2">Cloud Computing</h3>
              <p className="text-gray-600 dark:text-slate-400 text-sm">AWS Services & Architecture</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg text-center transform hover:scale-105 transition-transform duration-300 shadow-lg dark:shadow-none border dark:border-slate-700">
              <Code className="text-green-400 mx-auto mb-4" size={48} />
              <h3 className="text-gray-900 dark:text-white font-semibold mb-2">Full Stack Dev</h3>
              <p className="text-gray-600 dark:text-slate-400 text-sm">React.js & Spring Boot</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg text-center transform hover:scale-105 transition-transform duration-300 shadow-lg dark:shadow-none border dark:border-slate-700">
              <Database className="text-purple-400 mx-auto mb-4" size={48} />
              <h3 className="text-gray-900 dark:text-white font-semibold mb-2">Database Design</h3>
              <p className="text-gray-600 dark:text-slate-400 text-sm">MySQL & DynamoDB</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg text-center transform hover:scale-105 transition-transform duration-300 shadow-lg dark:shadow-none border dark:border-slate-700">
              <Award className="text-yellow-400 mx-auto mb-4" size={48} />
              <h3 className="text-gray-900 dark:text-white font-semibold mb-2">DevOps</h3>
              <p className="text-gray-600 dark:text-slate-400 text-sm">CI/CD & Automation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
