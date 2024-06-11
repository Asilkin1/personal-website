import React, { useEffect, useState } from 'react';
import workExperienceData from '../../data/workExperience.json';

const WorkExperience = () => {
  const [workExperience, setWorkExperience] = useState([]);

  useEffect(() => {
    // Since we're importing the JSON directly, we can set it immediately
    setWorkExperience(workExperienceData);
  }, []);

  return (
    <div>
      <ul>
        {workExperience.map((job, index) => (
          <li key={index}>
            <h3>{job.position} at {job.company}</h3>
            <p>{job.duration}</p>
            <p>{job.details}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkExperience;
