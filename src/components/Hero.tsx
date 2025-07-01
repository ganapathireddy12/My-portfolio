
import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="hero" className="min-h-screen flex items-center justify-center relative px-4 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Ganapathi Reddy Padala
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-slate-300 mb-6">
            AWS Cloud Engineer & Full Stack Developer
          </h2>
          <p className="text-lg text-gray-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Passionate Computer Science undergraduate specializing in AWS cloud architecture, 
            serverless computing, and full-stack development. AWS Certified Developer with 
            proven expertise in building scalable, high-performance applications.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a 
            href="mailto:reddyganapathi317@gmail.com"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            <Mail size={20} />
            Contact Me
          </a>
          <a 
            href="https://github.com/ganapathireddy12"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-600 hover:bg-gray-700 dark:bg-slate-700 dark:hover:bg-slate-600 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            <Github size={20} />
            GitHub
          </a>
          <a 
            href="https://linkedin.com/in/padala-ganapathi-reddy/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-700 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
          <a 
            //href="https://ganapathi-reddy-123.vercel.app"
            href="https://github.com/ganapathireddy12/My-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            <ExternalLink size={20} />
            Portfolio
          </a>
        </div>

        <button 
          onClick={() => scrollToSection('about')}
          className="animate-bounce text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
        >
          <ChevronDown size={32} />
        </button>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>
    </div>
  );
};

export default Hero;
