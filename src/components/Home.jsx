import { Typewriter } from 'react-simple-typewriter';
import { useEffect } from 'react';
import SkillCard from './SkillCard';
import AnimatedPage from "./AnimatedPage";
import { Link } from 'react-router-dom';
import '../css/Home.css';

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
    const programmingSkills = data.content.portfolio.programming_skills;
    const devTools = data.content.portfolio.dev_tools;

    // Change the document's title on render
    useEffect(() => {
        setDocumentTitle("Homepage");
    }, []);

    return (
        <AnimatedPage className={"about"}>
            {/* Profile + Typewriter */}
            <div className="profile w-100">
                <div>
                    <h1>Charley Liu</h1>

                    <span className="typewriter">
                        {'> '}
                        <Typewriter 
                          className="typewriter" 
                          words={typewriterOptions} 
                          cursor={true}
                          cursorBlinking={true}
                          loop={true}
                          typeSpeed={80}
                          deleteSpeed={60}
                        />
                    </span>
                </div>
                <img src="/Personal-Website/images/headshot.jpeg" alt="headshot" className="headshot" />
            </div>
            
            {/* About Me Section */}
            <div className="text-section w-100">
                <h2 className="section-header">About Me</h2>
                <p>
                    Hello, my name is Charley. 
                    I'm a first-year Computer Science undergrad student at the University of Ottawa with a passion for desigining software.
                    Currently, I'm pursuing a 5 year Computer Science co-op degree while also learning web development on the side.
                    My hobbies include Music, Chess, Weight Lifting, and Rhythm Games.
                    When I'm not doing academic work or enjoying leisure time, 
                    I like to work on fun and interesting <Link to="/Personal-Website/projects" className="text-link">projects</Link> to help expand my knowledge and skills!
                </p>
            </div>

            {/* Programming Skills Section */}
            <div className="skills w-100">
                <h2 className="section-header">Technical Skills</h2>
                <div className="card-container-flex">
                    {/* Dynamically render each skill as a <SkillCard></SkillCard> component */}
                    {programmingSkills.map((skill, index) => (
                        <SkillCard skill={skill} key={index} />
                    ))}
                </div>
            </div>
            
            {/* Dev Tools Section */}
            <div className="skills w-100">
                <h2 className="section-header">Dev Tools</h2>
                <div className="card-container-flex">
                    {devTools.map((skill, index) => (
                        <SkillCard skill={skill} key={index}/>
                    ))}
                </div>
            </div>

            {/* Contacts + Socials */}
            <div className="text-section w-100">
                <h2 className="section-header">Contacts & Socials</h2>
                <p>
                    Feel free to contact me on any of the following platforms for any personal, business, or collaboration related inquiries.
                </p>
                <ul className="contacts-list">
                    <li>
                        <i className="fa-solid fa-envelope"></i> 
                        <a 
                          href="mailto:charleyliu716@gmail.com" 
                          target="_blank"
                          className="text-link"
                        >
                            Gmail {'(Personal & Business)'}
                        </a>
                    </li>
                    <li>
                        <i className="fa-brands fa-linkedin"></i> 
                        <a 
                          href="https://www.linkedin.com/in/charleyliu-uo/" 
                          target="_blank"
                          className="text-link"
                        >
                            LinkedIn {'(Networking & Business)'}
                        </a>
                    </li>
                    <li>
                        <i className="fa-brands fa-github"></i> 
                        <a 
                          href="https://github.com/Columbium41" 
                          target="_blank"
                          className="text-link"
                        >
                            Github {'(Open-Source Collaboration)'}
                        </a>
                    </li>
                </ul>
            </div>
        </AnimatedPage>
    );
}

export default Home;
