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

function App() {
    return (
        <div>
            <AddJokeButton/>
            <JokeNonStopButton/>
            <AddFavoriteJokeButton/>
            <Joke/>
        </div>
    );
}

export default App;
