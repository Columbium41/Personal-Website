import { Link } from "react-router-dom";

function Navbar({ isDarkTheme, setIsDarkTheme }) {
    function toggleTheme() {
        setIsDarkTheme(!isDarkTheme);
    }

    return (
        <header>
            <nav className="navbar">
                <img src="/Personal-Website/images/react.svg" alt="logo" />

                <ul className="navbar-links">
                    <li className="icon-links">
                        <a href="https://github.com/Columbium41" target="_blank">
                            <img src="/Personal-Website/images/github.svg" alt="github" className={"navbar-icon " + ((isDarkTheme) ? "light-hover-bg" : "dark-hover-bg")} />
                        </a>
                        <a href="https://www.linkedin.com/in/charleyliu-uo/" target="_blank">
                            <img src="/Personal-Website/images/linkedin.svg" alt="linkedin" className="navbar-icon dark-hover" />
                        </a>
                    </li>

                    <li><Link to="/Personal-Website/" className="text-link">Home</Link></li>
                    <li><Link to="/Personal-Website/projects/" className="text-link">Projects</Link></li>
                    <li><a href="data/CharleyLiu_Resume.pdf" className="text-link resume" download>Resume</a></li>

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