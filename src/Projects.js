import './Projects.css';
import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  
  const projects = [
    {
      id: 1,
      imageUrl: '/images/project1.jpeg',
      title: 'TO-DO list',
      description: 'this is small scale project to start my career as a developer where it takes input of to do list and display the to do list and gives option of edit and delete',
    },
    {
      id: 2,
      imageUrl: '/images/project2.png',
      title: 'Personalised website',
      description: 'Created a website for a person to showcase the projects they done and contact page',
    },
    {
      id: 3,
      imageUrl: '/images/project3.jpeg',
      title: 'Trainer website',
      description: 'This is a customized website for a professional bodybuilding and fitness trainer where he can manages his client through his program',
    },
    {
        id: 4,
        imageUrl: '/images/project3.jpeg',
        title: 'Trainer website',
        description: 'This is a customized website for a professional bodybuilding and fitness trainer where he can manages his client through his program',
      },
    
  ];

  return (
    <div id="project" className="projects-container">
      
      {projects.map((project) => (
       
        <ProjectCard
          key={project.id}
          projectId={project.id}
          imageUrl={project.imageUrl}
          title={project.title}
          description={project.description}
        />

      ))}
      
    </div>
  );
};

export default Projects;
