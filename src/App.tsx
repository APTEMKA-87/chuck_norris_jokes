import React from 'react';
import './App.css';
import Joke from "./components/Joke/Joke";
import {AddJokeButton} from "./components/AddJokeButton/AddJokeButton";
import {
    JokeNonStopButton
} from "./components/JokeButtonNonStop/JokeNonStopButton";
import {
    AddFavoriteJokeButton
} from "./components/AddFavoriteJokeButton/AddFavoriteJokeButton";
import {FavoriteJoke} from "./components/FavoriteJoke/FavoriteJoke";


function App() {
    return (
        <div>
            <Joke/>
            <AddJokeButton/>
            <JokeNonStopButton/>
            <AddFavoriteJokeButton/>
            <FavoriteJoke/>
        </div>
    );
}

export default App;
