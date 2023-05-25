import React from 'react';
import drewsIMG from './Drews.jpg';
import profile from './marcus_peters.jpg';
import spiderman from './spiderman.jpg';
import linkedin from './linkedIN.png';
import git from './github.jpeg';
import mail from './mail.png';

let github = './github.jpeg';


const projects = [
  {
    id: 1,
    imageUrl: git,
    title: "GitHub",
    link: "https://github.com/ParcusMeters", // Add the link for each project
  },
  {
    id: 2,
    imageUrl: linkedin,
    title: 'LinkedIn',
    link: 'https://www.linkedin.com/in/marcus-peters0/', // Add the link for each project
  },
  {
    id: 3,
    imageUrl: mail,
    title: 'Email',
    link: 'mailto:jacko.peters2001@gmail.com', // Add the link for each project
  },

  // Add more project objects as needed
];

const ProjectContainer = () => {
  const handleProjectClick = (link) => {
    window.location.href = link; // Redirect to the project link
  };

  return (
    <div className="link-container">
      {projects.map((project) => (
        <div
          key={project.id}
          className="link-item"
          onClick={() => handleProjectClick(project.link)}
        >
          <img
            src={project.imageUrl}
            alt={project.title}
            className="link-image"
          />
          <div className="link-overlay"><h1 className="link-nametag">{project.title}</h1></div>
        </div>
      ))}
    </div>
  );
};

export default ProjectContainer;
