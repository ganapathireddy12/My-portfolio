
import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react';

const Contact = () => {
  return (
    <div id="contact" className="py-20 px-4 bg-gray-50 dark:bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
          Get In Touch
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Let's Connect</h3>
            <p className="text-gray-700 dark:text-slate-300 text-lg mb-8 leading-relaxed">
              I'm always interested in new opportunities, whether it's a challenging 
              project, a full-time position, or just a tech conversation. Feel free 
              to reach out if you'd like to collaborate or discuss cloud architecture, 
              full-stack development, or AWS solutions.
            </p>
            
            <div className="space-y-4">
              <a 
                href="mailto:reddyganapathi317@gmail.com"
                className="flex items-center gap-4 text-gray-700 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 group"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-200">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-gray-600 dark:text-slate-400">reddyganapathi317@gmail.com</div>
                </div>
              </a>
              
              <a 
                href="tel:7893773514"
                className="flex items-center gap-4 text-gray-700 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 group"
              >
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center group-hover:bg-green-500 transition-colors duration-200">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <div className="font-semibold">Phone</div>
                  <div className="text-gray-600 dark:text-slate-400">+91 7893773514</div>
                </div>
              </a>
              
              <div className="flex items-center gap-4 text-gray-700 dark:text-slate-300">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <div className="font-semibold">Location</div>
                  <div className="text-gray-600 dark:text-slate-400">Kutukuluru, Andhra Pradesh, India</div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Online Presence</h3>
            <div className="grid grid-cols-2 gap-4">
              <a 
                href="https://github.com/ganapathireddy12"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-slate-800 p-6 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors duration-200 group border dark:border-slate-700"
              >
                <Github className="text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400" size={32} />
                <h4 className="text-gray-900 dark:text-white font-semibold mb-2">GitHub</h4>
                <p className="text-gray-600 dark:text-slate-400 text-sm">View my code and projects</p>
              </a>
              
              <a 
                href="https://linkedin.com/in/padala-ganapathi-reddy/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-slate-800 p-6 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors duration-200 group border dark:border-slate-700"
              >
                <Linkedin className="text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400" size={32} />
                <h4 className="text-gray-900 dark:text-white font-semibold mb-2">LinkedIn</h4>
                <p className="text-gray-600 dark:text-slate-400 text-sm">Professional network</p>
              </a>
              
              <a 
                href="https://ganapathi-reddy-123.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-slate-800 p-6 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors duration-200 group col-span-2 border dark:border-slate-700"
              >
                <ExternalLink className="text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400" size={32} />
                <h4 className="text-gray-900 dark:text-white font-semibold mb-2">Portfolio Website</h4>
                <p className="text-gray-600 dark:text-slate-400 text-sm">Explore my complete portfolio and latest work</p>
              </a>
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
              <h4 className="text-white font-semibold text-lg mb-2">Currently Available</h4>
              <p className="text-blue-100 mb-4">
                Open to full-time opportunities in AWS Cloud Engineering, 
                Full Stack Development, and DevOps roles.
              </p>
              <div className="flex gap-2">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">Available</span>
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">Remote</span>
                <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm">Relocation OK</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-slate-600 to-transparent mb-8"></div>
          <p className="text-gray-600 dark:text-slate-400">
            © 2024 Ganapathi Reddy Padala. Built with React.js and Tailwind CSS.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
