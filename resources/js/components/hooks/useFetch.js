import { useState, useEffect, useCallback } from "react";

export const useFetch = url => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const getPords = useCallback(async () => {
        const response = await fetch(url);
        const data = await response.json();

        setData(data);
        setLoading(false);
    }, []);

    const handleChange = (id, checkboxSelectedState) => {
        axios
            .put(`api/item/${id}`)
            .then(response => console.log(response))
            .catch(error => console.log(error));
    };

    useEffect(() => {
        getPords();
    }, [getPords, handleChange]);

    return { data, loading, handleChange };
};
