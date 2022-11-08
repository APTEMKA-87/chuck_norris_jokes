import React from 'react';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../store";
import {jokeType} from "../../api/jokes-api";

export const AddFavoriteJokeButton = () => {

    const jokes = useSelector<AppRootStateType, Array<jokeType>>(state => state.jokes)

    const addClickHandler = () => {
        localStorage.setItem('jokeId', jokes.map(j => j.value).toString())
    }

    const clearClickHandler = () => {
        localStorage.clear()
    }

    return (
        <div>
            <button onClick={addClickHandler}>Add joke in localstorage</button>
            <button onClick={clearClickHandler}>Clear joke in localstorage</button>
        </div>
    );
};

