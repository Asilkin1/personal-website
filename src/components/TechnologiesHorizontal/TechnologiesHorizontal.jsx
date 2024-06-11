import React, { useState, useEffect } from 'react';
import './TechnologiesHorizontal.css';
import technologiesData from './technologiesData.json'

const HorizontalList = () => {
  const [technologies, setTechnologies] = useState([]);

  // useEffect(() => {
  //   fetch('./technologies.json') 
  //     .then(response => response.json())
  //     .then(data => setTechnologies(data))
  //     .catch(error => console.error('Error loading technologies:', error));
  
  
  //   }, []);
    useEffect(() => {
      setTechnologies(technologiesData);
    }, []);
  return (
    <div className="horizontal-list">
      <h2></h2>
      <ul>
        {technologies.map((tech, index) => (
          <li key={index}>
            <span role="img" aria-label={tech.name}>{tech.emoji}</span> {tech.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HorizontalList;
