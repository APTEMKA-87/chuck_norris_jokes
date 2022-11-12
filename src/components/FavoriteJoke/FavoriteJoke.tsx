import React, {useState} from 'react';
import {Button} from "@mui/material";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../store";
import {jokeType} from "../../api/jokes-api";

export const FavoriteJoke = () => {

    let [press, setPress] = useState(false)

    const favoriteJokes = useSelector<AppRootStateType, jokeType[]>(state => state.jokes.favoriteJokes)

    const handleClick = () => {
        setPress(!press)
    }

    return (<>
            <Button variant={"contained"} onClick={handleClick}>
                FavoriteJoke
            </Button>
            {press && <div>
                {favoriteJokes.map(j => <li>{j.value}</li>)}
            </div>}
        </>
    );
};
