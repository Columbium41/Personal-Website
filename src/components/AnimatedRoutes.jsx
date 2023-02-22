import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import ProjectPage from "./ProjectPage";
import NotFound from "./NotFound";
import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes({ data, setDocumentTitle }) {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route exact path="/" element={<Home data={data} setDocumentTitle={setDocumentTitle} />} />
                <Route exact path="/projects" element={<Projects data={data} setDocumentTitle={setDocumentTitle} />} />
                <Route exact path="/projects/:id" element={<ProjectPage data={data} setDocumentTitle={setDocumentTitle} />} />
                <Route path="*" element={<NotFound setDocumentTitle={setDocumentTitle} />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes;