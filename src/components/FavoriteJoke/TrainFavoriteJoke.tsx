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

//ToDo проверить Наверное правильнее будет : Let foo = favoritJokesList ? JSON.parse(...) : []
let foo = favoriteJokesList !== null ? JSON.parse(favoriteJokesList) : []
console.log(foo)

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
                    {foo.map((foo: string) => {
                        return (
                            <ListItem
                                secondaryAction={
                                    <IconButton edge="end" aria-label="delete">
                                        <DeleteIcon/>
                                    </IconButton>
                                }
                            >
                                <ListItemText
                                    primary={foo}
                                />
                            </ListItem>
                        )
                    })}
                    ,

                </List>
            </Demo>
        </Box>
    );
}