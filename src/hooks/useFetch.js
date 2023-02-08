import { useEffect, useState } from "react";

function useFetch(url) {
    const [data, setData] = useState();
    const [isFetching, setIsFetching] = useState(true);
    const [fetchError, setFetchError] = useState(false);
    
    useEffect(() => {
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
            setData(data);
            setIsFetching(false);
        })
        .catch((error) => {
            console.log(error);
            setFetchError(true);
            setIsFetching(false);
        });
    }, []);

    return {data, isFetching, fetchError};
}

export default useFetch;
