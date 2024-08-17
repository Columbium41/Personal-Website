import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import UseItem from "./UseItem";

const projectCardVariants = {
    hidden: {
        opacity: 0,
        scale: 0.3
    },
    animate: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            delay: 0.4
        }
    },
}

/**
 * A function that returns a <Link></Link> element containing a project's title and short description and a redirect
 * 
 * @param {Object} project The project data to render
 * 
 * @returns {JSX.Element} A <Link></Link> element that redirects to a <ProjectPage><ProjectPage/> component 
 *                        and contains a project's title and short description 
 */
function ProjectCard({ project }) {
    const controls = useAnimation();

    const projectTitle = project[0];
    const projectData = project[1];

    useEffect(() => {
        controls.start("animate");
    }, [])

    return (
        <Link to={"/projects/" + projectTitle} className="card-link">
            <motion.div 
              className="project-card"
              variants={projectCardVariants}
              initial="hidden"
              animate={controls}
            >
                {/* Project Thumbnail */}
                <div>
                    <img src={"/images/" + projectTitle.toLowerCase() + ".png"} 
                        alt={projectTitle + " thumbnail"} 
                        className="project-thumbnail-card" />
                </div>
                
                {/* Project title and short description */}
                <div className="project-card-text">
                    <h3>{projectTitle.replace("_", " ")}</h3>
                    <p>{projectData.description}</p>

                    {/* Project icons */}
                    <div className="project-icons">
                        {projectData.topic_thumbnails.map((topic, index) => (
                            <UseItem use={topic} key={index} />
                        ))}
                    </div>
                </div>
            </motion.div>
        </Link>
    )
}

export default ProjectCard;