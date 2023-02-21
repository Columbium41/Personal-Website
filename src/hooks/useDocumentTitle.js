import { useState, useEffect } from "react";

function useDocumentTitle(title) {
    const [documentTitle, setDocumentTitle] = useState(title);

    useEffect(() => {
        document.title = "Charley Liu | " + documentTitle;
    }, [documentTitle]);

    return {documentTitle, setDocumentTitle};
}

export default useDocumentTitle;