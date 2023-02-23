import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import ProjectPage from "./ProjectPage";
import NotFound from "./NotFound";
import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes({ data, setDocumentTitle }) {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route exact path="/Personal-Website/" element={<Home data={data} setDocumentTitle={setDocumentTitle} />} />
                <Route exact path="/Personal-Website/projects" element={<Projects data={data} setDocumentTitle={setDocumentTitle} />} />
                <Route exact path="/Personal-Website/projects/:id" element={<ProjectPage data={data} setDocumentTitle={setDocumentTitle} />} />
                <Route path="*" element={<NotFound setDocumentTitle={setDocumentTitle} />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes;