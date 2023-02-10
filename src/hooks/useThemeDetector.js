import { useState, useEffect } from "react";

function useThemeDetector() {
    const getCurrentTheme = () => {
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }

    const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());  

    const mqListener = ((e) => {
        setIsDarkTheme(e.matches);
    });
    
    useEffect(() => {
      const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
      darkThemeMq.addEventListener("change", mqListener);
      return () => darkThemeMq.removeEventListener("change", mqListener);
    }, []);

    return {isDarkTheme, setIsDarkTheme};
}

export default useThemeDetector;