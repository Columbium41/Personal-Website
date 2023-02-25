import AnimatedPage from "./AnimatedPage";
import '../css/ErrorOverlay.css';

/**
 * A function that returns an <AnimatedPage></AnimatedPage> element that displays an error message to the user
 * 
 * @returns {JSX.Element} returns an <AnimatedPage></AnimatedPage> element containing an error message
 */
function ErrorOverlay() {
    return (
        <AnimatedPage className={"error-overlay"}>
            <h2>Error: Page not loading correctly</h2>
            <p>Please refresh the page and try again later.</p>
        </AnimatedPage>
    )
}

export default ErrorOverlay;