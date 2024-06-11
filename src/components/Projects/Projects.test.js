import React from 'react';
import { render, screen } from '@testing-library/react';
import Projects from './Projects';
import projectsData from '../../data/projects.json';

describe('Projects Component', () => {
  test('renders project items', () => {
    render(<Projects />);

    projectsData.forEach((project) => {
      expect(screen.getByText(project.name)).toBeInTheDocument();
      expect(screen.getByText(project.description)).toBeInTheDocument();
      expect(screen.getByText(`Technologies used: ${project.technologies.join(', ')}`)).toBeInTheDocument();
      expect(screen.getByText('View Project').closest('a')).toHaveAttribute('href', project.link);
    });
  });
});
