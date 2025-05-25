import React from 'react';

const projects = [
  {
    title: "Mini Store POS System",
    description: "A local inventory and POS system built with React, Node.js, and MySQL.",
    github: "https://github.com/kenloi08/ministore-pos",
    tech: ["React", "Node.js", "MySQL"]
  },
  {
    title: "Task Manager App",
    description: "A fullstack task management web app with user authentication and reporting.",
    github: "https://github.com/kenloi08/task-manager",
    tech: ["PHP", "MySQL"]
  },
  {
    title: "Simple Portfolio",
    description: "A lightweight personal portfolio site made with HTML, CSS, and JS.",
    github: "https://github.com/kenloi08/simple-portfolio",
    tech: ["HTML", "CSS", "JavaScript"]
  },
    {
    title: "Backup Application",
    description: "Internal Tools for Aftersales Re-occuring task using Python.",
    github: "https://github.com/kenloi08/BackupApplication",
    tech: ["Python"]
  }
];


const Projects = () => {
  return (
    <section id="projects" className="py-12 px-6 bg-gray-50">
      <h3 className="text-2xl font-bold mb-6">Projects</h3>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-4">
            <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
            <p className="text-gray-700 mb-2">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-2">
              {project.tech.map((item, i) => (
                <span
                  key={i}
                  className="bg-gray-200 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full"
                >
                  {item}
                </span>
                ))}
              </div>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View on GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;