import React from 'react';
import {Button} from "@mui/material";

export const CLearFavoriteJokes = () => {

    //Todo при нажатии и зачистке локалстораджа должна перерисовываться страниться, чтобы на экране удалялись шутки

    const clearClickHandler = () => {
        localStorage.clear()
    }

    return (
        <Button variant={"contained"} onClick={clearClickHandler}>
            Clear joke in localstorage
        </Button>
    );
};

