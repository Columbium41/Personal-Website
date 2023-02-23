/**
 * A function that returns a <div></div> element that displays an error message to the user
 * 
 * @returns {JSX.Element} returns a <div></div> element containing an error message
 */
function ErrorOverlay() {
    return (
        <div className="error-overlay">
            <h2>Error: Page not loading correctly</h2>
            <p>Please refresh the page and try again later</p>
        </div>
    )
}

export default ErrorOverlay;