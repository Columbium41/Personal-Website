import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import ProjectPage from "./ProjectPage";
import NotFound from "./NotFound";
import { AnimatePresence } from 'framer-motion';

/**
 * A function that returns an <AnimatePresence></AnimatePresence> component that wraps all the page routes into animatable pages
 * 
 * @param {Object} data The app data fetched from App.jsx
 * @param {Function} setDocumentTitle A function that sets the web page's document title
 * 
 * @returns {JSX.Element} An <AnimatePresence></AnimatePresence> component which contains Routes to specific pages
 */
function AnimatedRoutes({ data, setDocumentTitle, searchQuery, setSearchQuery }) {
    // Get the current location and pass it as a prop to the Routes component
    const location = useLocation();

    return (
        <AnimatePresence mode="wait" onExitComplete={() => {
            window.scrollTo(0, 0);
        }}>
            {/* Pass in the location of the browser into Routes as a prop */}
            <Routes location={location} key={location.pathname}>
                <Route 
                    exact path="/" 
                    element={<Home data={data} setDocumentTitle={setDocumentTitle} />} 
                />
                <Route 
                    exact path="/projects" 
                    element={<Projects 
                                data={data} 
                                setDocumentTitle={setDocumentTitle} 
                                searchQuery={searchQuery}
                                setSearchQuery={setSearchQuery}
                             />} 
                />
                <Route 
                    exact path="/projects/:id" 
                    element={<ProjectPage data={data} setDocumentTitle={setDocumentTitle} />} 
                />
                <Route 
                    path="*" 
                    element={<NotFound setDocumentTitle={setDocumentTitle} />} 
                />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes;