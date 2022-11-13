import React from 'react';
import {FavoriteJoke} from "../components/FavoriteJoke/FavoriteJoke";
import {
    CLearFavoriteJokes
} from "../components/CLearFavoriteJokes/CLearFavoriteJokes";
import {TrainFavoriteJoke} from "../components/FavoriteJoke/TrainFavoriteJoke";

export const FavoriteJokesPage = () => {
    return (
        <>
            <CLearFavoriteJokes/>
            {/*<FavoriteJoke/>*/}
            <TrainFavoriteJoke/>
        </>
    );
};


