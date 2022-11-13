import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store";
import {jokeType} from "../../api/jokes-api";
import {fetchJokeTC} from "../../features/joke-reducer";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import {Typography} from "@mui/material";

const Joke = () => {

    const jokes = useSelector<AppRootStateType, Array<jokeType>>(state => state.jokes.jokes)
    const dispatch = useDispatch<ThunkDispatch<AppRootStateType, unknown, AnyAction>>()

    useEffect(() => {
        dispatch(fetchJokeTC())
    }, [])

    /*  const lastValue = jokes[jokes.length - 1]?.value*/  // поиск последнего элемента

    const returnNewJoke = jokes[0]?.value

    console.log({jokes})

    return (
        <Typography variant="h6" component="h2">
            {returnNewJoke}
        </Typography>
    );
};

export default Joke;