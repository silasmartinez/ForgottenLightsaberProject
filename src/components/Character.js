import React, { useEffect } from 'react';

import { useHttp } from '../utils/fetchHook';
import CharDetail from './CharDetail';

const Character = props => {

    const [isLoading, fetchedData] = useHttp(
        'https://swapi.co/api/people/' + props.selectedChar,
        [props.selectedChar]
    );

    let loadedCharacter = null;

    if (fetchedData) {
        loadedCharacter = {
            id: props.selectedChar,
            name: fetchedData.name,
            height: fetchedData.height,
            colors: {
                hair: fetchedData.hair_color,
                skin: fetchedData.skin_color
            },
            gender: fetchedData.gender,
            movies: fetchedData.films
        };
    }

    let content = <p>Loading Character...</p>;

    if (!isLoading && loadedCharacter) {
        content = (
            <CharDetail
                name={loadedCharacter.name}
                movies={loadedCharacter.movies}
            />
        );
    } else if (!isLoading && !loadedCharacter) {
        content = <p>Failed to fetch character.</p>;
    }
    return content;
};

export default React.memo(Character);