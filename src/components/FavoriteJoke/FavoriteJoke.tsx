import React from 'react';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../store";
import {jokeType} from "../../api/jokes-api";

export const FavoriteJoke = () => {

    const jokes = useSelector<AppRootStateType, Array<jokeType>>(state => state.jokes.jokes)

    return (
        <div>
            <ul>
                {jokes.map(j => <li>{j.value}</li>)}
            </ul>
        </div>
    );
};

