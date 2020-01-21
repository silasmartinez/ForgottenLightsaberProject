import { useState, useEffect } from 'react';

export const useHttp = (url, dependencies) => {
    const [isLoading, setIsLoading] = useState(false);
    const [fetchedData, setFetchedData] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        // console.log('Requesting: ' + url);
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch.');
                }
                return response.json();
            })
            .then(data => {
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

export const useMultiHttp = (urls, dependencies) => {
    const [isLoading, setIsLoading] = useState(false);
    const [fetchedData, setFetchedData] = useState(null);

    useEffect(() => {
        const getAllHttp = urls.map(url => fetch(url).then(res => res.json()))
        Promise.all(getAllHttp)
            .then(data => {
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