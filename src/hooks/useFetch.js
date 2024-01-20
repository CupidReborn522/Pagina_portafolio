import { useEffect, useState } from 'react';


export default function useFetch(url) {

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [controller, setController] = useState(null);
    useEffect(() => {
        const abortController = new AbortController();
        setController(abortController);
        setLoading(true);
        fetch(url, { signal: abortController.signal })
            .then((response) =>
                response.json())
            .then((jsonData) => {
                setData(jsonData);
            })
            .catch((error) => {
                if(error.name === "AbortError"){
                    console.log("Request cancelled")
                }
                setError(error)
            })
            .finally(() => {
                setLoading(false);
            })
        return () => abortController.abort();

    }, []);

    const handleCancelRequest = () => {
        if (controller) {
            controller.abort();
            setError("Request cancelled");
        }
    }

    return { data, loading, error, handleCancelRequest };
}
// 'https://jsonplaceholder.typicode.com/users'
// 'https://api.github.com/users/CupidReborn522/repos'