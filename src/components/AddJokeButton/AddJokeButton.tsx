import React, {useCallback} from 'react';
import {useDispatch} from "react-redux";
import {AppRootStateType} from "../../store";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import {fetchJokeTC} from "../../features/joke-reducer";

export const AddJokeButton = () => {

    // скопипастил типизацию, без нее не работал dispatch
    const dispatch = useDispatch<ThunkDispatch<AppRootStateType, unknown, AnyAction>>()
    // колбек для получения шуток
    const addJoke = useCallback(() => {
        dispatch(fetchJokeTC())
    }, [dispatch])

    return (
        <div>
            <button onClick={addJoke}>Add joke</button>

        </div>
    );
};
