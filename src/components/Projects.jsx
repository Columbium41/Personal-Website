import ProjectCard from "./ProjectCard";
import { useEffect } from "react";
import AnimatedPage from "./AnimatedPage";
import '../css/Projects.css';

/**
 * A function that returns an <AnimatedPage></AnimatedPage> component containing a page displaying a list of <ProjectCard></ProjectCard> components
 * 
 * @param {Object} data The app data fetched from App.jsx
 * @param {Function} setDocumentTitle A function that sets the web page's document title
 * 
 * @returns An <AnimatedPage></AnimatedPage> component containing a page displaying a list of <ProjectCard></ProjectCard> components
 */
function Projects({ data, setDocumentTitle }) {
    // Obtain the list of projects from portfolio data
    const projectsList = Object.entries(data.content.portfolio.projects);

    // Change the document's title on render
    useEffect(() => {
        setDocumentTitle("Projects");
    }, [])

    return (
        <AnimatedPage className={"projects-section"}>
            <h1 className="text-center">Projects</h1>
            <div className="card-container-grid">
                {/* Dynamically render each project as a <ProjectCard></ProjectCard> component */}
                {projectsList.map((project) => (
                    <ProjectCard key={project} project={project} />
                ))}
            </div>
        </AnimatedPage>
    )
}

export default Projects;