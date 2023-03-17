import { useEffect } from "react";
import AnimatedPage from "./AnimatedPage";
import { Link } from "react-router-dom";
import '../css/NotFound.css';

/**
 * A function that returns an <AnimatedPage></AnimatedPage> component containing a 404 message
 * 
 * @param {Function} setDocumentTitle A function that sets the web page's document title
 *  
 * @returns {JSX.Element} Returns an <AnimatedPage></AnimatedPage> component containing a 404 message
 */
function NotFound({ setDocumentTitle }) {
    // Change the web page's document title on render
    useEffect(() => {
        setDocumentTitle("Not Found");
    }, [])

    return (
        <AnimatedPage className={"not-found"}>
            {/* Back to homepage link */}
            <Link to={"/"}>
                <h4 className="back-to-link">{'<'} Back to homepage</h4>
            </Link>

            {/* 404 error message */}
            <h2 className="text-center">Page Not Found</h2>
            <p>
                Looks like the page you were looking for was not found. 
                Please make sure there were no typos in the URL and try navigating to the homepage.
            </p>
        </AnimatedPage>
    )
}

export default NotFound;