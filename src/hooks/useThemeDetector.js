import { useState, useEffect } from "react";

/**
 * A function that detects the default theme a browser is run on
 * 
 * @returns {Object} An object that contains the browser's default theme and a function to change the web page's theme
 */
function useThemeDetector() {
    // A function to get the default theme of the web browser
    const getCurrentTheme = () => {
        const lastUsedTheme = localStorage.getItem("theme");
        if (lastUsedTheme !== null) {
            return (lastUsedTheme === 'true');
        }

        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }

    // Create a state hook containing the default theme of the web browser
    const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());  
    
    // Create a callback function that changes the web page's color theme
    const mqListener = ((e) => {
        setIsDarkTheme(e.matches);
    });
    
    /* Create a useEffect hook that adds an event listerner to detect changes in the web browser's preferred color theme
       and removes the event listener when the component unmounts */
    useEffect(() => {
      const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
      darkThemeMq.addEventListener("change", mqListener);
      return () => darkThemeMq.removeEventListener("change", mqListener);
    }, []);

    window.onunload = () => {
        localStorage.setItem("theme", isDarkTheme);
    }

    return {isDarkTheme, setIsDarkTheme};
}

export default useThemeDetector;