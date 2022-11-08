import React from 'react';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../store";
import {jokeType} from "../../api/jokes-api";

export const AddFavoriteJokeButton = () => {

    const jokes = useSelector<AppRootStateType, Array<jokeType>>(state => state.jokes)

    const clickHandler = () => {
        localStorage.setItem('jokeId', jokes.map(j => j.value).toString())
    }

    return (
        <div>
            <button onClick={clickHandler}>Add joke in localstorage</button>
        </div>
    );
};

