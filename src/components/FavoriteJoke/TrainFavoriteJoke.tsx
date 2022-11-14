import * as React from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../store";
import {jokeType} from "../../api/jokes-api";

const Demo = styled('div')(({theme}) => ({
    backgroundColor: theme.palette.background.paper,
}));

export const TrainFavoriteJoke = () => {

    let getFavoriteJokesList = localStorage.getItem('FavoriteJokes')
    let favoriteJokes = useSelector<AppRootStateType, jokeType[]>(state => state.jokes.favoriteJokes)
    let setFavoriteJokesArray = getFavoriteJokesList ? JSON.parse(getFavoriteJokesList) : []

    const onClickHandler = (index: number) => {
        setFavoriteJokesArray.splice(index, 1)
        localStorage.setItem('FavoriteJokes', JSON.stringify(setFavoriteJokesArray))
    }

    console.log({setFavoriteJokesArray, favoriteJokes})

    useEffect(() => {

    }, [])

    return (
        <Box sx={{flexGrow: 1, maxWidth: 752}}>
            <Typography sx={{mt: 4, mb: 2}} variant="h6" component="div">
                List of Chuck Norris's favorite jokes
            </Typography>
            <Demo>
                <List>
                    {setFavoriteJokesArray.map((foo: string, index: number) => {
                        return (
                            <ListItem
                                secondaryAction={
                                    <IconButton edge="end" aria-label="delete">
                                        <DeleteIcon
                                            onClick={() => onClickHandler(index)}/>
                                    </IconButton>
                                }>
                                <ListItemText
                                    primary={foo}
                                />
                            </ListItem>
                        )
                    })}
                </List>
            </Demo>
        </Box>
    );
}