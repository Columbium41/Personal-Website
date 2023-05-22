import { useParams } from "react-router-dom";
import { useEffect } from "react";
import NotFound from "./NotFound";
import AnimatedPage from "./AnimatedPage";
import { Link } from "react-router-dom";

/**
 * A function that returns an <AnimatedPage></AnimatedPage> component containing a page displaying a project
 * 
 * @param {Object} data The app data fetched from App.jsx
 * @param {Function} setDocumentTitle A function that sets the web page's document title
 * 
 * @returns {JSX.Element} Returns an <AnimatedPage></AnimatedPage> component containing a page displaying a project
 */
function ProjectPage({ data, setDocumentTitle }) {
    // Get project title from URL params
    const params = useParams();
    const projectTitle = params.id;

    // Find the project corresponding to the given project title
    const projectsList = Object.entries(data.content.portfolio.projects);
    var projectData = '';
    
    for (const project of projectsList) {
        if (project[0] === projectTitle) {
            projectData = project[1];
        }
    }

    // Change the web page's document title on render if the project exists
    useEffect(() => {
        if (projectData !== '') {
            setDocumentTitle(projectTitle.replace("_", " "));
        }
    }, [])

    return (
        <AnimatedPage>
            {/* Render the project page if the project given from the URL exists */}
            { (projectData !== "") && 
            <div className="project-page">
                {/* Link back to projects section */}
                <Link to={"/projects"}>
                    <h3 className="back-to-link">
                        {'<'} Projects
                    </h3>
                </Link>

                {/* Project title and long description */}
                <h2 className="align-center">{ projectTitle.replace("_", " ") }</h2>
                <div className="text-section">
                    <p>{projectData.long_description}</p>
                </div>

                {/* Project Metadata */}
                <div className="project-metadata-container">
                    {/* Date Created */}
                    <div className="project-metadata">
                        <h4>Date Created:</h4>
                        <p>{ projectData.date_created }</p>
                    </div>

                    {/* Topics */}
                    <div className="project-metadata topics-section">
                        <h4>Topics:</h4>
                        {/* Dynamically render each topic */}
                        {projectData.topics.map((topic) => (
                            <p className="topic-item" key={topic}>{topic}</p>
                        ))}
                    </div>
                    
                    {/* Additional Links */}
                    {Object.entries(projectData.links).map((array, index) => (
                        <div className="project-metadata" key={index}>
                            <h4>{ array[0].replace("_", " ") + ":" }</h4>
                            <p className="break-word project-metadata-link">
                                <a href={ array[1] } target="_blank" className="text-link" >{ array[1] }</a>
                            </p>
                        </div>
                    ))}
                </div>
                
                {/* Project thumbnail(s) */}
                {projectData.thumbnails.map((thumbnail, index) => (
                    <img key={index} src={thumbnail} alt={"thumbnail " + index} className="project-thumbnail" />
                ))}
            </div>}

            {/* Render a <NotFound></NotFound> component if the project doesn't exist */}
            {(projectData === "") && <NotFound setDocumentTitle={setDocumentTitle} />}
        </AnimatedPage>
    )
}

export default ProjectPage;