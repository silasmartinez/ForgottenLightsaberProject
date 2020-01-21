import { useState, useEffect } from 'react';

export const useFetch = (url, dependencies) => {
    const [isLoading, setIsLoading] = useState(false);
    const [fetchedData, setFetchedData] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        // console.log('Requesting: ' + url);
        let getData
        if (Array.isArray(url)) {
            getData = Promise.all(
                url.map(
                    i => fetch(i).then(res => res.json())
                ))
        } else {
            getData = fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to fetch.');
                    }
                    return response.json();
                })
        }
        getData.then(data => {
            setIsLoading(false);
            setFetchedData(data);
        })
            .catch(err => {
                console.log(err);
                setIsLoading(false);
            });
    }, dependencies);

    return [isLoading, fetchedData];
};
