import React, { useState } from 'react';

const projects = [
  {
    title: "Mini Store POS System",
    description: "A local inventory and POS system built with React, Node.js, and MySQL.",
    image: "/images/minipos.png",
    tech: ["React", "Node.js", "MySQL"],
    github: "https://github.com/kenloi08/ministore-pos"
  },
  {
    title: "Task Manager App",
    description: "A fullstack task management web app with user authentication and reporting.",
    image: "/images/taskmanager.png",
    tech: ["React", "Express", "MySQL"],
    github: "https://github.com/kenloi08/task-manager"
  },
  {
    title: "Simple Portfolio",
    description: "A lightweight personal portfolio site made with HTML, CSS, and JS.",
    image:"/images/portfolio.png",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/kenloi08/simple-portfolio"
  },
  {
    title: "Backup Application",
    description: "Internal Tools for Aftersales re-occuring task created using Python",
    image:"/images/backupapp.png",
    tech: ["Python"],
    github: "https://github.com/kenloi08/BackupApplication"
  }
];

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <section id="projects" className="py-12 px-6 bg-gray-50">
      <h3 className="text-3xl font-bold text-center mb-10">Projects</h3>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => {
          const imageSrc = `{import.meta.env.BASE_URL}${project.image}`;
          return (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02]"
            >
              <img
                src={imageSrc}
                alt={project.title}
                onClick={() => openModal(imageSrc)}
                className="w-full h-48 object-cover cursor-pointer"
              />
              <div className="p-4">
                <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                <p className="text-gray-700 mb-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech?.map((tech, i) => (
                    <span key={i} className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline font-medium"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="relative bg-white rounded-lg shadow-lg max-w-3xl w-[90%] p-4">
            <button
              onClick={closeModal}
              className="absolute top-2 right-4 text-gray-700 hover:text-red-600 text-2xl font-bold"
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Preview"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
