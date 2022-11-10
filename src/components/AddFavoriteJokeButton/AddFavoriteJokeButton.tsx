import React, {useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {ThunkDispatch} from "redux-thunk";
import {AppRootStateType} from "../../store";
import {AnyAction} from "redux";
import s from './AddFavoriteJokeButton.module.css'
import {jokeType} from "../../api/jokes-api";
import {setLocalstorageJokeAC} from "../../features/joke-reducer";

export const AddFavoriteJokeButton = () => {

    const jokes = useSelector<AppRootStateType, Array<jokeType>>(state => state.jokes.jokes)
    const dispatch = useDispatch<ThunkDispatch<AppRootStateType, unknown, AnyAction>>()
    const favJokes = useSelector<AppRootStateType, Array<jokeType>>(state => state.jokes.favJokes)
    const addLocalstorageHandler = useCallback(() => {
        dispatch(setLocalstorageJokeAC())
    }, [dispatch])

    const foo = () => {

            dispatch(setLocalstorageJokeAC)

    }

    const clearClickHandler = () => {
        localStorage.clear()
    }

    return (
        <div>
            <button className={s.button}
                    onClick={foo}>XXX
            </button>
            <button className={s.button}
                    onClick={addLocalstorageHandler}>Add joke in
                localstorage
            </button>
            <button className={s.button} onClick={clearClickHandler}>Clear joke
                in localstorage
            </button>
        </div>
    );
};