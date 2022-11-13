/*import React from 'react';
import {Typography} from "@mui/material";

export const TrainFavoriteJoke = () => {
// ToDo красиво отрисовать шутки списком
    let favoriteJokesList = localStorage.getItem('FavoriteJokes')

    return (<>
            <Typography variant="h6">
                {favoriteJokesList}
            </Typography>;

        </>
    );
};*/

//---------------------------

import * as React from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';

let favoriteJokesList = localStorage.getItem('FavoriteJokes')

//Наверное правильнее будет :
//  Let foo = favoritJokesList ? JSON.parse(...) : []
let foo = favoriteJokesList !== null ? JSON.parse(favoriteJokesList) : []
console.log(foo)

function generate(element: React.ReactElement) {
    return foo.map((id: number) =>
        React.cloneElement(element, {
            key: id,
        }),
    );
}

const Demo = styled('div')(({theme}) => ({
    backgroundColor: theme.palette.background.paper,
}));

export const TrainFavoriteJoke = () => {

    return (
        <Box sx={{flexGrow: 1, maxWidth: 752}}>
            <Typography sx={{mt: 4, mb: 2}} variant="h6" component="div">
                List of Chuck Norris's favorite jokes
            </Typography>
            <Demo>
                <List>
                    {generate(
                        <ListItem
                            secondaryAction={
                                <IconButton edge="end" aria-label="delete">
                                    <DeleteIcon/>
                                </IconButton>
                            }
                        >
                            <ListItemText
                                primary={foo.map((v: { value: string; }) => v.value)}
                                /*primary={favoriteJokesList !== null ? JSON.parse(favoriteJokesList) : {}}*/
                                /*primary="Single-line item"*/
                            />
                        </ListItem>,
                    )}
                </List>
            </Demo>
        </Box>
    );
}