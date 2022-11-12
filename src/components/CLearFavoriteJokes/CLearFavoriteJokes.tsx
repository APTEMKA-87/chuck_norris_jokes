import React from 'react';

export const CLearFavoriteJokes = () => {

      const clearClickHandler = () => {
          localStorage.clear()
      }

    return (
        <button onClick={clearClickHandler}>Clear joke
                in localstorage
            </button>
    );
};

