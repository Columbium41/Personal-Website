import { Link } from "react-router-dom";

function ProjectCard({ project }) {
    const projectTitle = project[0];
    const projectData = project[1];

    return (
        <Link to={"/projects/" + projectTitle} className="card-link">
            <div className="project-card">
                <img src={"images/" + projectTitle.toLowerCase() + ".png"} 
                    alt={projectTitle + " thumbnail"} 
                    className="project-thumbnail-card" />
                
                <div className="project-card-text">
                    <h3>{projectTitle.replace("_", " ")}</h3>
                    <p>{projectData.description}</p>
                </div>
            </div>
        </Link>
    )
}

export default ProjectCard;