import type { Project } from "../data/projects";

export default function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  if (featured) {
    return (
      <div className="col-span-2 flex border-2 border-black rounded-xl overflow-hidden bg-white shadow-[0.3rem_0.4rem_0_0_#000] hover:shadow-[0.5rem_0.6rem_0_0_#000] hover:-translate-y-1 transition-all duration-200">
        <img
          src={project.image}
          alt={project.title}
          className="w-1/2 object-cover"
        />
        <div className="p-8 flex flex-col justify-between gap-4 flex-1">
          <div>
            {/* <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Featured Project</span> */}
            <h3 className="font-bold text-2xl mt-2">{project.title}</h3>
            <p className="text-sm text-gray-600 mt-3 leading-relaxed">
              {project.description}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag.label}
                className="border border-black px-2.5 py-0.5 rounded-full text-white text-xs font-semibold"
                style={{ backgroundColor: tag.bg }}
              >
                {tag.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col border border-black rounded-xl overflow-hidden bg-white shadow-[0.25rem_0.35rem_0_0_#000] hover:shadow-[0.4rem_0.5rem_0_0_#000] hover:-translate-y-1 transition-all duration-200">
      <img
        src={project.image}
        alt={project.title}
        className="w-full aspect-video object-cover"
      />
      <div className="p-4 flex flex-col flex-1 gap-2">
        <h3 className="font-semibold text-base">{project.title}</h3>
        <p className="text-sm text-gray-600 flex-1">{project.description}</p>
        <div className="flex flex-wrap gap-1.5 mt-1">
          {project.tags.map((tag) => (
            <span
              key={tag.label}
              className="border border-black px-2.5 py-0.5 rounded-full text-white text-xs font-semibold"
              style={{ backgroundColor: tag.bg }}
            >
              {tag.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
