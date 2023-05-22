import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import '../css/Navbar.css';
import { motion } from "framer-motion";

const loadAnimation = {
    initial: {y: "-100%"},
    animate: {y: 0},
}

const dropdownVariants = {
    open: {
        display: "flex",
        opacity: 1,
        top: "calc(100% + 0.5ch)"
    },
    closed: { 
        opacity: 0,
        top: "0%",
        transitionEnd: {
            display: "none"
        },
    }
}

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
        <motion.header 
          variants={loadAnimation}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.8, ease: "easeIn" }}
        >
            <nav className="navbar">
                {/* Navbar Logo */}
                <Link to={'/'}>
                    <div className="navbar-logo" onMouseEnter={() => setIsHoveringLogo(true)} onMouseLeave={() => setIsHoveringLogo(false)}>
                        <h2 id="logo-up">{'<'}Charley&nbsp;</h2>
                        <h2 id="logo-down">{'Liu/>'}</h2>
                    </div>
                </Link>

                {/* Navbar Links */}
                <ul className="navbar-links">
                    {/* Web page links & Resume link */}
                    <li><Link to="/" className="navbar-text-link">Home</Link></li>
                    <li><Link to="/projects/" className="navbar-text-link">Projects</Link></li>
                    <li><a href="/data/CharleyLiu_Resume.pdf" className="navbar-text-link resume" target="_blank">Resume</a></li>

                    {/* Button to toggle the web page's theme */}
                    <div 
                      className={"theme-toggle " + ((isDarkTheme) ? "sun" : "moon")} 
                      onClick={() => setIsDarkTheme(!isDarkTheme)}
                    >
                        <img 
                          src={"/images/" + ((isDarkTheme) ? "sun" : "moon") + ".svg"} 
                          alt={((isDarkTheme) ? "moon" : "sun") + " logo"} 
                        />
                    </div>

                    {/* Links drop-down menu (only for device width <= 700px) */}
                    <div 
                      className={"dropdown-container dropdown-" + (isDarkTheme ? "dark" : "light")}
                      onClick={() => setDropdownActive(!dropdownActive)}
                    >
                        <img 
                          src={"/images/dropdown-menu-" + (isDarkTheme ? "dark" : "light") + ".svg"} 
                          alt="dropdown" 
                        />

                        <motion.div 
                          className="dropdown-links"
                          animate={ dropdownActive ? "open" : "closed" }
                          variants={ dropdownVariants }
                          transition={{ duration: 0.3 }}
                          initial={false}
                        >
                            <Link to="/" className="navbar-text-link">Home</Link>
                            <Link to="/projects/" className="navbar-text-link">Projects</Link>
                            <a href="/data/CharleyLiu_Resume.pdf" className="navbar-text-link" target="_blank">Resume</a>
                        </motion.div>
                    </div>
                </ul>
            </nav>
        </motion.header>
    )
}

export default Navbar;