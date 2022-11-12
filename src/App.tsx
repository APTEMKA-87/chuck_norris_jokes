import React from 'react';
import './App.module.css';
import Joke from "./components/Joke/Joke";
import {AddJokeButton} from "./components/AddJokeButton/AddJokeButton";
import {
    JokeNonStopButton
} from "./components/JokeButtonNonStop/JokeNonStopButton";
import {
    AddFavoriteJokeButton
} from "./components/AddFavoriteJokeButton/AddFavoriteJokeButton";
import {
    CLearFavoriteJokes
} from "./components/CLearFavoriteJokes/CLearFavoriteJokes";

function App() {
    return (<>
            <AddJokeButton/>
            <JokeNonStopButton/>
            <AddFavoriteJokeButton/>
            <CLearFavoriteJokes/>
            <Joke/>
        </>
    );
}

export default App;

