import '../css/Footer.css';

/**
 * A function that returns a <footer></footer> element containing the web page's creator and source code
 * 
 * @returns {JSX.Element} A <footer></footer> element containing the web page's creator and source code
 */
function Footer() {
    return (
        <footer>
            <p>Created by Charley Liu with <i className="fa-brands fa-react"></i> and <i class="fa-brands fa-node-js"></i> - View&nbsp;
                <a 
                  href="https://github.com/Columbium41/Personal-Website" 
                  target="_blank"
                  className="text-link"
                >
                    <i className="fa-brands fa-github"></i>Source Code
                </a>
            </p>
        </footer>
    )
}

export default Footer;