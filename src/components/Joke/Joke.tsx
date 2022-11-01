import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store";
import {jokeType} from "../../api/jokes-api";
import {fetchJokeTC} from "../../features/joke-reducer";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";

const Joke = () => {

    const jokes = useSelector<AppRootStateType, Array<jokeType>>(state => state.jokes)
    const dispatch = useDispatch<ThunkDispatch<AppRootStateType, unknown, AnyAction>>()


    useEffect(() => {
        dispatch(fetchJokeTC())
    }, [])

    return (
        <div>
            {jokes.map(j => j.value)}
        </div>
    );
};

export default Joke;