import React from 'react';
import './App.css';
import Joke from "./components/Joke/Joke";
import {AddJokeButton} from "./components/AddJokeButton/AddJokeButton";
import {
    JokeButtonNonStop
} from "./components/JokeButtonNonStop/JokeButtonNonStop";
import {
    AddFavoriteJokeButton
} from "./components/AddFavoriteJokeButton/AddFavoriteJokeButton";


function App() {
    return (
        <div>
            <Joke/>
            <AddJokeButton/>
            <JokeButtonNonStop/>
            <AddFavoriteJokeButton/>
        </div>
    );
}

export default App;
