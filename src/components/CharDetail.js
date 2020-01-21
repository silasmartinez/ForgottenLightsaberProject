import React from 'react';
import { useHttp, useMultiHttp } from '../utils/fetchHook'
import { render } from '@testing-library/react';

const CharDetail = props => {
    const [isLoading, fetchedData] = useMultiHttp(props.movies, props.movies)

    let content = <p>Loading movie list...</p>;

    if (!isLoading && fetchedData) {
        content = (
            <div className="summary">
                <h2>{props.name}</h2>

                <strong>Found In:</strong>
                <ul>{fetchedData.map(
                    (data, index) => <li key={index}>{data.title}</li>
                )}</ul>
            </div>
        );
    }

    return content;
};

export default CharDetail;