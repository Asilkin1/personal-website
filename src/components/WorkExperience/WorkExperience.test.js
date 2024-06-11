import React from 'react';
import { render, screen } from '@testing-library/react';
import WorkExperience from './WorkExperience';
import workExperienceData from '../../data/workExperience.json';

describe('WorkExperience Component', () => {
  test('renders work experience items', () => {
    render(<WorkExperience />);
    
    workExperienceData.forEach((job) => {
      expect(screen.getByText(`${job.position} at ${job.company}`)).toBeInTheDocument();
      expect(screen.getByText(job.duration)).toBeInTheDocument();
      expect(screen.getByText(job.details)).toBeInTheDocument();
    });
  });
});
