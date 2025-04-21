import { Project } from '../types/project'

interface ProjectCardProps {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="rounded-lg shadow-md p-4 bg-white">
      <img src={project.image} alt={project.title} className="rounded mb-3" />
      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p className="text-sm text-gray-600 mb-2">{project.description}</p>
      <a href={project.link} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    </div>
  )
}

export default ProjectCard
