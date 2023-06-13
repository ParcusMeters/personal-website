import React from 'react';
import resume from './resume.png';
import linkedin from './linkedIN.png';
import git from './github.jpeg';
import mail from './email.png';

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
    link: 'mailto:mp925@cornell.edu', // Add the link for each project
  },
  {
    id: 4,
    imageUrl: resume,
    title: 'CV',
    link: 'https://1drv.ms/b/s!AinwjymvY2WfhPQ5G6A9fibQnre8zQ?e=8Hj06c', // Add the link for each project
  },

  // Add more project objects as needed
];

const ProjectContainer = () => {
  const handleProjectClick = (link) => {
    window.open(link); // Redirect to the project link
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
