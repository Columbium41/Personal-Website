import { useState, useEffect } from "react";

/**
 * A function that returns the document title and a function to change it
 * 
 * @param {String} title The initial document title
 * 
 * @returns {Object} An object containing documentTitle and setDocumentTitle
 */
function useDocumentTitle(title) {
    // Create a state hook containing the document's title
    const [documentTitle, setDocumentTitle] = useState(title);

    // Update the document's title everytime documentTitle is changed
    useEffect(() => {
        document.title = "Charley Liu | " + documentTitle;
    }, [documentTitle]);

    return {documentTitle, setDocumentTitle};
}

export default useDocumentTitle;