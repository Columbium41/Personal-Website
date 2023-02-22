import { useEffect } from "react";
import { motion } from 'framer-motion';

function NotFound({ setDocumentTitle }) {
    useEffect(() => {
        setDocumentTitle("Not Found");
    }, [])

    return (
        <motion.div 
          className="not-found"
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
        >
            <h2 className="text-center">404 Page Not Found</h2>
            <p>
                Looks like the page you were looking for was not found. 
                Please make sure there were no typos in the URL and try refreshing the page or navigating to the homepage.
            </p>
        </motion.div>
    )
}

export default NotFound;