import { Typewriter } from 'react-simple-typewriter';
import { useEffect } from 'react';
import SkillCard from './SkillCard';
import { motion } from 'framer-motion';

function Home({ data, setDocumentTitle }) {
    const typewriterOptions = data.content.typewriter_options;
    const skills = data.content.portfolio.skills;
    useEffect(() => {
        setDocumentTitle("Homepage");
    }, []);

    return (
        <motion.div 
          className="about"
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
        >
            <div className="typewriter-container w-100 text-center">
                <span>{'>'} Hello, I am a </span>
                <span className="typewriter">
                    <Typewriter 
                        words={typewriterOptions} 
                        cursor={true}
                        cursorBlinking={false}
                        loop={true}
                        typeSpeed={60}
                        deleteSpeed={40}
                    />
                </span>
            </div>

            <div className="profile w-100">
                <div>
                    <h1>Charley Liu</h1>
                    <p className="occupation">Computer Science Student</p>
                </div>
                <img src="/src/assets/headshot.jpeg" alt="headshot" className="headshot" />
            </div>
            
            <div className="text-section w-100">
                <h2 className="section-header">About Me</h2>
                <p>
                    Hello, my name is Charley. 
                    I'm a first-year undergrad student at the University of Ottawa with a passion for desigining software.
                    Currently, I'm pursuing a 5 year Computer Science co-op degree while also learning web development.
                    My hobbies include Music, Chess, Weight Lifting, and Rhythm Games.
                    When I'm not doing academic work or enjoying leisure time, I like to work on fun and interesting projects to help expand my knowledge.
                </p>
            </div>

            <div className="skills w-100">
                <h2 className="section-header">Skills</h2>
                <div className="card-container-flex">
                    {skills.map((skill, index) => (
                        <SkillCard skill={skill} key={index} />
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default Home;
