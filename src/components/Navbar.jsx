import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

/**
 * A function that returns a <header></header> element containing a navbar for the website
 * 
 * @param {Boolean} isDarkTheme A boolean representing if the web page is rendered in a dark theme
 * @param {Function} setIsDarkTheme A function that sets the web page's theme to dark or light
 *  
 * @returns {JSX.Element} A <header></header> element containing a navbar for the website
 */
function Navbar({ isDarkTheme, setIsDarkTheme }) {
    // Use state hook to record if the logo is being hovered or not
    const [isHoveringLogo, setIsHoveringLogo] = useState(false);

    // Use effect hook to apply hover effect on logo whenever hover state changes
    useEffect(() => {
        if (isHoveringLogo) {
            document.getElementById('logo-up').style.transform = 'translate(-0.25ch, -0.5ch)';
            document.getElementById('logo-down').style.transform = 'translate(0.25ch, 0.5ch)';
        }
        else {
            document.getElementById('logo-up').style.transform = 'translate(0)';
            document.getElementById('logo-down').style.transform = 'translate(0)';
        }
    }, [isHoveringLogo])

    // Use state hook to record if the dropdown menu is activated
    const [dropdownActive, setDropdownActive] = useState(false);

    return (
        <header>
            <nav className="navbar">
                {/* Navbar Logo */}
                <Link to={'/Personal-Website/'}>
                    <div className="navbar-logo" onMouseEnter={() => setIsHoveringLogo(true)} onMouseLeave={() => setIsHoveringLogo(false)}>
                        <h2 id="logo-up">{'<'}Charley&nbsp;</h2>
                        <h2 id="logo-down">{'Liu/>'}</h2>
                    </div>
                </Link>

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
                    <li><Link to="/Personal-Website/" className="navbar-text-link">Home</Link></li>
                    <li><Link to="/Personal-Website/projects/" className="navbar-text-link">Projects</Link></li>
                    <li><a href="data/CharleyLiu_Resume.pdf" className="navbar-text-link resume" download>Resume</a></li>

                    {/* Button to toggle the web page's theme */}
                    <div 
                      className={"theme-toggle " + ((isDarkTheme) ? "sun" : "moon")} 
                      onClick={() => setIsDarkTheme(!isDarkTheme)}
                    >
                        <img 
                          src={"/Personal-Website/images/" + ((isDarkTheme) ? "sun" : "moon") + ".svg"} 
                          alt={((isDarkTheme) ? "moon" : "sun") + " logo"} 
                        />
                    </div>

                    {/* Links drop-down menu (only for device width <= 700px) */}
                    <div className="dropdown-container">
                        <img 
                          src={"/Personal-Website/images/dropdown-menu-" + (isDarkTheme ? "dark" : "light") + ".svg"} 
                          alt="dropdown" 
                          onClick={() => setDropdownActive(!dropdownActive)}
                        />

                        {dropdownActive &&
                        <div className="dropdown-links">
                            <Link to="/Personal-Website/" className="navbar-text-link">Home</Link>
                            <Link to="/Personal-Website/projects/" className="navbar-text-link">Projects</Link>
                            <a href="data/CharleyLiu_Resume.pdf" className="navbar-text-link" download>Resume</a>
                        </div>}
                    </div>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;