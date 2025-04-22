import React from 'react';
import styled from 'styled-components';
import { PageWrapper } from '../styles/GlobalStyles';
import MusicHubReport from '../assets/MusicHub_ Final Group Project Report and Prototype.pdf';
import project1Img from '../assets/react.svg';
import project2Img from '../assets/react.svg';
import project3Img from '../assets/react.svg';
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
      <img src={project1Img} alt="Project 1" />
        <h3>Project 1</h3>
        <p>Description of the first project.</p>
        <a href="https://github.com/Sithsdoc/Adventour-App">View Project</a>
      </ProjectCard>
      <ProjectCard>
      <img src={project2Img} alt="Project 2" />
        <h3>Project 2</h3>
        <p>Description of the second project.</p>
        <a href={MusicHubReport} target="_blank" rel="noopener noreferrer">View Project</a> 
      </ProjectCard>
      <ProjectCard>
      <img src={project3Img} alt="Project 3" />
        <h3>Project 3</h3>
        <p>Description of the third project.</p>
        <a href="#">View Project</a>
      </ProjectCard>
    </ProjectsGrid>
  </PageWrapper>
);

export default Projects;
