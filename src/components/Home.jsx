import { Typewriter } from 'react-simple-typewriter';
import { useEffect } from 'react';
import AnimatedPage from "./AnimatedPage";
import CardContainer from './CardContainer';
import Work from './Work';
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
    const skills = data.content.portfolio.skills.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
    });

    const workExperience = data.content.portfolio.work;

    // Change the document's title on render
    useEffect(() => {
        setDocumentTitle("Homepage");
    }, []);

    return (
        <AnimatedPage className={"about"}>
            {/* Profile + Typewriter */}
            <div className="profile w-100">
                <div>
                    <h1>Hi 👋, <br />I'm Charley</h1>

                    <span className="typewriter">
                        {'I\'m a '}
                        <Typewriter 
                          className="typewriter" 
                          words={typewriterOptions} 
                          cursor={true}
                          cursorBlinking={true}
                          loop={true}
                          typeSpeed={60}
                          deleteSpeed={45}
                        />
                    </span>
                </div>
                <img src="/images/headshot.jpeg" alt="headshot" className="headshot" />
            </div>
            
            {/* About Me Section */}
            <div className="text-section w-100">
                <h2 className="section-header">About Me</h2>

                <p>
                    I'm currently pursuing a Co-op Computer Science degree while also learning web development on the side.
                    Some of my non-coding related hobbies are listening to music, exercising, and playing games.
                    I also like to create <Link to="/projects" className="text-link">personal projects</Link> to enhance my programming and design skills, definitely check some out! <br></br><br></br>
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
                    <a href="https://www.instagram.com/charle_yy/" target="_blank">
                        <img src="/images/instagram.svg" alt="Instagram" />
                    </a>
                </div>
            </div>

            {/* Work Experience Section */}
            <Work data={workExperience}></Work>

            {/* Programming Skills Section */}
            <CardContainer header="My Skills" cards={skills} />
        </AnimatedPage>
    );
}

export default Home;
