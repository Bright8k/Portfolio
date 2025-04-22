import React from 'react';
import styled from 'styled-components';
import { PageWrapper } from '../styles/GlobalStyles';

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  padding: 2rem 0;
`;

const ProjectCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
  background-color: #fff;

  h3 {
    margin-top: 0;
  }

  a {
    color: #007acc;
    text-decoration: none;
  }
`;

const Projects: React.FC = () => (
  <PageWrapper>
    <h2>Projects</h2>
    <ProjectsGrid>
      <ProjectCard>
        <h3>Project 1</h3>
        <p>Description of the first project.</p>
        <a href="#">View Project</a>
      </ProjectCard>
      <ProjectCard>
        <h3>Project 2</h3>
        <p>Description of the second project.</p>
        <a href="#">View Project</a>
      </ProjectCard>
      <ProjectCard>
        <h3>Project 3</h3>
        <p>Description of the third project.</p>
        <a href="#">View Project</a>
      </ProjectCard>
    </ProjectsGrid>
  </PageWrapper>
);

export default Projects;
