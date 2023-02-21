import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function ProjectPage({ data, setDocumentTitle }) {
    const params = useParams();
    const projectTitle = params.id;
    const projectsList = Object.entries(data.content.portfolio.projects);
    const navigate = useNavigate();
    
    var projectData = '';
    
    for (const project of projectsList) {
        if (project[0] === projectTitle) {
            projectData = project[1];
        }
    }

    useEffect(() => {
        setDocumentTitle("Charley Liu - " + projectTitle.replace("_", " "));
    }, [])

    return (
        <div className="project-page">
            <h3 className="back-to-projects" onClick={() => {navigate("/projects")}}>
                {'<'} Back to Projects
            </h3>

            <h2 className="align-center">{ projectTitle.replace("_", " ") }</h2>
            <div className="text-section">
                <p>{projectData.long_description}</p>
            </div>

            <div className="project-metadata-container">
                <div className="project-metadata">
                    <h4>Date Created:</h4>
                    <p>{ projectData.date_created }</p>
                </div>

                <div className="project-metadata topics-section">
                    <h4>Topics:</h4>
                    {projectData.topics.map((topic) => (
                        <p className="topic-item" key={topic}>{topic}</p>
                    ))}
                </div>

                {(projectData.repo_link !== null) && 
                <div className="project-metadata">
                    <h4>Github:</h4>
                    <p>
                        <a href={projectData.repo_link} target="_blank">
                            { projectData.repo_link }
                        </a>
                    </p>
                </div>}

                {(projectData.homepage !== null) && 
                <div className="project-metadata">
                    <h4>Website:</h4>
                    <p>
                        <a href={projectData.homepage} target="_blank">
                            { projectData.homepage }
                        </a>
                    </p>
                </div>}
            </div>
                    
            {projectData.thumbnails.map((thumbnail, index) => (
                <img key={index} src={thumbnail} alt={"thumbnail " + index} className="project-thumbnail" />
            ))}
        </div>
    )
}

export default ProjectPage;