import ProjectCard from "./ProjectCard";
import { useEffect, useState, useRef } from "react";
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
function Projects({ data, setDocumentTitle, searchQuery, setSearchQuery }) {
    const allProjects = Object.entries(data.content.portfolio.projects);

    const [projects, setProjects] = useState(allProjects);
    // const [tags, setTags] = useState();
    // const [loadingTags, setLoadingTags] = useState(true);
    const [currentActive, setCurrentActive] = useState(0);
    const [currentFilter, setCurrentFilter] = useState("All");
    const tagContainer = useRef();
    
    useEffect(() => {
        setDocumentTitle("Projects");

        // let allTags = new Set();
        // allTags.add("All");

        // projects.forEach((project) => {
        //     project[1].topic_thumbnails.forEach((topic) => {
        //         allTags.add(topic);
        //     });
        // });
        // setTags(Array.from(allTags));

        // setLoadingTags(false);
    }, [])

    // Use effect to show different projects when search query is changed
    useEffect(() => {
        setProjects(allProjects.filter((project) => {
            const title = project[0].toLowerCase().replace("_", " ");
            const query = searchQuery.toLowerCase();

            // Check if query matches and current filter matches
            return (query === "" || title.includes(query)) && (currentFilter === "All" || project[1].topics.includes(currentFilter));
        }));   
    }, [searchQuery, currentFilter])

    return (
        <AnimatedPage className={"projects-section"}>
            <h1 className="text-center">Projects</h1>
            {/* Search bar */}
            <input 
                type="text" 
                placeholder="Search for projects"
                onChange={(e) => setSearchQuery(e.target.value)}
                className="projects-search-bar"
                value={searchQuery}
            />

            {/* Tags Filter */}
            {/* { !loadingTags && tags !== undefined &&
            <div className="tags-container" ref={tagContainer}>
                {tags.map((tag, index) => (
                    <button
                        key={index} 
                        className="tag-button"
                        data-active={tag === "All"}
                        onClick={() => {
                            tagContainer.current.children[currentActive].setAttribute("data-active", false);
                            tagContainer.current.children[index].setAttribute("data-active", true);
                            setCurrentActive(index);
                            setCurrentFilter(tagContainer.current.children[index].innerText);
                        }}>
                            { tag }
                    </button>
                ))}
            </div>} */}

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