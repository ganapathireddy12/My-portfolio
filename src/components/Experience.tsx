
import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "AWS Cloud Engineer & DevOps Specialist",
      company: "TechnicalHub",
      location: "Surampalem, AP",
      period: "June 2024 – Present",
      achievements: [
        "Deployed and managed AWS infrastructure using Terraform and CloudFormation",
        "Built CI/CD pipelines with Jenkins and AWS CodePipeline for smoother deployments",
        "Used AWS Lambda, API Gateway, and DynamoDB to build cost-effective serverless apps",
        "Configured user authentication with AWS Cognito and managed domains via Route 53",
        "Handled S3 for static hosting, set up load balancers, and monitored systems using CloudWatch"
      ]
    },
    {
      title: "System Administrator",
      company: "TechnicalHub", 
      location: "Surampalem, AP",
      period: "May 2023 – June 2024",
      achievements: [
        "Managed Red Hat-based Linux servers, performing user management, file system permissions, and security hardening",
        "Created and managed LVM volumes, mounted file systems, and configured persistent storage",
        "Automated system tasks using `crontab`, improving operational efficiency by 60%",
        "Cracked and recovered root passwords and troubleshooted boot-level issues using GRUB rescue and `chroot`",
        "Configured containerized environments using Docker and deployed apps to AWS ECS, improving resource utilization by 50%"
      ]
    }
  ];

  return (
    <div id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
          Professional Experience
        </h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border dark:border-slate-700">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{exp.title}</h3>
                  <div className="flex items-center gap-4 text-gray-600 dark:text-slate-300">
                    <div className="flex items-center gap-2">
                      <Briefcase size={16} />
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-400/10 px-4 py-2 rounded-lg">
                  <Calendar size={16} />
                  <span>{exp.period}</span>
                </div>
              </div>
              
              <ul className="space-y-3">
                {exp.achievements.map((achievement, achIndex) => (
                  <li key={achIndex} className="text-gray-700 dark:text-slate-300 flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
