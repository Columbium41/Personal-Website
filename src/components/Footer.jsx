import '../css/Footer.css';

/**
 * A function that returns a <footer></footer> element containing the web page's creator and source code
 * 
 * @returns {JSX.Element} A <footer></footer> element containing the web page's creator and source code
 */
function Footer() {
    return (
        <footer>
            <p>Created by Charley Liu using <i className="fa-brands fa-react"></i> - 
                View <a href="https://github.com/Columbium41/Personal-Website" target="_blank"><i className="fa-brands fa-github"></i>Source Code</a>
            </p>
        </footer>
    )
}

export default Footer;