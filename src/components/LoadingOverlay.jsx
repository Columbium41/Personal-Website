import { useEffect, useState } from "react";

function LoadingOverlay() {
    const [loadingText, setLoadingText] = useState('Loading.');
    const [count, setCount] = useState(0);

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
            <img src="/Personal-Website/images/react.svg" alt="React logo" />
            <h2>{ loadingText }</h2>
        </div>
    )
}

export default LoadingOverlay;