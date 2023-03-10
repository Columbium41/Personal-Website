import './css/App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {BrowserRouter as Router} from 'react-router-dom';
import useFetch from '/src/hooks/useFetch';
import ErrorOverlay from '/src/components/ErrorOverlay';
import LoadingOverlay from '/src/components/LoadingOverlay';
import useThemeDetector from './hooks/useThemeDetector';
import { useEffect, useState } from 'react';
import AnimatedRoutes from './components/AnimatedRoutes';
import useDocumentTitle from './hooks/useDocumentTitle';

/**
 * A function that changes the web page's color scheme by applying different colors to the :root element
 * 
 * @param {Boolean} isDarkTheme True if dark theme, false if light theme
 */
function changeTheme(isDarkTheme) {
  const documentElement = document.documentElement;
  const theme = ((isDarkTheme) ? "dark" : "light");

  documentElement.style.setProperty(`--bg-primary`, `var(--${theme}-theme-bg-primary)`);
  documentElement.style.setProperty(`--bg-secondary`, `var(--${theme}-theme-bg-secondary)`);
  documentElement.style.setProperty(`--bg-header`, `var(--${theme}-theme-bg-header)`);
  documentElement.style.setProperty(`--fg-primary`, `var(--${theme}-theme-fg-primary)`);
  documentElement.style.setProperty(`--fg-secondary`, `var(--${theme}-theme-fg-secondary)`);
  documentElement.style.setProperty(`--fg-tertiary`, `var(--${theme}-theme-fg-tertiary)`);
  documentElement.style.setProperty(`--fg-varient`, `var(--${theme}-theme-fg-varient)`);
  documentElement.style.setProperty(`--error`, `var(--${theme}-theme-error)`);
  documentElement.style.transition = 'color 0.5s, background-color 0.5s';
}

/**
 * A function that returns a <div></div> containing the entire web page
 * 
 * @returns {JSX.Element} A <div></div> containing the web page 
 */
function App() {
  // Fetch app data from json file
  const {data: data, isFetching, fetchError} = useFetch('/data/data.json');

  // Get the web browser's default theme
  const {isDarkTheme, setIsDarkTheme} = useThemeDetector();

  // Set the document's title to 'Homepage'
  const {setDocumentTitle} = useDocumentTitle("Homepage");

  // Search query for projects
  const [searchQuery, setSearchQuery] = useState('');

  // Create an effect hook which runs the changeTheme function everytime the web page theme changes
  useEffect(() => {
    changeTheme(isDarkTheme);
  }, [isDarkTheme]);

  return (
    <div className="App">
      <Router basename="/">
        {/* Display a loading overlay while data is loading */}
        {isFetching && !fetchError && <LoadingOverlay />}

        {/* Display an error overlay if data fetching was unsuccessful */}
        {fetchError && <ErrorOverlay />}
        
        {/* Display the web page if the data was successfully loaded */}
        {!isFetching && !fetchError &&
        <div className="app-content">
          {/* Header & Navbar */}
          <Navbar isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />

          {/* Main content */}
          <main>
            <AnimatedRoutes 
              data={data} 
              setDocumentTitle={setDocumentTitle} 
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </main>

          {/* Footer */}
          <Footer />
        </div>}
      </Router>    
    </div>
  )
}

export default App;
