function Navbar() {


    return (
        <nav className="navbar">
            <img src="src/assets/react.svg" alt="logo" />

            <ul className="navbar-links">
                <li className="icon-links">
                    <a href="https://github.com/Columbium41" target="_blank">
                        <img src="src/assets/github.svg" alt="github" className="navbar-icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/charleyliu-uo/" target="_blank">
                        <img src="src/assets/linkedin.svg" alt="linkedin" className="navbar-icon" />
                    </a>
                </li>

                <li><a href="" className="text-link">About</a></li>
                <li><a href="" className="text-link">Skills</a></li>
                <li><a href="" className="text-link">Personal Projects</a></li>
                <li><a href="" className="text-link">Contacts</a></li>
                <li><a href="" className="text-link">Resume</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;