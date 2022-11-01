import React from 'react';
import './App.css';
import Joke from "./components/Joke/Joke";
import AddJokeButton from "./components/AddJokeButton/AddJokeButton";


function App() {
    return (
        <div>
            <Joke/>
            <AddJokeButton/>
        </div>
    );
}

export default App;
