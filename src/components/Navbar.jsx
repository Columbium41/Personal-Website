import { Link } from "react-router-dom";

/**
 * A function that returns a <header></header> element containing a navbar for the website
 * 
 * @param {Boolean} isDarkTheme A boolean representing if the web page is rendered in a dark theme
 * @param {Function} setIsDarkTheme A function that sets the web page's theme to dark or light
 *  
 * @returns {JSX.Element} A <header></header> element containing a navbar for the website
 */
function Navbar({ isDarkTheme, setIsDarkTheme }) {
    // A function which switches the theme from light to dark or vice versa
    function toggleTheme() {
        setIsDarkTheme(!isDarkTheme);
    }

    return (
        <header>
            <nav className="navbar">
                {/* Navbar Logo */}
                <img src="/Personal-Website/images/react.svg" alt="logo" />

                {/* Navbar Links */}
                <ul className="navbar-links">
                    {/* Social Icon Links */}
                    <li className="icon-links">
                        <a href="https://github.com/Columbium41" target="_blank">
                            <img src="/Personal-Website/images/github.svg" alt="github" className={"navbar-icon " + ((isDarkTheme) ? "light-hover-bg" : "dark-hover-bg")} />
                        </a>
                        <a href="https://www.linkedin.com/in/charleyliu-uo/" target="_blank">
                            <img src="/Personal-Website/images/linkedin.svg" alt="linkedin" className="navbar-icon dark-hover" />
                        </a>
                    </li>

                    {/* Web page links & Resume download link */}
                    <li><Link to="/Personal-Website/" className="text-link">Home</Link></li>
                    <li><Link to="/Personal-Website/projects/" className="text-link">Projects</Link></li>
                    <li><a href="data/CharleyLiu_Resume.pdf" className="text-link resume" download>Resume</a></li>

                    {/* Button to toggle the web page's theme */}
                    <div className={"theme-toggle " + ((isDarkTheme) ? "moon" : "sun")} onClick={toggleTheme}>
                        <img 
                        src={"/Personal-Website/images/" + ((isDarkTheme) ? "moon" : "sun") + ".svg"} 
                        alt={((isDarkTheme) ? "moon" : "sun") + " logo"} />
                    </div>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;