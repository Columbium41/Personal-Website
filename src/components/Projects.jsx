import ProjectCard from "./ProjectCard";

function Projects({ data }) {
    const projectsList = Object.entries(data.content.portfolio.projects);

    return (
        <div className="projects-section">
            <h2 className="text-center">Projects</h2>
            <div className="card-container-grid">
                {projectsList.map((project) => (
                    <ProjectCard key={project} project={project} />
                ))}
            </div>
        </div>
    )
}

export default Projects;