import { useEffect } from "react";
import AnimatedPage from "./AnimatedPage";

function NotFound({ setDocumentTitle }) {
    useEffect(() => {
        setDocumentTitle("Not Found");
    }, [])

    return (
        <AnimatedPage className={"not-found"}>
            <h2 className="text-center">404 Page Not Found</h2>
            <p>
                Looks like the page you were looking for was not found. 
                Please make sure there were no typos in the URL and try refreshing the page or navigating to the homepage.
            </p>
        </AnimatedPage>
    )
}

export default NotFound;