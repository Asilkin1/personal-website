import React, { useEffect, useState } from 'react';
import projectsData from '../../data/projects.json';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Since we're importing the JSON directly, we can set it immediately
    setProjects(projectsData);
  }, []);

  return (
    <div>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p>
              <strong>Technologies used:</strong> {project.technologies.join(', ')}
            </p>
            <p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
