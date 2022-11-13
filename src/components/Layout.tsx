import {NavLink, Outlet} from 'react-router-dom';
import {Toolbar, Typography} from "@mui/material";
import React from "react";

export const Layout = () => {
    return (
        <>
            <header>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        Chuck Norris`s Jokes
                    </Typography>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/FavoriteJokes'>FavoriteJokesPage</NavLink>
                </Toolbar>
            </header>

            <main>
                <Outlet/>
            </main>

            <footer>
                <Typography variant="h6">
                    Designed by Artyom 2022
                </Typography>
            </footer>
        </>
    )
}
// я так понимаю, что отображение компонентов теперь вставляется сюда в Лэйаут
// не совсем понял, как работает и для чего нужен Оутлет