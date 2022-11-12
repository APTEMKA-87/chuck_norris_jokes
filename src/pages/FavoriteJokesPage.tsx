import React from 'react';
import {FavoriteJoke} from "../components/FavoriteJoke/FavoriteJoke";
import {
    CLearFavoriteJokes
} from "../components/CLearFavoriteJokes/CLearFavoriteJokes";

export const FavoriteJokesPage = () => {
    return (
        <>
            <FavoriteJoke/>
            <CLearFavoriteJokes/>
        </>
    );
};

