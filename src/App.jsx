import './css/App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import ProjectPage from './components/ProjectPage';
import Footer from './components/Footer';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import useFetch from '/src/hooks/useFetch';
import ErrorOverlay from '/src/components/ErrorOverlay';
import LoadingOverlay from '/src/components/LoadingOverlay';
import useThemeDetector from './hooks/useThemeDetector';
import { useEffect } from 'react';

function changeTheme(isDarkTheme) {
  const documentElement = document.documentElement;
  const theme = ((isDarkTheme) ? "dark" : "light");

  documentElement.style.setProperty(`--bg-primary`, `var(--${theme}-theme-bg-primary)`);
  documentElement.style.setProperty(`--bg-secondary`, `var(--${theme}-theme-bg-secondary)`);
  documentElement.style.setProperty(`--fg-primary`, `var(--${theme}-theme-fg-primary)`);
  documentElement.style.setProperty(`--fg-secondary`, `var(--${theme}-theme-fg-secondary)`);
  documentElement.style.setProperty(`--fg-varient`, `var(--${theme}-theme-fg-varient)`);
  documentElement.style.setProperty(`--error`, `var(--${theme}-theme-error)`);
  documentElement.style.transition = 'color 0.5s, background-color 0.5s';
}

function App() {
  const {data: data, isFetching, fetchError} = useFetch('/src/data/data.json');
  const {isDarkTheme, setIsDarkTheme} = useThemeDetector();

  useEffect(() => {
    changeTheme(isDarkTheme);
  }, [isDarkTheme]);

  return (
    <div className="App">
      <Router>
        {isFetching && !fetchError && <LoadingOverlay />}
        {fetchError && <ErrorOverlay />}
        
        {!isFetching && !fetchError &&
        <div className="app-content">
          <Navbar isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
          <main>
            <Routes>
              <Route exact path="/" element={<Home data={data} />} />
              <Route exact path="/projects" element={<Projects data={data} />} />
              <Route exact path="/projects/:id" element={<ProjectPage />} />
            </Routes>
          </main>
          <Footer />
        </div>}
      </Router>    
    </div>
  )
}

export default App
