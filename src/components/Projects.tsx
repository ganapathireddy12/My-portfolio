
import React from 'react';
import { Github, ExternalLink, Brain, CloudRain } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Diet Planner",
      description: "Full-stack AI application that generates personalized daily meal plans based on user health metrics and dietary preferences using Gemini AI API.",
      icon: <Brain className="text-purple-400" size={32} />,
      tech: ["React.js", "Node.js", "Gemini AI API", "Tailwind CSS", "Express.js", "Vercel"],
      features: [
        "AI-driven personalized meal planning",
        "Dynamic form for health metrics collection",
        "Responsive mobile-friendly design",
        "Real-time AI response rendering"
      ],
      github: "#",
      live: "#",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Weather Forecast Web App",
      description: "A responsive weather forecast app built with HTML, CSS, and JavaScript. Fetches and displays real-time weather data using the OpenWeatherMap API.",
      icon: <CloudRain className="text-blue-400" size={32} />,
      tech: ["HTML", "CSS", "JavaScript", "OpenWeatherMap API"],
      features: [
        "Live weather search by city name",
        "Dynamic weather cards with temperature, humidity, and more",
        "Glassmorphism UI with responsive 2-column layout",
        "Animated cloud-themed background",
        "Dark and light mode toggle with smooth transitions"
      ],
      github: "https://github.com/ganapathireddy12/weather-forecast01",
      live: "https://weather-forecast01.vercel.app/",
    // github: "https://github.com/ganapathireddy12/weather-forecast01",
      //live: "",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <div id="projects" className="py-20 px-4 bg-gray-50 dark:bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
          Featured Projects
        </h2>
        
        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border dark:border-slate-700">
              <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
              
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  {project.icon}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                </div>
                
                <p className="text-gray-700 dark:text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-gray-900 dark:text-white font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featIndex) => (
                      <li key={featIndex} className="text-gray-600 dark:text-slate-400 text-sm flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-slate-300 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href={project.github}
                    className="flex items-center gap-2 text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a 
                    href={project.live}
                    className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
