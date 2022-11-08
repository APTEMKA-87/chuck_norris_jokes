import React, {useCallback} from 'react';
import {useDispatch} from "react-redux";
import {ThunkDispatch} from "redux-thunk";
import {AppRootStateType} from "../../store";
import {AnyAction} from "redux";
//import {addLocalstorageJokeAC} from "../../features/localstorage-reducer";
import s from './AddFavoriteJokeButton.module.css'
export const AddFavoriteJokeButton = () => {

    // добавление в localStorage на колбеках
    /*const jokes = useSelector<AppRootStateType, Array<jokeType>>(state => state.jokes)

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
};*/

    const dispatch = useDispatch<ThunkDispatch<AppRootStateType, unknown, AnyAction>>()

    const addLocalstorageHandler = useCallback((value: string) => {
    //    dispatch(addLocalstorageJokeAC(value))
    }, [dispatch])

    const clearClickHandler = () => {
        localStorage.clear()
    }

    return (
        <div>
            <button className={s.button} onClick={()=>addLocalstorageHandler}>Add joke in localstorage
            </button>
            <button className={s.button} onClick={clearClickHandler}>Clear joke in localstorage
            </button>
        </div>
    );
};