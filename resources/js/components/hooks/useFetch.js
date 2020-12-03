import { useState, useEffect } from 'react';

export const useFetch = url => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const getPords = () => fetch(url).then(res => res.json());

    useEffect(() => {
        getPords()
            .then(items => {
                setData(items);
                setLoading(false);
            });

    }, []);

    return { data, loading }
}
