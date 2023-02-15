import ProjectCard from "./ProjectCard";
import { useEffect } from "react";

function Projects({ data, setDocumentTitle }) {
    const projectsList = Object.entries(data.content.portfolio.projects);
    useEffect(() => {
        setDocumentTitle("Charley Liu - Projects");
    }, [])

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