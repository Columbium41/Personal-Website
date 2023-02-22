import ProjectCard from "./ProjectCard";
import { useEffect } from "react";
import { motion } from 'framer-motion';

function Projects({ data, setDocumentTitle }) {
    const projectsList = Object.entries(data.content.portfolio.projects);
    useEffect(() => {
        setDocumentTitle("Projects");
    }, [])

    return (
        <motion.div 
          className="projects-section"
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
        >
            <h1 className="text-center">Projects</h1>
            <div className="card-container-grid">
                {projectsList.map((project) => (
                    <ProjectCard key={project} project={project} />
                ))}
            </div>
        </motion.div>
    )
}

export default Projects;