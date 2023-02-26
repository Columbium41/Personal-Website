import { Link } from "react-router-dom";

/**
 * A function that returns a <Link></Link> element containing a project's title and short description and a redirect
 * 
 * @param {Object} project The project data to render
 * 
 * @returns {JSX.Element} A <Link></Link> element that redirects to a <ProjectPage><ProjectPage/> component 
 *                        and contains a project's title and short description 
 */
function ProjectCard({ project }) {
    const projectTitle = project[0];
    const projectData = project[1];

    return (
        <Link to={"/Personal-Website/projects/" + projectTitle} className="card-link">
            <div className="project-card">
                {/* Project Thumbnail */}
                <div>
                    <img src={"/Personal-Website/images/" + projectTitle.toLowerCase() + ".png"} 
                        alt={projectTitle + " thumbnail"} 
                        className="project-thumbnail-card" />
                </div>
                
                {/* Project title and short description */}
                <div className="project-card-text">
                    <h3>{projectTitle.replace("_", " ")}</h3>
                    <p>{projectData.description}</p>
                </div>
            </div>
        </Link>
    )
}

export default ProjectCard;