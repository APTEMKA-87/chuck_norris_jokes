import React from 'react';

export const FavoriteJoke = () => {

    // должны храниться в локалсторадж и логично, что и дергаться должны из него
    // почему не сохраняются в локалсторадж при перезагрузке?
    let favoriteJokesList = localStorage.getItem('app-state')

    return (<>
            {favoriteJokesList}
        </>
    );
};
