import { useState, useEffect, useCallback } from 'react';

export const useFetch = url => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const getPords = useCallback( async () => {
        const response = await fetch(url);
        const data = await response.json();

            setData(data);
            setLoading(false);
            console.log(data)
        }, [])

    useEffect(() => {
        getPords();
    },[getPords]);

    return { data, loading }
}
