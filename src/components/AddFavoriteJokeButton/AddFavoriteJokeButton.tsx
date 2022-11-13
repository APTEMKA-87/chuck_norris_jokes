import React, {useCallback, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {ThunkDispatch} from "redux-thunk";
import {AppRootStateType} from "../../store";
import {AnyAction} from "redux";
import {setLocalstorageJokeAC} from "../../features/joke-reducer";
import {Button} from "@mui/material";
import {jokeType} from "../../api/jokes-api";

export const AddFavoriteJokeButton = () => {

    const dispatch = useDispatch<ThunkDispatch<AppRootStateType, unknown, AnyAction>>()
    const addLocalstorageHandler = useCallback(() => {
        dispatch(setLocalstorageJokeAC())

    }, [dispatch])


    // Сетаю шутки в ручную
    /*let joke = useSelector<AppRootStateType, jokeType[]>(state => state.jokes.jokes)
    console.log(joke)
    const setInLocalHandker = () => {
        localStorage.setItem('jokeID', JSON.stringify(joke.map(j => j.value)))
    }*/

    return (<>
            <Button variant={"contained"}
                    onClick={addLocalstorageHandler}>
                Add to favorite jokes
            </Button>
            {/* <Button onClick={setInLocalHandker} >
                Set in local
            </Button>*/}
        </>
    );
};
