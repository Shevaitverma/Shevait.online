// src/pages/Projects.jsx

import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    image: 'path/to/project1.jpg',
    title: 'Todo App',
    description: 'A full-stack application built with the MERN stack, featuring user authentication and management.',
    techStack: ['React', 'Node.js', 'MongoDB'],
  },
  {
    image: 'path/to/project2.jpg',
    title: 'Inventex',
    description: 'Backend authentication service for an inventory management system using JWT.',
    techStack: ['Node.js', 'Express', 'JWT'],
  },
  {
    image: 'path/to/project3.jpg',
    title: 'Note-taking App',
    description: 'Full-stack note-taking application with Django backend and React frontend.',
    techStack: ['Django', 'React', 'SQL'],
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  return (
    <section className="projects py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
        <div className="relative">
          <div className="carousel-container overflow-hidden">
            <div
              className="carousel-wrapper flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide min-w-full flex justify-center p-4" key={index}>
                  <ProjectCard
                    image={project.image}
                    title={project.title}
                    description={project.description}
                    techStack={project.techStack}
                  />
                </div>
              ))}
            </div>
          </div>
          <button
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-transparent border-2 border-gray-600 text-gray-600 p-3 rounded-full shadow-md hover:bg-gray-200 hover:text-gray-800 transition duration-300"
            onClick={prevSlide}
          >
            &lt;
          </button>
          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-transparent border-2 border-gray-600 text-gray-600 p-3 rounded-full shadow-md hover:bg-gray-200 hover:text-gray-800 transition duration-300"
            onClick={nextSlide}
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
