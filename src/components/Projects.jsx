import React from 'react';

const projects = [
  {
    title: "Mini Store POS System",
    description: "A local inventory and POS system built with React, Node.js, and MySQL.",
    github: "https://github.com/kenloi08/ministore-pos",
    tech: ["React", "Node.js", "MySQL"],
    image: "/images/ministore.png"
  },
  {
    title: "Task Manager App",
    description: "A fullstack task management web app with user authentication and reporting.",
    github: "https://github.com/kenloi08/task-manager",
    tech: ["React", "Node.js", "Express", "MySQL"],
    image: "/images/taskmanager.png"
  },
  {
    title: "Simple Portfolio",
    description: "A lightweight personal portfolio site made with HTML, CSS, and JS.",
    github: "https://github.com/kenloi08/simple-portfolio",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/images/portfolio.png"
  }
];


const Projects = () => {
  return (
    <section id="projects" className="py-12 px-6 bg-gray-50">
      <h3 className="text-2xl font-bold mb-6">Projects</h3>
      <div
        key={index}
        className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-xl">
        <img src={project.image} alt={project.title} className="w-full h-48 object-cover"/>
        <div className="p-4">
          <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
          <p className="text-gray-700 mb-2">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-2">
            {project.tech.map((item, i) => (
              <span
                key={i}
                className="bg-gray-200 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">
                {item}
              </span>
            ))}
          </div>
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;