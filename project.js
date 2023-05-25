import React from 'react';
import drewsIMG from './Drews.jpg';
import profile from './marcus_peters.jpg';
import spiderman from './spiderman.jpg';
import webdev from './webdev.png';
import guardian from './the-guardian-logo.jpeg';
import messenger from './messenger.png';
import board from './board.jpeg'



const projects = [
  {
    id: 1,
    imageUrl: messenger,
    title: "Drew's Bot",
    link: 'https://github.com/ParcusMeters/drewsfoodbot', // Add the link for each project
  },
  {
    id: 2,
    imageUrl: board,
    title: 'Bop-It! Emulator',
    link: 'https://github.com/ParcusMeters/bopit-emulator', // Add the link for each project
  },
  {
    id: 3,
    imageUrl: guardian,
    title: 'Article Search Engine',
    link: 'https://github.com/ParcusMeters/USYD_search_engine_project', // Add the link for each project
  },
  {
    id: 4,
    imageUrl: webdev,
    title: 'This site',
    link: 'https://example.com/project2', // Add the link for each project
  },
  // Add more project objects as needed
];

const ProjectContainer = () => {
  const handleProjectClick = (link) => {
    window.location.href = link; // Redirect to the project link
  };

  return (
    <div className="project-container">
      {projects.map((project) => (
        <div
          key={project.id}
          className="project-item"
          onClick={() => handleProjectClick(project.link)}
        >
          <img
            src={project.imageUrl}
            alt={project.title}
            className="project-image"
          />
          <div className="project-overlay"><h1 className="project-nametag">{project.title}</h1></div>
        </div>
      ))}
    </div>
  );
};

export default ProjectContainer;
