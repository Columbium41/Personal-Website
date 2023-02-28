import { useEffect, useState } from "react";
import '../css/LoadingOverlay.css';

/**
 * A function that returns a <div></div> element containing a loading overlay
 * 
 * @returns {JSX.Element} A <div></div> element containing a loading overlay
 */
function LoadingOverlay() {
    // Create two states containing the loading text and count
    const [loadingText, setLoadingText] = useState('Loading.');
    const [count, setCount] = useState(0);

    // Add a '.' to loadingText every 0.5 seconds and reset it after 4 dots
    useEffect(() => {
        setTimeout(() => {
            if (count === 3) {
                setCount(0);
                setLoadingText("Loading.");
            }
            else {
                setCount(count + 1);
                setLoadingText(loadingText + ".");
            }
        }, 500);
    }, [loadingText])

    return (
        <div className="loading-overlay">
            <img src="/images/react.svg" alt="React logo" />
            <h2>{ loadingText }</h2>
        </div>
    )
}

export default LoadingOverlay;