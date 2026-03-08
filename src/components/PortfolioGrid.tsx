import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

export default function PortfolioGrid() {
  const [featured, ...rest] = projects;
  return (
    <div className="grid grid-cols-2 gap-6 p-8">
      <ProjectCard project={featured} featured />
      {rest.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
}
