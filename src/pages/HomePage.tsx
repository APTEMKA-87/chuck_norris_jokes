import React from 'react';
import Joke from "../components/Joke/Joke";
import {AddJokeButton} from "../components/AddJokeButton/AddJokeButton";
import {
    JokeNonStopButton
} from "../components/JokeButtonNonStop/JokeNonStopButton";
import {
    AddFavoriteJokeButton
} from "../components/AddFavoriteJokeButton/AddFavoriteJokeButton";

export const HomePage = () => {
    return (<>
            <AddJokeButton/>
            <JokeNonStopButton/>
            <AddFavoriteJokeButton/>
            <Joke/>
        </>
    );
};

