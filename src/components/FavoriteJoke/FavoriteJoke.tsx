import React from 'react';
import {Typography} from "@mui/material";

export const FavoriteJoke = () => {
// ToDo красиво отрисовать шутки списком
    let favoriteJokesList = localStorage.getItem('FavoriteJokes')

    return (<>
            <Typography variant="h6" component="h2">
                {favoriteJokesList}
            </Typography>;

        </>
    );
};
