import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "AWS Cloud Services",
      icon: "aws.svg", // Place in /public/aws.svg
      skills: ["EC2", "S3", "Lambda", "RDS", "VPC", "API Gateway", "CloudWatch", "IAM", "CloudFormation", "CodePipeline"],
      color: "bg-orange-500"
    },
    {
      title: "Programming Languages",
      icon: "python.svg", // ✅ Correct path if inside /public/
      skills: ["Java", "Python", "JavaScript", "TypeScript", "C++", "HTML5", "CSS3", "SQL", "Bash"],
      color: "bg-blue-500"
    },
    {
      title: "Frontend Technologies",
      icon: "react.svg",
      skills: ["React.js", "Redux", "Angular", "Bootstrap", "Tailwind CSS", "AJAX", "Responsive Design"],
      color: "bg-green-500"
    },
    {
      title: "Backend & DevOps",
      icon: "docker.svg",
      skills: ["Spring Boot", "Node.js", "Express.js", "Docker", "Kubernetes", "Jenkins", "Terraform", "Ansible"],
      color: "bg-purple-500"
    },
    {
      title: "Databases",
      icon: "mysql.svg",
      skills: ["MySQL", "MongoDB", "DynamoDB", "Oracle", "PostgreSQL", "Database Optimization"],
      color: "bg-red-500"
    }
  ];

  return (
    <div id="skills" className="py-20 px-4 bg-gray-50 dark:bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
          Technical Skills
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border dark:border-slate-700"
            >
              <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                <img 
                  src={`/${category.icon}`} // ✅ Icon path from /public/
                  alt={category.title} 
                  className="w-6 h-6"
                />
              </div>
              <h3 className="text-gray-900 dark:text-white font-semibold text-lg mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-slate-300 px-3 py-1 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
