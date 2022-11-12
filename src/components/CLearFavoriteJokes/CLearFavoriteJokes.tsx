import React from 'react';
import {Button} from "@mui/material";

export const CLearFavoriteJokes = () => {

    const clearClickHandler = () => {
        localStorage.clear()
    }

    return (
        <Button variant={"contained"} onClick={clearClickHandler}>
            Clear joke in localstorage
        </Button>
    );
};

