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
                <img src="/images/headshot.jpeg" alt="headshot" className="headshot" />
            </div>
            
            {/* About Me Section */}
            <div className="text-section w-100">
                <h2 className="section-header">About Me</h2>

                <p>
                    Hello, I'm a first-year Computer Science student at the University of Ottawa and an aspiring software developer.
                    I'm currently pursuing a 5 year co-op Computer Science degree while also learning web development on the side.
                    Some of my non-coding related hobbies are listening to music and playing tabletop/online games.
                    When I'm not playing games or doing school work, 
                    I like to create <Link to="/projects" className="text-link">personal projects</Link> to enhance my programming and design skills. <br></br><br></br>
                    If you like what I do or want to get in touch, please consider reaching out to me on any of these platforms:
                </p>

                <div className="contacts">
                    <a href="https://github.com/Columbium41" target="_blank">
                        <img src="/images/github.svg" alt="Github" />
                    </a>
                    <a href="https://linkedin.com/in/charleyliu-uo" target="_blank">
                        <img src="/images/linkedin.svg" alt="LinkedIn" />
                    </a>
                    <a href="mailto:charleyliu716@gmail.com" target="_blank">
                        <img src="/images/gmail.svg" alt="Gmail" />
                    </a>
                    <a href="https://discordapp.com/users/334487185765957634" target="_blank">
                        <img src="/images/discord.svg" alt="Discord" />
                    </a>
                    <a href="https://www.instagram.com/charle_yy/" target="_blank">
                        <img src="/images/instagram.svg" alt="Instagram" />
                    </a>
                </div>
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
        </AnimatedPage>
    );
}

export default Home;
