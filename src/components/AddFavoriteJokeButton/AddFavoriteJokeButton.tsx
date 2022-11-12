import React, {useCallback} from 'react';
import {useDispatch} from "react-redux";
import {ThunkDispatch} from "redux-thunk";
import {AppRootStateType} from "../../store";
import {AnyAction} from "redux";
import {setLocalstorageJokeAC} from "../../features/joke-reducer";
import {Button} from "@mui/material";

export const AddFavoriteJokeButton = () => {

    const dispatch = useDispatch<ThunkDispatch<AppRootStateType, unknown, AnyAction>>()
    const addLocalstorageHandler = useCallback(() => {
        dispatch(setLocalstorageJokeAC())
    }, [dispatch])



    return (
        <Button variant={"contained"}
                onClick={addLocalstorageHandler}>
            Add to favorite jokes
        </Button>
    );
};
