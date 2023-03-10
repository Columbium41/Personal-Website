import ProjectCard from "./ProjectCard";
import { useEffect, useState } from "react";
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
    const allProjects = Object.entries(data.content.portfolio.projects);

    const [searchQuery, setSearchQuery] = useState('');
    const [projects, setProjects] = useState(allProjects);
    
    // Change the document's title on render
    useEffect(() => {
        setDocumentTitle("Projects");
    }, [])

    // Use effect to show different projects when search query is changed
    useEffect(() => {
        if (searchQuery === "") {
            setProjects(allProjects);
        }
        else {
            setProjects(allProjects.filter((project) => {
                const title = project[0].toLowerCase().replace("_", " ");
                const topics = project[1].topics;
    
                // Search for topic matches
                for (const topic of topics) {
                    if (topic.toLowerCase() === searchQuery.toLowerCase()) {
                        return true;
                    }
                }
    
                // Search if title includes search query
                return title.includes(searchQuery.toLowerCase());
            }));   
        }
    }, [searchQuery])

    return (
        <AnimatedPage className={"projects-section"}>
            <h1 className="text-center">Projects</h1>
            {/* Search bar */}
            <input 
                type="text" 
                placeholder="Search for projects/topics"
                onChange={(e) => setSearchQuery(e.target.value)}
                className="projects-search-bar"
            />

            <div className="card-container-grid">
                {/* Dynamically render each project as a <ProjectCard></ProjectCard> component */}
                {projects.map((project) => (
                    <ProjectCard key={project} project={project} />
                ))}
            </div>
        </AnimatedPage>
    )
}

export default Projects;