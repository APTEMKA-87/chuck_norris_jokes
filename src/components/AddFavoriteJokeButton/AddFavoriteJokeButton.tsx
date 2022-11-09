import React, {useCallback} from 'react';
import {useDispatch} from "react-redux";
import {ThunkDispatch} from "redux-thunk";
import {AppRootStateType} from "../../store";
import {AnyAction} from "redux";
import s from './AddFavoriteJokeButton.module.css'

export const AddFavoriteJokeButton = () => {

    const dispatch = useDispatch<ThunkDispatch<AppRootStateType, unknown, AnyAction>>()

    const addLocalstorageHandler = useCallback((value: string) => {
        //    dispatch(addLocalstorageJokeAC(value))
    }, [dispatch])

    const clearClickHandler = () => {
        localStorage.clear()
    }

    return (
        <div>
            <button className={s.button}
                    onClick={() => addLocalstorageHandler}>Add joke in
                localstorage
            </button>
            <button className={s.button} onClick={clearClickHandler}>Clear joke
                in localstorage
            </button>
        </div>
    );
};