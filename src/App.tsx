import React from 'react';
import './App.css';
import Joke from "./components/Joke/Joke";
import {AddJokeButton} from "./components/AddJokeButton/AddJokeButton";
import {
    JokeButtonNonStop
} from "./components/JokeButtonNonStop/JokeButtonNonStop";


function App() {
    return (
        <div>
            <Joke/>
            <AddJokeButton/>
            <JokeButtonNonStop/>
        </div>
    );
}

export default App;
