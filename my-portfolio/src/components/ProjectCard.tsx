import { Project } from '../types/project'
// src/components/ProjectCard.tsx

import styled from 'styled-components';

// Styled-components (place this at the top)
const ProjectCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 12px;
  overflow: hidden;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }

  div {
    padding: 1rem;

    h3 {
      margin-top: 0;
      color: #222; // Update text color here
    }

    p {
      color: #555; // Update description color here
      margin-bottom: 0.5rem;
    }

    a {
      color: #007acc; // Link color here
      text-decoration: none;
      font-weight: bold;

      &:hover {
        text-decoration: underline;
        color: #005fa3;
      }
    }
  }
`;


interface ProjectCardProps {
  project: Project
}

const ProjectCardComponent = ({ project }: ProjectCardProps) => {
  return (
    <ProjectCard>
      <img src={project.image} alt={project.title} className="rounded mb-3" />
      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p className="text-sm text-black-600 mb-2">{project.description}</p>
      <a href={project.link} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    </ProjectCard>
  )
}
export default ProjectCardComponent;
