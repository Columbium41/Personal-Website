import { Typewriter } from 'react-simple-typewriter';
import { useEffect } from 'react';
import SkillCard from './SkillCard';
import AnimatedPage from "./AnimatedPage";

/**
 * A function that returns an <AnimatedPage></AnimatedPage> component containing the home page of the website
 * 
 * @param {Object} data The app data fetched from App.jsx
 * @param {Function} setDocumentTitle A function that sets the web page's document title
 * 
 * @returns {JSX.Element} an <AnimatedPage></AnimatedPage> component containing the home page of the website
 */
function Home({ data, setDocumentTitle }) {
    // Get the list of words used for the typewriter component
    const typewriterOptions = data.content.typewriter_options;

    // Get each skill listed in the portfolio section 
    const skills = data.content.portfolio.skills;

    // Change the document's title on render
    useEffect(() => {
        setDocumentTitle("Homepage");
    }, []);

    return (
        <AnimatedPage className={"about"}>
            {/* Typewriter */}
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

            {/* Profile */}
            <div className="profile w-100">
                <div>
                    <h1>Charley Liu</h1>
                    <p className="occupation">Computer Science Student</p>
                </div>
                <img src="/Personal-Website/images/headshot.jpeg" alt="headshot" className="headshot" />
            </div>
            
            {/* About Me Section */}
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

            {/* Skills Section */}
            <div className="skills w-100">
                <h2 className="section-header">Skills</h2>
                <div className="card-container-flex">
                    {/* Dynamically render each skill as a <SkillCard></SkillCard> component */}
                    {skills.map((skill, index) => (
                        <SkillCard skill={skill} key={index} />
                    ))}
                </div>
            </div>
        </AnimatedPage>
    );
}

export default Home;
