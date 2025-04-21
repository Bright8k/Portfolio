// src/pages/Projects.tsx

import styled from 'styled-components';

const ProjectsContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #f9f9f9;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  color: #555;
  font-size: 1.1rem;
`;

const ProjectLink = styled.a`
  display: inline-block;
  margin-top: 1rem;
  padding: 0.8rem 1.5rem;
  background-color: #007BFF;
  color: white;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: bold;

  &:hover {
    background-color: #0056b3;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const Projects = () => {
  return (
    <ProjectsContainer>
      <Title>My Projects</Title>
      <ProjectGrid>
        <ProjectCard>
          <ProjectTitle>Project One</ProjectTitle>
          <ProjectDescription>This project involves React and Node.js to build a dynamic web application.</ProjectDescription>
          <ProjectLink href="https://github.com/project1">View Project</ProjectLink>
        </ProjectCard>
        <ProjectCard>
          <ProjectTitle>Project Two</ProjectTitle>
          <ProjectDescription>A full-stack application that helps users track their daily habits.</ProjectDescription>
          <ProjectLink href="https://github.com/project2">View Project</ProjectLink>
        </ProjectCard>
        {/* Add more projects here */}
      </ProjectGrid>
    </ProjectsContainer>
  );
};

export default Projects;
