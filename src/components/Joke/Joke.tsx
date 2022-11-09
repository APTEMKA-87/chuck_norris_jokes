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

    /*  const lastValue = jokes[jokes.length - 1]?.value*/  // поиск последнего элемента

    const returnNewJoke = jokes[0]?.value

    console.log({jokes}) //Todo не складывать в стейт все шутки, а перезатироать их, но сохранять в локалсторадж 10 последних

    return (
        <div>
            <ul>
                {returnNewJoke}
            </ul>
        </div>
    );
};

export default Joke;