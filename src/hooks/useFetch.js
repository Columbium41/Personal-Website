import { useEffect, useState } from "react";

/**
 * A function that fetches json data from a specified url
 * 
 * @param {String} url The url to fetch json data from
 * 
 * @returns {Object} An object containing the fetch status and fetched data
 */
function useFetch(url) {
    // Create state hooks for the fetched data and fetch status
    const [data, setData] = useState();
    const [isFetching, setIsFetching] = useState(true);
    const [fetchError, setFetchError] = useState(false);
    
    // Run on render
    useEffect(() => {
        // Fetch from the URL as a GET request
        fetch((url), {
            method: 'GET',
            headers: {
                'Accept':'application/json',
            }
        })
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            else {
                setFetchError(true);
            }
        })
        .then((data) => {
            // Data successfuly fetched
            setData(data);
            setIsFetching(false);
        })
        .catch((error) => {
            // Data fetch error
            console.log(error);
            setFetchError(true);
            setIsFetching(false);
        });
    }, []);

    return {data, isFetching, fetchError};
}

export default useFetch;
